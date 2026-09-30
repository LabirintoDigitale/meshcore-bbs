"""Tests for the built-in BBS (``bbs.py`` + ``bbs_ws.py``)."""
from __future__ import annotations

from types import SimpleNamespace
from typing import Any

import pytest
from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import async_mock_service

from custom_components.meshcore_bbs.bbs import (
    Bbs,
    clean_pubkey,
    dump_to_bbs_data,
    parse_mysql_dump,
    validate_menus,
)
from custom_components.meshcore_bbs.bbs_ws import async_register_bbs_commands
from custom_components.meshcore_bbs.const import (
    DOMAIN,
    EVENT_BBS_REQUEST,
    EVENT_BBS_UPDATED,
    MESHCORE_DOMAIN,
)

ADMIN = "aaaaaa000001"
USER = "bbbbbb000002"
STRANGER = "cccccc000003"
OWN = "ffffff000009"

# HeidiSQL-style dump with made-up data, same shape as a MeshBBS 1.4 export.
SAMPLE_DUMP = r"""
-- Dump della struttura del database BBS
CREATE DATABASE IF NOT EXISTS `BBS`;
USE `BBS`;
CREATE TABLE IF NOT EXISTS `bbs_menus` (`id` int unsigned NOT NULL, PRIMARY KEY (`id`));
/*!40000 ALTER TABLE `bbs_menus` DISABLE KEYS */;
INSERT INTO `bbs_menus` (`id`, `name`, `active`, `config`) VALUES
	(1, 'Principale', 1, '{"title": "BBS Test", "options": [{"key": "1", "type": "action", "label": "Bacheca", "action": "board"}, {"key": "2", "type": "action", "label": "Scrivi", "action": "write"}, {"key": "3", "menu": 2, "type": "menu", "label": "Info"}, {"key": "0", "type": "action", "label": "Esci", "action": "exit"}], "welcome": "Ciao {name}!"}'),
	(2, 'Info', 1, '{"title": "Info", "options": [{"key": "2", "text": "{bbs}\\nUtenti: {users}\\nPost: {posts}", "type": "text", "label": "Stato"}, {"key": "3", "text": "L''admin e\' Alice.", "type": "text", "label": "Contatti"}, {"key": "9", "menu": 1, "type": "menu", "label": "Indietro"}]}');
INSERT INTO `bbs_meta` (`k`, `v`) VALUES ('schema', '2'), ('version', '1.3.0');
INSERT INTO `bbs_posts` (`id`, `author`, `body`, `created`) VALUES
	(7, 'Alice', 'Prima prova, ciao', 1790597859);
INSERT INTO `bbs_sessions` (`pubkey`, `state`, `updated`) VALUES
	('aaaaaa000001', 'menu:1', 1790622504);
INSERT INTO `bbs_users` (`pubkey`, `name`, `active`, `created`, `is_admin`) VALUES
	('aaaaaa000001', 'Alice', 1, 1790596366, 1),
	('bbbbbb000002', 'Bob', 1, 1790626302, 0),
	('dddddd000004', 'Dave', 0, 1790626397, 0);
"""


@pytest.fixture
async def bbs(hass: HomeAssistant) -> Bbs:
    b = Bbs(hass)
    await b.async_load()
    b.import_data(dump_to_bbs_data(SAMPLE_DUMP))
    b.update_settings({"enabled": True, "name": "BBS Test"})
    b.reply_delay = 0
    hass.data.setdefault(DOMAIN, {})["bbs"] = b
    return b


# ─── dump import ────────────────────────────────────────────────────────


def test_parse_dump_reads_all_tables() -> None:
    tables = parse_mysql_dump(SAMPLE_DUMP)
    assert len(tables["bbs_users"]) == 3
    assert tables["bbs_posts"][0]["body"] == "Prima prova, ciao"
    assert "bbs_sessions" in tables


