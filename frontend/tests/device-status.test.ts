import { describe, expect, it } from 'vitest';
import { statusSummary } from '../src/pages/devices-page';

describe('status summary', () => {
  it('lists noise, last RSSI/SNR, counters and battery', () => {
    const r = JSON.stringify({ pubkey_pre: '5097b18c550d', bat: 4174, noise_floor: -117, last_rssi: -63,
      last_snr: 12, recv_flood: 70, recv_direct: 79, uptime: 66712 });
    expect(statusSummary(r)).toBe('noise -117 dBm · last RSSI -63 dBm / SNR 12 dB · rx flood 70 / direct 79 · battery 4.17 V');
  });
  it('passes through anything else', () => {
    expect(statusSummary('OK')).toBe('OK');
    expect(statusSummary('{}')).toBe('status received');
  });
});
