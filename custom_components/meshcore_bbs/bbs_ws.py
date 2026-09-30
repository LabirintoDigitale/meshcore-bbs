"""WebSocket commands for the built-in BBS (``meshcore_bbs/bbs_*``).

Reading the BBS state is open to any authenticated user (the panel shows
BBS status icons next to contact names); every mutation requires an HA
administrator, matching the rest of the panel's destructive actions.
"""
from __future__ import annotations

from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .bbs import Bbs, clean_pubkey, dump_to_bbs_data, validate_menus
from .const import DOMAIN

# Upper bound for an uploaded SQL dump (the MeshBBS dump is a few KB).
MAX_DUMP_BYTES = 2_000_000


def _bbs(hass: HomeAssistant) -> Bbs | None:
    return hass.data.get(DOMAIN, {}).get("bbs")


def _no_bbs(connection: websocket_api.ActiveConnection, msg: dict) -> None:
    connection.send_error(msg["id"], "not_ready", "BBS not loaded")


@callback
def async_register_bbs_commands(hass: HomeAssistant) -> None:
    """Register the BBS WebSocket commands."""
    for handler in (
        ws_bbs_get,
        ws_bbs_user,
        ws_bbs_request,
        ws_bbs_settings,
        ws_bbs_menus,
        ws_bbs_delete_post,
        ws_bbs_import,
    ):
        websocket_api.async_register_command(hass, handler)


@websocket_api.websocket_command({vol.Required("type"): "meshcore_bbs/bbs_get"})
@callback
def ws_bbs_get(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Return settings, users, requests, posts and menus."""
    bbs = _bbs(hass)
    if bbs is None:
        _no_bbs(connection, msg)
        return
    connection.send_result(msg["id"], bbs.snapshot())


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/bbs_user",
        vol.Required("op"): vol.In(["add", "del", "on", "off", "admin", "unadmin"]),
        vol.Required("pubkey"): str,
        vol.Optional("name", default=""): str,
    }
)
@websocket_api.require_admin
@callback
def ws_bbs_user(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Grant, remove, suspend, resume or (un)promote a BBS user."""
    bbs = _bbs(hass)
    if bbs is None:
        _no_bbs(connection, msg)
        return
    pk = clean_pubkey(msg["pubkey"])
    if len(pk) < 6:
        connection.send_error(msg["id"], "invalid_format", "Public key needs at least 6 hex characters")
        return
    op = msg["op"]
    if op == "add":
        name = bbs.add_user(pk, msg["name"])
        connection.send_result(msg["id"], {"message": f"{name} now has access to the BBS."})
        return
    rows = bbs.matching_users(pk)
    if not rows:
        connection.send_error(msg["id"], "not_found", "This contact is not a BBS user")
        return
    if len(rows) > 1:
        connection.send_error(msg["id"], "ambiguous", "Several BBS users match this key")
        return
    upk, user = rows[0]
    if op == "del":
        bbs.remove_user(upk)
    elif op in ("on", "off"):
        bbs.set_active(upk, op == "on")
    else:
        bbs.set_admin(upk, op == "admin")
    connection.send_result(msg["id"], {"message": f"{user['name']} updated."})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/bbs_request",
        vol.Required("op"): vol.In(["approve", "reject"]),
        vol.Required("pubkey"): str,
        vol.Optional("name", default=""): str,
    }
)
@websocket_api.require_admin
@callback
def ws_bbs_request(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Approve (grant access) or reject a pending access request."""
    bbs = _bbs(hass)
    if bbs is None:
        _no_bbs(connection, msg)
        return
    pk = clean_pubkey(msg["pubkey"])
    req = bbs.data["requests"].get(pk)
    if req is None:
        connection.send_error(msg["id"], "not_found", "No pending request for this key")
        return
    if msg["op"] == "reject":
        bbs.reject_request(pk)
        connection.send_result(msg["id"], {"message": "Request rejected."})
        return
    name = bbs.add_user(pk, msg["name"] or req.get("name") or "")
    connection.send_result(msg["id"], {"message": f"{name} now has access to the BBS."})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/bbs_settings",
        vol.Required("settings"): dict,
    }
)
@websocket_api.require_admin
@callback
def ws_bbs_settings(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Update BBS settings (partial updates allowed)."""
    bbs = _bbs(hass)
    if bbs is None:
        _no_bbs(connection, msg)
        return
    try:
        settings = bbs.update_settings(msg["settings"])
    except (TypeError, ValueError) as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
        return
    connection.send_result(msg["id"], {"settings": settings})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/bbs_menus",
        vol.Required("menus"): [
            {
                vol.Required("id"): vol.All(int, vol.Range(min=1)),
                vol.Optional("name", default=""): str,
                vol.Optional("active", default=True): bool,
                vol.Required("config"): dict,
            }
        ],
        vol.Optional("dry_run", default=False): bool,
    }
)
@websocket_api.require_admin
@callback
def ws_bbs_menus(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Validate and (unless dry_run) replace the menu set."""
    bbs = _bbs(hass)
    if bbs is None:
        _no_bbs(connection, msg)
        return
    menus: dict[str, Any] = {}
    for m in msg["menus"]:
        key = str(m["id"])
        if key in menus:
            connection.send_result(msg["id"], {"errors": [f"Duplicate menu id {key}"]})
            return
        menus[key] = {"name": m["name"], "active": m["active"], "config": m["config"]}
    if msg["dry_run"]:
        errors = validate_menus(menus, bbs.settings["main_menu"])
    else:
        errors = bbs.set_menus(menus)
    connection.send_result(msg["id"], {"errors": errors})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/bbs_delete_post",
        vol.Required("post_id"): int,
    }
)
@websocket_api.require_admin
@callback
def ws_bbs_delete_post(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Delete a bulletin-board post."""
    bbs = _bbs(hass)
    if bbs is None:
        _no_bbs(connection, msg)
        return
    if not bbs.delete_post(msg["post_id"]):
        connection.send_error(msg["id"], "not_found", "Post not found")
        return
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/bbs_import",
        vol.Required("sql"): str,
        vol.Optional("dry_run", default=True): bool,
    }
)
@websocket_api.require_admin
@callback
def ws_bbs_import(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Import users, requests, posts and menus from a MeshBBS MySQL dump.

    ``dry_run`` (default) only parses and returns counts so the panel can
    ask for confirmation before replacing the current data.
    """
    bbs = _bbs(hass)
    if bbs is None:
        _no_bbs(connection, msg)
        return
    if len(msg["sql"].encode("utf-8")) > MAX_DUMP_BYTES:
        connection.send_error(msg["id"], "invalid_format", "File too large")
        return
    try:
        imported = dump_to_bbs_data(msg["sql"])
    except ValueError as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
        return
    summary = {k: len(v) for k, v in imported.items()}
    if "menus" in imported:
        summary["menu_errors"] = validate_menus(imported["menus"], bbs.settings["main_menu"])
    if not msg["dry_run"]:
        bbs.import_data(imported)
    connection.send_result(msg["id"], {"summary": summary, "imported": not msg["dry_run"]})
