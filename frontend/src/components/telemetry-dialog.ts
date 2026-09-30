import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { requestTelemetry, type LppValue, type TelemetryResult } from '../api';
import type { Contact, HomeAssistant } from '../types';
import { attachDialogA11y } from '../utils/dialog-a11y';
import './location-map';

const UNITS: Record<string, string> = {
  temperature: '°C',
  humidity: '%',
  barometer: 'hPa',
  voltage: 'V',
  current: 'A',
  percentage: '%',
  altitude: 'm',
  illuminance: 'lx',
  power: 'W',
  energy: 'kWh',
  frequency: 'Hz',
  distance: 'm',
  concentration: 'ppm',
  direction: '°',
};

const LABELS: Record<string, string> = {
  voltage: 'Voltage',
  temperature: 'Temperature',
  humidity: 'Humidity',
  barometer: 'Pressure',
  current: 'Current',
  percentage: 'Percentage',
  altitude: 'Altitude',
  illuminance: 'Illuminance',
  power: 'Power',
  gps: 'GPS',
};

export interface MapPoint {
  lat: number;
  lon: number;
  alt?: number;
  source: 'telemetry' | 'advert';
}

/** GPS fix from telemetry, else the contact's advertised position. */
export function telemetryPosition(lpp: LppValue[] | null, contact?: Contact): MapPoint | null {
  const gps = lpp?.find((v) => v.type === 'gps' && v.value && typeof v.value === 'object');
  if (gps) {
    const g = gps.value as Record<string, number>;
    if (Number.isFinite(g.latitude) && Number.isFinite(g.longitude) && (g.latitude !== 0 || g.longitude !== 0)) {
      return { lat: g.latitude, lon: g.longitude, alt: g.altitude, source: 'telemetry' };
    }
  }
  if (contact && (contact.adv_lat !== 0 || contact.adv_lon !== 0)
      && Number.isFinite(contact.adv_lat) && Number.isFinite(contact.adv_lon)) {
    return { lat: contact.adv_lat, lon: contact.adv_lon, source: 'advert' };
  }
  return null;
}

/** Human-readable value of one LPP entry. */
export function formatLpp(v: LppValue): string {
  const unit = UNITS[v.type] ?? '';
  if (typeof v.value === 'number') {
    const n = Math.abs(v.value) >= 100 ? v.value.toFixed(0) : String(Math.round(v.value * 100) / 100);
    return unit ? `${n} ${unit}` : n;
  }
  if (Array.isArray(v.value)) return v.value.join(', ');
  if (v.value && typeof v.value === 'object') {
    if (v.type === 'gps') {
      const g = v.value as Record<string, number>;
      return `${g.latitude?.toFixed(5)}, ${g.longitude?.toFixed(5)}${g.altitude !== undefined ? ` · ${g.altitude} m` : ''}`;
    }
    return Object.entries(v.value).map(([k, x]) => `${k}: ${x}`).join(', ');
  }
  return String(v.value);
}

/**
 * Request and show a contact's telemetry, with its position on a map.
 * The contact must grant telemetry access to this node; otherwise no
 * answer arrives and the advertised position (if any) is shown instead.
 */
