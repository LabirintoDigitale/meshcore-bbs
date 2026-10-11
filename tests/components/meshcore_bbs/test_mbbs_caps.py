"""Detection of repeaters running the MBBS firmware (isMBBS -> true)."""
from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock

import pytest
from homeassistant.core import HomeAssistant

from custom_components.meshcore_bbs.const import EVENT_MESHCORE_MESSAGE
from custom_components.meshcore_bbs import mbbs_caps as mod
from custom_components.meshcore_bbs.mbbs_caps import MbbsCaps, async_command_reply, is_mbbs_reply


def test_reply_parsing() -> None:
    assert is_mbbs_reply("true")
    assert is_mbbs_reply("  > TRUE\n")
    assert not is_mbbs_reply("Unknown command")
    assert not is_mbbs_reply("??: isMBBS")
    assert not is_mbbs_reply("")


async def test_prefix_matching_and_persistence(hass: HomeAssistant, hass_storage) -> None:
    caps = MbbsCaps(hass)
    await caps.async_load()
    assert caps.get("a040555be054") is None
    caps.set("A040555BE054", True)
    assert caps.get("a040555b") is True             # shorter prefix of the same node
    assert caps.get("a040555be05491b5") is True     # longer prefix too
    caps.set("a040555b", False)                     # replaces, does not duplicate
    assert caps._caps == {"a040555b": False}
    await caps._store.async_save(dict(caps._caps))
    again = MbbsCaps(hass)
    await again.async_load()
    assert again.get("a040555be054") is False


def _fire_dm(hass: HomeAssistant, prefix: str, text: str, **extra) -> None:
    hass.bus.async_fire(EVENT_MESHCORE_MESSAGE, {"pubkey_prefix": prefix, "message": text, **extra})


async def test_command_reply_waits_for_the_device(hass: HomeAssistant) -> None:
    async def send():
        _fire_dm(hass, "ffff00000000", "not me")
        _fire_dm(hass, "a040555be054", "echo", outgoing=True)
        _fire_dm(hass, "a040555be054", "channel", channel_idx=0)
        _fire_dm(hass, "a040555be054", "true")

    assert await async_command_reply(hass, "a040555b", send, timeout=2) == "true"


async def test_command_reply_timeout(hass: HomeAssistant) -> None:
    assert await async_command_reply(hass, "a040555b", AsyncMock(), timeout=0.05) is None


async def test_probe_stores_the_answer(hass: HomeAssistant, monkeypatch) -> None:
    caps = MbbsCaps(hass)
    await caps.async_load()

    async def fake_reply(hass_, prefix, send, timeout=30):
        await send()
        return "true" if prefix == "aaaa" else "Unknown command"

    sent = AsyncMock(return_value="Command sent")
    monkeypatch.setattr(mod, "async_command_reply", fake_reply)
    monkeypatch.setattr(
        "custom_components.meshcore_bbs.ws_api.async_send_remote_command", sent
    )
    coordinator = MagicMock()
    assert await caps.async_probe(coordinator, "aaaa") is True
    assert await caps.async_probe(coordinator, "bbbb") is False
    sent.assert_any_await(coordinator, "aaaa", "isMBBS")
    assert caps.get("aaaa") is True and caps.get("bbbb") is False


async def test_probe_without_answer_keeps_old_value(hass: HomeAssistant, monkeypatch) -> None:
    caps = MbbsCaps(hass)
    await caps.async_load()
    caps.set("aaaa", True)

    async def silent(hass_, prefix, send, timeout=30):
        return None

    monkeypatch.setattr(mod, "async_command_reply", silent)
    assert await caps.async_probe(MagicMock(), "aaaa") is None
    assert caps.get("aaaa") is True


async def test_answered_repeaters_are_not_asked_again(hass: HomeAssistant, monkeypatch) -> None:
    caps = MbbsCaps(hass)
    await caps.async_load()

    async def reply(hass_, prefix, send, timeout=30):
        return "true" if prefix.lower() == "aaaa" else None

    monkeypatch.setattr(mod, "async_command_reply", reply)
    await caps.async_probe(MagicMock(), "AAAA")
    await caps.async_probe(MagicMock(), "bbbb")
    assert caps._answered == {"aaaa"}   # bbbb stays pending for the retry rounds
