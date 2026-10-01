"""Tests for the disconnect / reconnect radio commands (``radio_ws.py``)."""
from __future__ import annotations

from unittest.mock import AsyncMock, patch

from homeassistant.config_entries import ConfigEntryDisabler
from homeassistant.core import HomeAssistant
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.meshcore_bbs import radio_ws
from custom_components.meshcore_bbs.const import MESHCORE_DOMAIN

from .test_ws_api import _call_ws, _Connection


def _radio(hass: HomeAssistant, title: str, conn: str, disabled: bool = False) -> MockConfigEntry:
    entry = MockConfigEntry(
        domain=MESHCORE_DOMAIN, title=title, data={"connection_type": conn},
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
    with patch.object(hass.config_entries, "async_set_disabled_by", AsyncMock(return_value=True)) as m:
        conn = _Connection()
        await _call_ws(radio_ws.ws_set_radio_enabled, hass, conn,
                       {"id": 1, "entry_id": gal.entry_id, "enabled": False})
        m.assert_awaited_once_with(gal.entry_id, ConfigEntryDisabler.USER)
        await _call_ws(radio_ws.ws_set_radio_enabled, hass, conn,
                       {"id": 2, "entry_id": gal.entry_id, "enabled": True})
        assert m.await_args.args == (gal.entry_id, None)
    assert [r[0] for r in conn.results] == [1, 2]


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
    with patch.object(hass.config_entries, "async_reload", AsyncMock(return_value=True)) as m:
        conn = _Connection()
        await _call_ws(radio_ws.ws_reload_radio, hass, conn, {"id": 1, "entry_id": gal.entry_id})
    m.assert_awaited_once_with(gal.entry_id)
    assert conn.results == [(1, {"reloaded": True})]


async def test_failure_is_reported(hass: HomeAssistant) -> None:
    gal = _radio(hass, "Galileo", "ble")
    with patch.object(hass.config_entries, "async_set_disabled_by", AsyncMock(side_effect=RuntimeError("busy"))):
        conn = _Connection()
        await _call_ws(radio_ws.ws_set_radio_enabled, hass, conn,
                       {"id": 1, "entry_id": gal.entry_id, "enabled": False})
    assert conn.errors == [(1, "failed", "busy")]
