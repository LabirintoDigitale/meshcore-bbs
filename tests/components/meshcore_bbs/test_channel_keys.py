"""Channel history keyed by radio + channel identity (``channel_keys.py``).

Two companions with the same channels in different slots:

    slot   Galileo (1d71d9)   Base Galileo (a77aae)
    0      Public             Public
    1      #path              #test
    5      #test              #path

A message is stored under its receiving radio and the channel's identity,
so #test on Base Galileo (slot 1) and #test on Galileo (slot 5) each keep
their own history, and a channel keeps it when it moves to another slot.
"""
from __future__ import annotations

from types import SimpleNamespace

import pytest
from homeassistant.core import HomeAssistant
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.meshcore_bbs import MeshCoreBbsRuntimeData, _make_message_handler
from custom_components.meshcore_bbs.channel_keys import (
    async_migrate,
    channel_identity,
    conversation_key,
    stable_key,
)
from custom_components.meshcore_bbs.const import DOMAIN, MESHCORE_DOMAIN
from custom_components.meshcore_bbs.message_store import MessageStore
from custom_components.meshcore_bbs.unread_tracking import UnreadTracker

PUBLIC = bytes.fromhex("8b3387e9c5cdea6ac9e5edbaa115cd72")
TEST = bytes(range(16))
PATH = bytes(range(16, 32))


def _ch(idx: int, name: str, secret: bytes) -> dict:
    return {"channel_idx": idx, "channel_name": name, "channel_secret": secret}


def _radio(pubkey: str, name: str, slots: dict[int, tuple[str, bytes]]) -> SimpleNamespace:
    return SimpleNamespace(
        pubkey=pubkey, name=name,
        _channel_info={i: _ch(i, n, s) for i, (n, s) in slots.items()},
    )


GALILEO = _radio("1d71d9" + "00" * 29, "Galileo",
                 {0: ("Public", PUBLIC), 1: ("#path", PATH), 5: ("#test", TEST)})
BASE = _radio("a77aae" + "00" * 29, "Base Galileo",
              {0: ("Public", PUBLIC), 1: ("#test", TEST), 5: ("#path", PATH)})


def slot_id(radio6: str, slot: int) -> str:
    return f"binary_sensor.meshcore_{radio6}_ch_{slot}_messages"


def key(radio6: str, secret: bytes) -> str:
    return stable_key(radio6, channel_identity({"channel_secret": secret}))


@pytest.fixture
def radios(hass: HomeAssistant) -> None:
    hass.data[MESHCORE_DOMAIN] = {"GAL": GALILEO, "BASE": BASE}


@pytest.fixture
async def store(hass: HomeAssistant):
    entry = MockConfigEntry(domain=DOMAIN, title="MeshCore BBS", entry_id="01BBS", data={}, options={})
    entry.add_to_hass(hass)
    s = MessageStore(hass, entry)
    await s.async_load_index()
    entry.runtime_data = MeshCoreBbsRuntimeData(store=s)
    yield s
    await s.async_unload()


def test_identity_is_the_key_hash_else_the_name() -> None:
    assert channel_identity(_ch(1, "#test", TEST)) == channel_identity(_ch(5, "#test", TEST))
    assert channel_identity(_ch(1, "#test", TEST)) != channel_identity(_ch(1, "#path", PATH))
    assert channel_identity({"channel_name": "#Test Room"}) == "ntest-room"
    assert channel_identity({"channel_name": "(unused)"}) is None
    assert channel_identity({"channel_name": "", "channel_secret": bytes(16)}) is None
    assert channel_identity(None) is None


def test_same_channel_different_slots_resolves_per_radio(hass: HomeAssistant, radios) -> None:
    gal_test = conversation_key(hass, slot_id("1d71d9", 5), 5)
    base_test = conversation_key(hass, slot_id("a77aae", 1), 1)
    assert gal_test == key("1d71d9", TEST)
    assert base_test == key("a77aae", TEST)
    assert gal_test != base_test
    # Slot 1 is #path on Galileo but #test on Base Galileo
    assert conversation_key(hass, slot_id("1d71d9", 1), 1) == key("1d71d9", PATH)
    assert conversation_key(hass, slot_id("a77aae", 0), 0) == key("a77aae", PUBLIC)


