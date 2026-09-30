import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export type MapLayer = 'map' | 'satellite';

/** OpenStreetMap embed around a point (no API key, no extra JS). */
export function osmEmbedUrl(lat: number, lon: number, span = 0.01): string {
  const bbox = [lon - span, lat - span * 0.6, lon + span, lat + span * 0.6].map((x) => x.toFixed(5)).join(',');
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat.toFixed(6)},${lon.toFixed(6)}`;
}

/** Google Maps satellite embed with a pin (keyless embed, t=k = satellite). */
export function satelliteEmbedUrl(lat: number, lon: number, zoom = 16): string {
  return `https://maps.google.com/maps?q=${lat.toFixed(6)},${lon.toFixed(6)}&t=k&z=${zoom}&output=embed`;
}

// Remember the viewer's last choice for every map in the panel.
const STORAGE_KEY = 'meshcore_bbs.map_layer';

function loadLayer(): MapLayer {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'satellite' ? 'satellite' : 'map';
  } catch {
    return 'map';
  }
}

/**
 * Small map of one position with a Map / Satellite switch and links to
 * open it full-size. Map tiles come from openstreetmap.org, satellite
 * imagery from Google Maps; both need an internet connection.
 */
@customElement('meshcore-location-map')
export class LocationMap extends LitElement {
  @property({ type: Number }) lat = 0;
  @property({ type: Number }) lon = 0;
  @property({ type: Number }) alt?: number;
  @property({ type: Number }) height = 240;

  @state() private _layer: MapLayer = loadLayer();

  static styles = css`
    :host { display: block; }
    .bar { display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 6px; }
    .switch { display: inline-flex; border: 1px solid var(--divider-color, #e0e0e0); border-radius: 8px; overflow: hidden; }
    .switch button { border: none; background: var(--card-background-color, #fff); color: var(--primary-text-color);
      padding: 4px 10px; font-size: 12px; cursor: pointer; }
    .switch button.on { background: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }
    iframe { width: 100%; border: 0; border-radius: 8px; background: #ddd; display: block; }
    .meta { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px 8px; font-size: 12px;
      color: var(--secondary-text-color); margin-top: 4px; }
    .meta a { color: var(--primary-color, #03a9f4); margin-left: 8px; }
  `;

  private _setLayer(layer: MapLayer) {
    this._layer = layer;
    try { localStorage.setItem(STORAGE_KEY, layer); } catch { /* per-viewer convenience only */ }
  }

  render() {
    if (!Number.isFinite(this.lat) || !Number.isFinite(this.lon)) return nothing;
    const { lat, lon } = this;
    const src = this._layer === 'satellite' ? satelliteEmbedUrl(lat, lon) : osmEmbedUrl(lat, lon);
    return html`
      <div class="bar">
        <span class="switch" role="group" aria-label="Map layer">
          <button class=${this._layer === 'map' ? 'on' : ''} aria-pressed=${this._layer === 'map'}
            @click=${() => this._setLayer('map')}>Map</button>
          <button class=${this._layer === 'satellite' ? 'on' : ''} aria-pressed=${this._layer === 'satellite'}
            @click=${() => this._setLayer('satellite')}>Satellite</button>
        </span>
      </div>
      <iframe title=${this._layer === 'satellite' ? 'Satellite map' : 'Map'} loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" style="height: ${this.height}px" src=${src}></iframe>
      <div class="meta">
        <span>${lat.toFixed(5)}, ${lon.toFixed(5)}${this.alt !== undefined ? ` · ${this.alt} m` : ''}</span>
        <span>
          <a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=15/${lat}/${lon}"
            target="_blank" rel="noopener noreferrer">OpenStreetMap ↗</a>
          <a href="https://www.google.com/maps/search/?api=1&query=${lat},${lon}"
            target="_blank" rel="noopener noreferrer">Google Maps ↗</a>
        </span>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-location-map': LocationMap;
  }
}
