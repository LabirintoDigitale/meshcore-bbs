import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { getContactsPaginated, setContactRoute } from '../api';
import type { Contact, HomeAssistant } from '../types';
import { attachDialogA11y } from '../utils/dialog-a11y';

/** Split a stored out_path into per-hop hashes ("65227de3", mode 1 → ["6522", "7de3"]). */
export function routeHops(outPath: string, outPathLen: number, hashMode: number): string[] {
  if (!outPath || outPathLen <= 0) return [];
  const width = (Math.max(0, hashMode) + 1) * 2;
  const hops: string[] = [];
  for (let i = 0; i < outPathLen && (i + 1) * width <= outPath.length; i++) {
    hops.push(outPath.substring(i * width, (i + 1) * width).toLowerCase());
  }
  return hops;
}

/**
 * Choose the repeaters a contact's direct messages go through (the
 * contact's stored route on the companion radio), or reset it to flood.
 * Channel messages always flood and are not affected.
 */
@customElement('meshcore-route-dialog')
export class RouteDialog extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: Object }) contact?: Contact;
  @property({ type: String }) entryId?: string;
  @property({ type: Boolean }) open = false;

  @state() private _repeaters: Contact[] = [];
  @state() private _selected: Contact[] = [];
  @state() private _search = '';
  @state() private _loading = false;
  @state() private _busy = false;
  @state() private _error = '';

  constructor() {
    super();
    attachDialogA11y(this, { isOpen: () => this.open, onEscape: () => this._close() });
  }

  static styles = css`
    :host { display: contents; }
    .backdrop {
      position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5);
      display: flex; align-items: center; justify-content: center; z-index: 1001;
    }
    .dialog {
      background: var(--card-background-color, #fff); color: var(--primary-text-color);
      border-radius: 12px; width: min(460px, calc(100vw - 32px)); max-height: calc(100vh - 48px);
      display: flex; flex-direction: column; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    }
    .head { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px 8px; }
    .title { font-size: 16px; font-weight: 600; }
    .close { background: none; border: none; font-size: 18px; cursor: pointer; color: var(--secondary-text-color); }
    .body { padding: 0 20px 12px; overflow: auto; }
    .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
      color: var(--secondary-text-color); margin: 12px 0 6px; }
    .hint { font-size: 12px; color: var(--secondary-text-color); line-height: 1.4; }
    .current { font-family: var(--code-font-family, monospace); font-size: 13px; }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; min-height: 32px; }
    .chip { display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 14px;
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12); font-size: 12px; }
    .chip button { background: none; border: none; cursor: pointer; font-size: 13px; padding: 0 2px;
      color: var(--secondary-text-color); }
    .arrow { color: var(--secondary-text-color); font-size: 12px; }
    input[type='text'] { width: 100%; box-sizing: border-box; padding: 8px 10px; border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0); background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color); font-size: 14px; }
    .list { max-height: 220px; overflow: auto; margin-top: 6px; border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px; }
    .item { display: flex; justify-content: space-between; gap: 8px; padding: 8px 10px; cursor: pointer;
      font-size: 13px; border-top: 1px solid var(--divider-color, #e0e0e0); }
    .item:first-child { border-top: none; }
    .item:hover { background: var(--secondary-background-color, #f5f5f5); }
    .item code { color: var(--secondary-text-color); font-size: 12px; }
    .foot { display: flex; flex-wrap: wrap; gap: 8px; padding: 12px 20px 16px;
      border-top: 1px solid var(--divider-color, #e0e0e0); }
    .foot button { padding: 8px 14px; border-radius: 8px; border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff); color: var(--primary-text-color); cursor: pointer; font-size: 13px; }
    .foot button.primary { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff); }
    .foot button:disabled { opacity: 0.6; cursor: default; }
    .spacer { flex: 1; }
    .error { color: var(--error-color, #db4437); font-size: 12px; margin-top: 8px; }
  `;

  willUpdate(changed: Map<string, unknown>) {
    if ((changed.has('open') || changed.has('contact')) && this.open) {
      this._selected = [];
      this._search = '';
      this._error = '';
      void this._loadRepeaters();
    }
  }

  private async _loadRepeaters() {
    if (!this.hass) return;
    this._loading = true;
    try {
      const res = await getContactsPaginated(this.hass, 'all', {
        nodeType: 2, limit: 1000, sortBy: 'name', entryId: this.entryId,
      });
      this._repeaters = res.contacts;
    } finally {
      this._loading = false;
    }
  }

  private _nameForHop(hop: string): string {
    const match = this._repeaters.filter((r) => r.public_key?.toLowerCase().startsWith(hop));
    return match.length === 1 ? `${match[0].adv_name} (${hop})` : hop;
  }

  private _renderCurrent() {
    const c = this.contact!;
    if (c.out_path_len < 0) return html`<span class="current">Flood (automatic)</span>`;
    const hops = routeHops(c.out_path, c.out_path_len, c.out_path_hash_mode);
    if (hops.length === 0) return html`<span class="current">Direct (no repeaters)</span>`;
    return html`<span class="current">${hops.map((h) => this._nameForHop(h)).join(' → ')}</span>`;
  }

  render() {
    if (!this.open || !this.contact) return nothing;
    const isAdmin = this.hass?.user?.is_admin ?? true;
    const q = this._search.trim().toLowerCase();
    const available = this._repeaters.filter((r) =>
      !this._selected.includes(r) &&
      (!q || r.adv_name.toLowerCase().includes(q) || r.public_key.toLowerCase().includes(q)));

    return html`
      <div class="backdrop" @click=${this._close}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label="Direct message route"
          @click=${(e: Event) => e.stopPropagation()}>
          <div class="head">
            <div class="title">Route to ${this.contact.adv_name}</div>
            <button class="close" aria-label="Close" @click=${this._close}>✕</button>
          </div>
          <div class="body">
            <div class="hint">Direct messages to this contact go through these repeaters, in order.
              Channel messages always flood and are not affected. If a hop can't reach the next one,
              the message won't be delivered.</div>
            <div class="label">Current route</div>
            ${this._renderCurrent()}
            <div class="label">New route</div>
            <div class="chips">
              <span class="chip">You</span>
              ${this._selected.map((r, i) => html`
                <span class="arrow">→</span>
                <span class="chip">${r.adv_name}
                  <button aria-label="Remove ${r.adv_name}"
                    @click=${() => { this._selected = this._selected.filter((_, j) => j !== i); }}>✕</button>
                </span>`)}
              <span class="arrow">→</span>
              <span class="chip">${this.contact.adv_name}</span>
            </div>
            <div class="label">Add repeater</div>
            <input type="text" placeholder="Search repeaters…" .value=${this._search}
              @input=${(e: Event) => { this._search = (e.target as HTMLInputElement).value; }}>
            <div class="list">
              ${this._loading ? html`<div class="item">Loading…</div>` : nothing}
              ${!this._loading && available.length === 0 ? html`<div class="item">No repeaters found</div>` : nothing}
              ${available.map((r) => html`
                <div class="item" @click=${() => { this._selected = [...this._selected, r]; }}>
                  <span>${r.adv_name}</span><code>${r.public_key.substring(0, 8)}</code>
                </div>`)}
            </div>
            ${this._error ? html`<div class="error">${this._error}</div>` : nothing}
          </div>
          <div class="foot">
            <button ?disabled=${this._busy || !isAdmin} @click=${() => this._apply(true)}>Reset to flood</button>
            <span class="spacer"></span>
            <button @click=${this._close}>Cancel</button>
            <button class="primary" ?disabled=${this._busy || !isAdmin || this._selected.length === 0}
              @click=${() => this._apply(false)}>${this._busy ? 'Saving…' : 'Save route'}</button>
          </div>
        </div>
      </div>`;
  }

  private async _apply(reset: boolean) {
    if (!this.hass || !this.contact) return;
    this._busy = true;
    this._error = '';
    try {
      const res = await setContactRoute(
        this.hass,
        this.contact.pubkey_prefix,
        reset ? [] : this._selected.map((r) => r.public_key),
        { reset, entryId: this.entryId },
      );
      this.dispatchEvent(new CustomEvent('route-changed', {
        detail: { contact: this.contact, ...res },
        bubbles: true,
        composed: true,
      }));
      this.dispatchEvent(new CustomEvent('contacts-changed', { bubbles: true, composed: true }));
      this._close();
    } catch (err) {
      this._error = (err as { message?: string })?.message ?? String(err);
    } finally {
      this._busy = false;
    }
  }

  private _close = () => {
    this.open = false;
    this.dispatchEvent(new CustomEvent('route-dialog-closed', { bubbles: true, composed: true }));
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-route-dialog': RouteDialog;
  }
}
