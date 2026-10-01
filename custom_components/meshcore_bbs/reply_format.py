"""Bot-style reception line shared by the BBS "hops" action and the bot.

Same format as the panel's Reply button (frontend ``replyText``)::

    @[Alfa 10] | 9a92,86a8,146c (3 hops) | SNR: -9.25 dB | RSSI: -122 dBm | Received at: 14:56:15
"""
from __future__ import annotations

from typing import Any

from homeassistant.util import dt as dt_util


def _num(value: Any) -> bool:
    return isinstance(value, (int, float)) and not isinstance(value, bool)


def route_reply(sender: str, entry: dict[str, Any] | None) -> str:
    """Build the reply line from one reception (rx_log-style) entry.

    ``entry`` may carry ``path_nodes`` (list of hop hashes), ``hop_count``,
    ``snr`` and ``rssi``. With no entry at all the route part is omitted;
    an entry without path or hops means the packet was heard directly.
    """
    parts = [f"@[{sender}]"]
    if entry is not None:
        nodes = entry.get("path_nodes") or []
        hops = entry.get("hop_count")
        if nodes:
            n = len(nodes)
            parts.append(f"{','.join(str(h)[:4].lower() for h in nodes)} ({n} hop{'s' if n != 1 else ''})")
        elif isinstance(hops, int) and 0 < hops < 64:
            parts.append(f"{hops} hop{'s' if hops != 1 else ''}")
        else:
            parts.append("direct (0 hops)")
        if _num(entry.get("snr")):
            parts.append(f"SNR: {entry['snr']:g} dB")
        if _num(entry.get("rssi")):
            parts.append(f"RSSI: {entry['rssi']:g} dBm")
    parts.append("Received at: " + dt_util.now().strftime("%H:%M:%S"))
    return " | ".join(parts)