def test_dump_to_bbs_data_converts_shapes() -> None:
    data = dump_to_bbs_data(SAMPLE_DUMP)
    assert set(data) == {"users", "posts", "menus"}
    assert data["users"][ADMIN] == {
        "name": "Alice", "active": True, "is_admin": True, "created": 1790596366,
    }
    assert data["users"]["dddddd000004"]["active"] is False
    info = data["menus"]["2"]["config"]["options"]
    assert info[0]["text"] == "{bbs}\nUtenti: {users}\nPost: {posts}"
    assert info[1]["text"] == "L'admin e' Alice."
    assert validate_menus(data["menus"], 1) == []


def test_dump_without_bbs_tables_is_rejected() -> None:
    with pytest.raises(ValueError):
        dump_to_bbs_data("INSERT INTO `other` (`a`) VALUES (1);")


# ─── menus ──────────────────────────────────────────────────────────────


def test_validate_menus_reports_problems() -> None:
    menus = {
        "1": {"name": "M", "active": True, "config": {"options": [
            {"key": "1", "type": "menu", "menu": 5},
            {"key": "1", "type": "action", "action": "fly"},
            {"key": "m", "type": "text", "text": "x"},
            {"key": "2", "type": "text"},
        ]}},
    }
    errors = validate_menus(menus, 3)
    assert any("menu 5" in e for e in errors)
    assert any("duplicate" in e for e in errors)
    assert any("reserved" in e for e in errors)
    assert any("no text" in e for e in errors)
    assert any("Main menu" in e for e in errors)


async def test_set_menus_rejects_invalid_and_keeps_old(bbs: Bbs) -> None:
    before = bbs.data["menus"]
    errors = bbs.set_menus({"1": {"name": "x", "config": {"options": "nope"}}})
    assert errors
    assert bbs.data["menus"] is before


# ─── menu navigation ────────────────────────────────────────────────────


async def test_unknown_contact_gets_denied_reply_once(bbs: Bbs) -> None:
    replies, authorized = bbs.process(STRANGER, "Carl", "ciao")
    assert authorized is False
    assert replies == ["Risposta automatica, messaggio ricevuto."]
    # Rate-limited within denied_every
    assert bbs.process(STRANGER, "Carl", "ancora") == ([], False)
    req = bbs.data["requests"][STRANGER]
    assert req["hits"] == 2 and req["last_text"] == "ancora" and req["name"] == "Carl"


async def test_inactive_user_is_treated_as_unknown(bbs: Bbs) -> None:
    _, authorized = bbs.process("dddddd000004", "Dave", "1")
    assert authorized is False


async def test_menu_flow(bbs: Bbs) -> None:
    replies, authorized = bbs.process(USER, "Bob", "hello")
    assert authorized
    assert replies[0] == "Ciao Bob!"
    assert replies[1].startswith("BBS Test\n1 Bacheca")

    replies, _ = bbs.process(USER, "Bob", "1")
    assert replies[0].startswith("#7 Alice")
    assert replies[-1] == "M = menu"

    replies, _ = bbs.process(USER, "Bob", "3")
    assert replies[0].startswith("Info\n2 Stato")
    replies, _ = bbs.process(USER, "Bob", "2")
    assert replies[0] == "BBS Test\nUtenti: 2\nPost: 1\n(M = menu)"
    replies, _ = bbs.process(USER, "Bob", "9")
    assert replies[0].startswith("BBS Test")

    replies, _ = bbs.process(USER, "Bob", "x")
    assert replies[0] == "Scelta non valida."

    replies, _ = bbs.process(USER, "Bob", "0")
    assert replies == ["Ciao Bob, a presto!"]
    # Session ended: next message restarts from the welcome
    replies, _ = bbs.process(USER, "Bob", "1")
    assert replies[0] == "Ciao Bob!"


