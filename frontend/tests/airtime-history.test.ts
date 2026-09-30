// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';

import '../src/components/node-summary';
import { lastNonZeroReading } from '../src/utils/airtime-history';
import { classifyEntity, type EntityInfo } from '../src/utils/classify-entity';
import type { HomeAssistant, ManagedDevice } from '../src/types';

describe('lastNonZeroReading', () => {
  it('returns the newest numeric state above zero', () => {
    const rows = [
      { s: '2.0', lu: 1000 },
      { s: '4.4', lu: 2000 },
      { s: '0.0', lu: 3000 },
      { s: 'unavailable', lu: 4000 },
    ];
    expect(lastNonZeroReading(rows)).toEqual({ value: 4.4, ts: 2_000_000 });
  });

  it('handles non-compressed rows and empty input', () => {
    expect(lastNonZeroReading([{ state: '1.5', last_updated: '2026-09-30T10:00:00Z' }]))
      .toEqual({ value: 1.5, ts: Date.parse('2026-09-30T10:00:00Z') });
    expect(lastNonZeroReading([{ s: '0', lu: 1 }])).toBeNull();
    expect(lastNonZeroReading(undefined)).toBeNull();
  });
});

const TX = 'sensor.meshcore_652249ca3e_airtime_utilization_galileo_rpt1';
const RX = 'sensor.meshcore_652249ca3e_rx_airtime_utilization_galileo_rpt1';

function repeater(): ManagedDevice {
  return { name: 'Galileo RPT1', pubkey_prefix: '652249ca3e36', update_interval: 3600, connected: true, type: 'repeater' };
}

type Card = HTMLElement & {
  hass?: HomeAssistant;
  device?: ManagedDevice;
  entities?: EntityInfo[];
  updateComplete: Promise<boolean>;
};

async function mount(tx: string, rx: string, callWS: ReturnType<typeof vi.fn>): Promise<Card> {
  const states: Record<string, unknown> = {};
  for (const [eid, state] of [[TX, tx], [RX, rx]]) {
    states[eid] = { entity_id: eid, state, attributes: { unit_of_measurement: '%' }, last_updated: '2026-09-30T12:00:00Z' };
  }
  const el = document.createElement('meshcore-node-summary') as Card;
  el.hass = { states, entities: {}, callWS, connection: { subscribeEvents: async () => () => {} } } as unknown as HomeAssistant;
  el.device = repeater();
  el.entities = [TX, RX]
    .map((entity_id) => classifyEntity({ entity_id }))
    .filter((e): e is EntityInfo => e !== null);
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

function radioTile(el: Card): string {
  const tile = Array.from(el.shadowRoot!.querySelectorAll('.hero-tile'))
    .find((t) => t.textContent?.includes('Radio activity'));
  return (tile?.textContent ?? '').replace(/\s+/g, ' ');
}

describe('repeater Radio activity tile', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('shows the last non-zero reading from history when the sensors read 0', async () => {
    const callWS = vi.fn(async (msg: { type: string; entity_ids?: string[] }) => {
      if (msg.type !== 'history/history_during_period') return {};
      const eid = msg.entity_ids![0];
      return { [eid]: [{ s: eid === RX ? '4.4' : '0.3', lu: 1_790_760_000 }, { s: '0.0', lu: 1_790_770_000 }] };
    });
    const el = await mount('0.0', '0.0', callWS);
    await vi.waitFor(() => expect(radioTile(el)).toContain('RX 4.4%'));
    expect(radioTile(el)).toContain('TX 0.3%');
    expect(radioTile(el)).toContain('Last reading');
    expect(callWS).toHaveBeenCalledTimes(2);
  });

  it('uses live values without querying history when they are not 0', async () => {
    const callWS = vi.fn();
    const el = await mount('1.2', '3.4', callWS);
    expect(radioTile(el)).toContain('RX 3.4%');
    expect(radioTile(el)).not.toContain('Last reading');
    expect(callWS).not.toHaveBeenCalledWith(expect.objectContaining({ type: 'history/history_during_period' }));
  });

  it('keeps 0 when history has no real reading', async () => {
    const callWS = vi.fn(async () => ({}));
    const el = await mount('0.0', '0.0', callWS);
    await vi.waitFor(() => expect(callWS).toHaveBeenCalled());
    await el.updateComplete;
    expect(radioTile(el)).toContain('RX 0.0%');
    expect(radioTile(el)).not.toContain('Last reading');
  });
});

describe('repeater sensor rows with no current reading', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('shows the last known temperature from history, marked as stale', async () => {
    const TEMP = 'sensor.meshcore_652249ca3e_temperature_galileo_rpt1';
    const callWS = vi.fn(async (msg: { type: string; entity_ids?: string[] }) =>
      msg.type === 'history/history_during_period' && msg.entity_ids?.[0] === TEMP
        ? { [TEMP]: [{ s: '21.5', lu: 1_790_760_000 }, { s: 'unknown', lu: 1_790_770_000 }] }
        : {});
    const el = document.createElement('meshcore-node-summary') as Card;
    el.hass = {
      states: {
        [TEMP]: { entity_id: TEMP, state: 'unknown', attributes: { unit_of_measurement: '°C' }, last_updated: '2026-09-30T12:00:00Z' },
      },
      entities: {},
      callWS,
      connection: { subscribeEvents: async () => () => {} },
    } as unknown as HomeAssistant;
    el.device = repeater();
    el.entities = [classifyEntity({ entity_id: TEMP, original_name: 'Temperature' })]
      .filter((e): e is EntityInfo => e !== null);
    document.body.appendChild(el);
    await el.updateComplete;

    await vi.waitFor(() => {
      const stale = el.shadowRoot!.querySelector('.si-value.stale');
      expect(stale?.textContent).toContain('21.5');
    });
    expect(el.shadowRoot!.querySelector('.si-value.stale')!.getAttribute('title')).toContain('Last known value');
  });
});
