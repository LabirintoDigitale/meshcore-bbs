"""Sidebar panel registration: the admin-only option."""
from __future__ import annotations

from homeassistant.components.frontend import DATA_PANELS
from homeassistant.core import HomeAssistant
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.meshcore_bbs import _async_options_updated, panel
from custom_components.meshcore_bbs.const import DOMAIN, OPT_ADMIN_ONLY_PANEL


async def test_register_panel_admin_only(hass: HomeAssistant, monkeypatch) -> None:
    monkeypatch.setattr(panel, "_static_path_registered", True)

    await panel.async_register_panel(hass)
    assert hass.data[DATA_PANELS][panel.PANEL_URL_PATH].require_admin is False

    await panel.async_remove_panel(hass)
    await panel.async_register_panel(hass, admin_only=True)
    assert hass.data[DATA_PANELS][panel.PANEL_URL_PATH].require_admin is True


async def test_options_update_reregisters_panel(hass: HomeAssistant, monkeypatch) -> None:
    """Turning the option on hides the panel from non-admins without a restart."""
    monkeypatch.setattr(panel, "_static_path_registered", True)
    await panel.async_register_panel(hass)
    hass.data[DOMAIN] = {"_panel_registered": True, "_panel_admin_only": False}

    entry = MockConfigEntry(domain=DOMAIN, options={OPT_ADMIN_ONLY_PANEL: True})
    entry.add_to_hass(hass)
    entry.runtime_data = None  # no message store in this test
    await _async_options_updated(hass, entry)

    assert hass.data[DATA_PANELS][panel.PANEL_URL_PATH].require_admin is True
    assert hass.data[DOMAIN]["_panel_admin_only"] is True
