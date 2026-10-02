"""Tests for ``split_message`` (``reply_format.py``)."""
from __future__ import annotations

from custom_components.meshcore_bbs.reply_format import split_message


def test_short_message_is_untouched() -> None:
    assert split_message("ciao", 140) == ["ciao"]
    assert split_message("", 140) == [""]


def test_parts_are_numbered_and_within_bytes() -> None:
    text = "\n".join(f"riga {i} con un po' di testo" for i in range(30))
    parts = split_message(text, 100)
    n = len(parts)
    assert n > 1
    for i, p in enumerate(parts, 1):
        assert p.startswith(f"{i}/{n}\n")
        assert len(p.encode("utf-8")) <= 100
    assert "\n".join(p.split("\n", 1)[1] for p in parts) == text


def test_emoji_and_accents_never_cut_in_half() -> None:
    text = "🐴" * 50 + "àèìòù" * 10
    parts = split_message(text, 40)
    assert all(len(p.encode("utf-8")) <= 40 for p in parts)
    assert "".join(p.split("\n", 1)[1] for p in parts) == text


def test_header_width_grows_with_ten_or_more_parts() -> None:
    parts = split_message("x" * 300, 30)
    assert len(parts) >= 10
    assert parts[9].startswith(f"10/{len(parts)}\n")
    assert all(len(p) <= 30 for p in parts)
