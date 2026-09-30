"""Late repeater-echo correlation for outgoing channel messages.

The upstream meshcore integration counts the repeaters that re-broadcast
an outgoing channel message by collecting RX_LOG receptions for only
~4 seconds after the send. Long messages take longer on air, and a
repeater waits a random, airtime-proportional delay before relaying, so
its echo can arrive later than that (observed: 6.1 s for a 151-byte
packet). The message is then reported with ``repeater_count == 0`` and
the panel shows "Unheard" although it was repeated.

This tracker keeps listening for ``WATCH_SECONDS`` after such a message:
every ``meshcore_raw_event`` carrying a decrypted RX_LOG on the same
channel whose text is the message we sent counts as a (late) echo. Each
echo is published as a ``meshcore_delivery_update`` for the stored
message, which the companion's delivery handler persists and the panel
applies live. The event deliberately omits ``outgoing`` so upstream's
own delivery sensor ignores it.
"""
from __future__ import annotations

import logging
import time
from dataclasses import dataclass, field
from typing import Any

from homeassistant.core import Event, HomeAssistant, callback

from .const import EVENT_MESHCORE_DELIVERY_UPDATE, MESHCORE_DOMAIN
from .utils import enrich_rx_log_entries

_LOGGER = logging.getLogger(__name__)

EVENT_RAW = f"{MESHCORE_DOMAIN}_raw_event"
# How long to keep listening after upstream gave up (its window is ~4 s).
WATCH_SECONDS = 20.0
# Accepted distance between the echo's sender timestamp and our send time.
TIMESTAMP_SLACK_SECONDS = 30


@dataclass
class _Watch:
    entity_id: str
    message_id: str
    channel_idx: int
    text: str
    sent_at: float
    expires: float
    event_base: dict[str, Any]
    entries: list[dict[str, Any]] = field(default_factory=list)


def _rx_entry(payload: dict[str, Any], decrypted: dict[str, Any]) -> dict[str, Any]:
    """Build an rx_log entry in the same shape upstream stores."""
    return {
        "channel_idx": decrypted.get("channel_idx"),
        "channel_name": decrypted.get("channel_name"),
        "timestamp": decrypted.get("timestamp"),
        "text": decrypted.get("text"),
        "snr": payload.get("snr"),
        "rssi": payload.get("rssi"),
        "path_len": decrypted.get("path_len"),
        "path": decrypted.get("path"),
        "path_hash_size": decrypted.get("path_hash_size"),
        "channel_hash": decrypted.get("channel_hash"),
        "route_type": payload.get("route_type"),
        "route_typename": payload.get("route_typename"),
        "late_echo": True,
    }


def _is_our_text(decrypted_text: str, text: str) -> bool:
    """Channel plaintext is "<node name>: <message>"."""
    return decrypted_text == text or decrypted_text.endswith(f": {text}")


class LateEchoTracker:
    """Catch repeater echoes that arrive after upstream's collection window."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._watches: list[_Watch] = []
        self._unsub = None

    def start(self) -> None:
        if self._unsub is None:
            self._unsub = self.hass.bus.async_listen(EVENT_RAW, self._on_raw_event)

    def stop(self) -> None:
        if self._unsub is not None:
            self._unsub()
            self._unsub = None
        self._watches.clear()

    @callback
    def watch(self, entity_id: str, message_id: str, record: dict[str, Any]) -> None:
        """Start watching a stored outgoing channel message with no echo."""
        channel_idx = record.get("channel_idx")
        text = record.get("text") or ""
        if channel_idx is None or not text:
            return
        now = time.time()
        self._prune(now)
        self._watches.append(_Watch(
            entity_id=entity_id,
            message_id=message_id,
            channel_idx=int(channel_idx),
            text=text,
            # Upstream fires the final event ~4 s after sending.
            sent_at=now - 4,
            expires=now + WATCH_SECONDS,
            event_base={
                "entity_id": entity_id,
                "id": message_id,
                "send_id": record.get("send_id") or message_id,
                "message": text,
                "sender_name": record.get("sender", ""),
                "timestamp": record.get("timestamp", ""),
                "message_type": "channel",
                "channel_idx": int(channel_idx),
            },
        ))

    def _prune(self, now: float) -> None:
        self._watches = [w for w in self._watches if w.expires > now]

    @callback
    def _on_raw_event(self, event: Event) -> None:
        if not self._watches:
            return
        data = event.data or {}
        if "RX_LOG" not in str(data.get("event_type", "")).upper():
            return
        payload = data.get("payload")
        if not isinstance(payload, dict):
            return
        decrypted = payload.get("decrypted")
        if not isinstance(decrypted, dict) or not decrypted.get("decrypted"):
            return
        now = time.time()
        self._prune(now)
        for w in self._watches:
            if decrypted.get("channel_idx") != w.channel_idx:
                continue
            if not _is_our_text(str(decrypted.get("text") or ""), w.text):
                continue
            ts = decrypted.get("timestamp")
            if isinstance(ts, (int, float)) and abs(ts - w.sent_at) > TIMESTAMP_SLACK_SECONDS:
                continue
            entry = _rx_entry(payload, decrypted)
            enrich_rx_log_entries([entry])
            w.entries.append(entry)
            _LOGGER.debug(
                "Late repeater echo for %s (%s) after %.1f s: path=%s",
                w.entity_id, w.message_id, now - w.sent_at, entry.get("path"),
            )
            self.hass.bus.async_fire(EVENT_MESHCORE_DELIVERY_UPDATE, {
                **w.event_base,
                "rx_log_data": list(w.entries),
                "repeater_count": len(w.entries),
                "delivery_status": "sent",
                "progressive": False,
                "late_echo": True,
            })
            return