def test_unknown_radio_slot_or_contact_is_left_alone(hass: HomeAssistant, radios) -> None:
    contact = "binary_sensor.meshcore_a77aae_d2e3ef_messages"
    assert conversation_key(hass, contact) == contact
    assert conversation_key(hass, slot_id("ffffff", 1), 1) == slot_id("ffffff", 1)
    assert conversation_key(hass, slot_id("a77aae", 7), 7) == slot_id("a77aae", 7)  # empty slot
    stable = key("a77aae", TEST)
    assert conversation_key(hass, stable) == stable


def _event(radio6: str, slot: int, channel: str, text: str, ts: str) -> SimpleNamespace:
    return SimpleNamespace(data={
        "entity_id": slot_id(radio6, slot), "channel_idx": slot, "channel": channel,
        "message_type": "channel", "sender_name": "Rusty Leaf", "message": text,
        "timestamp": ts, "outgoing": False,
    })


async def test_messages_land_in_the_right_channel_of_each_radio(
    hass: HomeAssistant, radios, store: MessageStore
) -> None:
    handler = _make_message_handler(hass, "01BBS")
    await handler(_event("a77aae", 1, "#test", "test da Base", "2026-10-02T10:00:00"))
    await handler(_event("1d71d9", 5, "#test", "test da Galileo", "2026-10-02T10:00:01"))
    await handler(_event("1d71d9", 1, "#path", "path da Galileo", "2026-10-02T10:00:02"))

    base_test = await store.get_messages(key("a77aae", TEST))
    gal_test = await store.get_messages(key("1d71d9", TEST))
    gal_path = await store.get_messages(key("1d71d9", PATH))
    assert [m["text"] for m in base_test] == ["test da Base"]
    assert [m["text"] for m in gal_test] == ["test da Galileo"]
    assert [m["text"] for m in gal_path] == ["path da Galileo"]
    # Nothing is stored by slot any more
    assert not any("_ch_" in k for k in store.get_message_index())


async def test_reordering_channels_keeps_their_history(
    hass: HomeAssistant, store: MessageStore
) -> None:
    radio = _radio("a77aae" + "00" * 29, "Base", {1: ("#path", PATH), 5: ("#test", TEST)})
    hass.data[MESHCORE_DOMAIN] = {"BASE": radio}
    handler = _make_message_handler(hass, "01BBS")
    await handler(_event("a77aae", 1, "#path", "vecchio path", "2026-10-01T09:00:00"))

    # Channels swapped on the radio: #test is now slot 1
    radio._channel_info = {1: _ch(1, "#test", TEST), 5: _ch(5, "#path", PATH)}
    await handler(_event("a77aae", 1, "#test", "nuovo test", "2026-10-02T09:00:00"))

    assert [m["text"] for m in await store.get_messages(key("a77aae", TEST))] == ["nuovo test"]
    assert [m["text"] for m in await store.get_messages(key("a77aae", PATH))] == ["vecchio path"]


async def _legacy(store: MessageStore, entity_id: str, msgs: list[tuple[str, str, str]]) -> None:
    for i, (channel, text, ts) in enumerate(msgs):
        rec = {"id": f"{entity_id[-14:]}{i}", "sender": "X", "text": text, "timestamp": ts,
               "message_type": "channel", "outgoing": False}
        if channel:
            rec["channel"] = channel
        await store.store_message(entity_id, rec)


