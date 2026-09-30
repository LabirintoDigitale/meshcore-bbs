"""Built-in BBS (bulletin board system) for MeshCore direct messages.

Port of the standalone ``bbs.php`` 1.4.0 (PHP + MySQL + a Home Assistant
automation) into the integration. Authorised contacts that send a direct
message to the companion radio get a menu-driven BBS: a bulletin board,
posting, and informational sub-menus defined as JSON. Administrators can
manage users, access requests and posts over the mesh with ``!`` commands
or from the panel.

State lives in a single HA ``Store`` (``.storage/meshcore_bbs.bbs``):

  settings  BBS tunables, edited from the panel Settings tab
  users     {pubkey_prefix: {name, active, is_admin, created}}
  requests  {pubkey_prefix: {name, last_text, hits, first_seen, last_seen}}
            — contacts that wrote without being on the user list
  posts     [{id, author, body, created}] (newest last)
  menus     {"<id>": {name, active, config: {title, welcome, options}}}

Menu sessions are kept in memory only: they expire after
``session_ttl`` seconds anyway, so losing them on restart is harmless.

The BBS starts disabled so it does not answer alongside an external BBS
that may still be running; the user enables it from the panel.
"""
from __future__ import annotations

import asyncio
import json
import logging
import re
import time
from copy import deepcopy
from typing import Any

from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.storage import Store
from homeassistant.util import dt as dt_util

from .const import (
    EVENT_BBS_REQUEST,
    EVENT_BBS_UPDATED,
    MESHCORE_DOMAIN,
    STORAGE_KEY_BBS,
    STORAGE_VERSION,
)

_LOGGER = logging.getLogger(__name__)

# Seconds between consecutive replies sent to the radio; lets the mesh
# breathe between packets (the old automation used a 3 s delay).
DEFAULT_REPLY_DELAY = 3.0

# Store writes are debounced — admin commands can touch the data several
# times in quick succession.
SAVE_DELAY_SECONDS = 1.0

VALID_ACTIONS = ("board", "write", "exit")
VALID_OPTION_TYPES = ("text", "menu", "action")
RESERVED_KEYS = ("m", "menu", "?")

DEFAULT_SETTINGS: dict[str, Any] = {
    "enabled": False,
    "name": "BBS Mesh",
    "main_menu": 1,
    "max_len": 140,
    "session_ttl": 600,
    "posts_shown": 3,
    "reply_denied": True,
    "denied_every": 300,
    "denied_text": "Risposta automatica, messaggio ricevuto.",
    # Append hops / SNR / reception time to the auto-reply.
    "denied_info": True,
    "admin_prefix": "!",
    "admin_page": 5,
    "notify_service": "",
}

# Bounds for the numeric settings: (min, max).
_SETTING_BOUNDS: dict[str, tuple[int, int]] = {
    "main_menu": (1, 1_000_000),
    "max_len": (20, 200),
    "session_ttl": (30, 86_400),
    "posts_shown": (1, 20),
    "denied_every": (0, 86_400),
    "admin_page": (1, 20),
}

DEFAULT_MENUS: dict[str, dict[str, Any]] = {
    "1": {
        "name": "Principale",
        "active": True,
        "config": {
            "title": "BBS Mesh",
            "welcome": "Ciao {name}!",
            "options": [
                {"key": "1", "label": "Bacheca", "type": "action", "action": "board"},
                {"key": "2", "label": "Scrivi", "type": "action", "action": "write"},
                {"key": "3", "label": "Informazioni", "type": "menu", "menu": 2},
                {"key": "0", "label": "Esci", "type": "action", "action": "exit"},
            ],
        },
    },
    "2": {
        "name": "Informazioni",
        "active": True,
        "config": {
            "title": "Informazioni",
            "options": [
                {"key": "1", "label": "Regole", "type": "text",
                 "text": "Sii educato, niente spam, messaggi brevi."},
                {"key": "2", "label": "Stato", "type": "text",
                 "text": "{bbs}\nUtenti: {users}\nPost: {posts}\nOra: {date} {time}"},
                {"key": "3", "label": "Contatti", "type": "text",
                 "text": "Sysop: scrivi in privato al gestore."},
                {"key": "9", "label": "Indietro", "type": "menu", "menu": 1},
            ],
        },
    },
}


def clean_pubkey(value: Any) -> str:
    """Lower-case hex only (mirrors ``clean_pubkey`` in bbs.php)."""
    return re.sub(r"[^0-9a-f]", "", str(value or "").lower())


def prefixes_match(a: str, b: str) -> bool:
    """True when one pubkey prefix is a prefix of the other."""
    return bool(a) and bool(b) and (a.startswith(b) or b.startswith(a))


