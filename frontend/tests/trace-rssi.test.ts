// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from 'vitest';
import { lastRssiFrom, type TraceResult } from '../src/api';

afterEach(() => { document.body.innerHTML = ''; });

describe('trace RSSI', () => {
  it('reads last_rssi from get_stats_radio', () => {
    expect(lastRssiFrom('{"noise_floor": -117, "last_rssi": -63, "last_snr": 12.5}')).toBe(-63);
    expect(lastRssiFrom('{"noise_floor": -117}')).toBeUndefined();
    expect(lastRssiFrom('OK')).toBeUndefined();
  });

  it('shows the RSSI next to the SNR when known', async () => {
    await import('../src/components/trace-dialog');
    const el = document.createElement('meshcore-trace-dialog') as HTMLElement & Record<string, unknown> & { updateComplete: Promise<unknown> };
    const result: TraceResult = { round_trip_ms: 710, response_time: '710ms', hops: 1, final_snr: 13,
      path: [{ hash: '50', snr: 12.25 }, { snr: 13 }], final_rssi: -63 };
    Object.assign(el, { open: true, contactName: 'Galileo RPT2', result });
    document.body.appendChild(el);
    await el.updateComplete;
    const text = el.shadowRoot!.textContent!.replace(/\s+/g, ' ');
    expect(text).toContain('RSSI (at this device)');
    expect(text).toContain('-63 dBm');
  });
});
