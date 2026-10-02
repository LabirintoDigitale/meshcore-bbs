"""Channel bot: per-channel commands that trigger automatic replies.

Rules are configured per channel in the panel (Settings → Bot). When an
incoming channel message matches a rule's command, the bot runs the
rule's action on that channel:

``route_reply`` — the panel-Reply line with the path, SNR, RSSI and time::

    @[Alfa 10] | 9a92,86a8,146c (3 hops) | SNR: -9.25 dB | RSSI: -122 dBm | Received at: 14:56:15

``path_names`` — one line per repeater of the path, with its name from
the radio's contacts (``Unknown`` when not found)::

    @[Alfa 10] 3 hops
    9A92: Cesura90 Repeater
    86A8: Unknown
    146C: Feltre Repeater

The bot runs on one radio: the one chosen in its settings, or the BBS
radio when none is chosen. A chosen radio that is not connected pauses
the bot rather than moving it to another radio.

Safety: the bot is off by default, never reacts to our own (outgoing)
messages, and answers each sender at most once per ``cooldown`` seconds
per channel. Replies use the channel's configured region scope.
"""
from __future__ import annotations

import copy
import logging
import time
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.storage import Store

from .const import DOMAIN, MESHCORE_DOMAIN, STORAGE_VERSION
from .radios import handles_message
from .reply_format import route_reply, split_message
from .utils import enrich_rx_log_entries

_LOGGER = logging.getLogger(__name__)

STORAGE_KEY_BOT = "meshcore_bbs.bot"
EVENT_BOT_UPDATED = "meshcore_bbs_bot_updated"

MATCH_TYPES = ("exact", "starts_with", "contains")
ACTIONS = ("route_reply", "path_names")
DEFAULT_COOLDOWN = 30
# Longest channel message the bot sends, in UTF-8 bytes: MeshCore allows
# about 160 including the "<radio name>: " prefix. Longer replies are split
# into numbered parts ("1/2", "2/2").
MAX_MESSAGE_BYTES = 135
CONFIG_KEYS = ("enabled", "cooldown", "channels", "radio_entry_id")


def _default_config() -> dict[str, Any]:
    return {"enabled": False, "cooldown": DEFAULT_COOLDOWN, "channels": {}, "radio_entry_id": ""}


def contact_names(contacts: list[Any]) -> list[tuple[str, str, int | None]]:
    """[(public key lower, name, type)] from a coordinator's contact list."""
    out = []
    for c in contacts or []:
        if not isinstance(c, dict):
            continue
        key = str(c.get("public_key") or c.get("pubkey_prefix") or "").lower()
        name = str(c.get("adv_name") or c.get("name") or "").strip()
        if key and name:
            ctype = c.get("type")
            out.append((key, name, ctype if isinstance(ctype, int) else None))
    return out


def hop_name(hop: str, names: list[tuple[str, str, int | None]]) -> str:
    """Name of the node whose key starts with ``hop``; repeaters preferred."""
    h = hop.lower()
    matches = [(n, t) for k, n, t in names if k.startswith(h)]
    if not matches:
        return "Unknown"
    for n, t in matches:
        if t == 2:
            return n
    return matches[0][0]


def path_names_reply(sender: str, entry: dict[str, Any] | None,
                     names: list[tuple[str, str, int | None]]) -> list[str]:
    """``path_names`` action: header plus one ``CODE: name`` line per hop."""
    nodes = [str(h) for h in ((entry or {}).get("path_nodes") or [])]
    if not nodes:
        return [f"@[{sender}] direct (0 hops)"]
    n = len(nodes)
    lines = [f"@[{sender}] {n} hop{'s' if n != 1 else ''}"]
    lines += [f"{h.upper()}: {hop_name(h, names)}" for h in nodes]
    return split_message("\n".join(lines), MAX_MESSAGE_BYTES)


def rule_matches(rule: dict[str, Any], text: str) -> bool:
    """Case-insensitive command match."""
    trigger = str(rule.get("trigger", "")).strip().lower()
    if not trigger or not rule.get("enabled", True):
        return False
    msg = text.strip().lower()
    match = rule.get("match", "exact")
    if match == "starts_with":
        return msg == trigger or msg.startswith(trigger + " ")
    if match == "contains":
        return trigger in msg
    return msg == trigger


