"""Tests for the disconnect / reconnect radio commands (``radio_ws.py``)."""
from __future__ import annotations

from unittest.mock import AsyncMock, patch

from homeassistant.config_entries import ConfigEntryDisabler
from homeassistant.core import HomeAssistant
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.meshcore_bbs import radio_ws
from custom_components.meshcore_bbs.const import MESHCORE_DOMAIN

from .test_ws_api import _call_ws, _Connection


ADDR = "C7:6E:86:1D:FE:D2"


def _radio(hass: HomeAssistant, title: str, conn: str, disabled: bool = False) -> MockConfigEntry:
    data = {"connection_type": conn}
    if conn == "ble":
        data["ble_address"] = ADDR
    entry = MockConfigEntry(
        domain=MESHCORE_DOMAIN, title=title, data=data,
        disabled_by=ConfigEntryDisabler.USER if disabled else None,
    )
    entry.add_to_hass(hass)
    return entry


async def test_lists_all_radios_including_disabled(hass: HomeAssistant) -> None:
    base = _radio(hass, "Base Galileo", "usb")
    gal = _radio(hass, "Galileo", "ble", disabled=True)
    MockConfigEntry(domain="other", title="x").add_to_hass(hass)
    conn = _Connection()
    await _call_ws(radio_ws.ws_radio_entries, hass, conn, {"id": 1})
    radios = {r["entry_id"]: r for r in conn.results[0][1]["radios"]}
    assert set(radios) == {base.entry_id, gal.entry_id}
    assert radios[gal.entry_id] == {"entry_id": gal.entry_id, "title": "Galileo",
                                    "connection_type": "ble", "disabled": True}
    assert radios[base.entry_id]["disabled"] is False


async def test_disable_and_enable(hass: HomeAssistant) -> None:
    gal = _radio(hass, "Galileo", "ble")
    calls: list = []

    async def disabled_by(entry_id, disabler):
        calls.append(("entry", disabler))
        return True

    async def blocked(address, value):
        calls.append(("bluez", address, value))

    with patch.object(hass.config_entries, "async_set_disabled_by", disabled_by),          patch.object(radio_ws, "_set_bluez_blocked", blocked):
        conn = _Connection()
        await _call_ws(radio_ws.ws_set_radio_enabled, hass, conn,
                       {"id": 1, "entry_id": gal.entry_id, "enabled": False})
        await _call_ws(radio_ws.ws_set_radio_enabled, hass, conn,
                       {"id": 2, "entry_id": gal.entry_id, "enabled": True})
    # Disconnect: disable, then block in BlueZ. Reconnect: unblock, then enable.
    assert calls == [
        ("entry", ConfigEntryDisabler.USER), ("bluez", ADDR, True),
        ("bluez", ADDR, False), ("entry", None),
    ]
    assert [r[0] for r in conn.results] == [1, 2]
    assert conn.results[0][1]["bluetooth_error"] is None


async def test_usb_radio_is_not_touched_in_bluez(hass: HomeAssistant) -> None:
    base = _radio(hass, "Base Galileo", "usb")
    bluez = AsyncMock(return_value=None)
    with patch.object(hass.config_entries, "async_set_disabled_by", AsyncMock(return_value=True)),          patch.object(radio_ws, "_set_bluez_blocked", bluez):
        conn = _Connection()
        await _call_ws(radio_ws.ws_set_radio_enabled, hass, conn,
                       {"id": 1, "entry_id": base.entry_id, "enabled": False})
    bluez.assert_not_called()


async def test_bluez_error_is_reported_but_entry_still_disabled(hass: HomeAssistant) -> None:
    gal = _radio(hass, "Galileo", "ble")
    disabled = AsyncMock(return_value=True)
    with patch.object(hass.config_entries, "async_set_disabled_by", disabled),          patch.object(radio_ws, "_set_bluez_blocked", AsyncMock(return_value="cannot reach BlueZ")):
        conn = _Connection()
        await _call_ws(radio_ws.ws_set_radio_enabled, hass, conn,
                       {"id": 1, "entry_id": gal.entry_id, "enabled": False})
    disabled.assert_awaited_once()
    assert conn.results[0][1]["bluetooth_error"] == "cannot reach BlueZ"


async def test_refuses_non_meshcore_entries(hass: HomeAssistant) -> None:
    other = MockConfigEntry(domain="other", title="x")
    other.add_to_hass(hass)
    conn = _Connection()
    await _call_ws(radio_ws.ws_set_radio_enabled, hass, conn,
                   {"id": 1, "entry_id": other.entry_id, "enabled": False})
    await _call_ws(radio_ws.ws_reload_radio, hass, conn, {"id": 2, "entry_id": "missing"})
    assert [e[1] for e in conn.errors] == ["not_found", "not_found"]
    assert other.disabled_by is None


async def test_reload(hass: HomeAssistant) -> None:
    gal = _radio(hass, "Galileo", "ble")
    bluez = AsyncMock(return_value=None)
    with patch.object(hass.config_entries, "async_reload", AsyncMock(return_value=True)) as m,          patch.object(radio_ws, "_set_bluez_blocked", bluez):
        conn = _Connection()
        await _call_ws(radio_ws.ws_reload_radio, hass, conn, {"id": 1, "entry_id": gal.entry_id})
    m.assert_awaited_once_with(gal.entry_id)
    bluez.assert_awaited_once_with(ADDR, False)
    assert conn.results == [(1, {"reloaded": True})]


async def test_failure_is_reported(hass: HomeAssistant) -> None:
    gal = _radio(hass, "Galileo", "ble")
    with patch.object(hass.config_entries, "async_set_disabled_by", AsyncMock(side_effect=RuntimeError("busy"))),          patch.object(radio_ws, "_set_bluez_blocked", AsyncMock(return_value=None)):
        conn = _Connection()
        await _call_ws(radio_ws.ws_set_radio_enabled, hass, conn,
                       {"id": 1, "entry_id": gal.entry_id, "enabled": False})
    assert conn.errors == [(1, "failed", "busy")]


async def test_bluez_unavailable_without_dbus(monkeypatch) -> None:
    import builtins
    real_import = builtins.__import__

    def no_dbus(name, *a, **k):
        if name.startswith("dbus_fast"):
            raise ImportError(name)
        return real_import(name, *a, **k)

    monkeypatch.setattr(builtins, "__import__", no_dbus)
    assert "not available" in await radio_ws._set_bluez_blocked(ADDR, True)