def _fmt_ts(ts: float, fmt: str) -> str:
    return dt_util.as_local(dt_util.utc_from_timestamp(ts)).strftime(fmt)


def _default_data() -> dict[str, Any]:
    return {
        "settings": dict(DEFAULT_SETTINGS),
        "users": {},
        "requests": {},
        "posts": [],
        "next_post_id": 1,
        "menus": deepcopy(DEFAULT_MENUS),
    }


def validate_menus(menus: dict[str, Any], main_menu: int) -> list[str]:
    """Return a list of human-readable problems (port of ``check_menus``)."""
    errors: list[str] = []
    ids = set()
    for mid in menus:
        try:
            ids.add(int(mid))
        except (TypeError, ValueError):
            errors.append(f"Menu id '{mid}' is not a number")
    for mid, menu in sorted(menus.items(), key=lambda kv: str(kv[0])):
        label = f"Menu {mid} ({menu.get('name', '') if isinstance(menu, dict) else ''})"
        config = menu.get("config") if isinstance(menu, dict) else None
        if not isinstance(config, dict) or not isinstance(config.get("options"), list):
            errors.append(f"{label}: missing \"options\" list")
            continue
        keys: set[str] = set()
        for i, opt in enumerate(config["options"]):
            if not isinstance(opt, dict):
                errors.append(f"{label}: option {i} is not an object")
                continue
            key = str(opt.get("key", "")).strip().lower()
            typ = opt.get("type", "")
            if key == "":
                errors.append(f"{label}: option {i} has no key")
            elif key in RESERVED_KEYS:
                errors.append(f"{label}: key \"{key}\" is reserved")
            elif key in keys:
                errors.append(f"{label}: duplicate key \"{key}\"")
            keys.add(key)
            if typ == "menu":
                try:
                    target = int(opt.get("menu", 0))
                except (TypeError, ValueError):
                    target = 0
                if target not in ids:
                    errors.append(
                        f"{label}: key \"{key}\" points to menu {opt.get('menu', '?')} which does not exist"
                    )
            elif typ == "action":
                if opt.get("action") not in VALID_ACTIONS:
                    errors.append(f"{label}: key \"{key}\" has an unknown action")
            elif typ == "text":
                if not opt.get("text"):
                    errors.append(f"{label}: key \"{key}\" is of type text but has no text")
            else:
                errors.append(f"{label}: key \"{key}\" has an unknown type")
    if int(main_menu) not in ids:
        errors.append(f"Main menu (id {main_menu}) is missing")
    return errors


# ─── MySQL dump import ──────────────────────────────────────────────────

_INSERT_RE = re.compile(
    r"INSERT\s+(?:IGNORE\s+)?INTO\s+`?(\w+)`?\s*\(([^)]*)\)\s*VALUES\s*",
    re.IGNORECASE,
)
_MYSQL_ESCAPES = {"n": "\n", "r": "\r", "t": "\t", "0": "\0", "Z": "\x1a",
                  "b": "\b", "\\": "\\", "'": "'", '"': '"'}


def _parse_values(sql: str, pos: int) -> tuple[list[list[Any]], int]:
    """Parse ``(v, v), (v, v);`` starting at ``pos``; return rows and end pos."""
    rows: list[list[Any]] = []
    n = len(sql)

    def skip_ws(p: int) -> int:
        while p < n and sql[p] in " \t\r\n":
            p += 1
        return p

    pos = skip_ws(pos)
    while pos < n and sql[pos] == "(":
        pos += 1
        row: list[Any] = []
        while True:
            pos = skip_ws(pos)
            if pos >= n:
                raise ValueError("Unexpected end of dump inside VALUES")
            ch = sql[pos]
            if ch == "'":
                pos += 1
                buf: list[str] = []
                while True:
                    if pos >= n:
                        raise ValueError("Unterminated string in dump")
                    c = sql[pos]
                    if c == "\\" and pos + 1 < n:
                        buf.append(_MYSQL_ESCAPES.get(sql[pos + 1], sql[pos + 1]))
                        pos += 2
                    elif c == "'":
                        if pos + 1 < n and sql[pos + 1] == "'":
                            buf.append("'")
                            pos += 2
                        else:
                            pos += 1
                            break
                    else:
                        buf.append(c)
                        pos += 1
                row.append("".join(buf))
            else:
                m = re.match(r"[^,)\s]+", sql[pos:])
                if not m:
                    raise ValueError("Unexpected token in VALUES")
                token = m.group(0)
                pos += len(token)
                if token.upper() == "NULL":
                    row.append(None)
                else:
                    try:
                        row.append(int(token))
                    except ValueError:
                        try:
                            row.append(float(token))
                        except ValueError:
                            row.append(token)
            pos = skip_ws(pos)
            if pos < n and sql[pos] == ",":
                pos += 1
                continue
            if pos < n and sql[pos] == ")":
                pos += 1
                break
            raise ValueError("Malformed row in VALUES")
        rows.append(row)
        pos = skip_ws(pos)
        if pos < n and sql[pos] == ",":
            pos = skip_ws(pos + 1)
            continue
        break
    return rows, pos


