"""Detect managed repeaters running the MeshCore BBS ("MBBS") repeater firmware.

That firmware answers the CLI command ``isMBBS`` with ``true`` and serves its
own web pages over WiFi: ``start ota`` (firmware upload) and ``start debug``
(node list, discover, trace). The panel uses the flag to open those pages as
soon as the repeater replies with their address, and to offer *Start Node
Debug* next to *Start OTA Update*.

Each managed repeater is asked once per Home Assistant start, in the
background and one at a time so the mesh is not flooded, as soon as its radio
is connected; repeaters that could not be asked or did not answer (radio still
connecting, repeater out of reach, added later) are retried every 10 minutes.
The panel also asks when its settings menu is opened and the answer is not
known yet. The last answer is persisted so the panel knows it right after a
restart, before the new probe completes.
"""
from __future__ import annotations

import asyncio
import logging
import re
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.storage import Store

from .const import DOMAIN, EVENT_MESHCORE_MESSAGE, STORAGE_VERSION

_LOGGER = logging.getLogger(__name__)

STORAGE_KEY_MBBS = "meshcore_bbs.mbbs_caps"
PROBE_COMMAND = "isMBBS"
PROBE_REPLY_TIMEOUT = 30          # seconds to wait for the repeater's reply
PROBE_START_DELAY = 90            # let the radio connect and load contacts first
PROBE_SPACING = 20                # between two repeaters
PROBE_RETRY_INTERVAL = 10 * 60    # retry repeaters that did not answer yet


def _clean(value: Any) -> str:
    return re.sub(r"[^0-9a-f]", "", str(value or "").lower())


def _prefixes_match(a: str, b: str) -> bool:
    return bool(a) and bool(b) and (a.startswith(b) or b.startswith(a))


def _is_inbound_direct(data: dict[str, Any]) -> bool:
    if data.get("channel_idx") is not None:
        return False
    if str(data.get("message_type", "")).lower() == "channel":
        return False
    if str(data.get("direction", "in")).lower() in ("out", "outgoing", "sent"):
        return False
    return not data.get("outgoing", False)


def is_mbbs_reply(text: str) -> bool:
    """The MBBS firmware replies exactly ``true``; stock firmware rejects the command."""
    return text.strip().lstrip(">").strip().lower() == "true"


class MbbsCaps:
    """Persisted map pubkey_prefix -> runs the MBBS firmware (True/False)."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._store: Store = Store(hass, STORAGE_VERSION, STORAGE_KEY_MBBS)
        self._caps: dict[str, bool] = {}
        self._answered: set[str] = set()   # answered since this HA start

    async def async_load(self) -> None:
        data = await self._store.async_load()
        if isinstance(data, dict):
            self._caps = {_clean(k): bool(v) for k, v in data.items() if _clean(k)}

    def get(self, pubkey_prefix: str) -> bool | None:
        prefix = _clean(pubkey_prefix)
        for known, value in self._caps.items():
            if _prefixes_match(known, prefix):
                return value
        return None

    def set(self, pubkey_prefix: str, value: bool) -> None:
        prefix = _clean(pubkey_prefix)
        if not prefix or self._caps.get(prefix) == value:
            return
        self._caps = {k: v for k, v in self._caps.items() if not _prefixes_match(k, prefix)}
        self._caps[prefix] = value
        self._store.async_delay_save(lambda: dict(self._caps), 1)

    async def async_probe(self, coordinator, pubkey_prefix: str) -> bool | None:
        """Ask one repeater; returns None (and keeps the old value) when it does not answer."""
        from .ws_api import async_send_remote_command  # avoid an import cycle

        reply = await async_command_reply(
            self.hass, pubkey_prefix,
            lambda: async_send_remote_command(coordinator, pubkey_prefix, PROBE_COMMAND),
        )
        if reply is None:
            return None
        value = is_mbbs_reply(reply)
        self.set(pubkey_prefix, value)
        self._answered.add(_clean(pubkey_prefix))
        _LOGGER.debug("Repeater %s isMBBS -> %s (reply %r)", pubkey_prefix, value, reply)
        return value

    async def async_probe_loop(self) -> None:
        """Ask every managed repeater once per HA start; retry the ones not reached yet."""
        from .ws_api import _get_all_coordinators  # avoid an import cycle

        await asyncio.sleep(PROBE_START_DELAY)
        while True:
            for coordinator in _get_all_coordinators(self.hass):
                if not getattr(coordinator.api, "connected", False):
                    continue
                for repeater in list(coordinator._tracked_repeaters):
                    configured = str(repeater.get("pubkey_prefix") or "")   # as the device lookup expects it
                    prefix = _clean(configured)
                    if not prefix or prefix in self._answered:
                        continue
                    try:
                        await self.async_probe(coordinator, configured)
                    except Exception as ex:  # pragma: no cover - radio/SDK failures
                        _LOGGER.debug("isMBBS probe of %s failed: %s", prefix, ex)
                    await asyncio.sleep(PROBE_SPACING)
            await asyncio.sleep(PROBE_RETRY_INTERVAL)


async def async_command_reply(hass: HomeAssistant, pubkey_prefix: str, send, timeout: float = PROBE_REPLY_TIMEOUT) -> str | None:
    """Run ``send()`` and return the next direct message from ``pubkey_prefix``.

    The SDK only confirms that a CLI command left our radio; the repeater's
    answer arrives later as a direct message, so listen before sending.
    """
    prefix = _clean(pubkey_prefix)
    loop = asyncio.get_running_loop()
    future: asyncio.Future[str] = loop.create_future()

    @callback
    def _on_message(event: Event) -> None:
        data = event.data or {}
        sender = _clean(data.get("pubkey_prefix") or data.get("public_key"))
        if future.done() or not _is_inbound_direct(data) or not _prefixes_match(sender, prefix):
            return
        future.set_result(str(data.get("text") or data.get("message") or ""))

    unsub = hass.bus.async_listen(EVENT_MESHCORE_MESSAGE, _on_message)
    try:
        await send()
        return await asyncio.wait_for(future, timeout)
    except asyncio.TimeoutError:
        return None
    finally:
        unsub()


def get_mbbs_caps(hass: HomeAssistant) -> MbbsCaps | None:
    return hass.data.get(DOMAIN, {}).get("mbbs_caps")


@callback
def async_register_mbbs_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_mbbs_probe)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/mbbs_probe",
        vol.Optional("entry_id"): str,
        vol.Required("target_prefix"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_mbbs_probe(hass, connection, msg):
    """Ask one managed repeater now whether it runs the MBBS firmware."""
    from .ws_api import RemoteCommandError, _get_coordinator  # avoid an import cycle

    caps = get_mbbs_caps(hass)
    coordinator = _get_coordinator(hass, msg.get("entry_id"))
    if caps is None or coordinator is None:
        connection.send_error(msg["id"], "not_found", "No MeshCore coordinator found")
        return
    try:
        value = await caps.async_probe(coordinator, msg["target_prefix"])
    except RemoteCommandError as ex:
        connection.send_error(msg["id"], ex.code, str(ex))
        return
    connection.send_result(msg["id"], {"is_mbbs": value})