async def test_write_post_and_cancel(bbs: Bbs) -> None:
    bbs.process(USER, "Bob", "hi")
    assert bbs.process(USER, "Bob", "2")[0] == ["Scrivi il messaggio (0 = annulla):"]
    replies, _ = bbs.process(USER, "Bob", "Nuovo messaggio")
    assert replies[0] == "Messaggio pubblicato."
    assert bbs.data["posts"][-1]["author"] == "Bob"
    assert bbs.data["posts"][-1]["id"] == 8

    bbs.process(USER, "Bob", "2")
    assert bbs.process(USER, "Bob", "0")[0][0] == "Annullato."
    assert len(bbs.data["posts"]) == 2


async def test_long_replies_are_split(bbs: Bbs) -> None:
    bbs.update_settings({"max_len": 20})
    parts = bbs.split(["x" * 45, "short"])
    assert parts == ["x" * 20, "x" * 20, "x" * 5, "short"]


# ─── admin commands ─────────────────────────────────────────────────────


async def test_admin_commands(bbs: Bbs) -> None:
    help_msgs, _ = bbs.process(ADMIN, "Alice", "!help")
    assert help_msgs[0].startswith("Admin 1/2")

    # Non-admins can't use ! commands: they fall through to the menu
    replies, _ = bbs.process(USER, "Bob", "!utenti")
    assert "Admin" not in replies[0]

    replies, _ = bbs.process(ADMIN, "Alice", "!utenti")
    assert replies[0].startswith("Utenti (1/1)")
    assert "Alice aaaaaa000001 [A]" in replies[0]
    assert "Dave dddddd000004 [off]" in replies[0]

    bbs.process(STRANGER, "Carl", "ciao")
    replies, _ = bbs.process(ADMIN, "Alice", "!richieste")
    assert "cccccc000003 Carl 1x" in replies[0]
    replies, _ = bbs.process(ADMIN, "Alice", "!ok cccccc")
    assert replies == ["Aggiunto: Carl (cccccc000003)"]
    assert STRANGER not in bbs.data["requests"]
    assert bbs.find_user(STRANGER) is not None

    assert bbs.process(ADMIN, "Alice", "!admin bob si")[0] == ["Bob ora è admin."]
    assert bbs.process(ADMIN, "Alice", "!off Bob")[0] == ["Bob disattivato."]
    assert bbs.process(ADMIN, "Alice", "!del aaaaaa")[0] == ["Non puoi rimuovere te stesso."]
    assert bbs.process(ADMIN, "Alice", "!del Carl")[0] == ["Rimosso: Carl"]
    assert bbs.process(ADMIN, "Alice", "!add 0123456789ab Eve")[0] == ["Aggiunto: Eve (0123456789ab)"]
    assert bbs.process(ADMIN, "Alice", "!delpost 7")[0] == ["Post #7 eliminato."]
    assert bbs.process(ADMIN, "Alice", "!delpost 7")[0] == ["Post #7 non trovato."]
    assert bbs.process(ADMIN, "Alice", "!boh")[0] == ["Comando sconosciuto. !help per l'elenco."]


async def test_admin_list_is_paginated(bbs: Bbs) -> None:
    for i in range(7):
        bbs.add_user(f"0000000000{i:02d}", f"U{i}")
    replies, _ = bbs.process(ADMIN, "Alice", "!utenti")
    assert replies[0].startswith("Utenti (1/2)")
    assert replies[0].endswith("Altri: !utenti 2")


# ─── event handling ─────────────────────────────────────────────────────


def _event(**data: Any) -> SimpleNamespace:
    return SimpleNamespace(data=data)


async def test_event_replies_via_meshcore_send_message(hass: HomeAssistant, bbs: Bbs) -> None:
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_message")
    await bbs.async_handle_event(_event(pubkey_prefix=USER, sender_name="Bob", text="hi"))
    await hass.async_block_till_done()
    assert [c.data["message"] for c in calls][0] == "Ciao Bob!"
    assert all(c.data["pubkey_prefix"] == USER for c in calls)
    assert len(calls) == 2


