import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { getPrefs, setPrefs, type PanelPrefs } from '../api';

/**
 * Settings → Chat: panel-wide chat preferences (stored in Home Assistant,
 * so they apply on every device).
 */
@customElement('meshcore-chat-prefs')
export class ChatPrefs extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;

  @state() private _prefs: PanelPrefs | null = null;
  @state() private _saving = false;
  @state() private _error = '';

  static styles = css`
    :host { display: block; }
    .card {
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 16px;
    }
    .card-title { font-size: 15px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 12px; }
    .row { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--primary-text-color); }
    .row input { margin-top: 3px; }
    .sub { font-size: 13px; color: var(--secondary-text-color); margin: 4px 0 0; line-height: 1.4; }
    .error { color: var(--error-color, #db4437); font-size: 12px; margin-top: 8px; }
  `;

  protected firstUpdated(): void {
    void this._load();
  }

  private async _load() {
    if (!this.hass) return;
    try {
      this._prefs = await getPrefs(this.hass);
    } catch (err) {
      this._error = (err as { message?: string })?.message ?? String(err);
    }
  }

  private async _set(changes: Partial<PanelPrefs>) {
    if (!this.hass) return;
    this._saving = true;
    this._error = '';
    try {
      this._prefs = await setPrefs(this.hass, changes);
    } catch (err) {
      this._error = (err as { message?: string })?.message ?? String(err);
    } finally {
      this._saving = false;
    }
  }

  render() {
    const p = this._prefs;
    const admin = this.hass?.user?.is_admin ?? true;
    return html`
      <div class="card">
        <div class="card-title">Chat</div>
        <label class="row">
          <input type="checkbox" .checked=${!!p?.ignore_channel_unread} ?disabled=${!p || this._saving || !admin}
            @change=${(e: Event) => this._set({ ignore_channel_unread: (e.target as HTMLInputElement).checked })}>
          <span>
            Don't count channel messages
            <p class="sub">Channels show no unread count and are left out of the Unread filter;
              opening a channel jumps straight to the newest message. Direct messages are still counted.</p>
          </span>
        </label>
        ${this._error ? html`<div class="error">${this._error}</div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-chat-prefs': ChatPrefs;
  }
}
