"""WebSocket commands to disconnect / reconnect a companion radio.

Disconnecting disables the upstream ``meshcore`` config entry (the same as
Settings → Devices & services → MeshCore → ⋮ → Disable): Home Assistant
unloads it and releases the Bluetooth link, so the radio is free for e.g.
the phone app. Reconnecting enables it again; ``reload`` retries a radio
whose entry is enabled but whose link dropped.
"""
from __future__ import annotations

import logging
from collections.abc import Mapping

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.config_entries import ConfigEntryDisabler
from homeassistant.core import HomeAssistant, callback

from .const import MESHCORE_DOMAIN

_LOGGER = logging.getLogger(__name__)


@callback
def async_register_radio_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_radio_entries)
    websocket_api.async_register_command(hass, ws_set_radio_enabled)
    websocket_api.async_register_command(hass, ws_reload_radio)


def _entry_info(entry) -> dict:
    data = entry.data if isinstance(getattr(entry, "data", None), Mapping) else {}
    conn = data.get("connection_type")
    return {
        "entry_id": entry.entry_id,
        "title": str(entry.title or entry.entry_id),
        "connection_type": conn if isinstance(conn, str) else "unknown",
        "disabled": entry.disabled_by is not None,
    }


def _meshcore_entry(hass: HomeAssistant, connection, msg):
    entry = hass.config_entries.async_get_entry(msg["entry_id"])
    if entry is None or entry.domain != MESHCORE_DOMAIN:
        connection.send_error(msg["id"], "not_found", "MeshCore radio not found")
        return None
    return entry


@websocket_api.websocket_command({vol.Required("type"): "meshcore_bbs/radio_entries"})
@callback
def ws_radio_entries(hass: HomeAssistant, connection, msg) -> None:
    """All MeshCore radios, including disabled (disconnected) ones."""
    entries = [_entry_info(e) for e in hass.config_entries.async_entries(MESHCORE_DOMAIN)]
    connection.send_result(msg["id"], {"radios": entries})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/set_radio_enabled",
        vol.Required("entry_id"): str,
        vol.Required("enabled"): bool,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_set_radio_enabled(hass: HomeAssistant, connection, msg) -> None:
    entry = _meshcore_entry(hass, connection, msg)
    if entry is None:
        return
    disabler = None if msg["enabled"] else ConfigEntryDisabler.USER
    try:
        await hass.config_entries.async_set_disabled_by(entry.entry_id, disabler)
    except Exception as err:  # noqa: BLE001 - reported to the panel
        _LOGGER.warning("Could not %s radio %s: %s",
                        "enable" if msg["enabled"] else "disable", entry.title, err)
        connection.send_error(msg["id"], "failed", str(err) or type(err).__name__)
        return
    _LOGGER.info("Radio %s %s from the BBS panel", entry.title,
                 "reconnected" if msg["enabled"] else "disconnected")
    connection.send_result(msg["id"], _entry_info(entry))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/reload_radio",
        vol.Required("entry_id"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_reload_radio(hass: HomeAssistant, connection, msg) -> None:
    entry = _meshcore_entry(hass, connection, msg)
    if entry is None:
        return
    try:
        ok = await hass.config_entries.async_reload(entry.entry_id)
    except Exception as err:  # noqa: BLE001 - reported to the panel
        connection.send_error(msg["id"], "failed", str(err) or type(err).__name__)
        return
    connection.send_result(msg["id"], {"reloaded": bool(ok)})
