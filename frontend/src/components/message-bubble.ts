import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { ChatMessage, MessageGroup, DeliveryStatus } from '../types';
import { formatTimestamp } from '../chat/message-parser';
import { attachDialogA11y } from '../utils/dialog-a11y';
import { nodeDirectory, NodeDirectoryController } from '../chat/node-directory';

/**
 * Generate a deterministic color from a string (e.g., pubkey prefix).
 */
function senderColorFromPrefix(prefix: string): string {
  let hash = 0;
  for (let i = 0; i < prefix.length; i++) {
    hash = ((hash << 5) - hash) + prefix.charCodeAt(i);
  }
  const colors = ['#e57373', '#64b5f6', '#81c784', '#ffb74d', '#ba68c8', '#4dd0e1', '#fff176', '#a1887f'];
  return colors[Math.abs(hash) % colors.length];
}

@customElement('meshcore-message-bubble')
export class MessageBubble extends LitElement {
  @property({ type: Object }) group?: MessageGroup;
  @property({ type: Object }) message?: ChatMessage;
  @property({ type: String }) timestampFormat: 'relative' | 'time' | 'datetime' = 'relative';

  @state() private _selectedMessage: ChatMessage | null = null;
  // Re-renders when the node directory (hop hash → name) reloads.
  protected readonly nodeDirectoryController = new NodeDirectoryController(this);

  constructor() {
    super();
    // Focus trap + Escape closes the message-action sheet.
    attachDialogA11y(this, {
      isOpen: () => this._selectedMessage !== null,
      onEscape: () => { this._selectedMessage = null; },
      getScope: () => this.shadowRoot?.querySelector('.message-dialog'),
    });
  }

  static styles = css`
    :host {
      display: block;
    }

    .message-group {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
    }

    .message-group.outgoing {
      align-items: flex-end;
    }

    .message-group.incoming {
      align-items: flex-start;
    }

    .message-group.system {
      align-items: center;
    }

    .sender {
      font-size: 12px;
      font-weight: 600;
      color: var(--sender-color, var(--primary-color, #03a9f4));
      margin-bottom: 2px;
      padding: 0 4px;
      max-width: 85%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .message-group.outgoing .sender {
      display: none;
    }

    .bubble {
      max-width: 85%;
      padding: 8px 12px;
      border-radius: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      position: relative;
      cursor: pointer;
      transition: opacity 0.15s;
      line-height: 1.4;
      font-size: 14px;
    }

    .bubble:active {
      opacity: 0.7;
    }

    .bubble.search-highlight {
      animation: highlight-flash 2.5s ease-out;
    }

    @keyframes highlight-flash {
      0%, 20% {
        box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 3, 169, 244), 0.6);
      }
      100% {
        box-shadow: 0 0 0 3px transparent;
      }
    }

    .bubble + .bubble {
      margin-top: 2px;
    }

    .bubble.incoming {
      background: var(--bubble-incoming-bg, var(--secondary-background-color, #e8e8e8));
      color: var(--bubble-incoming-text, var(--primary-text-color, #212121));
      border-bottom-left-radius: 4px;
    }

    .bubble.incoming:first-of-type {
      border-top-left-radius: 16px;
    }

    .bubble.outgoing {
      background: var(--bubble-outgoing-bg, var(--primary-color, #03a9f4));
      color: var(--bubble-outgoing-text, #fff);
      border-bottom-right-radius: 4px;
    }

    .bubble.outgoing:first-of-type {
      border-top-right-radius: 16px;
    }

    .bubble.system {
      background: transparent;
      color: var(--system-msg-color, var(--secondary-text-color, #727272));
      font-style: italic;
      font-size: 13px;
      text-align: center;
      cursor: default;
      padding: 4px 12px;
    }

    .message-text {
      white-space: pre-wrap;
    }

    .message-text .mention {
      background: var(--mention-bg, rgba(3, 169, 244, 0.15));
      color: var(--mention-text, var(--primary-color, #03a9f4));
      font-weight: 600;
      padding: 1px 4px;
      border-radius: 4px;
    }

    .bubble.outgoing .message-text .mention {
      background: rgba(255, 255, 255, 0.25);
      color: #fff;
    }

    .timestamp {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      margin-top: 2px;
      padding: 0 4px;
    }

    .bubble.outgoing .timestamp {
      color: rgba(255, 255, 255, 0.6);
    }

    .bubble.incoming .timestamp {
      color: var(--secondary-text-color, #727272);
    }

    .message-group.outgoing .timestamp {
      text-align: right;
    }

    .route-info {
      font-size: 10px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      padding: 2px 4px;
      font-family: monospace;
    }

    .route-info-inline {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      font-family: monospace;
      margin-top: 2px;
      padding: 0 4px;
      opacity: 0.7;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .delivery-status {
      color: inherit;
    }

    .flood-scope {
      color: inherit;
      opacity: 0.85;
      white-space: nowrap;
    }

    .message-dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .message-dialog {
      background: #333;
      border: 2px solid var(--primary-color, #03a9f4);
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      min-width: 240px;
      max-width: 300px;
      overflow: hidden;
      z-index: 21;
    }

    .message-dialog-preview {
      padding: 12px 16px;
      font-size: 13px;
      color: var(--secondary-text-color);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 280px;
    }

    .message-dialog-action {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 14px 16px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      text-align: left;
      min-height: 48px;
      transition: background 0.15s;
    }

    .message-dialog-action:hover,
    .message-dialog-action:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }

    .message-dialog-action + .message-dialog-action {
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .message-dialog-route {
      padding: 12px 16px;
      font-size: 12px;
      color: var(--secondary-text-color);
      border-top: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      font-family: monospace;
      word-break: break-all;
      transition: background 0.15s;
    }

    .route-entry + .route-entry {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px dashed var(--divider-color, #e0e0e0);
    }

    .route-hops {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px 6px;
      font-family: inherit;
      color: var(--primary-text-color);
    }

    .route-hop code {
      font-size: 11px;
      color: var(--secondary-text-color);
      margin-right: 3px;
    }

    .route-more,
    .route-sep {
      color: var(--secondary-text-color);
    }

    .route-meta {
      margin-top: 4px;
    }

    .message-dialog-route:hover,
    .message-dialog-route:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }
  `;

