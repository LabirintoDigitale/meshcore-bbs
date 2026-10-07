import { afterEach, describe, expect, it } from 'vitest';
import { MessageStore } from '../src/chat/message-store';
import { UnreadController } from '../src/chat/unread-controller';
import type { HassEvent, HomeAssistant, PanelConfig } from '../src/types';

// Channel history is stored under a stable key (radio + channel identity);
// live events still carry the slot entity id. Two radios with #test in
// different slots: Base Galileo (a77aae) slot 1, Galileo (1d71d9) slot 5.

const BASE_TEST = 'binary_sensor.meshcore_a77aae_chan_k0123456789ab_messages';
const BASE_SLOT1 = 'binary_sensor.meshcore_a77aae_ch_1_messages';
const GAL_SLOT1 = 'binary_sensor.meshcore_1d71d9_ch_1_messages';
const GAL_SLOT5 = 'binary_sensor.meshcore_1d71d9_ch_5_messages';

type Listener = (event: HassEvent) => void;

function setup() {
  const listeners: Record<string, Listener[]> = {};
  const fetched: string[] = [];
  const hass = {
    states: {},
    entities: {},
    callWS: async (msg: Record<string, unknown>) => {
      if (typeof msg.entity_id === 'string') fetched.push(msg.entity_id);
      return { messages: [], has_more: false };
    },
    connection: {
      subscribeEvents: async (cb: Listener, type: string) => {
        (listeners[type] ??= []).push(cb);
        return () => {};
      },
    },
  } as unknown as HomeAssistant;
  const store = new MessageStore({ node_name: 'Base', node_prefix: 'a77aae' } as unknown as PanelConfig);
  store.setHass(hass);
  const fire = (type: string, data: Record<string, unknown>) =>
    (listeners[type] ?? []).forEach((cb) => cb({ event_type: type, data, time_fired: '' } as HassEvent));
  return { store, fire, fetched };
}

const stores: MessageStore[] = [];
afterEach(() => { stores.splice(0).forEach((s) => s.destroy()); });

function msg(entity_id: string, text: string) {
  return {
    entity_id, message: text, sender_name: 'Rusty Leaf', message_type: 'channel',
    timestamp: new Date().toISOString(), outgoing: false,
  };
}

describe('channel conversation key', () => {
  it('loads history by the stable key and shows live events of its slot', async () => {
    const { store, fire, fetched } = setup();
    stores.push(store);
    await store.switchEntity(BASE_TEST, null, [BASE_SLOT1]);
    expect(fetched).toContain(BASE_TEST);
    expect(fetched).not.toContain(BASE_SLOT1);

    fire('meshcore_message', msg(BASE_SLOT1, 'test da Base'));
    fire('meshcore_message', msg(GAL_SLOT1, '#path di Galileo, stesso slot'));
    fire('meshcore_message', msg(GAL_SLOT5, '#test di Galileo'));
    const texts = store.messages.map((m) => m.text);
    expect(texts).toEqual(['test da Base']);
  });

  it('accepts delivery updates under either id', async () => {
    const { store, fire } = setup();
    stores.push(store);
    await store.switchEntity(BASE_TEST, null, [BASE_SLOT1]);
    const seen: unknown[] = [];
    (store as unknown as { _handleDeliveryUpdate: (d: Record<string, unknown>) => void })
      ._handleDeliveryUpdate = (d) => { seen.push(d.entity_id); };
    fire('meshcore_delivery_update', { entity_id: BASE_SLOT1, id: 'm1' });  // upstream, slot id
    fire('meshcore_delivery_update', { entity_id: BASE_TEST, id: 'm1' });   // late echo, stable key
    fire('meshcore_delivery_update', { entity_id: GAL_SLOT1, id: 'm2' });   // other radio
    expect(seen).toEqual([BASE_SLOT1, BASE_TEST]);
  });
});

describe('unread badge with a stable channel key', () => {
  function counts(c: Record<string, number>) {
    const u = new UnreadController();
    u.ingestBackendData({ unread: c, last_read: {} }, null);
    return u;
  }

  it('reads the stable key and never the slot pattern', () => {
    // A stale slot-keyed count for slot 1 (now another channel) must not leak in.
    const u = counts({ [BASE_SLOT1]: 4, [BASE_TEST]: 2 });
    expect(u.badgeCount('1', 'a77aae', BASE_TEST)).toBe(2);
    const empty = counts({ [BASE_SLOT1]: 4 });
    expect(empty.badgeCount('1', 'a77aae', BASE_TEST)).toBe(0);
    // Without a stable key the old slot matching still works
    expect(empty.badgeCount('1', 'a77aae')).toBe(4);
  });
});