def parse_mysql_dump(sql: str) -> dict[str, list[dict[str, Any]]]:
    """Extract the rows of every ``INSERT INTO`` in a mysqldump/HeidiSQL dump."""
    tables: dict[str, list[dict[str, Any]]] = {}
    pos = 0
    while True:
        m = _INSERT_RE.search(sql, pos)
        if not m:
            break
        table = m.group(1).lower()
        cols = [c.strip().strip("`").lower() for c in m.group(2).split(",")]
        rows, pos = _parse_values(sql, m.end())
        for row in rows:
            if len(row) != len(cols):
                raise ValueError(f"Column count mismatch in table {table}")
            tables.setdefault(table, []).append(dict(zip(cols, row)))
    return tables


def dump_to_bbs_data(sql: str) -> dict[str, Any]:
    """Convert a MeshBBS MySQL dump into the store's data shape.

    Only the tables present in the dump are returned; sessions and meta
    are ignored. Raises ``ValueError`` when nothing usable is found.
    """
    tables = parse_mysql_dump(sql)
    out: dict[str, Any] = {}
    if "bbs_users" in tables:
        users = {}
        for r in tables["bbs_users"]:
            pk = clean_pubkey(r.get("pubkey"))
            if len(pk) < 6:
                continue
            users[pk] = {
                "name": str(r.get("name") or "")[:64],
                "active": bool(int(r.get("active") or 0)),
                "is_admin": bool(int(r.get("is_admin") or 0)),
                "created": int(r.get("created") or 0),
            }
        out["users"] = users
    if "bbs_requests" in tables:
        requests = {}
        for r in tables["bbs_requests"]:
            pk = clean_pubkey(r.get("pubkey"))
            if len(pk) < 6:
                continue
            requests[pk] = {
                "name": str(r.get("name") or "")[:64],
                "last_text": str(r.get("last_text") or "")[:200],
                "hits": int(r.get("hits") or 1),
                "first_seen": int(r.get("first_seen") or 0),
                "last_seen": int(r.get("last_seen") or 0),
            }
        out["requests"] = requests
    if "bbs_posts" in tables:
        posts = [
            {
                "id": int(r.get("id") or 0),
                "author": str(r.get("author") or "")[:64],
                "body": str(r.get("body") or "")[:500],
                "created": int(r.get("created") or 0),
            }
            for r in tables["bbs_posts"]
        ]
        posts.sort(key=lambda p: p["id"])
        out["posts"] = posts
    if "bbs_menus" in tables:
        menus = {}
        for r in tables["bbs_menus"]:
            raw = r.get("config")
            try:
                config = json.loads(raw) if isinstance(raw, str) else raw
            except ValueError as err:
                raise ValueError(f"Menu {r.get('id')}: invalid JSON") from err
            menus[str(int(r.get("id") or 0))] = {
                "name": str(r.get("name") or ""),
                "active": bool(int(r.get("active") if r.get("active") is not None else 1)),
                "config": config,
            }
        out["menus"] = menus
    if not out:
        raise ValueError("No MeshBBS tables (bbs_users, bbs_menus, ...) found in the file")
    return out


# ─── BBS core ───────────────────────────────────────────────────────────


