"""Tests for ``meshcore_bbs/request_telemetry`` (``telemetry_ws.py``)."""
from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock

import pytest
from homeassistant.core import HomeAssistant

from custom_components.meshcore_bbs import telemetry_ws
from custom_components.meshcore_bbs.const import MESHCORE_DOMAIN

from .test_ws_api import _call_ws, _Connection, _make_coordinator

CONTACT = {"public_key": "1d71d95287fc" + "00" * 26, "adv_name": "Galileo", "type": 1}
LPP = [
    {"channel": 1, "type": "voltage", "value": 4.12},
    {"channel": 1, "type": "gps", "value": {"latitude": 46.02, "longitude": 11.9, "altitude": 320}},
]


@pytest.fixture
def coord(hass: HomeAssistant) -> MagicMock:
    c = _make_coordinator()
    c.api.mesh_core.get_contact_by_key_prefix = MagicMock(return_value=dict(CONTACT))
    c.api.mesh_core.commands.req_telemetry_sync = AsyncMock(return_value=LPP)
    hass.data[MESHCORE_DOMAIN] = {"meshcore_entry": c}
    return c


async def test_returns_decoded_lpp(hass: HomeAssistant, coord) -> None:
    conn = _Connection()
    await _call_ws(telemetry_ws.ws_request_telemetry, hass, conn, {"id": 1, "pubkey_prefix": "1D71D95287FC"})
    result = conn.results[0][1]
    assert result["lpp"] == LPP
    assert result["pubkey_prefix"] == "1d71d95287fc"
    args, kwargs = coord.api.mesh_core.commands.req_telemetry_sync.call_args
    assert args[0]["adv_name"] == "Galileo"
    assert kwargs["min_timeout"] == telemetry_ws.MIN_TIMEOUT_SECONDS


async def test_no_response(hass: HomeAssistant, coord) -> None:
    coord.api.mesh_core.commands.req_telemetry_sync.return_value = None
    conn = _Connection()
    await _call_ws(telemetry_ws.ws_request_telemetry, hass, conn, {"id": 1, "pubkey_prefix": "1d71d95287fc"})
    assert conn.errors[0][1] == "no_response"
    assert "telemetry access" in conn.errors[0][2]


async def test_unknown_contact(hass: HomeAssistant, coord) -> None:
    coord.api.mesh_core.get_contact_by_key_prefix.return_value = None
    conn = _Connection()
    await _call_ws(telemetry_ws.ws_request_telemetry, hass, conn, {"id": 1, "pubkey_prefix": "abcdef000000"})
    assert conn.errors[0][1] == "not_found"
    coord.api.mesh_core.commands.req_telemetry_sync.assert_not_called()
