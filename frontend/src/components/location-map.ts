import { LitElement, html, css, nothing, unsafeCSS, type PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import {
  map as createMap,
  tileLayer,
  circleMarker,
  type Map as LeafletMap,
  type TileLayer,
  type CircleMarker,
} from 'leaflet/dist/leaflet-src.esm.js';

export type MapLayer = 'map' | 'satellite';

/** Free tile sources: no API key, no account; attribution required. */
export const TILE_SOURCES: Record<MapLayer, { url: string; attribution: string; maxZoom: number }> = {
  // Esri World Street Map. The OSM Foundation's tile servers block requests
  // from a LAN Home Assistant origin ("Access blocked ... tile usage
  // policy"), and CARTO's basemaps now answer every tile with an
  // "API KEY REQUIRED" placeholder. Esri's street tiles, like its imagery
  // below, need no key.
  map: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles © Esri — Esri, HERE, Garmin, © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors, GIS User Community',
    maxZoom: 19,
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Imagery © Esri, Maxar, Earthstar Geographics',
    maxZoom: 19,
  },
};

// Leaflet's stylesheet, inlined at build time by rollup.config.mjs (the map
// lives in a shadow root, so the document-level CSS would not reach it).
const LEAFLET_CSS = '__LEAFLET_CSS__';

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
 * Small interactive map of one position (Leaflet) with a Map / Satellite
 * switch: Esri World Street Map or Esri World Imagery, both free and
 * keyless. Scroll-wheel zoom works directly (no Ctrl).
 */
@customElement('meshcore-location-map')
export class LocationMap extends LitElement {
  @property({ type: Number }) lat = 0;
  @property({ type: Number }) lon = 0;
  @property({ type: Number }) alt?: number;
  @property({ type: Number }) height = 240;
  @property({ type: Number }) zoom = 15;

  @state() private _layer: MapLayer = loadLayer();
  @query('.map') private _container?: HTMLDivElement;

  private _map?: LeafletMap;
  private _tiles?: TileLayer;
  private _marker?: CircleMarker;
  private _resize?: ResizeObserver;

  static styles = [
    unsafeCSS(LEAFLET_CSS.startsWith('__') ? '' : LEAFLET_CSS),
    css`
      :host { display: block; }
      .bar { display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 6px; }
      .switch { display: inline-flex; border: 1px solid var(--divider-color, #e0e0e0); border-radius: 8px; overflow: hidden; }
      .switch button { border: none; background: var(--card-background-color, #fff); color: var(--primary-text-color);
        padding: 4px 10px; font-size: 12px; cursor: pointer; }
      .switch button.on { background: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }
      .map { width: 100%; border-radius: 8px; overflow: hidden; background: #ddd; z-index: 0; }
      .meta { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px 8px; font-size: 12px;
        color: var(--secondary-text-color); margin-top: 4px; }
      .meta a { color: var(--primary-color, #03a9f4); margin-left: 8px; }
    `,
  ];

  /** Tile URL template currently shown (used by tests and the switch). */
  get tileUrl(): string {
    return TILE_SOURCES[this._layer].url;
  }

  private _setLayer(layer: MapLayer) {
    this._layer = layer;
    try { localStorage.setItem(STORAGE_KEY, layer); } catch { /* per-viewer convenience only */ }
  }

  protected updated(changed: PropertyValues) {
    if (!this._container || !Number.isFinite(this.lat) || !Number.isFinite(this.lon)) return;
    try {
      if (!this._map) {
        this._map = createMap(this._container, { zoomControl: true, attributionControl: true })
          .setView([this.lat, this.lon], this.zoom);
        this._marker = circleMarker([this.lat, this.lon], {
          radius: 8, color: '#fff', weight: 2, fillColor: '#e53935', fillOpacity: 1,
        }).addTo(this._map);
        // Dialogs open with a zero-size container; recompute once laid out.
        this._resize = new ResizeObserver(() => this._map?.invalidateSize());
        this._resize.observe(this._container);
      } else if (changed.has('lat') || changed.has('lon')) {
        this._map.setView([this.lat, this.lon], this._map.getZoom());
        this._marker?.setLatLng([this.lat, this.lon]);
      }
      if (!this._tiles || changed.has('_layer')) {
        const src = TILE_SOURCES[this._layer];
        this._tiles?.remove();
        this._tiles = tileLayer(src.url, {
          attribution: src.attribution,
          maxZoom: src.maxZoom,
          subdomains: 'abcd',
        }).addTo(this._map);
      }
    } catch (err) {
      console.warn('MeshCore BBS: map unavailable', err);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._resize?.disconnect();
    this._map?.remove();
    this._map = undefined;
    this._tiles = undefined;
    this._marker = undefined;
  }

  render() {
    if (!Number.isFinite(this.lat) || !Number.isFinite(this.lon)) return nothing;
    const { lat, lon } = this;
    return html`
      <div class="bar">
        <span class="switch" role="group" aria-label="Map layer">
          <button class=${this._layer === 'map' ? 'on' : ''} aria-pressed=${this._layer === 'map'}
            @click=${() => this._setLayer('map')}>Map</button>
          <button class=${this._layer === 'satellite' ? 'on' : ''} aria-pressed=${this._layer === 'satellite'}
            @click=${() => this._setLayer('satellite')}>Satellite</button>
        </span>
      </div>
      <div class="map" style="height: ${this.height}px"></div>
      <div class="meta">
        <span>${lat.toFixed(5)}, ${lon.toFixed(5)}${this.alt !== undefined ? ` · ${this.alt} m` : ''}</span>
        <a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}"
          target="_blank" rel="noopener noreferrer">OpenStreetMap ↗</a>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-location-map': LocationMap;
  }
}
