# Changelog

All notable changes to **MeshCore BBS for Home Assistant** are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/) loosely; entries are most-recent-first.

## [Unreleased]

## [0.8.11] - 2026-10-02

### Fixed

- **Issue Command: commands that take a contact always failed.** The typed name or key prefix was handed to the SDK as is, which needs the contact itself or the full 64-hex key; and several SDK methods name their arguments differently from the panel (`dst`/`key`, `msg`, `cmd`, `pwd`). The contact is now looked up on the radio by name or key prefix, arguments are passed the way each SDK method expects, `*_sync` requests that get no answer report a timeout instead of "OK", and their payload is shown as JSON. `req_status_sync` on a repeater now returns its `noise_floor`, `last_rssi`, counters and the rest.

## [0.8.10] - 2026-10-02

### Fixed

- **Doubled channel messages after switching radio.** A message fetch started for the previous conversation (30 s poll, debounced refetch, page load) could answer after another conversation was open and was merged into it — e.g. Base Galileo's #test history mixed into Galileo's #test, so every message showed twice until a reload. Fetches and live subscriptions now belong to the conversation they were started for and are dropped after a switch; the contact/channel list of a radio is likewise ignored if another radio was selected meanwhile.

## [0.8.9] - 2026-10-02

### Added

- **RSSI in the Trace result.** The trace answer only carries SNR, which tops out around +12 dB on any good link and so cannot tell a healthy antenna from a lossy one at short range. Right after a trace the panel asks the radio for the RSSI of the last packet it received (the trace echo, via `get_stats_radio`) and shows it as *RSSI (at this device)*.

## [0.8.8] - 2026-10-02

### Fixed

- **An open node card kept the old route after Save route / Reset to flood.** The route was saved, but the page that owns the card re-applied its stored copy of the node on its next render (Lit re-sets object properties every render), so the new route only appeared after closing and reopening the card. The card now hands the updated node back to its owner (Nodes tab and chat contact details).

## [0.8.7] - 2026-10-02

### Fixed

- **Saved or reset routes still not shown.** The SDK's contact lookup can return a copy of the contact, so writing the new route into it did not reach the table the panel reads. Save route and Reset to flood now update every copy of the contact (the SDK's contact table and the coordinator's cache).

## [0.8.6] - 2026-10-02

### Fixed

- **"Reset to flood" kept showing the old route.** Since 0.8.5 routes are read from the SDK's copy of the radio's contacts, and not every SDK version updates that copy on `reset_path`. Saving or resetting a route now writes the result into it explicitly.

## [0.8.5] - 2026-10-02

### Fixed

- **A saved route showed "Flood" again.** Upstream merges the radio's contacts with the copies discovered from adverts and keeps the newer one; a repeater that adverts often kept showing its advert copy, which never has a route. Contacts now always take `out_path` / `out_path_len` / `out_path_hash_mode` from the radio's own contact table, so the route dialog and node details show the route actually stored on the radio.

## [0.8.4] - 2026-10-02

### Fixed

- **Map view showed "API KEY REQUIRED".** CARTO's basemaps now answer every tile with that placeholder. The Map layer uses Esri World Street Map instead — free and keyless, like the Esri satellite imagery.

## [0.8.3] - 2026-10-02

### Fixed

- **The same channel message shown several times until reload.** When a radio reported one packet more than once (heard direct and through repeaters, each with its own receive time), the open conversation added a bubble for each report, while history kept only one — so the copies disappeared after a refresh. Live messages now use the same id the history stores them under, and the same sender + text within a minute is shown once.

## [0.8.2] - 2026-10-02

### Added

- **Export Private Key in Key Management.** Next to Regenerate and Import, *Show private key* reads the companion's key (128 hex) with Copy and Hide buttons, so it can be backed up before a reflash and imported back to keep the same identity. The key is only shown in the dialog and is cleared when it closes; firmware built without key export is reported as such.

## [0.8.1] - 2026-10-02

### Fixed

- **"Failed to copy" when Home Assistant is opened over plain HTTP.** The browser clipboard API exists only on HTTPS or localhost, so the copy buttons (public key in Settings, message text and route in chat) failed on a LAN address like `http://192.168.x.x:8123`. They now fall back to the legacy copy method.

## [0.8.0] - 2026-10-02

### Fixed

