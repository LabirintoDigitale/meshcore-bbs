"""WebSocket command to request telemetry from a contact.

Same request the MeshCore companion app sends: a binary TELEMETRY request
to the contact, answered with Cayenne LPP values (temperature, voltage,
GPS, …) — only if the contact grants us telemetry access. The SDK's
``req_telemetry_sync`` returns the decoded LPP list, e.g.::

    [{"channel": 1, "type": "voltage", "value": 4.1},
     {"channel": 1, "type": "gps",
      "value": {"latitude": 46.01, "longitude": 11.89, "altitude": 320}}]

or ``None`` when nothing came back in time.
"""
from __future__ import annotations

import logging
import re
import time

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .ws_api import _get_coordinator

_LOGGER = logging.getLogger(__name__)

# Floor for the wait: a flood-routed request/response over several hops
# easily takes longer than the SDK's suggested timeout for a direct hop.
MIN_TIMEOUT_SECONDS = 15


@callback
def async_register_telemetry_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_request_telemetry)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_bbs/request_telemetry",
        vol.Optional("entry_id"): str,
        vol.Required("pubkey_prefix"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_request_telemetry(hass, connection, msg):
    """Ask a contact for its telemetry and return the decoded values."""
    coordinator = _get_coordinator(hass, msg.get("entry_id"))
    if not coordinator:
        connection.send_error(msg["id"], "not_found", "No MeshCore coordinator found")
        return
    api = coordinator.api
    prefix = re.sub(r"[^0-9a-f]", "", msg["pubkey_prefix"].lower())
    contact = api.mesh_core.get_contact_by_key_prefix(prefix) if len(prefix) >= 6 else None
    if not contact:
        connection.send_error(
            msg["id"], "not_found",
            "Contact not found on the radio (add it to the companion first)",
        )
        return

    started = time.monotonic()
    try:
        lpp = await api.mesh_core.commands.req_telemetry_sync(
            contact, min_timeout=MIN_TIMEOUT_SECONDS
        )
    except Exception as err:  # pragma: no cover - defensive
        _LOGGER.warning("Telemetry request to %s failed: %s", prefix, err)
        connection.send_error(msg["id"], "command_failed", str(err))
        return

    if lpp is None:
        connection.send_error(
            msg["id"], "no_response",
            "No telemetry received: the contact did not answer in time, is out of "
            "range, or has not granted you telemetry access",
        )
        return

    connection.send_result(msg["id"], {
        "pubkey_prefix": contact.get("public_key", prefix)[:12],
        "lpp": lpp if isinstance(lpp, list) else [],
        "elapsed_ms": int((time.monotonic() - started) * 1000),
        "received_at": time.time(),
    })
