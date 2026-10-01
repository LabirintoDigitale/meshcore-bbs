"""WebSocket commands to disconnect / reconnect a companion radio.

Disconnecting disables the upstream ``meshcore`` config entry (the same as
Settings → Devices & services → MeshCore → ⋮ → Disable): Home Assistant
unloads it and releases the Bluetooth link, so the radio is free for e.g.
the phone app. Reconnecting enables it again; ``reload`` retries a radio
whose entry is enabled but whose link dropped.

Disabling the entry is not always enough for a Bluetooth radio: a bonded
(paired) device is reconnected by BlueZ itself within seconds, without
any integration asking for it. So for ``ble`` radios the device is also
*blocked* in BlueZ on disconnect (which drops the link and refuses new
ones, keeping the pairing/PIN) and unblocked before reconnecting.
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


BLUEZ = "org.bluez"
DEVICE_IFACE = "org.bluez.Device1"


async def _set_bluez_blocked(address: str, blocked: bool) -> str | None:
    """Block / unblock a BLE device in BlueZ over D-Bus. Returns an error or None."""
    try:
        from dbus_fast import BusType, Message, MessageType, Variant
        from dbus_fast.aio import MessageBus
    except ImportError:
        return "BlueZ (D-Bus) is not available on this system"
    try:
        bus = await MessageBus(bus_type=BusType.SYSTEM).connect()
    except Exception as err:  # noqa: BLE001
        return f"cannot reach BlueZ: {err}"
    try:
        reply = await bus.call(Message(
            destination=BLUEZ, path="/", interface="org.freedesktop.DBus.ObjectManager",
            member="GetManagedObjects",
        ))
        if reply.message_type == MessageType.ERROR:
            return f"BlueZ: {reply.error_name}"
        path = None
        for obj_path, ifaces in reply.body[0].items():
            dev = ifaces.get(DEVICE_IFACE)
            addr = dev.get("Address") if dev else None
            if addr is not None and str(getattr(addr, "value", addr)).upper() == address.upper():
                path = obj_path
                break
        if path is None:
            return f"{address} is not known to BlueZ"
        reply = await bus.call(Message(
            destination=BLUEZ, path=path, interface="org.freedesktop.DBus.Properties",
            member="Set", signature="ssv", body=[DEVICE_IFACE, "Blocked", Variant("b", blocked)],
        ))
        if reply.message_type == MessageType.ERROR:
            return f"BlueZ: {reply.error_name} {reply.body[0] if reply.body else ''}".strip()
        return None
    except Exception as err:  # noqa: BLE001
        return f"BlueZ: {err}"
    finally:
        bus.disconnect()


def _ble_address(entry) -> str | None:
    data = entry.data if isinstance(getattr(entry, "data", None), Mapping) else {}
    addr = data.get("ble_address")
    if data.get("connection_type") == "ble" and isinstance(addr, str) and addr:
        return addr
    return None


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
    enabled = msg["enabled"]
    address = _ble_address(entry)
    bt_error = None
    # Unblock before enabling, so the entry's setup can connect.
    if enabled and address:
        bt_error = await _set_bluez_blocked(address, False)
    disabler = None if enabled else ConfigEntryDisabler.USER
    try:
        await hass.config_entries.async_set_disabled_by(entry.entry_id, disabler)
    except Exception as err:  # noqa: BLE001 - reported to the panel
        _LOGGER.warning("Could not %s radio %s: %s",
                        "enable" if enabled else "disable", entry.title, err)
        connection.send_error(msg["id"], "failed", str(err) or type(err).__name__)
        return
    # Block after disabling: drops the link BlueZ would otherwise keep.
    if not enabled and address:
        bt_error = await _set_bluez_blocked(address, True)
    if bt_error:
        _LOGGER.warning("Radio %s: %s", entry.title, bt_error)
    _LOGGER.info("Radio %s %s from the BBS panel", entry.title,
                 "reconnected" if enabled else "disconnected")
    connection.send_result(msg["id"], {**_entry_info(entry), "bluetooth_error": bt_error})


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
    address = _ble_address(entry)
    if address:
        await _set_bluez_blocked(address, False)
    try:
        ok = await hass.config_entries.async_reload(entry.entry_id)
    except Exception as err:  # noqa: BLE001 - reported to the panel
        connection.send_error(msg["id"], "failed", str(err) or type(err).__name__)
        return
    connection.send_result(msg["id"], {"reloaded": bool(ok)})
