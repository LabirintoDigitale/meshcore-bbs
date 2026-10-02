"""Tests for the channel bot (``bot.py``)."""
from __future__ import annotations

from types import SimpleNamespace
from typing import Any

import pytest
from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import async_mock_service

from custom_components.meshcore_bbs.bot import (
    ChannelBot,
    async_register_bot_commands,
    contact_names,
    path_names_reply,
    MAX_MESSAGE_BYTES,
    rule_matches,
)
from custom_components.meshcore_bbs.const import DOMAIN, MESHCORE_DOMAIN

RX = [{"path": "9a9286a8146c", "path_hash_size": 2, "snr": -9.25, "rssi": -122}]


def _msg(text: str, channel_idx: int = 3, **extra: Any) -> SimpleNamespace:
    return SimpleNamespace(data={
        "message_type": "channel", "channel_idx": channel_idx, "sender_name": "Alfa 10",
        "message": text, "outgoing": False, "rx_log_data": RX, **extra,
    })


@pytest.fixture
async def bot(hass: HomeAssistant) -> ChannelBot:
    b = ChannelBot(hass)
    await b.async_load()
    b.set_config({
        "enabled": True,
        "cooldown": 30,
        "channels": {
            "3": {"name": "#path", "rules": [{"trigger": "path", "match": "exact", "action": "route_reply"}]},
            "1": {"name": "#test", "rules": [
                {"trigger": "test", "match": "starts_with", "action": "route_reply"},
                {"trigger": "  ", "match": "exact", "action": "route_reply"},  # dropped (empty)
            ]},
        },
    })
    hass.data.setdefault(DOMAIN, {})["bot"] = b
    return b


def test_rule_matching() -> None:
    exact = {"trigger": "Test", "match": "exact"}
    assert rule_matches(exact, " test ") and not rule_matches(exact, "test 1")
    starts = {"trigger": "test", "match": "starts_with"}
    assert rule_matches(starts, "TEST da Feltre") and not rule_matches(starts, "testing")
    contains = {"trigger": "path", "match": "contains"}
    assert rule_matches(contains, "show me the PATH please")
    assert not rule_matches({**exact, "enabled": False}, "test")


async def test_replies_with_route_on_the_same_channel(hass: HomeAssistant, bot: ChannelBot) -> None:
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_channel_message")
    await bot.async_handle_event(_msg("Path"))
    assert len(calls) == 1
    assert calls[0].data["channel_idx"] == 3
    assert calls[0].data["message"].startswith(
        "@[Alfa 10] | 9a92,86a8,146c (3 hops) | SNR: -9.25 dB | RSSI: -122 dBm | Received at: ")


async def test_rules_are_per_channel(hass: HomeAssistant, bot: ChannelBot) -> None:
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_channel_message")
    await bot.async_handle_event(_msg("path", channel_idx=1))   # "path" is not a #test command
    await bot.async_handle_event(_msg("test", channel_idx=0))   # channel without rules
    assert calls == []
    await bot.async_handle_event(_msg("test da Feltre", channel_idx=1))
    assert len(calls) == 1 and calls[0].data["channel_idx"] == 1


async def test_ignores_outgoing_dms_disabled_and_cooldown(hass: HomeAssistant, bot: ChannelBot) -> None:
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_channel_message")
    await bot.async_handle_event(_msg("path", outgoing=True))
    await bot.async_handle_event(_msg("path", message_type="direct"))
    assert calls == []
    await bot.async_handle_event(_msg("path"))
    await bot.async_handle_event(_msg("path"))  # same sender within cooldown
    assert len(calls) == 1
    bot.set_config({**bot.config, "enabled": False})
    await bot.async_handle_event(_msg("path", sender_name="Other"))
    assert len(calls) == 1


async def test_without_route_data_and_with_scope(hass: HomeAssistant, bot: ChannelBot) -> None:
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_channel_message")
    hass.data[MESHCORE_DOMAIN] = {"E1": object()}
    hass.data[DOMAIN]["channel_scopes"] = SimpleNamespace(get=lambda entry, idx: "it-ve" if entry == "E1" else None)
    await bot.async_handle_event(_msg("path", rx_log_data=[]))
    assert calls[0].data["message"].startswith("@[Alfa 10] | Received at: ")
    assert calls[0].data["scope"] == "it-ve"


async def test_config_validation_and_persistence(hass: HomeAssistant, bot: ChannelBot) -> None:
    assert len(bot.config["channels"]["1"]["rules"]) == 1
    with pytest.raises(ValueError):
        bot.set_config({"channels": {"1": {"rules": [{"trigger": "x", "action": "explode"}]}}})
    await bot.async_flush()
    fresh = ChannelBot(hass)
    await fresh.async_load()
    assert fresh.config["enabled"] is True
    assert fresh.config["channels"]["3"]["rules"][0]["trigger"] == "path"