  render() {
    if (this.group) {
      return html`
        ${this._renderGroup()}
        ${this._selectedMessage ? this._renderMessageDialog(this._selectedMessage) : html``}
      `;
    }
    return html``;
  }

  private _renderGroup() {
    if (!this.group) return html``;

    const g = this.group;
    const classes = {
      'message-group': true,
      incoming: !g.isOutgoing && !g.isSystem,
      outgoing: g.isOutgoing,
      system: g.isSystem,
    };

    // Determine sender color
    let senderColor: string | undefined;
    if (g.messages.length > 0) {
      const firstMsg = g.messages[0];
      senderColor = firstMsg.senderColor || senderColorFromPrefix(g.sender);
    }

    return html`
      <div class=${this._classMap(classes)} style=${senderColor ? `--sender-color: ${senderColor}` : ''}>
        ${!g.isSystem && !g.isOutgoing
          ? html`<div class="sender">${g.sender}</div>`
          : html``}
        ${g.messages.map((msg) => this._renderBubble(msg))}
      </div>
    `;
  }

  private _renderBubble(msg: ChatMessage) {
    const bubbleClasses = {
      bubble: true,
      incoming: !msg.isOutgoing && !msg.isSystem,
      outgoing: msg.isOutgoing,
      system: msg.isSystem,
    };

    const statusLabel = msg.isOutgoing && msg.deliveryStatus ? this._getStatusLabel(msg.deliveryStatus) : '';
    const ts = formatTimestamp(msg.timestamp, this.timestampFormat);
    // Hop count for received messages, next to the time.
    const hops = !msg.isOutgoing && !msg.isSystem ? messageHops(msg.rxLogData) : null;
    const hopsLabel = hops === null ? '' : `${hops} hop${hops !== 1 ? 's' : ''}`;
    // Inbound region scope — incoming bubbles only. "*" → "🌐 all regions",
    // a region name renders verbatim, absent renders nothing. The outbound
    // scope is shown by the thread-header chip, so outgoing is unaffected.
    const scopeLabel =
      !msg.isOutgoing && !msg.isSystem && msg.floodScope
        ? msg.floodScope === '*'
          ? '🌐 all regions'
          : msg.floodScope
        : '';

    return html`
      <div class=${this._classMap(bubbleClasses)} data-msg-id=${msg.id} @click=${(e: Event) => { e.stopPropagation(); this._selectedMessage = msg; }}>
        <div class="message-text">${this._renderTextWithMentions(msg.text, msg.mentions)}</div>
        <div class="timestamp">${statusLabel ? html`<span class="delivery-status">${statusLabel}</span> · ` : ''}${ts}${hopsLabel ? html` · <span class="hops">${hopsLabel}</span>` : ''}${scopeLabel ? html` · <span class="flood-scope">${scopeLabel}</span>` : ''}</div>
      </div>
    `;
  }

