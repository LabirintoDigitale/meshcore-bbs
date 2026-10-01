"""Which companion radio a message belongs to, and which one runs BBS/Bot.

Several upstream meshcore config entries (one per companion radio) can be
connected at once. Automations (BBS, channel bot) run on a single radio —
``bbs_radio`` — and must only react to messages that radio received and
reply through it. The receiving radio is encoded in the message's entity
id: ``binary_sensor.meshcore_<first 6 hex of the radio's key>_…``.
"""
from __future__ import annotations

import re
from typing import Any

from homeassistant.core import HomeAssistant

from .const import MESHCORE_DOMAIN

_ENTITY_RADIO_RE = re.compile(r"\.meshcore_([0-9a-f]{6})_")


def radios(hass: HomeAssistant) -> list[dict[str, Any]]:
    """Connected upstream entries: [{entry_id, name, pubkey}] in setup order."""
    out = []
    for entry_id, coord in (hass.data.get(MESHCORE_DOMAIN) or {}).items():
        pub = getattr(coord, "pubkey", None)
        out.append({
            "entry_id": entry_id,
            "name": str(getattr(coord, "name", "") or entry_id),
            "pubkey": pub.lower() if isinstance(pub, str) else "",
        })
    return out


def radio_for_entity(hass: HomeAssistant, entity_id: Any) -> str | None:
    """Entry id of the radio a message entity belongs to, if recognisable."""
    m = _ENTITY_RADIO_RE.search(str(entity_id or "").lower())
    if not m:
        return None
    for r in radios(hass):
        if r["pubkey"].startswith(m.group(1)):
            return r["entry_id"]
    return None


def bbs_radio(hass: HomeAssistant, configured: str | None) -> str | None:
    """The radio automations run on: the configured one if connected, else the first."""
    known = radios(hass)
    if configured and any(r["entry_id"] == configured for r in known):
        return configured
    return known[0]["entry_id"] if known else None


def handles_message(
    hass: HomeAssistant, configured: str | None, data: dict[str, Any]
) -> tuple[bool, str | None]:
    """(handle?, entry id to reply through) for an incoming message.

    Only messages received by the automation radio are handled. When the
    receiving radio can't be told from the entity id, the message is
    handled only if at most one radio is connected (single-radio setups
    behave as before); the reply then goes through that radio, or through
    upstream's default when none is known.
    """
    known = radios(hass)
    radio = bbs_radio(hass, configured)
    receiving = radio_for_entity(hass, data.get("entity_id"))
    if receiving is None:
        return (len(known) <= 1, radio)
    return (receiving == radio, radio)