class Bbs:
    """BBS state, persistence and message handling."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._store: Store[dict[str, Any]] = Store(
            hass, STORAGE_VERSION, STORAGE_KEY_BBS
        )
        self.data: dict[str, Any] = _default_data()
        # In-memory sessions: key -> (state, updated)
        self._sessions: dict[str, tuple[str, float]] = {}
        self._send_lock = asyncio.Lock()
        self.reply_delay = DEFAULT_REPLY_DELAY
        # Integration version (manifest.json), reported to the panel.
        self.version = ""
        self._tasks: set[asyncio.Task] = set()

    # ── persistence ──

    async def async_load(self) -> None:
        stored = await self._store.async_load()
        data = _default_data()
        if isinstance(stored, dict):
            for key in ("users", "requests", "posts", "next_post_id", "menus"):
                if key in stored:
                    data[key] = stored[key]
            if isinstance(stored.get("settings"), dict):
                data["settings"].update(stored["settings"])
        self.data = data

    @callback
    def _changed(self) -> None:
        self._store.async_delay_save(lambda: self.data, SAVE_DELAY_SECONDS)
        self.hass.bus.async_fire(EVENT_BBS_UPDATED, {})

    async def async_flush(self) -> None:
        await self._store.async_save(self.data)

    async def async_shutdown(self) -> None:
        for task in list(self._tasks):
            task.cancel()
        await self.async_flush()

    @property
    def settings(self) -> dict[str, Any]:
        return self.data["settings"]

    # ── snapshot for the panel ──

    def snapshot(self) -> dict[str, Any]:
        return {
            "version": self.version,
            "settings": dict(self.settings),
            "users": [
                {"pubkey": pk, **u}
                for pk, u in sorted(self.data["users"].items(), key=lambda kv: kv[1]["name"].lower())
            ],
            "requests": [
                {"pubkey": pk, **r}
                for pk, r in sorted(self.data["requests"].items(), key=lambda kv: -kv[1]["last_seen"])
            ],
            "posts": list(reversed(self.data["posts"])),
            "menus": [
                {"id": int(mid), **m}
                for mid, m in sorted(self.data["menus"].items(), key=lambda kv: int(kv[0]))
            ],
        }

    # ── users / requests (shared by panel and mesh admin commands) ──

    def find_user(self, pk: str, *, active_only: bool = True) -> tuple[str, dict] | None:
        if len(pk) < 6:
            return None
        for upk, user in self.data["users"].items():
            if active_only and not user.get("active"):
                continue
            if prefixes_match(pk, upk):
                return upk, user
        return None

    def matching_users(self, pk: str) -> list[tuple[str, dict]]:
        return [(u, d) for u, d in self.data["users"].items() if prefixes_match(pk, u)]

    def _drop_requests(self, pk: str) -> None:
        for rpk in [r for r in self.data["requests"] if prefixes_match(pk, r)]:
            del self.data["requests"][rpk]

    def add_user(self, pk: str, name: str) -> str:
        """Add or re-activate a user; returns the final name."""
        name = name.strip()[:64]
        existing = self.matching_users(pk)
        if existing:
            upk, user = existing[0]
            user["active"] = True
            if name:
                user["name"] = name
            final = user["name"]
        else:
            final = name or f"Utente {pk[:6]}"
            self.data["users"][pk] = {
                "name": final, "active": True, "is_admin": False, "created": int(time.time()),
            }
        self._drop_requests(pk)
        self._sessions.pop(f"denied:{pk}", None)
        self._changed()
        return final

    def remove_user(self, upk: str) -> None:
        self.data["users"].pop(upk, None)
        self._sessions.pop(upk, None)
        self._changed()

    def set_active(self, upk: str, active: bool) -> None:
        self.data["users"][upk]["active"] = active
        if not active:
            self._sessions.pop(upk, None)
        self._changed()

    def set_admin(self, upk: str, is_admin: bool) -> None:
        self.data["users"][upk]["is_admin"] = is_admin
        self._changed()

    def reject_request(self, rpk: str) -> None:
        self.data["requests"].pop(rpk, None)
        self._changed()

    def record_request(self, pk: str, name: str, text: str) -> None:
        if len(pk) < 6:
            return
        now = int(time.time())
        req = self.data["requests"].get(pk)
        if req is None:
            self.data["requests"][pk] = {
                "name": name.strip()[:64], "last_text": text.strip()[:200],
                "hits": 1, "first_seen": now, "last_seen": now,
            }
        else:
            if name.strip():
                req["name"] = name.strip()[:64]
            req["last_text"] = text.strip()[:200]
            req["hits"] = int(req.get("hits", 0)) + 1
            req["last_seen"] = now
        self._changed()

    def delete_post(self, post_id: int) -> bool:
        before = len(self.data["posts"])
        self.data["posts"] = [p for p in self.data["posts"] if p["id"] != post_id]
        if len(self.data["posts"]) != before:
            self._changed()
            return True
        return False

    def add_post(self, author: str, body: str) -> None:
        pid = int(self.data.get("next_post_id") or 1)
        pid = max(pid, max((p["id"] for p in self.data["posts"]), default=0) + 1)
        self.data["posts"].append(
            {"id": pid, "author": author[:64], "body": body[:500], "created": int(time.time())}
        )
        self.data["next_post_id"] = pid + 1
        self._changed()

    def update_settings(self, new: dict[str, Any]) -> dict[str, Any]:
        s = dict(self.settings)
        for key, default in DEFAULT_SETTINGS.items():
            if key not in new:
                continue
            value = new[key]
            if isinstance(default, bool):
                s[key] = bool(value)
            elif isinstance(default, int):
                lo, hi = _SETTING_BOUNDS[key]
                s[key] = min(max(int(value), lo), hi)
            else:
                s[key] = str(value).strip()
        svc = s["notify_service"]
        if svc and not re.fullmatch(r"notify\.[a-z0-9_]+", svc):
            raise ValueError("Notify service must look like notify.my_phone")
        if s["admin_prefix"] == "":
            s["admin_prefix"] = "!"
        self.data["settings"] = s
        self._changed()
        return s

    def set_menus(self, menus: dict[str, Any]) -> list[str]:
        normalized: dict[str, Any] = {}
        for mid, m in menus.items():
            normalized[str(int(mid))] = {
                "name": str(m.get("name", ""))[:64],
                "active": bool(m.get("active", True)),
                "config": m.get("config"),
            }
        errors = validate_menus(normalized, self.settings["main_menu"])
        if not errors:
            self.data["menus"] = normalized
            self._changed()
        return errors

    def import_data(self, imported: dict[str, Any]) -> None:
        for key in ("users", "requests", "posts", "menus"):
            if key in imported:
                self.data[key] = imported[key]
        if "posts" in imported:
            self.data["next_post_id"] = max((p["id"] for p in imported["posts"]), default=0) + 1
        self._sessions.clear()
        self._changed()

    # ── placeholders / menus ──

    def _fill(self, text: str, user: dict) -> str:
        now = dt_util.now()
        repl = {
            "{name}": user.get("name", ""),
            "{bbs}": self.settings["name"],
            "{date}": now.strftime("%d/%m/%Y"),
            "{time}": now.strftime("%H:%M"),
            "{users}": str(sum(1 for u in self.data["users"].values() if u.get("active"))),
            "{posts}": str(len(self.data["posts"])),
        }
        for k, v in repl.items():
            text = text.replace(k, v)
        return text

    def _load_menu(self, mid: int) -> dict | None:
        menu = self.data["menus"].get(str(mid))
        if not menu or not menu.get("active"):
            return None
        config = menu.get("config")
        if not isinstance(config, dict) or not isinstance(config.get("options"), list):
            return None
        return config

    def _render_menu(self, menu: dict, user: dict) -> str:
        lines = []
        if menu.get("title"):
            lines.append(self._fill(str(menu["title"]), user))
        for opt in menu["options"]:
            lines.append(f"{opt.get('key', '?')} {self._fill(str(opt.get('label', '')), user)}")
        return "\n".join(lines)

    @staticmethod
    def _find_option(menu: dict, cmd: str) -> dict | None:
        for opt in menu["options"]:
            if str(opt.get("key", "")).strip().lower() == cmd:
                return opt
        return None

    def _set_state(self, key: str, state: str) -> None:
        self._sessions[key] = (state, time.time())

    # ── main entry point ──

    def handle(self, user_pk: str, user: dict, text: str) -> list[str]:
        """Process one message from an authorised user; return replies."""
        inp = text.strip()
        cmd = inp.lower()
        prefix = self.settings["admin_prefix"]
        if user.get("is_admin") and prefix and inp.startswith(prefix):
            return self.admin_command(user_pk, user, inp)

        main_id = int(self.settings["main_menu"])
        sess = self._sessions.get(user_pk)
        state = sess[0] if sess and time.time() - sess[1] <= self.settings["session_ttl"] else "new"
        mode, _, mid_s = state.partition(":")
        try:
            mid = int(mid_s) if mid_s else main_id
        except ValueError:
            mid = main_id

        main = self._load_menu(main_id)
        if main is None:
            return [f"BBS non configurata (menu {main_id} mancante o errato)."]

        if mode == "new":
            self._set_state(user_pk, f"menu:{main_id}")
            out = []
            if main.get("welcome"):
                out.append(self._fill(str(main["welcome"]), user))
            out.append(self._render_menu(main, user))
            return out

        menu = self._load_menu(mid)
        if menu is None:
            mid, menu = main_id, main

        if mode == "write":
            self._set_state(user_pk, f"menu:{mid}")
            if cmd == "0":
                return ["Annullato.", self._render_menu(menu, user)]
            self.add_post(user["name"], inp)
            return ["Messaggio pubblicato.", self._render_menu(menu, user)]

        self._set_state(user_pk, f"menu:{mid}")
        if cmd in RESERVED_KEYS:
            return [self._render_menu(menu, user)]

        opt = self._find_option(menu, cmd)
        if opt is None:
            return ["Scelta non valida.", self._render_menu(menu, user)]

        typ = opt.get("type", "")
        if typ == "text":
            msg = self._fill(str(opt.get("text", "")), user)
            if opt.get("show_menu"):
                return [msg, self._render_menu(menu, user)]
            return [msg + "\n(M = menu)"]
        if typ == "menu":
            try:
                target = int(opt.get("menu", 0))
            except (TypeError, ValueError):
                target = 0
            tmenu = self._load_menu(target)
            if tmenu is None:
                return ["Menu non disponibile.", self._render_menu(menu, user)]
            self._set_state(user_pk, f"menu:{target}")
            out = []
            if opt.get("text"):
                out.append(self._fill(str(opt["text"]), user))
            out.append(self._render_menu(tmenu, user))
            return out
        if typ == "action":
            return self._run_action(str(opt.get("action", "")), user_pk, user, mid, menu)
        return ["Voce configurata male.", self._render_menu(menu, user)]

    def _run_action(self, action: str, user_pk: str, user: dict, mid: int, menu: dict) -> list[str]:
        if action == "board":
            posts = list(reversed(self.data["posts"]))[: int(self.settings["posts_shown"])]
            if not posts:
                return ["Bacheca vuota.", self._render_menu(menu, user)]
            out = [
                f"#{p['id']} {p['author']} {_fmt_ts(p['created'], '%d/%m %H:%M')}:\n{p['body']}"
                for p in posts
            ]
            out.append("M = menu")
            return out
        if action == "write":
            self._set_state(user_pk, f"write:{mid}")
            return ["Scrivi il messaggio (0 = annulla):"]
        if action == "exit":
            self._sessions.pop(user_pk, None)
            return [f"Ciao {user['name']}, a presto!"]
        return ["Azione sconosciuta.", self._render_menu(menu, user)]

    # ── mesh admin commands ──

    def _admin_find_user(self, query: str) -> tuple[tuple[str, dict] | None, str | None]:
        query = query.strip()
        if not query:
            return None, "Specifica la chiave o il nome."
        pk = clean_pubkey(query)
        p = pk if len(pk) >= 4 and pk == query.lower() else ""
        rows = [
            (u, d) for u, d in self.data["users"].items()
            if (p and u.startswith(p)) or d["name"].lower() == query.lower()
        ]
        if not rows:
            return None, f"Utente non trovato: {query}"
        if len(rows) > 1:
            return None, "Più utenti trovati, usa una chiave più lunga."
        return rows[0], None

    def _admin_find_request(self, query: str) -> tuple[tuple[str, dict] | None, str | None]:
        pk = clean_pubkey(query)
        if len(pk) < 4:
            return None, "Specifica la chiave (almeno 4 caratteri)."
        rows = [(r, d) for r, d in self.data["requests"].items() if r.startswith(pk)]
        if not rows:
            return None, f"Nessuna richiesta per {pk}"
        if len(rows) > 1:
            return None, "Più richieste trovate, usa una chiave più lunga."
        return rows[0], None

    def _admin_page(self, lines: list[str], page: int, title: str, cmd: str) -> list[str]:
        if not lines:
            return [f"{title}: nessuno."]
        size = max(1, int(self.settings["admin_page"]))
        pages = -(-len(lines) // size)
        page = min(max(1, page), pages)
        msg = f"{title} ({page}/{pages})\n" + "\n".join(lines[(page - 1) * size: page * size])
        if page < pages:
            msg += f"\nAltri: {self.settings['admin_prefix']}{cmd} {page + 1}"
        return [msg]

    def admin_command(self, admin_pk: str, admin: dict, inp: str) -> list[str]:
        p = self.settings["admin_prefix"]
        parts = inp[len(p):].split()
        cmd = parts[0].lower() if parts else ""
        args = parts[1:]
        a1 = args[0] if args else ""

        def page_arg() -> int:
            try:
                return int(a1)
            except ValueError:
                return 1

        if cmd in ("", "help", "aiuto"):
            return [
                f"Admin 1/2\n{p}utenti [pag]\n{p}info <chiave>\n{p}add <chiave> <nome>\n{p}del <chiave>\n{p}on / {p}off <chiave>",
                f"Admin 2/2\n{p}admin <chiave> si/no\n{p}richieste [pag]\n{p}ok <chiave> [nome]\n{p}no <chiave>\n{p}post [pag]\n{p}delpost <id>",
            ]
        if cmd == "utenti":
            lines = [
                f"{u['name']} {pk[:12]}" + (" [A]" if u.get("is_admin") else "") + ("" if u.get("active") else " [off]")
                for pk, u in sorted(self.data["users"].items(), key=lambda kv: kv[1]["name"].lower())
            ]
            return self._admin_page(lines, page_arg(), "Utenti", "utenti")
        if cmd == "info":
            found, err = self._admin_find_user(" ".join(args))
            if err:
                return [err]
            pk, u = found
            return [
                f"{u['name']}\nChiave: {pk}\nAttivo: {'si' if u.get('active') else 'no'}"
                f"\nAdmin: {'si' if u.get('is_admin') else 'no'}\nDal: {_fmt_ts(u.get('created', 0), '%d/%m/%Y')}"
            ]
        if cmd == "add":
            pk = clean_pubkey(a1)
            name = " ".join(args[1:]).strip()[:64]
            if len(pk) < 6 or not name:
                return [f"Uso: {p}add <chiave> <nome>\n(chiave: almeno 6 caratteri esadecimali)"]
            self.add_user(pk, name)
            return [f"Aggiunto: {name} ({pk})"]
        if cmd == "del":
            found, err = self._admin_find_user(" ".join(args))
            if err:
                return [err]
            pk, u = found
            if pk == admin_pk:
                return ["Non puoi rimuovere te stesso."]
            self.remove_user(pk)
            return [f"Rimosso: {u['name']}"]
        if cmd in ("on", "off"):
            found, err = self._admin_find_user(" ".join(args))
            if err:
                return [err]
            pk, u = found
            if cmd == "off" and pk == admin_pk:
                return ["Non puoi disattivare te stesso."]
            self.set_active(pk, cmd == "on")
            return [u["name"] + (" attivato." if cmd == "on" else " disattivato.")]
        if cmd == "admin":
            val = args[1].lower() if len(args) > 1 else ""
            if val not in ("si", "no"):
                return [f"Uso: {p}admin <chiave> si/no"]
            found, err = self._admin_find_user(a1)
            if err:
                return [err]
            pk, u = found
            if val == "no" and pk == admin_pk:
                return ["Non puoi togliere i permessi a te stesso."]
            self.set_admin(pk, val == "si")
            return [u["name"] + (" ora è admin." if val == "si" else " non è più admin.")]
        if cmd == "richieste":
            lines = [
                f"{pk[:12]} {r['name'] or '?'} {r['hits']}x {_fmt_ts(r['last_seen'], '%d/%m %H:%M')}"
                for pk, r in sorted(self.data["requests"].items(), key=lambda kv: -kv[1]["last_seen"])
            ]
            return self._admin_page(lines, page_arg(), "Richieste", "richieste")
        if cmd == "ok":
            found, err = self._admin_find_request(a1)
            if err:
                return [err]
            rpk, r = found
            name = " ".join(args[1:]).strip()[:64] or r["name"] or f"Utente {rpk[:6]}"
            self.add_user(rpk, name)
            return [f"Aggiunto: {name} ({rpk})"]
        if cmd == "no":
            found, err = self._admin_find_request(a1)
            if err:
                return [err]
            rpk, r = found
            self.reject_request(rpk)
            return [f"Richiesta di {r['name'] or rpk} rimossa."]
        if cmd == "post":
            lines = [
                f"#{post['id']} {post['author']}: {post['body'][:40]}"
                for post in reversed(self.data["posts"])
            ]
            return self._admin_page(lines, page_arg(), "Post", "post")
        if cmd == "delpost":
            try:
                pid = int(a1)
            except ValueError:
                pid = 0
            return [f"Post #{pid} eliminato." if self.delete_post(pid) else f"Post #{pid} non trovato."]
        return [f"Comando sconosciuto. {p}help per l'elenco."]

    # ── inbound message processing ──

    @staticmethod
    def reception_info(meta: dict[str, Any] | None) -> str:
        """'Route: 2 hop · SNR: 13.75 · Ricevuto: 30/09/2026 14:27:40'.

        Built from the ``meshcore_message`` event: DMs carry ``hop_count``
        (or ``path_len``) and ``snr`` at the top level. Missing values are
        left out; the reception time is when the BBS handled the message.
        """
        meta = meta or {}
        parts = []
        hops = meta.get("hop_count", meta.get("path_len"))
        # 0xFF / negative mean "direct route, length unknown" in MeshCore.
        if isinstance(hops, int) and 0 <= hops < 64:
            parts.append(f"Route: {hops} hop")
        snr = meta.get("snr")
        if isinstance(snr, (int, float)) and not isinstance(snr, bool):
            parts.append(f"SNR: {snr:g}")
        rssi = meta.get("rssi")
        if isinstance(rssi, (int, float)) and not isinstance(rssi, bool):
            parts.append(f"RSSI: {rssi:g}")
        parts.append("Ricevuto: " + dt_util.now().strftime("%d/%m/%Y %H:%M:%S"))
        return " · ".join(parts)

    def process(
        self, pk: str, name: str, text: str, meta: dict[str, Any] | None = None
    ) -> tuple[list[str], bool]:
        """Return (replies, authorized) for a direct message from ``pk``."""
        found = self.find_user(pk)
        if found is None:
            self.record_request(pk, name, text)
            if not self.settings["reply_denied"] or len(pk) < 6:
                return [], False
            key = f"denied:{pk}"
            sess = self._sessions.get(key)
            if sess and time.time() - sess[1] < self.settings["denied_every"]:
                return [], False
            self._set_state(key, "denied")
            reply = str(self.settings["denied_text"]).strip()
            if not reply:
                return [], False
            if self.settings.get("denied_info", True):
                reply += "\n" + self.reception_info(meta)
            return self.split([reply]), False
        upk, user = found
        return self.split(self.handle(upk, user, text)), True

    def split(self, replies: list[str]) -> list[str]:
        size = int(self.settings["max_len"])
        out: list[str] = []
        for r in replies:
            out.extend(r[i:i + size] for i in range(0, len(r), size) or [0])
        return [r for r in out if r]

    def _own_prefixes(self) -> list[str]:
        prefixes = []
        for coord in (self.hass.data.get(MESHCORE_DOMAIN) or {}).values():
            pub = getattr(coord, "pubkey", None)
            if isinstance(pub, str) and pub:
                prefixes.append(clean_pubkey(pub)[:12])
        return prefixes

    @staticmethod
    def is_inbound_direct(data: dict[str, Any]) -> bool:
        """Mirror the old automation's filter: DMs only, never our own."""
        if str(data.get("type", "")).upper() in ("CHAN", "CHANNEL"):
            return False
        if str(data.get("message_type", "")).lower() == "channel":
            return False
        if data.get("channel_idx") is not None:
            return False
        if str(data.get("direction", "in")).lower() in ("out", "outgoing", "sent"):
            return False
        return not data.get("outgoing", False)

    async def async_handle_event(self, event: Event) -> None:
        """``meshcore_message`` listener."""
        if not self.settings["enabled"]:
            return
        data = event.data or {}
        if not self.is_inbound_direct(data):
            return
        pk = clean_pubkey(data.get("pubkey_prefix") or data.get("public_key") or "")
        if not pk or any(prefixes_match(pk, own) for own in self._own_prefixes()):
            return
        text = str(data.get("text") or data.get("message") or "")
        name = str(data.get("sender_name") or "")
        try:
            replies, authorized = self.process(pk, name, text, data)
        except Exception:  # pragma: no cover - defensive
            _LOGGER.exception("BBS failed to process a message from %s", pk)
            replies, authorized = ["Errore temporaneo della BBS, riprova."], True

        if not authorized:
            self.hass.bus.async_fire(
                EVENT_BBS_REQUEST, {"pubkey": pk, "name": name, "text": text}
            )
            await self._async_notify(name or pk, text)
        if replies:
            task = self.hass.async_create_task(
                self._async_send(pk, replies, data.get("entry_id"))
            )
            self._tasks.add(task)
            task.add_done_callback(self._tasks.discard)

    async def _async_notify(self, title: str, text: str) -> None:
        svc = self.settings.get("notify_service") or ""
        if not svc.startswith("notify."):
            return
        service = svc.split(".", 1)[1]
        if not self.hass.services.has_service("notify", service):
            _LOGGER.warning("BBS notify service %s not found", svc)
            return
        try:
            await self.hass.services.async_call(
                "notify", service, {"title": title, "message": text or "rx"}, blocking=False
            )
        except Exception as err:  # pragma: no cover - defensive
            _LOGGER.warning("BBS notification failed: %s", err)

    async def _async_send(self, pk: str, replies: list[str], entry_id: Any) -> None:
        async with self._send_lock:
            for i, msg in enumerate(replies):
                if i:
                    await asyncio.sleep(self.reply_delay)
                payload: dict[str, Any] = {"pubkey_prefix": pk, "message": msg}
                if entry_id:
                    payload["entry_id"] = entry_id
                try:
                    await self.hass.services.async_call(
                        MESHCORE_DOMAIN, "send_message", payload, blocking=True
                    )
                except Exception as err:
                    _LOGGER.warning("BBS reply to %s failed: %s", pk, err)
