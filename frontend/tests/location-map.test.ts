// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { TILE_SOURCES } from '../src/components/location-map';

type MapEl = HTMLElement & { updateComplete: Promise<unknown>; lat: number; lon: number; tileUrl: string };

async function mount(): Promise<MapEl> {
  await import('../src/components/location-map');
  const el = document.createElement('meshcore-location-map') as unknown as MapEl;
  Object.assign(el, { lat: 46.03274, lon: 11.71045 });
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

const button = (el: MapEl, label: string) =>
  [...el.shadowRoot!.querySelectorAll('.switch button')].find((b) => b.textContent === label) as HTMLElement;

beforeEach(() => { try { localStorage.clear(); } catch { /* ignore */ } });
afterEach(() => { document.body.innerHTML = ''; });

describe('location map', () => {
  it('uses free, keyless tile sources', () => {
    expect(TILE_SOURCES.map.url).toContain('basemaps.cartocdn.com');
    // OSM's own tile servers block LAN-origin requests (tile usage policy)
    expect(TILE_SOURCES.map.url).not.toContain('tile.openstreetmap.org');
    expect(TILE_SOURCES.satellite.url).toContain('World_Imagery');
    expect(TILE_SOURCES.satellite.url).not.toContain('google');
    expect(TILE_SOURCES.satellite.attribution).toContain('Esri');
  });

  it('starts on the map and switches to satellite', async () => {
    const el = await mount();
    expect(el.tileUrl).toBe(TILE_SOURCES.map.url);
    expect(el.shadowRoot!.querySelector('.map')).not.toBeNull();
    button(el, 'Satellite').click();
    await el.updateComplete;
    expect(el.tileUrl).toBe(TILE_SOURCES.satellite.url);
    expect(button(el, 'Satellite').getAttribute('aria-pressed')).toBe('true');
  });

  it('remembers the chosen layer for the next map', async () => {
    const first = await mount();
    button(first, 'Satellite').click();
    await first.updateComplete;
    const second = await mount();
    expect(second.tileUrl).toBe(TILE_SOURCES.satellite.url);
  });

  it('shows the coordinates and an OpenStreetMap link', async () => {
    const el = await mount();
    expect(el.shadowRoot!.textContent).toContain('46.03274, 11.71045');
    expect(el.shadowRoot!.querySelector('.meta a')!.getAttribute('href')).toContain('openstreetmap.org/?mlat=46.03274');
  });
});
