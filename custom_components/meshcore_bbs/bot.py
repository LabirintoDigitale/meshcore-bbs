"""Channel bot: per-channel commands that trigger automatic replies.

Rules are configured per channel in the panel (Settings → Bot). When an
incoming channel message matches a rule's command, the bot runs the
rule's action on that channel. For now the only action is ``route_reply``
— the panel-Reply line with the path, SNR, RSSI and reception time::

    @[Alfa 10] | 9a92,86a8,146c (3 hops) | SNR: -9.25 dB | RSSI: -122 dBm | Received at: 14:56:15

Safety: the bot is off by default, never reacts to our own (outgoing)
messages, and answers each sender at most once per ``cooldown`` seconds
per channel. Replies use the channel's configured region scope.
"""
from __future__ import annotations

import copy
import logging
import time
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.storage import Store

from .const import DOMAIN, MESHCORE_DOMAIN, STORAGE_VERSION
from .reply_format import route_reply
from .utils import enrich_rx_log_entries

_LOGGER = logging.getLogger(__name__)

STORAGE_KEY_BOT = "meshcore_bbs.bot"
EVENT_BOT_UPDATED = "meshcore_bbs_bot_updated"

MATCH_TYPES = ("exact", "starts_with", "contains")
ACTIONS = ("route_reply",)
DEFAULT_COOLDOWN = 30


def _default_config() -> dict[str, Any]:
    return {"enabled": False, "cooldown": DEFAULT_COOLDOWN, "channels": {}}


def rule_matches(rule: dict[str, Any], text: str) -> bool:
    """Case-insensitive command match."""
    trigger = str(rule.get("trigger", "")).strip().lower()
    if not trigger or not rule.get("enabled", True):
        return False
    msg = text.strip().lower()
    match = rule.get("match", "exact")
    if match == "starts_with":
        return msg == trigger or msg.startswith(trigger + " ")
    if match == "contains":
        return trigger in msg
    return msg == trigger


class ChannelBot:
    """Per-channel command → action automation."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._store: Store[dict[str, Any]] = Store(hass, STORAGE_VERSION, STORAGE_KEY_BOT)
        self.config: dict[str, Any] = _default_config()
        # (channel_idx, sender) -> last reply time
        self._last_reply: dict[tuple[int, str], float] = {}

    async def async_load(self) -> None:
        stored = await self._store.async_load()
        cfg = _default_config()
        if isinstance(stored, dict):
            cfg.update({k: stored[k] for k in ("enabled", "cooldown", "channels") if k in stored})
        self.config = cfg

    def set_config(self, new: dict[str, Any]) -> dict[str, Any]:
        """Validate and replace the configuration."""
        channels: dict[str, Any] = {}
        for idx, ch in (new.get("channels") or {}).items():
            rules = []
            for r in ch.get("rules") or []:
                trigger = str(r.get("trigger", "")).strip()
                if not trigger:
                    continue
                match = r.get("match", "exact")
                action = r.get("action", "route_reply")
                if match not in MATCH_TYPES:
                    raise ValueError(f"Unknown match type: {match}")
                if action not in ACTIONS:
                    raise ValueError(f"Unknown action: {action}")
                rules.append({
                    "trigger": trigger[:64],
                    "match": match,
                    "action": action,
                    "enabled": bool(r.get("enabled", True)),
                })
            channels[str(int(idx))] = {"name": str(ch.get("name", ""))[:64], "rules": rules}
        cooldown = int(new.get("cooldown", self.config.get("cooldown", DEFAULT_COOLDOWN)))
        self.config = {
            "enabled": bool(new.get("enabled", False)),
            "cooldown": min(max(cooldown, 0), 3600),
            "channels": channels,
        }
        self._store.async_delay_save(lambda: self.config, 1.0)
        self.hass.bus.async_fire(EVENT_BOT_UPDATED, {})
        return self.config

    async def async_flush(self) -> None:
        await self._store.async_save(self.config)

    # ── message handling ──

    def _single_entry_id(self) -> str | None:
        coords = self.hass.data.get(MESHCORE_DOMAIN) or {}
        return next(iter(coords)) if len(coords) == 1 else None

    async def async_handle_event(self, event: Event) -> None:
        """``meshcore_message`` listener."""
        if not self.config.get("enabled"):
            return
        data = event.data or {}
        if data.get("outgoing") or str(data.get("message_type", "")).lower() != "channel":
            return
        channel_idx = data.get("channel_idx")
        if not isinstance(channel_idx, int):
            return
        channel = self.config["channels"].get(str(channel_idx))
        if not channel:
            return
        text = str(data.get("message") or data.get("text") or "")
        rule = next((r for r in channel.get("rules", []) if rule_matches(r, text)), None)
        if rule is None:
            return
        sender = str(data.get("sender_name") or data.get("sender") or "")
        key = (channel_idx, sender)
        now = time.monotonic()
        last = self._last_reply.get(key)
        if last is not None and now - last < self.config.get("cooldown", DEFAULT_COOLDOWN):
            _LOGGER.debug("Bot: cooldown for %s on channel %s", sender, channel_idx)
            return
        self._last_reply[key] = now

        reply = self._run_action(rule["action"], sender, data)
        if not reply:
            return
        payload: dict[str, Any] = {"channel_idx": channel_idx, "message": reply}
        entry_id = self._single_entry_id()
        scopes = self.hass.data.get(DOMAIN, {}).get("channel_scopes")
        if entry_id and scopes is not None:
            scope = scopes.get(entry_id, channel_idx)
            if scope:
                payload["scope"] = scope
        try:
            await self.hass.services.async_call(
                MESHCORE_DOMAIN, "send_channel_message", payload, blocking=True
            )
            _LOGGER.debug("Bot replied on channel %s to %s: %s", channel_idx, sender, reply)
        except Exception as err:
            _LOGGER.warning("Bot reply on channel %s failed: %s", channel_idx, err)

    def _run_action(self, action: str, sender: str, data: dict[str, Any]) -> str | None:
        if action == "route_reply":
            rx = copy.deepcopy(data.get("rx_log_data") or [])
            if rx:
                enrich_rx_log_entries(rx)
            return route_reply(sender, rx[0] if rx else None)
        return None


# ─── WebSocket API ──────────────────────────────────────────────────────


def _bot(hass: HomeAssistant) -> ChannelBot | None:
    return hass.data.get(DOMAIN, {}).get("bot")


@callback
def async_register_bot_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_bot_get)
    websocket_api.async_register_command(hass, ws_bot_set)


@websocket_api.websocket_command({vol.Required("type"): "meshcore_bbs/bot_get"})
@callback
def ws_bot_get(hass, connection, msg):
    bot = _bot(hass)
    if bot is None:
        connection.send_error(msg["id"], "not_ready", "Bot not loaded")
        return
    connection.send_result(msg["id"], {
        **bot.config,
        "match_types": list(MATCH_TYPES),
        "actions": list(ACTIONS),
    })


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/bot_set",
        vol.Required("config"): dict,
    }
)
@websocket_api.require_admin
@callback
def ws_bot_set(hass, connection, msg):
    bot = _bot(hass)
    if bot is None:
        connection.send_error(msg["id"], "not_ready", "Bot not loaded")
        return
    try:
        config = bot.set_config(msg["config"])
    except (TypeError, ValueError) as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
        return
    connection.send_result(msg["id"], config)
