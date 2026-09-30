// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import { routeHops } from '../src/components/route-dialog';
import type { Contact, HomeAssistant } from '../src/types';

function contact(prefix: string, name: string, type: number, extra: Partial<Contact> = {}): Contact {
  return {
    public_key: prefix + '00'.repeat(26), pubkey_prefix: prefix, added_to_node: true, adv_name: name,
    type, flags: 0, adv_lat: 0, adv_lon: 0, lastmod: 0, last_advert: 0,
    out_path: '', out_path_len: -1, out_path_hash_mode: -1, ...extra,
  } as Contact;
}

const RPT1 = contact('652249ca3e36', 'Galileo RPT1', 2);
const FELTRE = contact('7de3c3d04a91', 'Feltre Repeater', 2);
const TARGET = contact('1d71d95287fc', 'Galileo', 1);

type Dlg = HTMLElement & { updateComplete: Promise<unknown> } & Record<string, unknown>;

function hass(callWS: ReturnType<typeof vi.fn>): HomeAssistant {
  return { callWS, user: { is_admin: true }, connection: { subscribeEvents: async () => () => {} } } as unknown as HomeAssistant;
}

async function mount(target: Contact, callWS: ReturnType<typeof vi.fn>): Promise<Dlg> {
  await import('../src/components/route-dialog');
  const el = document.createElement('meshcore-route-dialog') as Dlg;
  Object.assign(el, { hass: hass(callWS), contact: target, entryId: 'E1', open: true });
  document.body.appendChild(el);
  await el.updateComplete;
  await vi.waitFor(() => expect(el.shadowRoot!.textContent).toContain('Galileo RPT1'));
  return el;
}

function wsRouter(result: unknown = { out_path: '65227de3', out_path_len: 2, path_hash_mode: 1 }) {
  return vi.fn(async (msg: Record<string, unknown>) =>
    msg.type === 'meshcore_bbs/get_contacts_paginated'
      ? { contacts: [RPT1, FELTRE], total: 2, counts: {} }
      : result);
}

const text = (el: Dlg) => el.shadowRoot!.textContent!.replace(/\s+/g, ' ');

afterEach(() => { document.body.innerHTML = ''; });

describe('routeHops', () => {
  it('splits the stored path by hash width', () => {
    expect(routeHops('65227de3', 2, 1)).toEqual(['6522', '7de3']);
    expect(routeHops('657d', 2, 0)).toEqual(['65', '7d']);
    expect(routeHops('', -1, -1)).toEqual([]);
    expect(routeHops('652249', 0, 2)).toEqual([]);
  });
});

describe('meshcore-route-dialog', () => {
  it('shows the current route with repeater names', async () => {
    const el = await mount(contact('1d71d95287fc', 'Galileo', 1,
      { out_path: '65227de3', out_path_len: 2, out_path_hash_mode: 1 }), wsRouter());
    expect(text(el)).toContain('Galileo RPT1 (6522) → Feltre Repeater (7de3)');
  });

  it('shows flood for a contact without a stored route', async () => {
    const el = await mount(TARGET, wsRouter());
    expect(text(el)).toContain('Flood (automatic)');
  });

  it('saves the chosen repeaters in order', async () => {
    const callWS = wsRouter();
    const el = await mount(TARGET, callWS);
    const events: string[] = [];
    el.addEventListener('route-changed', () => events.push('route-changed'));
    el.addEventListener('contacts-changed', () => events.push('contacts-changed'));
    const items = () => [...el.shadowRoot!.querySelectorAll('.item')] as HTMLElement[];
    items().find((i) => i.textContent!.includes('Galileo RPT1'))!.click();
    await el.updateComplete;
    items().find((i) => i.textContent!.includes('Feltre Repeater'))!.click();
    await el.updateComplete;
    expect(text(el)).toContain('You → Galileo RPT1 ✕ → Feltre Repeater ✕ → Galileo');
    ([...el.shadowRoot!.querySelectorAll('.foot button')] as HTMLElement[])
      .find((b) => b.textContent!.includes('Save route'))!.click();
    await vi.waitFor(() => expect(events).toEqual(['route-changed', 'contacts-changed']));
    expect(callWS).toHaveBeenCalledWith({
      type: 'meshcore_bbs/set_contact_route', pubkey_prefix: '1d71d95287fc',
      repeaters: [RPT1.public_key, FELTRE.public_key], reset: false, entry_id: 'E1',
    });
    expect(el.open).toBe(false);
  });

  it('resets to flood', async () => {
    const callWS = wsRouter({ out_path: '', out_path_len: -1, path_hash_mode: 1 });
    const el = await mount(TARGET, callWS);
    ([...el.shadowRoot!.querySelectorAll('.foot button')] as HTMLElement[])
      .find((b) => b.textContent!.includes('Reset to flood'))!.click();
    await vi.waitFor(() => expect(callWS).toHaveBeenCalledWith(expect.objectContaining({
      type: 'meshcore_bbs/set_contact_route', repeaters: [], reset: true,
    })));
  });

  it('shows the error when the radio rejects the route', async () => {
    const callWS = vi.fn(async (msg: Record<string, unknown>) => {
      if (msg.type === 'meshcore_bbs/get_contacts_paginated') return { contacts: [RPT1], total: 1, counts: {} };
      throw { code: 'command_failed', message: 'table full' };
    });
    const el = await mount(TARGET, callWS);
    ([...el.shadowRoot!.querySelectorAll('.item')] as HTMLElement[])[0].click();
    await el.updateComplete;
    ([...el.shadowRoot!.querySelectorAll('.foot button')] as HTMLElement[])
      .find((b) => b.textContent!.includes('Save route'))!.click();
    await vi.waitFor(() => expect(text(el)).toContain('table full'));
    expect(el.open).toBe(true);
  });
});