describe('live duplicates of one packet', () => {
  it('shows a message heard several times once', async () => {
    const { store, fire } = setup();
    stores.push(store);
    await store.switchEntity(BASE_TEST, null, [BASE_SLOT1]);
    const t0 = Date.now();
    for (let i = 0; i < 4; i++) {
      fire('meshcore_message', { ...msg(BASE_SLOT1, 'Test'), timestamp: new Date(t0 + i * 900).toISOString() });
    }
    expect(store.messages.map((m) => m.text)).toEqual(['Test']);
  });

  it('uses the event id when there is one', async () => {
    const { store, fire } = setup();
    stores.push(store);
    await store.switchEntity(BASE_TEST, null, [BASE_SLOT1]);
    fire('meshcore_message', { ...msg(BASE_SLOT1, 'uno'), id: 'abc123' });
    expect(store.messages.map((m) => m.id)).toEqual(['rt_abc123']);
  });

  it('keeps the same text sent again later', async () => {
    const { store, fire } = setup();
    stores.push(store);
    await store.switchEntity(BASE_TEST, null, [BASE_SLOT1]);
    const t0 = Date.now();
    fire('meshcore_message', { ...msg(BASE_SLOT1, 'Test'), timestamp: new Date(t0 - 120_000).toISOString() });
    fire('meshcore_message', { ...msg(BASE_SLOT1, 'Test'), timestamp: new Date(t0).toISOString() });
    expect(store.messages).toHaveLength(2);
  });
});

describe('switching conversation while a fetch is in flight', () => {
  it('drops the old conversation result', async () => {
    const pending: Array<(v: unknown) => void> = [];
    const hass = {
      states: {}, entities: {},
      callWS: (msg: Record<string, unknown>) => new Promise((resolve) => {
        if (msg.entity_id === BASE_TEST) pending.push(resolve);
        else resolve({ messages: [], has_more: false });
      }),
      connection: { subscribeEvents: async () => () => {} },
    } as unknown as HomeAssistant;
    const store = new MessageStore({ node_name: 'Galileo', node_prefix: '1d71d9' } as unknown as PanelConfig);
    stores.push(store);
    store.setHass(hass);
    const first = store.switchEntity(BASE_TEST, null, [BASE_SLOT1]);
    await store.switchEntity('binary_sensor.meshcore_1d71d9_chan_k0123456789ab_messages', null, [GAL_SLOT5]);
    // The Base Galileo fetch answers late, after Galileo's #test is open.
    pending.forEach((r) => r({ messages: [{ id: 'b1', sender: 'X', text: 'da Base', timestamp: new Date().toISOString(),
      message_type: 'channel', outgoing: false }], has_more: false }));
    await first;
    expect(store.messages).toEqual([]);
  });
});

describe("don't count channel messages", () => {
  it('hides channel badges, keeps DMs, and opens channels without the read anchor', () => {
    const DM = 'binary_sensor.meshcore_a77aae_1d71d95287fc_messages';
    const u = new UnreadController();
    u.ingestBackendData({ unread: { [BASE_TEST]: 3, [BASE_SLOT1]: 2, [DM]: 1 }, last_read: { [BASE_TEST]: 'm9' } }, null);
    expect(u.badgeCount('1', 'a77aae', BASE_TEST)).toBe(3);
    u.setIgnoreChannels(true);
    expect(u.badgeCount('1', 'a77aae', BASE_TEST)).toBe(0);
    expect(u.badgeCount('1', 'a77aae')).toBe(0);
    expect(u.badgeCount('1d71d95287fc', 'a77aae', DM)).toBe(1);
    expect(u.usesReadAnchor(BASE_TEST)).toBe(false);
    expect(u.usesReadAnchor(DM)).toBe(true);
    u.beginConversation(BASE_TEST, 0);
    expect(u.maybeReanchorOnLateData(BASE_TEST)).toBe(false);
    u.endConversation();
    u.setIgnoreChannels(false);
    expect(u.badgeCount('1', 'a77aae', BASE_TEST)).toBe(3);
  });
});
