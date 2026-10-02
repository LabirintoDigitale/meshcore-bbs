"""Bot-style reception line shared by the BBS "hops" action and the bot.

Same format as the panel's Reply button (frontend ``replyText``)::

    @[Alfa 10] | 9a92,86a8,146c (3 hops) | SNR: -9.25 dB | RSSI: -122 dBm | Received at: 14:56:15
"""
from __future__ import annotations

from typing import Any

from homeassistant.util import dt as dt_util


def _fit(text: str, limit: int) -> tuple[str, str]:
    """Longest UTF-8-safe head of ``text`` within ``limit`` bytes, and the rest."""
    raw = text.encode("utf-8")
    if len(raw) <= limit:
        return text, ""
    head = raw[:limit].decode("utf-8", errors="ignore")
    return head, text[len(head):]


def _pack(text: str, budget: int) -> list[str]:
    """Pack lines into parts of at most ``budget`` bytes, cutting long lines."""
    parts: list[str] = []
    cur = ""
    for line in text.split("\n"):
        candidate = f"{cur}\n{line}" if cur else line
        if len(candidate.encode("utf-8")) <= budget:
            cur = candidate
            continue
        if cur:
            parts.append(cur)
            cur = ""
        while len(line.encode("utf-8")) > budget:
            head, line = _fit(line, budget)
            if not head:  # budget smaller than one character
                return parts + [line]
            parts.append(head)
        cur = line
    if cur or not parts:
        parts.append(cur)
    return parts


def split_message(text: str, limit: int) -> list[str]:
    """Split a reply into messages of at most ``limit`` UTF-8 bytes.

    MeshCore text is limited in bytes (an accented letter takes 2, an emoji
    4). Parts break at line ends when possible. With more than one part,
    each starts with its number on a line of its own::

        1/2
        @[Alfa 10] 9 hops
        ...
    """
    parts = _pack(text, limit)
    if len(parts) == 1:
        return parts
    n = len(parts)
    while True:
        header = len(f"{n}/{n}\n".encode("utf-8"))
        parts = _pack(text, max(limit - header, 1))
        if len(parts) <= n:
            break
        n = len(parts)
    total = len(parts)
    return [f"{i}/{total}\n{p}" for i, p in enumerate(parts, 1)]


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
