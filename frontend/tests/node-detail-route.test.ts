// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from 'vitest';
import type { Contact, HomeAssistant } from '../src/types';

const RPT = {
  public_key: '7de3c3d04a91' + '00'.repeat(26), pubkey_prefix: '7de3c3d04a91', added_to_node: true,
  adv_name: 'Feltre Repeater', type: 2, flags: 0, adv_lat: 0, adv_lon: 0, lastmod: 0, last_advert: 0,
  out_path: '', out_path_len: -1, out_path_hash_mode: -1,
} as unknown as Contact;

type El = HTMLElement & { updateComplete: Promise<unknown> } & Record<string, unknown>;

afterEach(() => { document.body.innerHTML = ''; });

describe('node details after a route change', () => {
  it('shows the new route without reopening', async () => {
    await import('../src/components/node-detail-dialog');
    const hass = { callWS: async () => ({ contacts: [], total: 0, counts: {} }), user: { is_admin: true },
      states: {}, entities: {}, connection: { subscribeEvents: async () => () => {} } } as unknown as HomeAssistant;
    const el = document.createElement('meshcore-node-detail-dialog') as unknown as El;
    Object.assign(el, { hass, node: RPT, open: true, entryId: 'E1' });
    document.body.appendChild(el);
    await el.updateComplete;
    const updates: Contact[] = [];
    el.addEventListener('node-updated', (e) => updates.push((e as CustomEvent).detail.node));
    const route = el.shadowRoot!.querySelector('meshcore-route-dialog')!;
    route.dispatchEvent(new CustomEvent('route-changed', {
      detail: { contact: RPT, out_path: '5097', out_path_len: 1, path_hash_mode: 1 }, bubbles: true, composed: true }));
    await el.updateComplete;
    expect((el.node as Contact).out_path).toBe('5097');
    expect((route as unknown as { contact: Contact }).contact.out_path_len).toBe(1);
    // The owner re-binds .node on every render: it must receive the new node.
    expect(updates.map((n) => n.out_path)).toEqual(['5097']);
  });
});
