"""Panel preferences shared by every browser and the companion app.

Today one flag: ``ignore_channel_unread`` — channels show no unread
count and open at the newest message. Stored server-side so the choice
follows the user to every device; a change is broadcast so open panels
update without a reload.
"""
from __future__ import annotations

from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.storage import Store

from .const import DOMAIN, STORAGE_VERSION

STORAGE_KEY_PREFS = "meshcore_bbs.prefs"
EVENT_PREFS_UPDATED = "meshcore_bbs_prefs_updated"
DEFAULT_PREFS: dict[str, Any] = {"ignore_channel_unread": False}


class PanelPrefs:
    """Small persisted dict of panel-wide preferences."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._store: Store = Store(hass, STORAGE_VERSION, STORAGE_KEY_PREFS)
        self.prefs: dict[str, Any] = dict(DEFAULT_PREFS)

    async def async_load(self) -> None:
        data = await self._store.async_load()
        if isinstance(data, dict):
            self.prefs.update({k: bool(data[k]) for k in DEFAULT_PREFS if k in data})

    def update(self, changes: dict[str, Any]) -> dict[str, Any]:
        unknown = set(changes) - set(DEFAULT_PREFS)
        if unknown:
            raise ValueError(f"Unknown preference: {', '.join(sorted(unknown))}")
        self.prefs.update({k: bool(v) for k, v in changes.items()})
        self._store.async_delay_save(lambda: dict(self.prefs), 1)
        self.hass.bus.async_fire(EVENT_PREFS_UPDATED, dict(self.prefs))
        return dict(self.prefs)


def _prefs(hass: HomeAssistant) -> PanelPrefs | None:
    return hass.data.get(DOMAIN, {}).get("prefs")


@callback
def async_register_prefs_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_prefs_get)
    websocket_api.async_register_command(hass, ws_prefs_set)


@websocket_api.websocket_command({vol.Required("type"): "meshcore_bbs/prefs_get"})
@callback
def ws_prefs_get(hass, connection, msg):
    prefs = _prefs(hass)
    connection.send_result(msg["id"], dict(prefs.prefs) if prefs else dict(DEFAULT_PREFS))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/prefs_set",
        vol.Required("prefs"): dict,
    }
)
@websocket_api.require_admin
@callback
def ws_prefs_set(hass, connection, msg):
    prefs = _prefs(hass)
    if prefs is None:
        connection.send_error(msg["id"], "not_ready", "Preferences not loaded")
        return
    try:
        result = prefs.update(msg["prefs"])
    except ValueError as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
        return
    connection.send_result(msg["id"], result)