  /**
   * Get inline delivery status label for the timestamp line.
   * Shows "Repeated" for messages heard by repeaters, "No repeats" otherwise.
   * Full details (repeater count, RTT) are in the click-to-open dialog.
   */
  private _getStatusLabel(deliveryStatus: DeliveryStatus): string {
    const status = deliveryStatus.status;
    const repeats = deliveryStatus.repeaterCount ?? 0;

    switch (status) {
      case 'pending':
      case 'waiting':
        return 'Waiting...';
      case 'sent':
        // DMs are confirmed by the recipient's ACK; "Unheard" (no repeater
        // echo) only makes sense for channel messages.
        if (deliveryStatus.direct) return deliveryStatus.ackReceived ? 'Delivered' : 'No ACK';
        return repeats > 0 ? 'Repeated' : 'Unheard';
      case 'delivered':
        return 'Delivered';
      case 'failed':
        return 'Failed';
      case 'unconfirmed':
      default:
        return 'Sent';
    }
  }

  private _renderTextWithMentions(text: string, mentions: string[]) {
    if (mentions.length === 0) {
      // No mentions to highlight — return raw text. Lit auto-escapes
      // string interpolations in html`...` templates.
      return text;
    }

    // Build a single regex matching either @[Name] or @Name forms for any
    // known mention. Escape regex special chars in mention names so a name
    // containing parentheses or other regex metacharacters can't break the
    // pattern or inject capture groups.
    const escaped = mentions.map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(
      `@\\[(${escaped.join('|')})\\]|@(${escaped.join('|')})\\b`,
      'g',
    );

    const parts: (string | ReturnType<typeof html>)[] = [];
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = pattern.exec(text)) !== null) {
      if (m.index > last) parts.push(text.slice(last, m.index));
      const name = m[1] ?? m[2];
      parts.push(html`<span class="mention">@${name}</span>`);
      last = m.index + m[0].length;
    }
    if (last < text.length) parts.push(text.slice(last));
    return parts;
  }

  /**
   * One heard path: each hop as "CODE Name" (resolved from the known
   * nodes; "+N" when other nodes share the code), then SNR / RSSI.
   */
  private _renderRouteEntry(e: Record<string, unknown>) {
    const nodes = (e.path_nodes as string[] | undefined) ?? [];
    const hops = e.hop_count as number | undefined;
    const meta: string[] = [];
    if (typeof e.snr === 'number') meta.push(`SNR: ${e.snr}`);
    if (typeof e.rssi === 'number') meta.push(`RSSI: ${e.rssi}`);
    return html`
      <div class="route-entry">
        <div class="route-hops">
          ${nodes.length
            ? nodes.map((n, i) => {
                const r = nodeDirectory.resolve(n);
                const title = r.candidates.length > 1 ? `Possible nodes: ${r.candidates.join(', ')}` : '';
                return html`${i ? html`<span class="route-sep">›</span>` : ''}<span class="route-hop" title=${title}>
                  <code>${n.substring(0, 4).toUpperCase()}</code>
                  <span class="route-name">${r.name ?? '?'}${r.others ? html`<span class="route-more"> +${r.others}</span>` : ''}</span></span>`;
              })
            : html`<span>${hops ? `${hops} hop${hops !== 1 ? 's' : ''}` : '0 hops (heard directly)'}</span>`}
        </div>
        ${meta.length ? html`<div class="route-meta">${nodes.length ? `${nodes.length} hop${nodes.length !== 1 ? 's' : ''} · ` : ''}${meta.join(' · ')}</div>` : ''}
      </div>`;
  }

  private _renderMessageDialog(msg: ChatMessage) {
    const hasRoute = msg.rxLogData && msg.rxLogData.length > 0;
    const routeText = hasRoute ? msg.rxLogData!.map(routeEntryText).join(' | ') : '';

    const fullDateTime = msg.timestamp.toLocaleString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
    });
    const footerStyle = 'padding: 8px 16px; font-size: 12px; color: var(--secondary-text-color); border-top: 1px solid var(--divider-color, #e0e0e0);';

    return html`
      <div class="message-dialog-overlay" @click=${() => { this._selectedMessage = null; }}>
        <div class="message-dialog"
             role="dialog" aria-modal="true" aria-label="Message actions"
             @click=${(e: Event) => e.stopPropagation()}>
          <div class="message-dialog-preview">${msg.text}</div>
          <button class="message-dialog-action" @click=${() => this._copyText(msg.text)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>Copy Text
          </button>
          ${!msg.isOutgoing && !msg.isSystem
            ? html`
                <button class="message-dialog-action" @click=${() => this._replyToSender(msg)}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>Reply
                </button>
              `
            : html``}
          ${hasRoute
            ? html`
                <div class="message-dialog-route" title="Click to copy the route"
                  @click=${() => this._copyText(routeText)}>
                  ${msg.rxLogData!.map((e) => this._renderRouteEntry(e))}
                </div>
              `
            : html``}
          <div style=${footerStyle}>
            ${msg.isOutgoing ? 'Sent' : 'Received'}: ${fullDateTime}
          </div>
          ${msg.isOutgoing && msg.deliveryStatus
            ? html`
                <div style=${footerStyle}>
                  ${msg.deliveryStatus.direct
                    ? (msg.deliveryStatus.ackReceived || msg.deliveryStatus.status === 'delivered'
                      ? 'ACK received — delivered'
                      : 'No ACK received — the recipient did not confirm (off, out of range or wrong route)')
                    : (msg.deliveryStatus.repeaterCount ?? 0) > 0
                    ? `${msg.deliveryStatus.repeaterCount} repeater${msg.deliveryStatus.repeaterCount === 1 ? '' : 's'} responded`
                    : 'No repeaters responded'}${!msg.deliveryStatus.direct && msg.deliveryStatus.ackReceived ? ' · ACK received' : ''}${msg.deliveryStatus.roundTripMs ? ` · ${msg.deliveryStatus.roundTripMs}ms RTT` : ''}
                </div>
              `
            : html``}
        </div>
      </div>
    `;
  }

  private async _copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    this._selectedMessage = null;
  }

  /** Reply pre-fills the mention plus how the message reached us (see replyText). */
  private _replyToSender(msg: ChatMessage) {
    this.dispatchEvent(
      new CustomEvent('reply-to-sender', {
        detail: { mention: replyText(msg) },
        bubbles: true,
        composed: true,
      }),
    );
    this._selectedMessage = null;
  }

  private _classMap(obj: Record<string, boolean>): string {
    return Object.entries(obj)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(' ');
  }
}

