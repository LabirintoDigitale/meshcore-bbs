// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import { formatLpp, osmEmbedUrl, telemetryPosition } from '../src/components/telemetry-dialog';
import type { Contact, HomeAssistant } from '../src/types';

const CONTACT = {
  public_key: '1d71d95287fc' + '00'.repeat(26), pubkey_prefix: '1d71d95287fc', added_to_node: true,
  adv_name: 'Galileo', type: 1, flags: 0, adv_lat: 46.1, adv_lon: 12.2, lastmod: 0, last_advert: 0,
  out_path: '', out_path_len: -1, out_path_hash_mode: -1,
} as Contact;

const LPP = [
  { channel: 1, type: 'voltage', value: 4.123 },
  { channel: 2, type: 'temperature', value: 21.5 },
  { channel: 3, type: 'temperature', value: 18 },
  { channel: 1, type: 'gps', value: { latitude: 46.02, longitude: 11.9, altitude: 320 } },
];

type Dlg = HTMLElement & { updateComplete: Promise<unknown>; open: boolean };

async function mount(callWS: ReturnType<typeof vi.fn>, contact = CONTACT): Promise<Dlg> {
  await import('../src/components/telemetry-dialog');
  const el = document.createElement('meshcore-telemetry-dialog') as unknown as Dlg;
  Object.assign(el, {
    hass: { callWS, user: { is_admin: true } } as unknown as HomeAssistant,
    contact, entryId: 'E1', open: true,
  });
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

const text = (el: Dlg) => el.shadowRoot!.textContent!.replace(/\s+/g, ' ');

async function mapSrc(el: Dlg): Promise<string> {
  const map = el.shadowRoot!.querySelector('meshcore-location-map') as HTMLElement & { updateComplete: Promise<unknown> };
  await map.updateComplete;
  return map.shadowRoot!.querySelector('iframe')!.getAttribute('src')!;
}

afterEach(() => { document.body.innerHTML = ''; });

describe('telemetry helpers', () => {
  it('formats values with units', () => {
    expect(formatLpp({ channel: 1, type: 'voltage', value: 4.123 })).toBe('4.12 V');
    expect(formatLpp({ channel: 1, type: 'barometer', value: 1013.25 })).toBe('1013 hPa');
    expect(formatLpp(LPP[3])).toBe('46.02000, 11.90000 · 320 m');
    expect(formatLpp({ channel: 1, type: 'accelerometer', value: { acc_x: 1, acc_y: 0, acc_z: 0 } }))
      .toBe('acc_x: 1, acc_y: 0, acc_z: 0');
  });

  it('prefers the telemetry GPS fix, else the advert position', () => {
    expect(telemetryPosition(LPP, CONTACT)).toMatchObject({ lat: 46.02, lon: 11.9, source: 'telemetry' });
    expect(telemetryPosition([], CONTACT)).toMatchObject({ lat: 46.1, lon: 12.2, source: 'advert' });
    expect(telemetryPosition(null, { ...CONTACT, adv_lat: 0, adv_lon: 0 })).toBeNull();
    const zeroFix = [{ channel: 1, type: 'gps', value: { latitude: 0, longitude: 0, altitude: 0 } }];
    expect(telemetryPosition(zeroFix, CONTACT)?.source).toBe('advert');
  });

  it('builds an OpenStreetMap embed with a marker', () => {
    const url = osmEmbedUrl(46.02, 11.9);
    expect(url).toContain('openstreetmap.org/export/embed.html');
    expect(url).toContain('marker=46.020000,11.900000');
  });
});

describe('meshcore-telemetry-dialog', () => {
  it('requests telemetry and shows values and the GPS map', async () => {
    const callWS = vi.fn(async () => ({ pubkey_prefix: '1d71d95287fc', lpp: LPP, elapsed_ms: 4200, received_at: 1790790000 }));
    const el = await mount(callWS);
    await vi.waitFor(() => expect(text(el)).toContain('4.12 V'));
    expect(callWS).toHaveBeenCalledWith({ type: 'meshcore_bbs/request_telemetry', pubkey_prefix: '1d71d95287fc', entry_id: 'E1' });
    expect(text(el)).toContain('Temperature (ch 2)');
    expect(text(el)).toContain('Position (GPS, telemetry)');
    expect(await mapSrc(el)).toContain('marker=46.020000,11.900000');
  });

  it('shows the error and falls back to the advertised position', async () => {
    const callWS = vi.fn(async () => { throw { code: 'no_response', message: 'No telemetry received' }; });
    const el = await mount(callWS);
    await vi.waitFor(() => expect(text(el)).toContain('No telemetry received'));
    expect(text(el)).toContain('Position (advertised)');
    expect(await mapSrc(el)).toContain('marker=46.100000,12.200000');
  });

  it('Refresh sends a new request', async () => {
    const callWS = vi.fn(async () => ({ pubkey_prefix: 'x', lpp: [], elapsed_ms: 1, received_at: 1 }));
    const el = await mount(callWS);
    await vi.waitFor(() => expect(text(el)).toContain('No sensor values'));
    (el.shadowRoot!.querySelector('.foot button') as HTMLElement).click();
    await vi.waitFor(() => expect(callWS).toHaveBeenCalledTimes(2));
  });
});
