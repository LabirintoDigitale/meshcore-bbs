"""WebSocket command to set or reset a contact's direct-message route.

Direct messages follow the route stored for the contact on the companion
radio (``out_path``). ``meshcore_bbs/set_contact_route`` lets the panel
force that route through chosen repeaters, or reset it to flood.

The SDK's ``change_contact_path`` needs the full contact record and the
route as the concatenated per-hop hashes, each ``path_hash_mode + 1``
bytes wide (the radio's path hash mode), so the handler builds that from
the repeaters' public keys instead of exposing the raw format.
"""
from __future__ import annotations

import logging
import re
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .ws_api import _get_coordinator

_LOGGER = logging.getLogger(__name__)

# out_path is 64 bytes on the firmware side.
MAX_PATH_BYTES = 64


def _clean_hex(value: str) -> str:
    return re.sub(r"[^0-9a-f]", "", str(value or "").lower())


def build_route_hex(repeaters: list[str], path_hash_mode: int) -> str:
    """Concatenate each repeater's first ``path_hash_mode + 1`` bytes.

    Raises ``ValueError`` for keys shorter than a hop hash or routes longer
    than the firmware's path buffer.
    """
    size = path_hash_mode + 1
    hops = []
    for rep in repeaters:
        key = _clean_hex(rep)
        if len(key) < 2 * size:
            raise ValueError(f"Repeater key '{rep}' is shorter than {size} byte(s)")
        hops.append(key[: 2 * size])
    if len(hops) * size > MAX_PATH_BYTES:
        raise ValueError(f"Route too long: at most {MAX_PATH_BYTES // size} repeaters")
    return "".join(hops)


def _is_error(result: Any) -> bool:
    if result is None:
        return True
    from meshcore.events import EventType

    return getattr(result, "type", None) == EventType.ERROR


def _error_text(result: Any) -> str:
    if result is None:
        return "no response from the radio"
    payload = getattr(result, "payload", None) or {}
    if isinstance(payload, dict):
        return str(payload.get("reason") or payload.get("error") or payload.get("code_string") or payload)
    return str(payload)


async def _path_hash_mode(api: Any) -> int:
    self_info = getattr(api, "self_info", None) or {}
    mode = self_info.get("path_hash_mode") if isinstance(self_info, dict) else None
    if isinstance(mode, int) and 0 <= mode <= 2:
        return mode
    try:
        res = await api.mesh_core.commands.send_device_query()
        mode = (getattr(res, "payload", None) or {}).get("path_hash_mode")
    except Exception:  # pragma: no cover - defensive
        mode = None
    return mode if isinstance(mode, int) and 0 <= mode <= 2 else 0


@callback
def async_register_route_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_set_contact_route)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/set_contact_route",
        vol.Optional("entry_id"): str,
        vol.Required("pubkey_prefix"): str,
        vol.Optional("repeaters", default=[]): [str],
        vol.Optional("reset", default=False): bool,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_set_contact_route(hass, connection, msg):
    """Route a contact's direct messages through ``repeaters`` (or reset to flood)."""
    coordinator = _get_coordinator(hass, msg.get("entry_id"))
    if not coordinator:
        connection.send_error(msg["id"], "not_found", "No MeshCore coordinator found")
        return
    api = coordinator.api
    prefix = _clean_hex(msg["pubkey_prefix"])
    contact = api.mesh_core.get_contact_by_key_prefix(prefix) if len(prefix) >= 6 else None
    if not contact:
        connection.send_error(
            msg["id"], "not_found",
            "Contact not found on the radio (only added contacts have a route)",
        )
        return

    reset = msg["reset"] or not msg["repeaters"]
    try:
        if reset:
            mode = contact.get("out_path_hash_mode", 0)
            result = await api.mesh_core.commands.reset_path(contact["public_key"])
            route_hex, hops = "", -1
        else:
            mode = await _path_hash_mode(api)
            route_hex = build_route_hex(msg["repeaters"], mode)
            hops = len(msg["repeaters"])
            result = await api.mesh_core.commands.change_contact_path(
                contact, route_hex, path_hash_mode=mode
            )
    except ValueError as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
        return
    except Exception as err:  # pragma: no cover - defensive
        _LOGGER.exception("set_contact_route failed")
        connection.send_error(msg["id"], "command_failed", str(err))
        return

    if _is_error(result):
        connection.send_error(msg["id"], "command_failed", _error_text(result))
        return

    # Reflect the new route in the coordinator's contact cache so the panel
    # sees it on the next contacts fetch (same pattern as add/remove).
    # The SDK's own contact dict is written explicitly too: not every SDK
    # version reflects reset_path locally, and the panel reads routes from
    # it (see ws_api._device_route_overlay).
    api.mesh_core._contacts_dirty = True
    key = contact.get("public_key", "")[:12]
    route = {"out_path": route_hex, "out_path_len": hops,
             "out_path_hash_mode": mode if not reset else -1}
    contact.update(route)
    cached = getattr(coordinator, "_contacts", {}).get(key)
    if isinstance(cached, dict):
        cached.update(route)
    if hasattr(coordinator, "mark_contact_dirty"):
        coordinator.mark_contact_dirty(key)
    if hasattr(coordinator, "get_all_contacts") and hasattr(coordinator, "async_set_updated_data"):
        data = dict(coordinator.data) if coordinator.data else {}
        data["contacts"] = coordinator.get_all_contacts()
        coordinator.async_set_updated_data(data)

    connection.send_result(msg["id"], {
        "out_path": route_hex,
        "out_path_len": hops,
        "path_hash_mode": mode,
    })