@customElement('meshcore-telemetry-dialog')
export class TelemetryDialog extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: Object }) contact?: Contact;
  @property({ type: String }) entryId?: string;
  @property({ type: Boolean }) open = false;

  @state() private _loading = false;
  @state() private _result: TelemetryResult | null = null;
  @state() private _error = '';

  constructor() {
    super();
    attachDialogA11y(this, { isOpen: () => this.open, onEscape: () => this._close() });
  }

  static styles = css`
    :host { display: contents; }
    .backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); display: flex;
      align-items: center; justify-content: center; z-index: 1001; }
    .dialog { background: var(--card-background-color, #fff); color: var(--primary-text-color);
      border-radius: 12px; width: min(520px, calc(100vw - 32px)); max-height: calc(100vh - 48px);
      display: flex; flex-direction: column; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25); }
    .head { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px 8px; }
    .title { font-size: 16px; font-weight: 600; }
    .close { background: none; border: none; font-size: 18px; cursor: pointer; color: var(--secondary-text-color); }
    .body { padding: 0 20px 12px; overflow: auto; }
    .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
      color: var(--secondary-text-color); margin: 12px 0 6px; }
    .status { font-size: 13px; color: var(--secondary-text-color); }
    .error { font-size: 13px; color: var(--error-color, #db4437); }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 8px; }
    .cell { background: var(--secondary-background-color, #f5f5f5); border-radius: 8px; padding: 8px 10px; }
    .cell .k { font-size: 11px; color: var(--secondary-text-color); }
    .cell .v { font-size: 15px; font-weight: 600; margin-top: 2px; overflow-wrap: anywhere; }
    iframe { width: 100%; height: 260px; border: 0; border-radius: 8px; background: #ddd; }
    .map-meta { display: flex; justify-content: space-between; gap: 8px; font-size: 12px;
      color: var(--secondary-text-color); margin-top: 4px; }
    .map-meta a { color: var(--primary-color, #03a9f4); }
    .foot { display: flex; gap: 8px; justify-content: flex-end; padding: 12px 20px 16px;
      border-top: 1px solid var(--divider-color, #e0e0e0); }
    .foot button { padding: 8px 14px; border-radius: 8px; border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff); color: var(--primary-text-color); cursor: pointer; font-size: 13px; }
    .foot button.primary { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff); }
    .foot button:disabled { opacity: 0.6; cursor: default; }
  `;

  willUpdate(changed: Map<string, unknown>) {
    if ((changed.has('open') || changed.has('contact')) && this.open) {
      this._result = null;
      this._error = '';
      void this._request();
    }
  }

  private async _request() {
    if (!this.hass || !this.contact) return;
    this._loading = true;
    this._error = '';
    try {
      this._result = await requestTelemetry(this.hass, this.contact.pubkey_prefix, this.entryId);
    } catch (err) {
      this._error = (err as { message?: string })?.message ?? String(err);
    } finally {
      this._loading = false;
    }
  }

  private _label(v: LppValue, all: LppValue[]): string {
    const base = LABELS[v.type] ?? v.type.charAt(0).toUpperCase() + v.type.slice(1);
    const sameType = all.filter((x) => x.type === v.type).length > 1;
    return sameType ? `${base} (ch ${v.channel})` : base;
  }

  render() {
    if (!this.open || !this.contact) return nothing;
    const lpp = this._result?.lpp ?? null;
    const values = (lpp ?? []).filter((v) => v.type !== 'gps');
    const pos = telemetryPosition(lpp, this.contact);

    return html`
      <div class="backdrop" @click=${this._close}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label="Telemetry"
          @click=${(e: Event) => e.stopPropagation()}>
          <div class="head">
            <div class="title">Telemetry — ${this.contact.adv_name}</div>
            <button class="close" aria-label="Close" @click=${this._close}>✕</button>
          </div>
          <div class="body">
            ${this._loading ? html`<div class="status">Requesting telemetry over the mesh… (up to ~30 s)</div>` : nothing}
            ${this._error ? html`<div class="error">${this._error}</div>` : nothing}
            ${this._result ? html`
              <div class="status">Received ${new Date(this._result.received_at * 1000).toLocaleTimeString()}
                · ${(this._result.elapsed_ms / 1000).toFixed(1)} s</div>
              ${values.length ? html`
                <div class="label">Values</div>
                <div class="grid">
                  ${values.map((v) => html`
                    <div class="cell"><div class="k">${this._label(v, values)}</div><div class="v">${formatLpp(v)}</div></div>`)}
                </div>` : html`<div class="status">No sensor values in the answer.</div>`}` : nothing}
            ${pos ? html`
              <div class="label">Position ${pos.source === 'telemetry' ? '(GPS, telemetry)' : '(advertised)'}</div>
              <meshcore-location-map .lat=${pos.lat} .lon=${pos.lon} .alt=${pos.alt} .height=${260}>
              </meshcore-location-map>` : !this._loading ? html`<div class="label">Position</div><div class="status">No position available.</div>` : nothing}
          </div>
          <div class="foot">
            <button ?disabled=${this._loading} @click=${() => this._request()}>Refresh</button>
            <button class="primary" @click=${this._close}>Close</button>
          </div>
        </div>
      </div>`;
  }

  private _close = () => {
    this.open = false;
    this.dispatchEvent(new CustomEvent('telemetry-dialog-closed', { bubbles: true, composed: true }));
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-telemetry-dialog': TelemetryDialog;
  }
}