/** One rx_log entry as text: "23BD > 5982 > 1029 · SNR: 8.5 · RSSI: -88". */
export function routeEntryText(e: Record<string, unknown>): string {
  const nodes = e.path_nodes as string[] | undefined;
  const hops = e.hop_count as number | undefined;
  const snr = e.snr as number | undefined;
  const rssi = e.rssi as number | undefined;
  const parts: string[] = [];
  if (nodes && nodes.length > 0) {
    parts.push(nodes.map((n: string) => n.substring(0, 4).toUpperCase()).join(' > '));
  } else if (hops !== undefined) {
    parts.push(`${hops} hop${hops !== 1 ? 's' : ''}`);
  } else {
    // No path_nodes / hop_count → packet was heard directly by
    // the local node. Label as "0 hops" rather than "direct" so
    // it isn't confusable with the "direct message" message-type
    // for channel broadcasts that happened to be in radio range.
    parts.push('0 hops');
  }
  if (snr !== undefined && snr !== null) parts.push(`SNR: ${snr}`);
  if (rssi !== undefined && rssi !== null) parts.push(`RSSI: ${rssi}`);
  return parts.join(' · ');
}

/**
 * Reply text in the style of the mesh "ack" bots:
 * "@[Alfa 10] | 9a92,86a8,146c (3 hops) | SNR: -9.25 dB | RSSI: -122 dBm | Received at: 14:56:15 "
 * Uses the first route (a channel message heard over several paths would
 * otherwise overflow the mesh message length); compact on purpose.
 */
export function replyText(msg: Pick<ChatMessage, 'sender' | 'timestamp' | 'rxLogData'>): string {
  const parts = [`@[${msg.sender}]`];
  const e = msg.rxLogData && msg.rxLogData.length > 0 ? msg.rxLogData[0] : null;
  if (e) {
    const nodes = e.path_nodes as string[] | undefined;
    const hc = e.hop_count;
    if (nodes && nodes.length > 0) {
      const path = nodes.map((n: string) => n.substring(0, 4).toLowerCase()).join(',');
      parts.push(`${path} (${nodes.length} hop${nodes.length !== 1 ? 's' : ''})`);
    } else if (typeof hc === 'number' && hc > 0) {
      parts.push(`${hc} hop${hc !== 1 ? 's' : ''}`);
    } else {
      parts.push('direct (0 hops)');
    }
    if (typeof e.snr === 'number') parts.push(`SNR: ${e.snr} dB`);
    if (typeof e.rssi === 'number') parts.push(`RSSI: ${e.rssi} dBm`);
  }
  const t = msg.timestamp;
  const pad = (n: number) => String(n).padStart(2, '0');
  parts.push(`Received at: ${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`);
  return `${parts.join(' | ')} `;
}

/**
 * Fewest hops over which a received message was heard, or null when the
 * message carries no route data. Uses path_nodes when present, else
 * hop_count; an entry with neither was heard directly (0 hops).
 */
export function messageHops(rxLogData: Array<Record<string, unknown>> | undefined): number | null {
  if (!rxLogData || rxLogData.length === 0) return null;
  let best: number | null = null;
  for (const e of rxLogData) {
    const nodes = e.path_nodes as string[] | undefined;
    const hc = e.hop_count;
    const hops = nodes && nodes.length > 0 ? nodes.length : typeof hc === 'number' ? hc : 0;
    if (best === null || hops < best) best = hops;
  }
  return best;
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-message-bubble': MessageBubble;
  }
}
