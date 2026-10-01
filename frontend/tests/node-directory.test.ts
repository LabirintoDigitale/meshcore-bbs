// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { html, render } from 'lit';
import { NodeDirectory, nodeDirectory } from '../src/chat/node-directory';
import '../src/components/message-bubble';
import type { ChatMessage, Contact, MessageGroup } from '../src/types';

function contact(key: string, name: string, type: number, lastAdvert = 0): Contact {
  return {
    public_key: key + '0'.repeat(64 - key.length), pubkey_prefix: key.substring(0, 12), added_to_node: false,
    adv_name: name, type, flags: 0, adv_lat: 0, adv_lon: 0, lastmod: 0, last_advert: lastAdvert,
    out_path: '', out_path_len: -1, out_path_hash_mode: -1,
  } as Contact;
}

const CONTACTS = [
  contact('9a92aa', 'IT-TS MntSpc Rpt', 2),
  contact('86a8bb', 'QDD RPT', 2),
  contact('146ccc', 'Porco Rosso', 1),
  contact('a0aaaa', 'Old repeater', 2, 100),
  contact('a0bbbb', 'Recent repeater', 2, 900),
  contact('a0cccc', 'A client', 1, 5000),
];

describe('NodeDirectory', () => {
  it('resolves hop hashes to names', () => {
    const dir = new NodeDirectory();
    dir.setContacts(CONTACTS);
    expect(dir.resolve('9A92')).toMatchObject({ name: 'IT-TS MntSpc Rpt', others: 0 });
    expect(dir.resolve('146c').name).toBe('Porco Rosso');
    expect(dir.resolve('ffff')).toMatchObject({ name: null, others: 0, candidates: [] });
  });

  it('prefers forwarding nodes, then the most recently heard, on 1-byte collisions', () => {
    const dir = new NodeDirectory();
    dir.setContacts(CONTACTS);
    const r = dir.resolve('a0');
    expect(r.name).toBe('Recent repeater');
    expect(r.others).toBe(2);
    expect(r.candidates).toEqual(['Recent repeater', 'Old repeater', 'A client']);
  });
});

describe('message popup route with names', () => {
  beforeEach(() => nodeDirectory.setContacts(CONTACTS));
  afterEach(() => { document.body.innerHTML = ''; nodeDirectory.setContacts([]); });

  it('shows each hop code with its node name', async () => {
    const msg: ChatMessage = {
      id: 'm1', sender: 'Alfa 10', text: 'test', timestamp: new Date(), isOutgoing: false, isSystem: false,
      raw: 'test', mentions: [],
      rxLogData: [{ path_nodes: ['9a92', '86a8', 'a0'], snr: -9.25, rssi: -122 }],
    };
    const group: MessageGroup = { sender: 'Alfa 10', isOutgoing: false, isSystem: false, messages: [msg],
      startTime: msg.timestamp, endTime: msg.timestamp };
    const container = document.createElement('div');
    document.body.appendChild(container);
    render(html`<meshcore-message-bubble .group=${group}></meshcore-message-bubble>`, container);
    const bubble = container.querySelector('meshcore-message-bubble') as HTMLElement & { updateComplete: Promise<unknown> };
    await bubble.updateComplete;
    (bubble.shadowRoot!.querySelector('.bubble') as HTMLElement).click();
    await bubble.updateComplete;

    const hops = [...bubble.shadowRoot!.querySelectorAll('.route-hop')].map((h) => h.textContent!.replace(/\s+/g, ' ').trim());
    expect(hops).toEqual(['9A92 IT-TS MntSpc Rpt', '86A8 QDD RPT', 'A0 Recent repeater +2']);
    expect(bubble.shadowRoot!.querySelector('.route-meta')!.textContent).toContain('3 hops · SNR: -9.25 · RSSI: -122');
    expect(bubble.shadowRoot!.querySelectorAll('.route-hop')[2].getAttribute('title'))
      .toBe('Possible nodes: Recent repeater, Old repeater, A client');
  });
});