async def test_migration_splits_slot_history_by_channel_name(
    hass: HomeAssistant, radios, store: MessageStore
) -> None:
    # Slot 1 on Base Galileo held #path before, #test now; one record has no name.
    await _legacy(store, slot_id("a77aae", 1), [
        ("#path", "vecchio path", "2026-09-20T10:00:00"),
        ("#test", "test recente", "2026-10-01T10:00:00"),
        ("", "senza nome", "2026-10-01T11:00:00"),
    ])
    await _legacy(store, slot_id("1d71d9", 5), [("#test", "test galileo", "2026-10-01T12:00:00")])
    await _legacy(store, slot_id("a77aae", 3), [("#vecchio", "canale rimosso", "2026-09-01T10:00:00")])
    contact = "binary_sensor.meshcore_a77aae_d2e3ef_messages"
    await store.store_message(contact, {"id": "dm1", "sender": "Y", "text": "dm", "timestamp": "2026-10-01"})

    tracker = UnreadTracker(hass, "01BBS")
    await tracker.async_load()
    tracker._last_read[slot_id("a77aae", 1)] = "_ch_1_messages1"

    moved = await async_migrate(hass, store, tracker)
    assert moved == 3

    texts = lambda msgs: [m["text"] for m in msgs]  # noqa: E731
    assert texts(await store.get_messages(key("a77aae", TEST))) == ["test recente", "senza nome"]
    assert texts(await store.get_messages(key("a77aae", PATH))) == ["vecchio path"]
    assert texts(await store.get_messages(key("1d71d9", TEST))) == ["test galileo"]
    assert texts(await store.get_messages(stable_key("a77aae", "nvecchio"))) == ["canale rimosso"]
    index = store.get_message_index()
    assert not any("_ch_" in k for k in index)
    assert contact in index  # contacts untouched
    # The cursor follows the message it points at (#test record)
    assert tracker.get_last_read(key("a77aae", TEST)) == "_ch_1_messages1"
    assert tracker.get_last_read(slot_id("a77aae", 1)) is None
    # Idempotent
    assert await async_migrate(hass, store, tracker) == 0
    await tracker._flush()


async def test_migration_merges_into_existing_history_and_waits_for_channels(
    hass: HomeAssistant, store: MessageStore
) -> None:
    radio = _radio("a77aae" + "00" * 29, "Base", {})
    hass.data[MESHCORE_DOMAIN] = {"BASE": radio}
    await _legacy(store, slot_id("a77aae", 1), [("#test", "vecchio", "2026-09-01T10:00:00")])

    # Channel table not loaded yet: nothing moves
    assert await async_migrate(hass, store, None) == 0
    assert slot_id("a77aae", 1) in store.get_message_index()

    radio._channel_info = {1: _ch(1, "#test", TEST)}
    await store.store_message(key("a77aae", TEST), {
        "id": "new1", "sender": "X", "text": "nuovo", "timestamp": "2026-10-02T10:00:00"})
    assert await async_migrate(hass, store, None) == 1
    assert [m["text"] for m in await store.get_messages(key("a77aae", TEST))] == ["vecchio", "nuovo"]
    assert store.get_message_index()[key("a77aae", TEST)]["message_count"] == 2


async def test_get_channels_sends_the_stable_key(hass: HomeAssistant) -> None:
    from custom_components.meshcore_bbs import ws_api

    from .test_ws_api import _call_ws, _Connection

    gal = _radio("1d71d9" + "00" * 29, "Galileo", {0: ("Public", PUBLIC), 5: ("#test", TEST)})
    base = _radio("a77aae" + "00" * 29, "Base Galileo", {0: ("Public", PUBLIC), 1: ("#test", TEST)})
    for coord, entry_id in ((gal, "GAL"), (base, "BASE")):
        coord.config_entry = SimpleNamespace(entry_id=entry_id)
        coord.max_channels = 8
        coord.api = SimpleNamespace(connected=True)
    hass.data[MESHCORE_DOMAIN] = {"GAL": gal, "BASE": base}

    async def channels(entry_id: str) -> dict:
        conn = _Connection()
        await _call_ws(ws_api.ws_get_channels, hass, conn, {"id": 1, "entry_id": entry_id})
        return {c["name"]: c for c in conn.results[0][1]["channels"]}

    gal_ch, base_ch = await channels("GAL"), await channels("BASE")
    assert gal_ch["#test"]["channel_idx"] == 5 and base_ch["#test"]["channel_idx"] == 1
    assert gal_ch["#test"]["conversation_id"] == key("1d71d9", TEST)
    assert base_ch["#test"]["conversation_id"] == key("a77aae", TEST)
    assert base_ch["Public"]["conversation_id"] == key("a77aae", PUBLIC)
