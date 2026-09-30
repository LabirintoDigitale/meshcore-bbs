import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { bbsRequestOp, bbsUserOp } from '../api';
import { bbsState, BbsStateController } from '../bbs/bbs-state';
import type { BbsUserOp, HomeAssistant } from '../types';
import { bbsStatusLabel } from './bbs-badge';

type Action = BbsUserOp | 'approve' | 'reject';

/**
 * BBS section for a single contact: current status plus the actions that
 * make sense for it (grant / suspend / resume / admin / remove, or
 * approve / reject a pending request). Used in the node detail dialog
 * and the chat conversation header. Actions are admin-only; other users
 * just see the status.
 */
@customElement('meshcore-bbs-actions')
export class BbsActions extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: String }) pubkey = '';
  @property({ type: String }) name = '';

  @state() private _busy: Action | null = null;
  @state() private _confirmRemove = false;
  @state() private _message = '';
  @state() private _error = '';

  // Re-renders this element when the shared BBS state changes.
  protected readonly bbsController = new BbsStateController(this);

  static styles = css`
    :host { display: block; }
    .status {
      font-size: 13px;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }
    .status.muted { color: var(--secondary-text-color); }
    .request-text {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
      font-style: italic;
      overflow-wrap: anywhere;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    button {
      flex: 1 1 auto;
      min-width: 110px;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
      cursor: pointer;
    }
    button:hover:not(:disabled) { background: var(--secondary-background-color, #f5f5f5); }
    button:disabled { opacity: 0.6; cursor: default; }
    button.primary {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }
    button.danger { color: var(--error-color, #db4437); }
    .feedback { font-size: 12px; margin-top: 8px; color: var(--secondary-text-color); }
    .feedback.error { color: var(--error-color, #db4437); }
    .disabled-note { font-size: 12px; color: var(--secondary-text-color); margin-top: 8px; }
  `;

  willUpdate(changed: Map<string, unknown>) {
    // Idempotent: only (re)binds when the WS connection changes.
    if (changed.has('hass') && this.hass) bbsState.attach(this.hass);
    // The dialog hosting this element is reused for other contacts.
    if (changed.has('pubkey')) {
      this._message = '';
      this._error = '';
      this._confirmRemove = false;
    }
  }

  render() {
    if (!this.pubkey) return nothing;
    if (!bbsState.snapshot) {
      return html`<div class="status muted">${bbsState.error ? `BBS unavailable: ${bbsState.error}` : 'Loading BBS…'}</div>`;
    }
    const status = bbsState.statusFor(this.pubkey);
    const isAdmin = this.hass?.user?.is_admin ?? false;
    const label = bbsStatusLabel(status) || 'No BBS access';

    return html`
      <div class="status ${status.access === 'none' && !status.request ? 'muted' : ''}">
        ${label}${status.user && status.user.name !== this.name ? html` — as “${status.user.name}”` : nothing}
      </div>
      ${status.request ? html`
        <div class="request-text">
          ${status.request.hits} message(s), last ${new Date(status.request.last_seen * 1000).toLocaleString()}
          ${status.request.last_text ? html`: “${status.request.last_text}”` : nothing}
        </div>` : nothing}
      ${isAdmin ? this._renderButtons(status) : nothing}
      ${this._message ? html`<div class="feedback">${this._message}</div>` : nothing}
      ${this._error ? html`<div class="feedback error">${this._error}</div>` : nothing}
      ${!bbsState.enabled ? html`<div class="disabled-note">The BBS is off — enable it in Settings → BBS.</div>` : nothing}
    `;
  }

  private _renderButtons(status: ReturnType<typeof bbsState.statusFor>) {
    const btn = (action: Action, label: string, cls = '') => html`
      <button class=${cls} ?disabled=${this._busy !== null} @click=${() => this._run(action)}>
        ${this._busy === action ? '…' : label}
      </button>`;

    if (this._confirmRemove) {
      return html`
        <div class="status">Remove ${this.name || this.pubkey} from the BBS?</div>
        <div class="actions">
          ${btn('del', 'Remove', 'danger')}
          <button @click=${() => { this._confirmRemove = false; }}>Cancel</button>
        </div>`;
    }
    if (status.request) {
      return html`<div class="actions">
        ${btn('approve', 'Approve', 'primary')}
        ${btn('reject', 'Reject', 'danger')}
      </div>`;
    }
    if (!status.user) {
      return html`<div class="actions">${btn('add', 'Add to BBS', 'primary')}</div>`;
    }
    return html`<div class="actions">
      ${status.access === 'active' ? btn('off', 'Suspend') : btn('on', 'Resume', 'primary')}
      ${status.admin ? btn('unadmin', 'Remove admin') : btn('admin', 'Make admin')}
      <button class="danger" ?disabled=${this._busy !== null}
        @click=${() => { this._confirmRemove = true; }}>Remove from BBS</button>
    </div>`;
  }

  private async _run(action: Action) {
    if (!this.hass) return;
    this._busy = action;
    this._message = '';
    this._error = '';
    try {
      const res = action === 'approve' || action === 'reject'
        ? await bbsRequestOp(this.hass, action, bbsState.statusFor(this.pubkey).request?.pubkey ?? this.pubkey, this.name)
        : await bbsUserOp(this.hass, action, this.pubkey, action === 'add' ? this.name : '');
      this._message = res.message;
      this._confirmRemove = false;
      await bbsState.refresh();
    } catch (err) {
      this._error = (err as { message?: string })?.message ?? String(err);
    } finally {
      this._busy = null;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-bbs-actions': BbsActions;
  }
}