- **Bot rules attached to the slot instead of the channel.** Rules were stored per channel slot, so on a radio where the slots differ (#test in slot 1 instead of 5) a channel showed and ran another channel's commands. Rules are now keyed by channel name and match incoming messages by the channel they arrived on (the reply still goes to that radio's slot). Existing configurations are re-keyed by name on load.

- **Channel history attached to the wrong channel with several radios.** Channel conversations were stored by radio + *slot* (`…_ch_<slot>_messages`). Slots are local to each companion and change when channels are reordered or recreated, so a slot's old messages showed up under whichever channel took the slot (e.g. old #path messages in #test), and history did not follow a channel to its new slot. Channel history is now stored per radio + channel identity (hash of the channel key, or its name when the key is unknown); live events, which upstream still sends with the slot id, are translated on arrival. `get_channels` gives the panel each channel's `conversation_id`, which it uses to load history, count unreads and mark read — without requiring the upstream `_ch_N_messages` entity to exist.

### Migration

- Existing slot-keyed history is moved automatically, per radio, as soon as that radio's channel table is known (at startup, retried in the background, and when the panel lists channels). Each slot's messages are split by the channel name recorded on every message, so messages go back to their own channel whatever slot it occupies now; messages of channels no longer on the radio are kept under a name-based key; records without a name stay with the slot's current channel. Read cursors move with the message they point at. New data is written before the old file is removed.

## [0.7.9] - 2026-10-02

### Changed

- **Long replies are sent as numbered parts.** When a bot or BBS reply does not fit in one message, each part starts with its number on its own line (`1/2`, `2/2`, …). Parts break at line ends when possible.
- **Message size is counted in bytes**, as MeshCore does: an accented letter takes 2 bytes, an emoji 4, so replies with emoji or accents no longer risk being cut by the radio. The bot keeps each message within 135 bytes (room for the radio name in front); the BBS within its *Max length* setting.

## [0.7.8] - 2026-10-02

### Added

- **Bot action "Path with repeater names".** Replies with one line per repeater of the path the message took — `9A92: Cesura90 Repeater` — with the name from the radio's contacts, `Unknown` when not found. Long paths are split over several messages.
- **Radio choice for the bot.** Settings → Bot has its own *Radio for the bot* selector (default: same radio as the BBS); the channel list follows the chosen radio. The bot settings are no longer hidden when another radio is selected in the panel.

### Changed

- **A chosen radio is never swapped for another one.** When the radio chosen for the BBS or the bot is not connected, that automation pauses (and Settings says so) instead of moving to the first connected radio — which depends on setup order and changed when a radio was disconnected and reconnected. The BBS selector has an explicit *Automatic* option for the old behaviour.

## [0.7.7] - 2026-10-01

### Fixed

- **Disconnect left the Bluetooth radio connected.** A paired (bonded) radio is reconnected by the system Bluetooth stack (BlueZ) on its own within seconds, even with the MeshCore entry disabled and after a restart. *Disconnect* now also blocks the radio in BlueZ (over D-Bus), which drops the link and refuses new ones while keeping the pairing/PIN; *Reconnect* unblocks it before enabling the entry. If BlueZ cannot be reached the panel says so, with the `bluetoothctl` command to run instead.

## [0.7.6] - 2026-10-01

### Added

- **Disconnect / reconnect a Bluetooth radio from the header.** For a Bluetooth radio the green *Connected* chip is clickable: confirm and Home Assistant releases the BLE link (the MeshCore entry is disabled, same as Settings → Devices & services → ⋮ → Disable), so the radio is free for e.g. the phone app. A disconnected radio shows a grey "*name* · off" chip — click it to reconnect. A red *Disconnected* chip offers to reload the entry and retry the connection. USB/TCP radios are unchanged.

## [0.7.5] - 2026-10-01

### Added

- **Custom command for managed devices.** *Issue Command* has a new **custom** entry at the top of the list: type any firmware CLI command (e.g. `set bluetooth.enabled false`) and it is sent verbatim to the repeater/client, with the device's reply shown in the dialog.

## [0.7.4] - 2026-10-01

### Fixed

- **Message activity stuck at 0 for some repeaters.** The chart used the upstream `_rate` sensors, which are a delta between two consecutive repeater polls and read 0 after every Home Assistant restart until the next poll — with a repeater polled every couple of hours it stayed flat. It now uses the hourly change of the cumulative message counters (kept by Home Assistant's statistics across restarts); for sparsely polled repeaters each poll's messages are spread over the hours before it. The old source remains as a fallback.

## [0.7.3] - 2026-10-01

### Fixed

- **Direct messages showed "Unheard".** "Unheard / Repeated" is about hearing repeaters re-broadcast a *channel* message. Sent direct messages are confirmed by the recipient's ACK instead, so they now read **Delivered** (ACK received) or **No ACK**, and the message popup says whether the recipient confirmed it.

## [0.7.2] - 2026-10-01

### Added

- **Several companion radios.** With more than one meshcore entry connected (e.g. a second, Bluetooth companion), BBS and Bot run on a single radio — the first one by default, selectable in **Settings → BBS → Radio for BBS and Bot**. They only answer messages received by that radio and reply through it (the receiving radio is read from the message's entity id). Other radios just show and send messages from the header selector: while one of them is selected, all BBS and Bot controls (icons, contact BBS section, BBS/Requests filters, Settings cards) are hidden.

### Fixed

- The BBS no longer ignores direct messages coming from another radio connected to the same Home Assistant; only the BBS radio itself is excluded.

## [0.7.1] - 2026-10-01

### Added

- **Repeater names in message routes.** The message popup now shows each hop of the route as its code followed by the node's name (`9A92 IT-TS MntSpc Rpt › 86A8 QDD RPT › …`), resolved from all the nodes the radio knows (added and discovered). When several nodes share a code (common with 1-byte path hashes) the most likely one is shown — repeaters first, then the most recently heard — with `+N` and the full list in the tooltip; unknown codes show `?`. Clicking the route still copies it as codes.

## [0.7.0] - 2026-10-01

### Added

- **Channel bot (Settings → Bot).** Per-channel commands that trigger an automatic reply on that channel. Pick a channel from the list of the radio's channels, add commands (e.g. `path` on #path, `test` on #test) with a match type — *message is*, *starts with* or *contains*, case-insensitive — and an action. The first action, **Reply with route**, answers with the same line as the panel's Reply: `@[sender] | 9a92,86a8,146c (3 hops) | SNR: -9.25 dB | RSSI: -122 dBm | Received at: 14:56:15`. The bot is off by default, never answers its own messages, replies at most once per sender per cooldown (default 30 s), and uses the channel's region scope. Stored in `.storage/meshcore_bbs.bot`; changes are admin-only.

## [0.6.5] - 2026-09-30

### Fixed

- **"Access blocked" on the map.** OpenStreetMap's volunteer tile servers block tile requests coming from a Home Assistant on a local address (tile usage policy). The **Map** layer now uses CARTO Voyager tiles (OpenStreetMap data, free, no key, attribution shown); **Satellite** stays on Esri World Imagery.

## [0.6.4] - 2026-09-30

### Changed

- **Maps no longer use Google.** Maps are now interactive Leaflet maps bundled with the panel: **Map** uses OpenStreetMap tiles, **Satellite** uses Esri World Imagery — both free, with no key or account (attribution shown on the map). Scroll-wheel zoom works directly, without holding Ctrl. Leaflet (BSD-2-Clause) is bundled into the panel.

## [0.6.3] - 2026-09-30

### Added

- **Satellite view.** Maps have a **Map / Satellite** switch (satellite imagery from Google Maps, no key needed) and links to open the position in OpenStreetMap or Google Maps. The choice is remembered in the browser.
- **Map in the contact details.** The Location section of a contact now shows its advertised position on the map, not only the coordinates.

## [0.6.2] - 2026-09-30

### Changed

- **Flood Advert / Sync Clock show what happens.** The button shows "Sending…" while the panel logs in and sends the command, then the panel waits up to 20 s for the device's own reply (e.g. `OK - Advert sent`, which arrives as a direct message) and shows it. Before, only a short "Command sent" appeared once the command left the radio, easy to miss while the device's answer came later in its chat.

## [0.6.1] - 2026-09-30

### Added

- **Contact telemetry with map.** A **Telemetry** button in the contact details requests the contact's telemetry over the mesh — the same request as the MeshCore companion app — and shows the returned values (voltage, battery, temperature, humidity, pressure, …) and the position on an OpenStreetMap map: the GPS fix from the telemetry when present, otherwise the advertised position. The contact must grant you telemetry access; otherwise the request times out with an explanation. Admin only.

## [0.6.0] - 2026-09-30

### Added

- **BBS "Hops" menu entry.** New menu action `hops`: the BBS replies with how the user's message reached it, in the same format as the panel's Reply — `@[name] | 7de3,6522 (2 hops) | SNR: 8.5 dB | RSSI: -88 dBm | Received at: 14:56:15`. The repeater path of direct messages is taken from the raw RX_LOG packet header (the DM event only carries the hop count); without it the hop count is used. Existing installs get a "Hops" entry added once to the main menu, before "Exit", with the first free key.

### Changed

- The TX power field no longer has an upper bound in the page: the radio's maximum is shown next to the label as information only; the firmware decides what it accepts.

## [0.5.9] - 2026-09-30

### Fixed

- **Settings showed only "Save failed".** When the radio rejects a setting (TX power, radio parameters, coordinates…), the panel now shows the actual reason reported by the firmware/SDK, e.g. `Save failed: Failed to set tx_power: … (already applied: none)`.
- **TX power limit.** The TX power field used a fixed 2–22 dBm range; it now uses the radio's own maximum (`max_tx_power`, shown next to the label).

## [0.5.8] - 2026-09-30

### Added

- **Direct-message route per contact.** A new **Route** button in the contact details (Nodes tab or the chat-list avatar) lets you choose, in order, the repeaters that direct messages to that contact go through, or **Reset to flood**. The route is written to the companion radio (`change_contact_path` / `reset_path`), with each hop sized to the radio's path hash mode. Channel messages always flood and are not affected.

## [0.5.7] - 2026-09-30

### Fixed

- **Long channel messages shown as "Unheard" although repeated.** The upstream meshcore integration only listens ~4 s for repeaters re-broadcasting an outgoing channel message; the echo of a long message can arrive later (observed: 6.1 s for a 151-byte packet from the nearest repeater). MeshCore BBS now keeps listening for 20 s after such a message and, when the echo arrives, updates it to "Repeated" with the repeater path, SNR and RSSI in the message popup — live in the panel and in the stored history.
- The panel applies delivery updates to the message they belong to (by send id) instead of the most recent outgoing message.

## [0.5.6] - 2026-09-30

### Added

- **Contact details from the chat list.** Clicking the round avatar of a contact in the chat list opens its details — the same dialog as the Nodes tab, with Message, Trace, Remove Contact, the BBS section and the contact information. Clicking the name still opens the conversation.

## [0.5.5] - 2026-09-30

### Changed

- **Bot-style Reply.** Reply now pre-fills a compact line in the style of the mesh "ack" bots, with the reception time: `@[Alfa 10] | 9a92,86a8,146c (3 hops) | SNR: -9.25 dB | RSSI: -122 dBm | Received at: 14:56:15`. Shorter than the 0.5.4 format (no spaces around the path separators, no `·`), which matters close to the mesh message-length limit.

## [0.5.4] - 2026-09-30

### Added

- **Reply includes the route.** Reply in the message popup now pre-fills the mention followed by how the message reached you, e.g. `@[Alfa 10] Route: 23BD > 5982 > 1029 · SNR: 8.5 · RSSI: -88`. For channel messages heard over several paths, the first path is used.
- **Hop count on received messages.** Received bubbles show the number of hops next to the time (e.g. `28m · 3 hops`) — the fewest hops over which the message was heard.

## [0.5.3] - 2026-09-30

### Fixed

- **The BBS no longer answers repeaters, room servers or sensors.** Their CLI replies and status messages arrive as direct messages; the BBS recorded them as access requests and sent the auto-reply, which a repeater would read as a CLI command. Senders whose contact type is repeater (2), room server (3) or sensor (4) are now ignored. Existing requests from such nodes can be rejected from the node detail dialog.
- **Unknown repeater/client sensor values.** Upstream telemetry sensors (e.g. temperature) are not restored after a Home Assistant restart and read unknown until the next poll. The Devices tab now shows their last known value from the recorder history, in italics, with the time in the tooltip.

- **Repeater Radio activity no longer stuck at 0%.** The upstream meshcore integration computes a repeater's airtime utilization from two consecutive status polls, so it reports 0% after every Home Assistant restart until the second poll arrives (often an hour or more). While a utilization sensor reads 0, the Devices tab tile now shows the last real reading from the recorder history, marked "Last reading · <date time>".

## [0.5.2] - 2026-09-30

### Added

- **Reception info in the BBS auto-reply.** Contacts without access now get a second line after the auto-reply text with the hops, SNR (and RSSI when known) and the time their message was received, e.g. `Route: 0 hop · SNR: 13.75 · Ricevuto: 30/09/2026 14:27:40`. Toggle it with **Settings → BBS → Add reception info to the auto-reply** (on by default). An empty auto-reply text now sends nothing.

## [0.5.1] - 2026-09-30

### Added

- **Version in Settings.** The BBS card shows the integration version and the version of the panel the browser is running, with a warning when the panel is an older cached copy.

### Fixed

- **Stale panel after an update.** The panel bundle URL now carries the integration version (`?v=…`), so browsers and the HA companion apps load the new panel after an update instead of a cached one.
- **BBS section always reachable.** Settings → BBS is shown even when the companion radio configuration cannot be loaded.

## [0.5.0] - 2026-09-30

### Added

- **Built-in BBS.** Direct messages from authorised contacts get a menu-driven bulletin board system (board, posting, JSON menus with placeholders, session timeout, replies split to the mesh message length) — a port of the external MeshBBS 1.4.0 (PHP + MySQL + automation), which is no longer needed. Contacts without access are recorded as requests, can get a rate-limited auto-reply, trigger an optional `notify.*` service and always fire `meshcore_bbs_request`. BBS admins can manage users, requests and posts over the mesh with `!` commands. Data is stored in `.storage/meshcore_bbs.bbs`; the BBS starts disabled.
- **BBS status and actions on contact names.** ✅ access · ⏸️ suspended · 👑 admin · 📨 request icons in the chat list, node cards and node details; grant / suspend / resume / admin / remove and approve / reject from the node detail dialog and the DM header; **BBS** and **Requests** filters on the Nodes tab.
- **Settings → BBS** with the on/off switch, BBS settings, a JSON menu editor with validation, bulletin-board moderation and import of a MeshBBS MySQL dump.

## [0.4.0] - 2026-09-30

First release of **MeshCore BBS**, a fork of [meshcore-ha-chat](https://github.com/mwolter805/meshcore-ha-chat) by mwolter805. Releases 0.3.1 and earlier below are from the original project (published as "MeshCore Chat").

### Changed

- **Project renamed to MeshCore BBS.** The integration domain is now `meshcore_bbs` (folder `custom_components/meshcore_bbs/`), the sidebar panel is "MeshCore BBS" at `/meshcore-bbs`, and message storage uses `.storage/meshcore_bbs.*` keys. This is a new integration from Home Assistant's point of view: the message archive of an existing MeshCore Chat install (`.storage/meshcore_chat.*`) is not migrated.

### Fixed

- **Managed devices list on Home Assistant 2026.9.** The repeater firmware lookup no longer calls the deprecated `device_registry.async_get_device`, which raises on HA 2026.9; it now uses `async_get_device_by_identifier` scoped to the owning meshcore config entry, with a fallback for older HA versions.

## [0.3.1] - 2026-06-24

### Fixed

- **Blank sidebar panel on older Android System WebViews (GitHub issue #22).** The panel bundle is now down-leveled at build time so it parses on browser engines back to roughly 2018 (Chrome / Android System WebView 64, Safari 12). The Lit 3 runtime ships ES2021 logical-assignment syntax (`??=`, `||=`, `&&=`) that an Android System WebView older than Chromium 85 cannot parse, which left the panel blank in the Home Assistant Android companion app while it rendered correctly in a desktop browser. The build now runs the assembled bundle through `@babel/preset-env` against an explicit `browserslist` floor; behavior on modern engines is unchanged and no new runtime polyfills are added.

## [0.3.0] - 2026-06-18

### Fixed

- **Device-config commands no longer report success on failure (GitHub issue #7).** Setting TX power, coordinates, radio parameters, or path-hash mode from the Settings tab now inspects each command's result: a firmware NACK or an error event surfaces a failure that names the setting that failed, the reason the device reported, and any settings already applied in that request, then stops — instead of silently reporting success while the radio was unchanged.
- **Storage hardening (GitHub issue #6).** A failed save of the message store, unread cursors, or channel scopes no longer risks silent message loss: save failures are caught and the affected conversations stay marked dirty for a passive retry, and message loads validate their on-disk shape and fall back to empty on corrupt data *without* overwriting the file. One aggregated error is logged per failed flush rather than a crash.
- **Channel add / edit / remove no longer fails after an upstream rename.** Saving a channel now calls the core integration's public `fetch_all_channel_info()`; the prior private method had been renamed upstream, which broke channel management with an `AttributeError`.
- **Editing a channel no longer regenerates a custom key.** The Edit Channel dialog now loads a channel's existing key, so changing a channel's region scope (or any other field) preserves a custom key instead of silently re-deriving it from the name — which had caused messages to stop decrypting across nodes.
- **Spurious error toast on contact add / remove.** Routed contact add/remove now treats a body-less OK from the core integration as success, so adding or removing a contact no longer shows an error even though the change took effect.

### Added

- **Per-channel region scope (GitHub issue #2).** Each channel can now be given a MeshCore region scope so sends are limited to that region, with an **All regions** option for an explicit global flood — matching the official app's "Set Scope". Received messages show the inbound scope (the region name, or an "all regions" badge for a global flood); the global label is derived by the panel itself from data the core integration already emits, so it works on a stock upstream install. Requires core meshcore-ha v2.7.0+ and companion firmware v1.10.0+ (see Compatibility).
- **Rich companion device card.** The Settings-tab companion card now renders the same hero tiles managed repeaters/clients get — battery (or USB/mains), signal (RSSI · SNR), radio activity, and message sent/received counts — plus a diagnostics sensor table (noise floor, TX queue), the radio fault flags (Packet Pool / CAD Timeout / RX-Start Timeout) shown as OK/Detected rows, and a 48-hour message-rate graph. The radio-activity tile is a lifetime average of the companion's cumulative TX/RX airtime over uptime (the companion exposes raw airtime rather than the windowed utilisation a repeater reports), and the Messages Received tile annotates the RX error rate from `recv_errors`. The tiles self-hide when their entities are absent, so the card is unchanged unless **Self Diagnostics** is enabled in the upstream meshcore integration.
- **Command dialog improvements.** The Issue Command dialog now shows human-readable values, a live device-response feed, and a distinct "login not confirmed" state; v1.16 firmware command-dialog updates are included.
- **Message-rate chart tooltip** and composer polish in the chat tab.

### Security

- **Disclosure policy and posture doc.** Added `SECURITY.md` (private vulnerability reporting via GitHub, coordinated-disclosure terms, and a Home Assistant trust-model scope note) and `docs/security-posture.md` documenting the threat model and trust boundaries — Lit auto-escaping at the render layer, the admin gate on every device- and config-changing WebSocket command, schema validation, and on-disk message persistence.
- **Automated security scanning.** Added CodeQL (Python + TypeScript), OpenSSF Scorecard, and Dependabot, with a Security section and status badges in the README. All workflow actions are pinned to commit SHAs.

### Compatibility

- **Home Assistant 2024.12+** — unchanged.
- **Core meshcore-ha integration floor raised to v2.7.0** (from v2.6.0). The region scope selector and "All regions" option rely on the message `scope` argument and inbound `region_scope` / `flood_scope` fields added to the core integration in v2.7.0 (released 2026-05-31); the rest of the release works on the prior floor.
- **Companion firmware v1.10.0 or newer** is required for the region scope feature — MeshCore flood-scope support landed in companion firmware v1.10.0.
- **No migration.** Channel keys, stored messages, unread cursors, and saved channel scopes are preserved across the upgrade.

## [0.2.1] - 2026-05-16

### Fixed

- **Custom channel keys (GitHub issue #1).** The "Custom Key" field in
  the Add Channel dialog now correctly accepts a 32-character hex
  string (16 bytes, AES-128) — matching the MeshCore protocol's
  channel-key size and the meshcore_py SDK's validation. Previously
  the field required 64 hex characters and the backend silently
  truncated the input to the first 16 bytes, which meant users
  pasting a normal MeshCore channel key were blocked at validation,
  and users who padded their key to 64 chars only had its first half
  programmed on the radio. Backward compatibility note: channels
  already configured under the prior UI continue to work as-is on
  the radio; re-entering the same key elsewhere now requires only
  the first 32 hex characters of whatever was originally typed.

- **Unread badge clearing on channel re-entry.** When clicking back into
  a busy channel with unread messages exceeding one viewport, the badge
  no longer disappears prematurely and the viewport now lands at the
  unread divider (not at the conversation tail). The fix landed in two
  layers across two commits: the first removed an active-entity-zero
  heuristic in the badge state, added `overflow-anchor: none` to the
  chat container, and gated mark-read during the post-switch scroll;
  the second simplified those gates by blocking the underlying race —
  lazy-load-older firing on the synthetic scroll event that follows
  Lit's re-render after `_fetchAroundAnchor`, before
  `_doScrollWithRetry` positions the divider. Now mark-read fires
  reliably when the user can see the latest message (small or
  fully-visible-unread conversations) and stays when the tail is
  below viewport (long-history channel re-entry).

- **Unread divider** no longer renders when only outgoing groups follow
  the anchor — fixes a divider-projection inconsistency surfaced during
  multi-entry switching tests.

### Refactored

- **UnreadController architecture (Phases 2-4).** The frontend's unread
  state is now consolidated in a single panel-owned `UnreadController`.
  Phase 2 introduces the controller and migrates the badge data
  subscription. Phase 3 moves the per-conversation read-progress state
  machine into the controller (anchor, grace window, post-switch timer,
  dedup guard). Phase 4 centralizes the "↓ N new" pill label and the
  `cursorAtTail` query.

### CI

- **Validate workflow** now skips on non-canonical repos via a
  `github.repository` guard, eliminating spurious HACS-validation
  failures on the private dev mirror.

### Compatibility

Same Home Assistant version floor as 0.2.0 (HA 2024.12+); same
core integration version floor (meshcore-ha v2.6.0+).

## [0.2.0] - 2026-05-09

First tagged release. Active development continues; treat this as an early preview, not a stable LTS.

### Security audit complete

A pre-public-release audit landed for this version:

- **Admin gate on 15 destructive WebSocket handlers** (b45cfc8). Non-admin HA users can no longer wipe channel keys, regenerate the companion identity, reconfigure the radio, or issue commands to managed repeaters. See [INSTRUCTIONS.md → Permissions](./INSTRUCTIONS.md#permissions) for the full list.
- **XSS hardening** (58454b8). Mention rendering escapes HTML instead of using `unsafeHTML`; regression test covers the previous attack vector.
- **Identity-dialog hardening** (21e5454). Hex validation on key fields; IMPORT flow requires typed confirmation.

### What's in 0.2.0

- Sidebar chat panel with channels, DMs, contact list, and per-message route popups (hops, SNR, RSSI, exact receive timestamp).
- Persistent message store (default 90-day / 500-msg per conversation, configurable to 1–365 days / 50–5000 msgs).
- Cross-conversation date-range search.
- Unread-count cursor — survives reloads, gates auto-mark-read on user engagement, refreshes on entry switch.
- Devices tab — per-device sensor tiles (SNR, RSSI, airtime, battery), neighbor tables, quick-action buttons, Issue Command, Reboot, Start OTA Update.
- Nodes tab — full network discovery view, filterable by Added / Discovered and by node type, with last-heard sort and stale-record cleanup.
- Settings tab — radio configuration (TX power, frequency, bandwidth, spreading factor, coding rate, path-hash mode), rename, location, Key Management.
- Trace dialog with Discover, Select repeaters, and Enter path modes.

### Requirements

- Home Assistant **2024.12** or newer.
- Core [meshcore-ha](https://github.com/meshcore-dev/meshcore-ha) integration **v2.6.0** or newer (released 2026-04-27). 0.2.0 of the chat companion calls the structured query services (`meshcore.get_contacts`, `meshcore.trace`) introduced in 2.6.0.

### Installation

Via HACS — see the [README's Installation section](./README.md#installation). After install, restart HA and add the integration from **Settings → Devices & Services → Add Integration → MeshCore BBS**.

### Known issues

- The **Discover** trace mode (flood path discovery) sometimes silently drops on multi-hop routes. If a Discover trace fails, switch to **Select repeaters** or **Enter path** in the trace dialog to specify the route explicitly.

### Upgrading

First tagged release — no migration. If you've been tracking `main` via HACS, switch HACS to track tagged releases and pin v0.2.0.