async def test_event_ignored_when_disabled_channel_outgoing_or_own(
    hass: HomeAssistant, bbs: Bbs
) -> None:
    calls = async_mock_service(hass, MESHCORE_DOMAIN, "send_message")
    hass.data[MESHCORE_DOMAIN] = {"e1": SimpleNamespace(pubkey=OWN + "00" * 26)}
    await bbs.async_handle_event(_event(pubkey_prefix=USER, text="hi", channel_idx=0))
    await bbs.async_handle_event(_event(pubkey_prefix=USER, text="hi", message_type="channel"))
    await bbs.async_handle_event(_event(pubkey_prefix=USER, text="hi", outgoing=True))
    await bbs.async_handle_event(_event(pubkey_prefix=OWN, text="hi"))
    bbs.update_settings({"enabled": False})
    await bbs.async_handle_event(_event(pubkey_prefix=USER, text="hi"))
    await hass.async_block_till_done()
    assert calls == []


async def test_unknown_sender_fires_event_and_notifies(hass: HomeAssistant, bbs: Bbs) -> None:
    async_mock_service(hass, MESHCORE_DOMAIN, "send_message")
    notified = async_mock_service(hass, "notify", "my_phone")
    bbs.update_settings({"notify_service": "notify.my_phone"})
    requests: list = []
    hass.bus.async_listen(EVENT_BBS_REQUEST, requests.append)
    await bbs.async_handle_event(_event(pubkey_prefix=STRANGER, sender_name="Carl", text="yo"))
    await hass.async_block_till_done()
    assert requests[0].data == {"pubkey": STRANGER, "name": "Carl", "text": "yo"}
    assert notified[0].data == {"title": "Carl", "message": "yo"}


async def test_invalid_notify_service_rejected(bbs: Bbs) -> None:
    with pytest.raises(ValueError):
        bbs.update_settings({"notify_service": "light.kitchen"})


# ─── persistence ────────────────────────────────────────────────────────


async def test_data_persists_across_reload(hass: HomeAssistant, bbs: Bbs) -> None:
    bbs.add_user("0123456789ab", "Eve")
    await bbs.async_flush()
    fresh = Bbs(hass)
    await fresh.async_load()
    assert fresh.find_user("0123456789ab")[1]["name"] == "Eve"
    assert fresh.settings["enabled"] is True
    assert fresh.data["menus"]["1"]["config"]["title"] == "BBS Test"


async def test_new_store_starts_disabled_with_default_menus(hass: HomeAssistant) -> None:
    b = Bbs(hass)
    await b.async_load()
    assert b.settings["enabled"] is False
    assert validate_menus(b.data["menus"], b.settings["main_menu"]) == []


async def test_snapshot_reports_integration_version(bbs: Bbs) -> None:
    bbs.version = "9.9.9"
    assert bbs.snapshot()["version"] == "9.9.9"


def test_clean_pubkey() -> None:
    assert clean_pubkey(" AB:cd-12 ") == "abcd12"


# ─── WebSocket API ──────────────────────────────────────────────────────


@pytest.fixture
async def ws_client(hass: HomeAssistant, hass_ws_client, bbs: Bbs):
    assert await async_setup_component(hass, "websocket_api", {})
    async_register_bbs_commands(hass)
    return await hass_ws_client(hass)


async def _ws(client, **msg) -> dict:
    await client.send_json_auto_id(msg)
    return await client.receive_json()


async def test_ws_get_and_user_ops(hass: HomeAssistant, ws_client, bbs: Bbs) -> None:
    updates: list = []
    hass.bus.async_listen(EVENT_BBS_UPDATED, updates.append)

    res = await _ws(ws_client, type="meshcore_bbs/bbs_get")
    assert res["success"]
    assert [u["name"] for u in res["result"]["users"]] == ["Alice", "Bob", "Dave"]

    res = await _ws(ws_client, type="meshcore_bbs/bbs_user", op="add", pubkey="0123456789AB", name="Eve")
    assert res["success"] and bbs.find_user("0123456789ab")
    res = await _ws(ws_client, type="meshcore_bbs/bbs_user", op="admin", pubkey="0123456789ab")
    assert bbs.data["users"]["0123456789ab"]["is_admin"] is True
    res = await _ws(ws_client, type="meshcore_bbs/bbs_user", op="off", pubkey="0123456789ab")
    assert bbs.data["users"]["0123456789ab"]["active"] is False
    res = await _ws(ws_client, type="meshcore_bbs/bbs_user", op="del", pubkey="0123456789ab")
    assert "0123456789ab" not in bbs.data["users"]
    res = await _ws(ws_client, type="meshcore_bbs/bbs_user", op="del", pubkey="0123456789ab")
    assert res["error"]["code"] == "not_found"
    await hass.async_block_till_done()
    assert len(updates) >= 4