async def test_ws_get_and_set(hass: HomeAssistant, hass_ws_client, bot: ChannelBot) -> None:
    assert await async_setup_component(hass, "websocket_api", {})
    async_register_bot_commands(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "meshcore_bbs/bot_get"})
    res = await client.receive_json()
    assert res["result"]["enabled"] is True and "route_reply" in res["result"]["actions"]
    await client.send_json_auto_id({"type": "meshcore_bbs/bot_set", "config": {
        "enabled": False, "cooldown": 99999, "channels": {}}})
    res = await client.receive_json()
    assert res["result"]["cooldown"] == 3600 and bot.config["enabled"] is False
    await client.send_json_auto_id({"type": "meshcore_bbs/bot_set", "config": {
        "channels": {"2": {"rules": [{"trigger": "t", "match": "fuzzy"}]}}}})
    res = await client.receive_json()
    assert res["error"]["code"] == "invalid_format"


# ─── path_names action and the bot's own radio ──────────────────────────

CONTACTS = [
    {"public_key": "9a92" + "00" * 30, "adv_name": "Cesura90 Repeater", "type": 2},
    {"public_key": "146c" + "11" * 30, "adv_name": "Mario phone", "type": 1},
    {"public_key": "146c" + "22" * 30, "adv_name": "Feltre Repeater", "type": 2},
]


def test_path_names_reply() -> None:
    names = contact_names(CONTACTS)
    entry = {"path_nodes": ["9a92", "86a8", "146c"]}
    assert path_names_reply("Alfa 10", entry, names) == [
        "@[Alfa 10] 3 hops\n9A92: Cesura90 Repeater\n86A8: Unknown\n146C: Feltre Repeater"]
    assert path_names_reply("X", {"path_nodes": []}, names) == ["@[X] direct (0 hops)"]
    assert path_names_reply("X", None, names) == ["@[X] direct (0 hops)"]


def test_long_path_is_numbered() -> None:
    names = contact_names(CONTACTS)
    hops = [f"{i:02x}{i:02x}" for i in range(20)]
    parts = path_names_reply("Alfa 10", {"path_nodes": hops}, names)
    assert len(parts) > 1
    assert all(len(p.encode("utf-8")) <= MAX_MESSAGE_BYTES for p in parts)
    assert [p.split("\n")[0] for p in parts] == [f"{i}/{len(parts)}" for i in range(1, len(parts) + 1)]
    body = [line for p in parts for line in p.split("\n")[1:]]
    assert body[0] == "@[Alfa 10] 20 hops" and body[-1] == "1313: Unknown" and len(body) == 21


async def test_path_action_names_the_hops(hass: HomeAssistant, bot: ChannelBot) -> None:
    hass.data[MESHCORE_DOMAIN] = {"BASE": SimpleNamespace(
        pubkey="a77aae" + "00" * 29, name="Base", get_all_contacts=lambda: CONTACTS)}
    bot.set_config({**bot.config, "channels": {"3": {"name": "#path", "rules": [
        {"trigger": "path", "match": "exact", "action": "path_names"}]}}})
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_channel_message")
    await bot.async_handle_event(_msg("path"))
    assert calls[0].data["message"] == (
        "@[Alfa 10] 3 hops\n9A92: Cesura90 Repeater\n86A8: Unknown\n146C: Feltre Repeater")
    assert calls[0].data["entry_id"] == "BASE"


async def test_bot_radio_choice_is_strict(hass: HomeAssistant, bot: ChannelBot) -> None:
    hass.data[MESHCORE_DOMAIN] = {
        "PHONE": SimpleNamespace(pubkey="1d71d9" + "00" * 29, name="Galileo"),
        "BASE": SimpleNamespace(pubkey="a77aae" + "00" * 29, name="Base"),
    }
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_channel_message")
    bot.set_config({**bot.config, "cooldown": 0, "radio_entry_id": "BASE"})

    def on(radio: str) -> SimpleNamespace:
        return _msg("path", entity_id=f"binary_sensor.meshcore_{radio}_ch_3_messages")

    await bot.async_handle_event(on("1d71d9"))  # heard by the other radio: ignored
    assert calls == []
    await bot.async_handle_event(on("a77aae"))
    assert calls[0].data["entry_id"] == "BASE"
    # Chosen radio disconnected: the bot pauses instead of moving to Galileo.
    del hass.data[MESHCORE_DOMAIN]["BASE"]
    await bot.async_handle_event(on("1d71d9"))
    assert len(calls) == 1


async def test_radio_choice_is_saved(hass: HomeAssistant, bot: ChannelBot) -> None:
    bot.set_config({**bot.config, "radio_entry_id": "BASE"})
    await bot.async_flush()
    fresh = ChannelBot(hass)
    await fresh.async_load()
    assert fresh.config["radio_entry_id"] == "BASE"
    fresh.set_config({**fresh.config, "radio_entry_id": ""})
    assert fresh.configured_radio() is None
