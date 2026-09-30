// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { osmEmbedUrl, satelliteEmbedUrl } from '../src/components/location-map';

type MapEl = HTMLElement & { updateComplete: Promise<unknown>; lat: number; lon: number };

async function mount(): Promise<MapEl> {
  await import('../src/components/location-map');
  const el = document.createElement('meshcore-location-map') as unknown as MapEl;
  Object.assign(el, { lat: 46.03274, lon: 11.71045 });
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

const iframe = (el: MapEl) => el.shadowRoot!.querySelector('iframe')!;
const button = (el: MapEl, label: string) =>
  [...el.shadowRoot!.querySelectorAll('.switch button')].find((b) => b.textContent === label) as HTMLElement;

beforeEach(() => { try { localStorage.clear(); } catch { /* ignore */ } });
afterEach(() => { document.body.innerHTML = ''; });

describe('location map', () => {
  it('builds map and satellite embed URLs', () => {
    expect(osmEmbedUrl(46.03274, 11.71045)).toContain('marker=46.032740,11.710450');
    expect(satelliteEmbedUrl(46.03274, 11.71045)).toBe(
      'https://maps.google.com/maps?q=46.032740,11.710450&t=k&z=16&output=embed');
  });

  it('starts on the map and switches to satellite', async () => {
    const el = await mount();
    expect(iframe(el).src).toContain('openstreetmap.org');
    button(el, 'Satellite').click();
    await el.updateComplete;
    expect(iframe(el).src).toContain('maps.google.com');
    expect(iframe(el).src).toContain('t=k');
    expect(button(el, 'Satellite').getAttribute('aria-pressed')).toBe('true');
  });

  it('remembers the chosen layer for the next map', async () => {
    const first = await mount();
    button(first, 'Satellite').click();
    await first.updateComplete;
    const second = await mount();
    expect(iframe(second).src).toContain('maps.google.com');
  });

  it('links to OpenStreetMap and Google Maps', async () => {
    const el = await mount();
    const links = [...el.shadowRoot!.querySelectorAll('a')].map((a) => a.getAttribute('href'));
    expect(links[0]).toContain('openstreetmap.org/?mlat=46.03274');
    expect(links[1]).toBe('https://www.google.com/maps/search/?api=1&query=46.03274,11.71045');
  });
});
