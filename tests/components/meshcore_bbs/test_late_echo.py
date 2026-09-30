"""Tests for late repeater-echo correlation (``late_echo.py``)."""
from __future__ import annotations

import time
from types import SimpleNamespace
from unittest.mock import patch

import pytest
from homeassistant.core import HomeAssistant

from custom_components.meshcore_bbs.const import EVENT_MESHCORE_DELIVERY_UPDATE
from custom_components.meshcore_bbs.late_echo import EVENT_RAW, LateEchoTracker

TEXT = "@[X] | afd0,01d4 (2 hops) | SNR: 8.5 dB | Received at: 15:55:46 BL"
RECORD = {
    "id": "cf514533",
    "send_id": "cf514533",
    "sender": "Base Galileo",
    "text": TEXT,
    "timestamp": "2026-09-30T14:19:12+00:00",
    "message_type": "channel",
    "channel_idx": 0,
    "outgoing": True,
}


def _raw(text: str, channel_idx: int = 0, ts: float | None = None, path: str = "6522") -> dict:
    return {
        "event_type": "EventType.RX_LOG_DATA",
        "payload": {
            "snr": 9.75,
            "rssi": -88,
            "route_type": 1,
            "route_typename": "FLOOD",
            "decrypted": {
                "decrypted": True,
                "channel_idx": channel_idx,
                "channel_name": "Public",
                "timestamp": int(ts if ts is not None else time.time() - 6),
                "text": text,
                "path_len": 1,
                "path": path,
                "path_hash_size": 2,
                "channel_hash": "11",
            },
        },
        "timestamp": time.time(),
    }


@pytest.fixture
def tracker(hass: HomeAssistant):
    t = LateEchoTracker(hass)
    t.start()
    yield t
    t.stop()


@pytest.fixture
def updates(hass: HomeAssistant) -> list:
    events: list = []
    hass.bus.async_listen(EVENT_MESHCORE_DELIVERY_UPDATE, events.append)
    return events


async def test_late_echo_publishes_delivery_update(hass: HomeAssistant, tracker, updates) -> None:
    tracker.watch("binary_sensor.ch0", "cf514533", RECORD)
    hass.bus.async_fire(EVENT_RAW, _raw(f"Base Galileo 🐴: {TEXT}"))
    await hass.async_block_till_done()

    assert len(updates) == 1
    data = updates[0].data
    assert data["entity_id"] == "binary_sensor.ch0"
    assert data["id"] == data["send_id"] == "cf514533"
    assert data["repeater_count"] == 1
    assert data["delivery_status"] == "sent"
    assert "outgoing" not in data  # upstream's delivery sensor must ignore it
    entry = data["rx_log_data"][0]
    assert entry["path"] == "6522" and entry["snr"] == 9.75
    assert entry["path_nodes"] == ["6522"] and entry["hop_count"] == 1

    # A second repeater's echo accumulates
    hass.bus.async_fire(EVENT_RAW, _raw(f"Base Galileo 🐴: {TEXT}", path="7de3"))
    await hass.async_block_till_done()
    assert updates[-1].data["repeater_count"] == 2


async def test_other_packets_are_ignored(hass: HomeAssistant, tracker, updates) -> None:
    tracker.watch("binary_sensor.ch0", "cf514533", RECORD)
    hass.bus.async_fire(EVENT_RAW, _raw("Someone: hello"))
    hass.bus.async_fire(EVENT_RAW, _raw(f"Base Galileo: {TEXT}", channel_idx=1))
    hass.bus.async_fire(EVENT_RAW, _raw(f"Base Galileo: {TEXT}", ts=time.time() - 3600))
    hass.bus.async_fire(EVENT_RAW, {"event_type": "EventType.ADVERTISEMENT", "payload": {}})
    not_decrypted = _raw(f"Base Galileo: {TEXT}")
    not_decrypted["payload"]["decrypted"]["decrypted"] = False
    hass.bus.async_fire(EVENT_RAW, not_decrypted)
    await hass.async_block_till_done()
    assert updates == []


async def test_watch_expires(hass: HomeAssistant, tracker, updates) -> None:
    tracker.watch("binary_sensor.ch0", "cf514533", RECORD)
    with patch("custom_components.meshcore_bbs.late_echo.time.time", return_value=time.time() + 60):
        hass.bus.async_fire(EVENT_RAW, _raw(f"Base Galileo: {TEXT}", ts=time.time()))
        await hass.async_block_till_done()
    assert updates == []


async def test_watch_requires_channel_and_text(tracker) -> None:
    tracker.watch("binary_sensor.ch0", "x", {**RECORD, "channel_idx": None})
    tracker.watch("binary_sensor.ch0", "x", {**RECORD, "text": ""})
    assert tracker._watches == []


async def test_message_handler_watches_unheard_outgoing_channel_messages(hass: HomeAssistant) -> None:
    """The companion's meshcore_message handler registers the watch."""
    from unittest.mock import AsyncMock, MagicMock

    from pytest_homeassistant_custom_component.common import MockConfigEntry

    from custom_components.meshcore_bbs import MeshCoreBbsRuntimeData, _make_message_handler
    from custom_components.meshcore_bbs.const import DOMAIN

    store = MagicMock()
    store.store_message = AsyncMock()
    entry = MockConfigEntry(domain=DOMAIN, entry_id="E1", data={})
    entry.add_to_hass(hass)
    entry.runtime_data = MeshCoreBbsRuntimeData(store=store)
    late = MagicMock()
    hass.data.setdefault(DOMAIN, {})["late_echo"] = late

    handler = _make_message_handler(hass, "E1")
    base = {"entity_id": "binary_sensor.ch0", "send_id": "cf514533", "message": TEXT,
            "sender_name": "Base Galileo", "message_type": "channel", "channel_idx": 0,
            "outgoing": True}
    await handler(SimpleNamespace(data={**base, "repeater_count": 0}))
    assert late.watch.call_count == 1
    assert late.watch.call_args.args[:2] == ("binary_sensor.ch0", "cf514533")

    # Already repeated in time, incoming, or a DM: no watch
    await handler(SimpleNamespace(data={**base, "repeater_count": 1, "rx_log_data": [{"path": "6522"}]}))
    await handler(SimpleNamespace(data={**base, "outgoing": False}))
    await handler(SimpleNamespace(data={**base, "message_type": "direct"}))
    assert late.watch.call_count == 1