class ChannelBot:
    """Per-channel command → action automation."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._store: Store[dict[str, Any]] = Store(hass, STORAGE_VERSION, STORAGE_KEY_BOT)
        self.config: dict[str, Any] = _default_config()
        # (channel_idx, sender) -> last reply time
        self._last_reply: dict[tuple[int, str], float] = {}

    async def async_load(self) -> None:
        stored = await self._store.async_load()
        cfg = _default_config()
        if isinstance(stored, dict):
            cfg.update({k: stored[k] for k in CONFIG_KEYS if k in stored})
        self.config = cfg

    def set_config(self, new: dict[str, Any]) -> dict[str, Any]:
        """Validate and replace the configuration."""
        channels: dict[str, Any] = {}
        for idx, ch in (new.get("channels") or {}).items():
            rules = []
            for r in ch.get("rules") or []:
                trigger = str(r.get("trigger", "")).strip()
                if not trigger:
                    continue
                match = r.get("match", "exact")
                action = r.get("action", "route_reply")
                if match not in MATCH_TYPES:
                    raise ValueError(f"Unknown match type: {match}")
                if action not in ACTIONS:
                    raise ValueError(f"Unknown action: {action}")
                rules.append({
                    "trigger": trigger[:64],
                    "match": match,
                    "action": action,
                    "enabled": bool(r.get("enabled", True)),
                })
            channels[str(int(idx))] = {"name": str(ch.get("name", ""))[:64], "rules": rules}
        cooldown = int(new.get("cooldown", self.config.get("cooldown", DEFAULT_COOLDOWN)))
        radio = new.get("radio_entry_id", self.config.get("radio_entry_id", ""))
        self.config = {
            "enabled": bool(new.get("enabled", False)),
            "cooldown": min(max(cooldown, 0), 3600),
            "channels": channels,
            "radio_entry_id": str(radio or "")[:64],
        }
        self._store.async_delay_save(lambda: self.config, 1.0)
        self.hass.bus.async_fire(EVENT_BOT_UPDATED, {})
        return self.config

    async def async_flush(self) -> None:
        await self._store.async_save(self.config)

    # ── message handling ──

    async def async_handle_event(self, event: Event) -> None:
        """``meshcore_message`` listener."""
        if not self.config.get("enabled"):
            return
        data = event.data or {}
        if data.get("outgoing") or str(data.get("message_type", "")).lower() != "channel":
            return
        channel_idx = data.get("channel_idx")
        if not isinstance(channel_idx, int):
            return
        channel = self.config["channels"].get(str(channel_idx))
        if not channel:
            return
        # Only messages of the bot's radio, replies through it.
        handle, entry_id = handles_message(self.hass, self.configured_radio(), data)
        if not handle:
            return
        text = str(data.get("message") or data.get("text") or "")
        rule = next((r for r in channel.get("rules", []) if rule_matches(r, text)), None)
        if rule is None:
            return
        sender = str(data.get("sender_name") or data.get("sender") or "")
        key = (channel_idx, sender)
        now = time.monotonic()
        last = self._last_reply.get(key)
        if last is not None and now - last < self.config.get("cooldown", DEFAULT_COOLDOWN):
            _LOGGER.debug("Bot: cooldown for %s on channel %s", sender, channel_idx)
            return
        self._last_reply[key] = now

        replies = self._run_action(rule["action"], sender, data, entry_id)
        if not replies:
            return
        scope = None
        scopes = self.hass.data.get(DOMAIN, {}).get("channel_scopes")
        if entry_id and scopes is not None:
            scope = scopes.get(entry_id, channel_idx)
        for reply in replies:
            payload: dict[str, Any] = {"channel_idx": channel_idx, "message": reply}
            if entry_id:
                payload["entry_id"] = entry_id
            if scope:
                payload["scope"] = scope
            try:
                await self.hass.services.async_call(
                    MESHCORE_DOMAIN, "send_channel_message", payload, blocking=True
                )
                _LOGGER.debug("Bot replied on channel %s to %s: %s", channel_idx, sender, reply)
            except Exception as err:
                _LOGGER.warning("Bot reply on channel %s failed: %s", channel_idx, err)
                return

    def configured_radio(self) -> str | None:
        """The radio chosen for the bot, else the one chosen for the BBS."""
        own = self.config.get("radio_entry_id")
        if own:
            return own
        bbs = self.hass.data.get(DOMAIN, {}).get("bbs")
        return (bbs.settings.get("radio_entry_id") if bbs is not None else None) or None

    def _names(self, entry_id: str | None) -> list[tuple[str, str, int | None]]:
        """Contact names of the bot's radio, to resolve path hop codes."""
        coords = self.hass.data.get(MESHCORE_DOMAIN) or {}
        coord = coords.get(entry_id) if entry_id else next(iter(coords.values()), None)
        get_all = getattr(coord, "get_all_contacts", None)
        if not callable(get_all):
            return []
        try:
            return contact_names(get_all())
        except Exception:  # pragma: no cover - defensive
            return []

    def _run_action(self, action: str, sender: str, data: dict[str, Any],
                    entry_id: str | None = None) -> list[str]:
        rx = copy.deepcopy(data.get("rx_log_data") or [])
        if rx:
            enrich_rx_log_entries(rx)
        first = rx[0] if rx else None
        if action == "route_reply":
            return split_message(route_reply(sender, first), MAX_MESSAGE_BYTES)
        if action == "path_names":
            return path_names_reply(sender, first, self._names(entry_id))
        return []


# ─── WebSocket API ──────────────────────────────────────────────────────


def _bot(hass: HomeAssistant) -> ChannelBot | None:
    return hass.data.get(DOMAIN, {}).get("bot")


@callback
def async_register_bot_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_bot_get)
    websocket_api.async_register_command(hass, ws_bot_set)


@websocket_api.websocket_command({vol.Required("type"): "meshcore_bbs/bot_get"})
@callback
def ws_bot_get(hass, connection, msg):
    bot = _bot(hass)
    if bot is None:
        connection.send_error(msg["id"], "not_ready", "Bot not loaded")
        return
    connection.send_result(msg["id"], {
        **bot.config,
        "match_types": list(MATCH_TYPES),
        "actions": list(ACTIONS),
    })


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/bot_set",
        vol.Required("config"): dict,
    }
)
@websocket_api.require_admin
@callback
def ws_bot_set(hass, connection, msg):
    bot = _bot(hass)
    if bot is None:
        connection.send_error(msg["id"], "not_ready", "Bot not loaded")
        return
    try:
        config = bot.set_config(msg["config"])
    except (TypeError, ValueError) as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
        return
    connection.send_result(msg["id"], config)