async def test_ws_requests_settings_posts(ws_client, bbs: Bbs) -> None:
    bbs.process(STRANGER, "Carl", "ciao")
    res = await _ws(ws_client, type="meshcore_bbs/bbs_request", op="approve", pubkey=STRANGER)
    assert res["success"] and bbs.find_user(STRANGER)[1]["name"] == "Carl"

    res = await _ws(ws_client, type="meshcore_bbs/bbs_settings", settings={"max_len": 9999, "name": "X"})
    assert res["result"]["settings"]["max_len"] == 200
    res = await _ws(ws_client, type="meshcore_bbs/bbs_settings", settings={"notify_service": "bad"})
    assert res["error"]["code"] == "invalid_format"

    res = await _ws(ws_client, type="meshcore_bbs/bbs_delete_post", post_id=7)
    assert res["success"] and bbs.data["posts"] == []


async def test_ws_menus_validation(ws_client, bbs: Bbs) -> None:
    menus = [
        {"id": 1, "name": "Main", "config": {"title": "T", "options": [
            {"key": "1", "label": "Sub", "type": "menu", "menu": 3}]}},
    ]
    res = await _ws(ws_client, type="meshcore_bbs/bbs_menus", menus=menus)
    assert res["result"]["errors"]
    menus.append({"id": 3, "name": "Sub", "config": {"options": [
        {"key": "9", "label": "Back", "type": "menu", "menu": 1}]}})
    res = await _ws(ws_client, type="meshcore_bbs/bbs_menus", menus=menus, dry_run=True)
    assert res["result"]["errors"] == [] and "3" not in bbs.data["menus"]
    res = await _ws(ws_client, type="meshcore_bbs/bbs_menus", menus=menus)
    assert res["result"]["errors"] == [] and set(bbs.data["menus"]) == {"1", "3"}


async def test_ws_import_dry_run_then_apply(ws_client, bbs: Bbs) -> None:
    bbs.import_data({"users": {}, "posts": [], "menus": {}})
    res = await _ws(ws_client, type="meshcore_bbs/bbs_import", sql=SAMPLE_DUMP)
    assert res["result"]["summary"] == {"users": 3, "posts": 1, "menus": 2, "menu_errors": []}
    assert res["result"]["imported"] is False and bbs.data["users"] == {}
    res = await _ws(ws_client, type="meshcore_bbs/bbs_import", sql=SAMPLE_DUMP, dry_run=False)
    assert res["result"]["imported"] is True
    assert len(bbs.data["users"]) == 3 and bbs.data["next_post_id"] == 8
    res = await _ws(ws_client, type="meshcore_bbs/bbs_import", sql="garbage")
    assert res["error"]["code"] == "invalid_format"


async def test_ws_mutations_require_admin(
    hass: HomeAssistant, hass_ws_client, hass_read_only_access_token, bbs: Bbs
) -> None:
    assert await async_setup_component(hass, "websocket_api", {})
    async_register_bbs_commands(hass)
    client = await hass_ws_client(hass, hass_read_only_access_token)
    res = await _ws(client, type="meshcore_bbs/bbs_get")
    assert res["success"]
    res = await _ws(client, type="meshcore_bbs/bbs_user", op="add", pubkey="0123456789ab")
    assert res["error"]["code"] == "unauthorized"
