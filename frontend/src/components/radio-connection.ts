import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant, MeshCoreDevice } from '../types';
import { panelStyles } from '../styles';
import { reloadRadio, setRadioEnabled, type RadioEntry } from '../api';

type Action = 'disconnect' | 'reload' | 'enable';

/**
 * Header connection chip. For a Bluetooth radio it is clickable:
 * Connected → "Disconnect?" (disables the MeshCore entry, freeing the BLE
 * link), Disconnected → "Reconnect?" (reloads the entry). Bluetooth radios
 * that were disconnected here (disabled entries) get their own chip to
 * reconnect them. Fires `radios-changed` after every action.
 */
@customElement('meshcore-radio-connection')
export class RadioConnection extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) device?: MeshCoreDevice;
  /** node_status of the selected device: 'online', anything else, or null (no sensor). */
  @property({ attribute: false }) status: string | null = null;
  @property({ attribute: false }) radios: RadioEntry[] = [];

  @state() private _pending: { radio: RadioEntry; action: Action } | null = null;
  @state() private _busy = false;
  @state() private _error = '';

  static styles = [
    panelStyles,
    css`
      :host { display: contents; }
      .connection-status {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        border: 1px solid;
        font-family: inherit;
        white-space: nowrap;
      }
      button.connection-status { cursor: pointer; }
      button.connection-status:hover { filter: brightness(1.15); }
      .online {
        color: #4caf50;
        border-color: rgba(76, 175, 80, 0.4);
        background: rgba(76, 175, 80, 0.08);
      }
      .offline {
        color: var(--error-color, #db4437);
        border-color: rgba(219, 68, 55, 0.4);
        background: rgba(219, 68, 55, 0.08);
      }
      .off {
        color: var(--secondary-text-color);
        border-color: var(--divider-color, #e0e0e0);
        background: transparent;
      }
      .status-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; background: currentColor; }
      .dialog { max-width: 380px; text-align: left; }
      .dialog-body p { margin: 0 0 8px; font-size: 14px; color: var(--primary-text-color); }
      .hint { font-size: 12px; color: var(--secondary-text-color); }
      .error { color: var(--error-color, #db4437); font-size: 13px; margin-top: 8px; }
      .dialog-button.primary {
        background: var(--primary-color, #03a9f4);
        border-color: var(--primary-color, #03a9f4);
        color: #fff;
      }
      .dialog-button.danger {
        background: var(--error-color, #db4437);
        border-color: var(--error-color, #db4437);
        color: #fff;
      }
    `,
  ];

  private _radioFor(entryId?: string): RadioEntry | undefined {
    return this.radios.find((r) => r.entry_id === entryId);
  }

  private _open(radio: RadioEntry, action: Action) {
    this._error = '';
    this._pending = { radio, action };
  }

  private _close() {
    if (this._busy) return;
    this._pending = null;
  }

  private async _confirm() {
    if (!this.hass || !this._pending) return;
    const { radio, action } = this._pending;
    this._busy = true;
    this._error = '';
    try {
      if (action === 'reload') await reloadRadio(this.hass, radio.entry_id);
      else await setRadioEnabled(this.hass, radio.entry_id, action === 'enable');
      this._pending = null;
      this.dispatchEvent(new CustomEvent('radios-changed', {
        detail: { entryId: radio.entry_id, action }, bubbles: true, composed: true,
      }));
    } catch (err) {
      const e = err as { message?: string };
      this._error = e?.message || String(err);
    } finally {
      this._busy = false;
    }
  }

  private _renderStatus() {
    const device = this.device;
    if (!device || this.status === null) return nothing;
    const online = this.status === 'online';
    const label = online ? 'Connected' : 'Disconnected';
    const radio = this._radioFor(device.entry_id);
    if (radio?.connection_type !== 'ble') {
      return html`<span class="connection-status ${online ? 'online' : 'offline'}">
        <span class="status-dot"></span>${label}</span>`;
    }
    return html`<button type="button" class="connection-status ${online ? 'online' : 'offline'}"
        title=${online ? 'Disconnect this Bluetooth radio' : 'Try to reconnect'}
        @click=${() => this._open(radio, online ? 'disconnect' : 'reload')}>
      <span class="status-dot"></span>${label}</button>`;
  }

  private _renderDisabled() {
    return this.radios
      .filter((r) => r.disabled && r.connection_type === 'ble')
      .map((r) => html`<button type="button" class="connection-status off" title="Reconnect ${r.title}"
          @click=${() => this._open(r, 'enable')}>
        <span class="status-dot"></span>${r.title} · off</button>`);
  }

  private _renderDialog() {
    const p = this._pending;
    if (!p) return nothing;
    const name = p.radio.title;
    const text = {
      disconnect: {
        title: `Disconnect ${name}?`,
        body: 'Home Assistant releases the Bluetooth link (the MeshCore entry is disabled), so the radio is free for e.g. the phone app.',
        hint: 'Click its "off" chip in the header to reconnect.',
        button: 'Disconnect',
        cls: 'danger',
      },
      reload: {
        title: `Reconnect ${name}?`,
        body: 'The MeshCore entry is reloaded and Home Assistant tries to connect to the radio again.',
        hint: 'Make sure the radio is on, in range and not connected to another device.',
        button: 'Reconnect',
        cls: 'primary',
      },
      enable: {
        title: `Reconnect ${name}?`,
        body: 'The MeshCore entry is enabled again and Home Assistant connects to the radio.',
        hint: 'Disconnect it from the phone app first. Connecting can take a few seconds.',
        button: 'Reconnect',
        cls: 'primary',
      },
    }[p.action];
    return html`
      <div class="dialog-overlay" @click=${this._close}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${text.title}
             @click=${(e: Event) => e.stopPropagation()}>
          <div class="dialog-header"><div class="dialog-header-title">${text.title}</div></div>
          <div class="dialog-body">
            <p>${text.body}</p>
            <div class="hint">${text.hint}</div>
            ${this._error ? html`<div class="error">${this._error}</div>` : nothing}
          </div>
          <div class="dialog-footer">
            <button class="dialog-button" ?disabled=${this._busy} @click=${this._close}>Cancel</button>
            <button class="dialog-button ${text.cls}" ?disabled=${this._busy} @click=${this._confirm}>
              ${this._busy ? 'Please wait…' : text.button}
            </button>
          </div>
        </div>
      </div>`;
  }

  render() {
    return html`${this._renderStatus()}${this._renderDisabled()}${this._renderDialog()}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-radio-connection': RadioConnection;
  }
}
