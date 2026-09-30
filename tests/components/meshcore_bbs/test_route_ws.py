"""Tests for ``meshcore_bbs/set_contact_route`` (``route_ws.py``)."""
from __future__ import annotations

import sys
import types
from unittest.mock import AsyncMock, MagicMock

import pytest
from homeassistant.core import HomeAssistant

from custom_components.meshcore_bbs import route_ws
from custom_components.meshcore_bbs.const import MESHCORE_DOMAIN
from custom_components.meshcore_bbs.route_ws import build_route_hex

from .test_ws_api import _call_ws, _Connection, _make_coordinator


class _EventType:
    ERROR = "error"
    OK = "ok"


class _Event:
    def __init__(self, type_, payload=None):
        self.type = type_
        self.payload = payload or {}


@pytest.fixture(autouse=True)
def fake_events(monkeypatch):
    mod = types.ModuleType("meshcore.events")
    mod.EventType = _EventType
    monkeypatch.setitem(sys.modules, "meshcore.events", mod)
    if "meshcore" not in sys.modules:
        monkeypatch.setitem(sys.modules, "meshcore", types.ModuleType("meshcore"))


CONTACT = {
    "public_key": "1d71d95287fc" + "00" * 26,
    "adv_name": "Galileo",
    "type": 1,
    "out_path": "",
    "out_path_len": -1,
    "out_path_hash_mode": -1,
}
RPT1 = "652249ca3e36"
FELTRE = "7de3c3d04a91"


@pytest.fixture
def coord(hass: HomeAssistant) -> MagicMock:
    c = _make_coordinator()
    c.api.self_info = {"path_hash_mode": 1}
    c.api.mesh_core.get_contact_by_key_prefix = MagicMock(return_value=dict(CONTACT))
    c.api.mesh_core.commands.change_contact_path = AsyncMock(return_value=_Event(_EventType.OK))
    c.api.mesh_core.commands.reset_path = AsyncMock(return_value=_Event(_EventType.OK))
    c._contacts = {"1d71d95287fc": dict(CONTACT)}
    hass.data[MESHCORE_DOMAIN] = {"meshcore_entry": c}
    return c


def test_build_route_hex_uses_hash_size() -> None:
    assert build_route_hex([RPT1, FELTRE], 0) == "657d"
    assert build_route_hex([RPT1, FELTRE], 1) == "65227de3"
    assert build_route_hex(["65:22-49"], 2) == "652249"
    with pytest.raises(ValueError):
        build_route_hex(["65"], 1)
    with pytest.raises(ValueError):
        build_route_hex([RPT1] * 33, 1)


async def test_set_route_through_repeaters(hass: HomeAssistant, coord) -> None:
    conn = _Connection()
    await _call_ws(route_ws.ws_set_contact_route, hass, conn, {
        "id": 1, "pubkey_prefix": "1d71d95287fc", "repeaters": [RPT1, FELTRE], "reset": False,
    })
    assert conn.errors == []
    assert conn.results[0][1] == {"out_path": "65227de3", "out_path_len": 2, "path_hash_mode": 1}
    args, kwargs = coord.api.mesh_core.commands.change_contact_path.call_args
    assert args[0]["adv_name"] == "Galileo" and args[1] == "65227de3"
    assert kwargs == {"path_hash_mode": 1}
    cached = coord._contacts["1d71d95287fc"]
    assert cached["out_path"] == "65227de3" and cached["out_path_len"] == 2
    coord.async_set_updated_data.assert_called_once()


async def test_path_hash_mode_queried_when_unknown(hass: HomeAssistant, coord) -> None:
    coord.api.self_info = {}
    coord.api.mesh_core.commands.send_device_query = AsyncMock(
        return_value=_Event(_EventType.OK, {"path_hash_mode": 0}))
    conn = _Connection()
    await _call_ws(route_ws.ws_set_contact_route, hass, conn, {
        "id": 1, "pubkey_prefix": "1d71d95287fc", "repeaters": [RPT1], "reset": False,
    })
    assert conn.results[0][1]["out_path"] == "65"


async def test_reset_to_flood(hass: HomeAssistant, coord) -> None:
    conn = _Connection()
    await _call_ws(route_ws.ws_set_contact_route, hass, conn, {
        "id": 1, "pubkey_prefix": "1d71d95287fc", "repeaters": [], "reset": True,
    })
    coord.api.mesh_core.commands.reset_path.assert_awaited_once_with(CONTACT["public_key"])
    assert conn.results[0][1]["out_path_len"] == -1
    assert coord._contacts["1d71d95287fc"]["out_path_len"] == -1


async def test_errors(hass: HomeAssistant, coord) -> None:
    conn = _Connection()
    coord.api.mesh_core.get_contact_by_key_prefix.return_value = None
    await _call_ws(route_ws.ws_set_contact_route, hass, conn, {
        "id": 1, "pubkey_prefix": "abcdef000000", "repeaters": [RPT1], "reset": False,
    })
    assert conn.errors[-1][1] == "not_found"

    coord.api.mesh_core.get_contact_by_key_prefix.return_value = dict(CONTACT)
    await _call_ws(route_ws.ws_set_contact_route, hass, conn, {
        "id": 2, "pubkey_prefix": "1d71d95287fc", "repeaters": ["6"], "reset": False,
    })
    assert conn.errors[-1][1] == "invalid_format"

    coord.api.mesh_core.commands.change_contact_path.return_value = _Event(
        _EventType.ERROR, {"reason": "table full"})
    await _call_ws(route_ws.ws_set_contact_route, hass, conn, {
        "id": 3, "pubkey_prefix": "1d71d95287fc", "repeaters": [RPT1], "reset": False,
    })
    assert conn.errors[-1][1:] == ("command_failed", "table full")
    assert conn.results == []
