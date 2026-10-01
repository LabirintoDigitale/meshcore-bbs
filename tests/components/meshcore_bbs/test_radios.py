"""BBS and Bot with two companion radios (``radios.py``)."""
from __future__ import annotations

from types import SimpleNamespace

import pytest
from homeassistant.core import HomeAssistant
from pytest_homeassistant_custom_component.common import async_mock_service

from custom_components.meshcore_bbs.bbs import Bbs, dump_to_bbs_data
from custom_components.meshcore_bbs.bot import ChannelBot
from custom_components.meshcore_bbs.const import DOMAIN, MESHCORE_DOMAIN
from custom_components.meshcore_bbs.radios import bbs_radio, handles_message, radio_for_entity

from .test_bbs import SAMPLE_DUMP, USER

BASE = SimpleNamespace(pubkey="a77aae" + "11" * 29, name="Base Galileo")
PHONE = SimpleNamespace(pubkey="1d71d9" + "22" * 29, name="Galileo")


@pytest.fixture
def two_radios(hass: HomeAssistant) -> None:
    hass.data[MESHCORE_DOMAIN] = {"BASE": BASE, "PHONE": PHONE}


def test_radio_for_entity(hass: HomeAssistant, two_radios) -> None:
    assert radio_for_entity(hass, "binary_sensor.meshcore_a77aae_bbbbbb000002_messages") == "BASE"
    assert radio_for_entity(hass, "binary_sensor.meshcore_1d71d9_ch_1_messages") == "PHONE"
    assert radio_for_entity(hass, "binary_sensor.meshcore_ffffff_ch_1_messages") is None
    assert radio_for_entity(hass, None) is None


def test_bbs_radio_defaults_to_first(hass: HomeAssistant, two_radios) -> None:
    assert bbs_radio(hass, None) == "BASE"
    assert bbs_radio(hass, "PHONE") == "PHONE"
    assert bbs_radio(hass, "GONE") == "BASE"


def test_handles_message(hass: HomeAssistant, two_radios) -> None:
    base_msg = {"entity_id": "binary_sensor.meshcore_a77aae_x_messages"}
    phone_msg = {"entity_id": "binary_sensor.meshcore_1d71d9_x_messages"}
    assert handles_message(hass, None, base_msg) == (True, "BASE")
    assert handles_message(hass, None, phone_msg) == (False, "BASE")
    assert handles_message(hass, "PHONE", phone_msg) == (True, "PHONE")
    # Unknown radio with two radios connected: not handled
    assert handles_message(hass, None, {})[0] is False


@pytest.fixture
async def bbs(hass: HomeAssistant, two_radios) -> Bbs:
    b = Bbs(hass)
    await b.async_load()
    b.import_data(dump_to_bbs_data(SAMPLE_DUMP))
    b.update_settings({"enabled": True})
    b.reply_delay = 0
    hass.data.setdefault(DOMAIN, {})["bbs"] = b
    return b


async def test_bbs_answers_only_on_its_radio_and_through_it(hass: HomeAssistant, bbs: Bbs) -> None:
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_message")
    await bbs.async_handle_event(SimpleNamespace(data={
        "pubkey_prefix": USER, "text": "hi", "entity_id": "binary_sensor.meshcore_1d71d9_bbbbbb000002_messages"}))
    await hass.async_block_till_done()
    assert calls == []  # received by the second radio: no BBS

    await bbs.async_handle_event(SimpleNamespace(data={
        "pubkey_prefix": USER, "text": "hi", "entity_id": "binary_sensor.meshcore_a77aae_bbbbbb000002_messages"}))
    await hass.async_block_till_done()
    assert calls and all(c.data["entry_id"] == "BASE" for c in calls)


async def test_dm_from_the_other_radio_gets_the_bbs(hass: HomeAssistant, bbs: Bbs) -> None:
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_message")
    bbs.add_user("1d71d9222222", "Galileo")
    await bbs.async_handle_event(SimpleNamespace(data={
        "pubkey_prefix": "1d71d9222222", "sender_name": "Galileo", "text": "hi",
        "entity_id": "binary_sensor.meshcore_a77aae_1d71d9222222_messages"}))
    await hass.async_block_till_done()
    assert calls[0].data["message"] == "Ciao Galileo!"


async def test_snapshot_lists_radios(hass: HomeAssistant, bbs: Bbs) -> None:
    snap = bbs.snapshot()
    assert snap["radio_entry_id"] == "BASE"
    assert snap["radios"] == [{"entry_id": "BASE", "name": "Base Galileo"}, {"entry_id": "PHONE", "name": "Galileo"}]


async def test_bot_follows_the_bbs_radio(hass: HomeAssistant, bbs: Bbs) -> None:
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_channel_message")
    bot = ChannelBot(hass)
    await bot.async_load()
    bot.set_config({"enabled": True, "cooldown": 0, "channels": {"1": {"name": "#test", "rules": [
        {"trigger": "test", "match": "exact", "action": "route_reply"}]}}})

    def msg(radio: str) -> SimpleNamespace:
        return SimpleNamespace(data={"message_type": "channel", "channel_idx": 1, "sender_name": "X",
                                     "message": "test", "entity_id": f"binary_sensor.meshcore_{radio}_ch_1_messages"})

    await bot.async_handle_event(msg("1d71d9"))
    assert calls == []
    await bot.async_handle_event(msg("a77aae"))
    assert calls[0].data["entry_id"] == "BASE"

    bbs.update_settings({"radio_entry_id": "PHONE"})
    await bot.async_handle_event(msg("1d71d9"))
    assert calls[-1].data["entry_id"] == "PHONE"
