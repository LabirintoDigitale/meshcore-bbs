// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import { changesToRates } from '../src/utils/rate-history';
import '../src/components/node-summary';
import { classifyEntity, type EntityInfo } from '../src/utils/classify-entity';
import type { HomeAssistant, ManagedDevice } from '../src/types';

const H = 3600_000;

describe('changesToRates', () => {
  it('converts hourly change to msg/min', () => {
    expect(changesToRates([{ start: 0, change: 120 }])).toEqual([{ start: 0, perMin: 2 }]);
  });

  it('spreads a poll over the silent hours before it', () => {
    // Polled every 3 hours: 0, 0, 180 → 60 msg/hour each hour = 1 msg/min
    const r = changesToRates([
      { start: 0, change: 0 }, { start: H, change: 0 }, { start: 2 * H, change: 180 },
    ]);
    expect(r.map((x) => x.perMin)).toEqual([1, 1, 1]);
  });

  it('caps the spread and starts a new gap after each poll', () => {
    const r = changesToRates([
      { start: 0, change: 0 }, { start: H, change: 0 }, { start: 2 * H, change: 60 },
      { start: 3 * H, change: 120 },
    ], 1);
    expect(r.map((x) => x.perMin)).toEqual([0, 0.5, 0.5, 2]);
  });
});

const NB_SENT = 'sensor.meshcore_5097b18c55_nb_sent_galileo_rpt2';
const SENT_FLOOD = 'sensor.meshcore_5097b18c55_sent_flood_galileo_rpt2';
const RECV_DIRECT = 'sensor.meshcore_5097b18c55_recv_direct_galileo_rpt2';

describe('repeater message activity from counter totals', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('uses the hourly change of the counters when the rate sensors are empty', async () => {
    const now = Date.now();
    const hour0 = new Date(now - 3 * H).toISOString();
    const hour1 = new Date(now - 2 * H).toISOString();
    const callWS = vi.fn(async (msg: { types?: string[] }) => {
      if (msg.types?.includes('change')) {
        return {
          [SENT_FLOOD]: [{ start: hour0, change: 0 }, { start: hour1, change: 120 }],
          [RECV_DIRECT]: [{ start: hour0, change: 60 }, { start: hour1, change: 0 }],
        };
      }
      return {};
    });
    const el = document.createElement('meshcore-node-summary') as unknown as HTMLElement & Record<string, unknown> & {
      updateComplete: Promise<unknown>;
    };
    const states: Record<string, unknown> = {};
    for (const id of [NB_SENT, SENT_FLOOD, RECV_DIRECT]) states[id] = { entity_id: id, state: '10', attributes: {} };
    el.hass = { states, entities: {}, callWS, connection: { subscribeEvents: async () => () => {} } } as unknown as HomeAssistant;
    el.device = { name: 'Galileo RPT2', pubkey_prefix: '5097b18c550d', update_interval: 7200, connected: true, type: 'repeater' } as ManagedDevice;
    el.entities = [NB_SENT, SENT_FLOOD, RECV_DIRECT]
      .map((entity_id) => classifyEntity({ entity_id }))
      .filter((e): e is EntityInfo => e !== null);
    document.body.appendChild(el);

    await vi.waitFor(() => expect((el._rateHistory as unknown[]).length).toBe(2));
    const hist = el._rateHistory as Array<{ values: Record<string, number> }>;
    // 120 msgs in the 2nd hour spread over both hours → 1 msg/min each
    expect(hist.map((p) => p.values.sent_flood)).toEqual([1, 1]);
    expect(hist[0].values.recv_direct).toBe(1);
    expect(callWS).toHaveBeenCalledWith(expect.objectContaining({ statistic_ids: [SENT_FLOOD, RECV_DIRECT], types: ['change'] }));
  });
});
