"""Stable conversation keys for channel messages.

Upstream identifies a channel conversation by the radio and the channel's
*slot* on that radio: ``binary_sensor.meshcore_<radio6>_ch_<slot>_messages``.
Slots are local to each companion: the same channel can sit in slot 5 on
one radio and slot 1 on another, and recreating or reordering channels on
a radio moves a channel to a different slot. Keying the stored history by
slot therefore showed old messages of one channel in another (the slot's
previous occupant) after a reorder.

Stored channel history is keyed by the radio and the channel's identity
instead::

    binary_sensor.meshcore_<radio6>_chan_k<12 hex>_messages

where the identity is a hash of the channel's secret key (the same channel
on two radios has the same key; a renamed channel keeps it). When the key
is not known, the channel name is used (``_chan_n<slug>_``). Slot ids are
still what upstream puts on live events; they are translated here.

Old slot-keyed history is moved to the stable keys by ``async_migrate``,
splitting each slot's messages by the channel name recorded on every
message at the time it arrived.
"""
from __future__ import annotations

import hashlib
import logging
import re
from typing import Any

from homeassistant.core import HomeAssistant

from .const import MESHCORE_DOMAIN

_LOGGER = logging.getLogger(__name__)

SLOT_ENTITY_RE = re.compile(r"^binary_sensor\.meshcore_([0-9a-f]{6})_ch_(\d+)_messages$")
STABLE_ENTITY_RE = re.compile(r"^binary_sensor\.meshcore_([0-9a-f]{6})_chan_([kn][0-9a-z-]+)_messages$")


def _secret_bytes(info: dict[str, Any]) -> bytes | None:
    secret = info.get("channel_secret")
    if isinstance(secret, (bytes, bytearray)) and secret:
        return bytes(secret)
    if isinstance(secret, str) and secret:
        try:
            return bytes.fromhex(secret)
        except ValueError:
            return None
    return None


def _name_identity(name: str) -> str | None:
    slug = re.sub(r"[^0-9a-z]+", "-", name.strip().lower()).strip("-")
    return f"n{slug[:40]}" if slug else None


def channel_identity(info: dict[str, Any] | None) -> str | None:
    """Identity of a channel from its slot info: key hash, else name slug."""
    if not isinstance(info, dict):
        return None
    secret = _secret_bytes(info)
    if secret and any(secret):
        return "k" + hashlib.sha256(secret).hexdigest()[:12]
    name = str(info.get("channel_name") or "")
    if not name or name == "(unused)":
        return None
    return _name_identity(name)


def stable_key(radio6: str, identity: str) -> str:
    return f"binary_sensor.meshcore_{radio6.lower()}_chan_{identity}_messages"


def coordinator_for(hass: HomeAssistant, radio6: str) -> Any | None:
    for coord in (hass.data.get(MESHCORE_DOMAIN) or {}).values():
        pub = getattr(coord, "pubkey", None)
        if isinstance(pub, str) and pub.lower().startswith(radio6.lower()):
            return coord
    return None


def _channel_table(coord: Any) -> dict[int, dict[str, Any]]:
    table = getattr(coord, "_channel_info", None)
    return table if isinstance(table, dict) else {}


def channel_key(coord: Any, slot: int) -> str | None:
    """Stable key of the channel currently in ``slot`` on ``coord``'s radio."""
    pub = getattr(coord, "pubkey", None)
    if not isinstance(pub, str) or len(pub) < 6:
        return None
    identity = channel_identity(_channel_table(coord).get(slot))
    return stable_key(pub[:6], identity) if identity else None


def conversation_key(hass: HomeAssistant, entity_id: str, channel_idx: Any = None) -> str:
    """Storage key for a message event's ``entity_id``.

    Channel slot ids become the stable channel key of the receiving radio;
    anything else (contacts, already-stable keys, unknown radios or slots
    whose channel info is not loaded yet) is returned unchanged.
    """
    m = SLOT_ENTITY_RE.match(str(entity_id or ""))
    if not m:
        return entity_id
    slot = channel_idx if isinstance(channel_idx, int) else int(m.group(2))
    coord = coordinator_for(hass, m.group(1))
    if coord is None:
        return entity_id
    return channel_key(coord, slot) or entity_id


# ── migration of slot-keyed history ────────────────────────────────────────


def _split_by_channel(
    coord: Any, slot: int, messages: list[dict]
) -> dict[str, list[dict]] | None:
    """Group a slot conversation's messages by the stable key they belong to.

    Each stored message carries the channel name it arrived on. A name that
    matches a channel currently on the radio goes to that channel (whatever
    its slot is now); an unknown name gets a name-based key; messages
    without a name stay with the channel now in the slot.
    """
    pub = getattr(coord, "pubkey", None)
    if not isinstance(pub, str) or len(pub) < 6:
        return None
    radio6 = pub[:6].lower()
    by_name: dict[str, str] = {}
    for info in _channel_table(coord).values():
        identity = channel_identity(info)
        name = str((info or {}).get("channel_name") or "").strip().lower()
        if identity and name:
            by_name.setdefault(name, stable_key(radio6, identity))
    current = channel_key(coord, slot)
    groups: dict[str, list[dict]] = {}
    for msg in messages:
        name = str(msg.get("channel") or "").strip().lower()
        key = by_name.get(name) if name else None
        if key is None and name:
            identity = _name_identity(name)
            key = stable_key(radio6, identity) if identity else None
        if key is None:
            key = current
        if key is None:
            return None  # slot's channel not known yet: try again later
        groups.setdefault(key, []).append(msg)
    return groups


async def async_migrate(hass: HomeAssistant, store: Any, tracker: Any | None) -> int:
    """Move slot-keyed channel history to stable keys. Returns conversations moved.

    Only radios that are connected with their channel table loaded are
    migrated; the rest stay as they are until a later run. Read cursors
    move with the message they point at.
    """
    moved = 0
    for old_key in list(store.get_message_index().keys()):
        m = SLOT_ENTITY_RE.match(old_key)
        if not m:
            continue
        coord = coordinator_for(hass, m.group(1))
        if coord is None or not _channel_table(coord):
            continue
        messages = await store._load_for_search(old_key)
        groups = _split_by_channel(coord, int(m.group(2)), list(messages))
        if groups is None:
            continue
        await store.move_conversation(old_key, groups)
        if tracker is not None:
            cursor = tracker.get_last_read(old_key)
            if cursor is not None:
                target = next(
                    (k for k, msgs in groups.items() if any(x.get("id") == cursor for x in msgs)),
                    None,
                )
                tracker.move_cursor(old_key, target, cursor)
        moved += 1
        _LOGGER.info(
            "Channel history %s moved to %s",
            old_key, ", ".join(f"{k} ({len(v)})" for k, v in groups.items()),
        )
    return moved
