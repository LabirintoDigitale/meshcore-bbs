"""Panel preferences (Settings → Chat)."""
from __future__ import annotations

import pytest
from homeassistant.core import HomeAssistant

from custom_components.meshcore_bbs.const import DOMAIN
from custom_components.meshcore_bbs.panel_prefs import EVENT_PREFS_UPDATED, PanelPrefs


@pytest.fixture
async def prefs(hass: HomeAssistant) -> PanelPrefs:
    p = PanelPrefs(hass)
    await p.async_load()
    hass.data.setdefault(DOMAIN, {})["prefs"] = p
    return p


async def test_defaults_update_and_broadcast(hass: HomeAssistant, prefs: PanelPrefs) -> None:
    assert prefs.prefs == {"ignore_channel_unread": False}
    seen = []
    hass.bus.async_listen(EVENT_PREFS_UPDATED, lambda e: seen.append(dict(e.data)))
    assert prefs.update({"ignore_channel_unread": True}) == {"ignore_channel_unread": True}
    await hass.async_block_till_done()
    assert seen == [{"ignore_channel_unread": True}]
    with pytest.raises(ValueError):
        prefs.update({"nope": True})


async def test_persisted(hass: HomeAssistant, prefs: PanelPrefs, hass_storage) -> None:
    prefs.update({"ignore_channel_unread": True})
    await prefs._store.async_save(dict(prefs.prefs))
    again = PanelPrefs(hass)
    await again.async_load()
    assert again.prefs["ignore_channel_unread"] is True
