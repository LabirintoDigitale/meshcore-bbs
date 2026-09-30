// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from 'vitest';
import '../src/components/conversation-list';
import type { Channel, Contact } from '../src/types';

// Clicking a contact's avatar opens its details; the rest of the row
// still opens the conversation. Channel avatars keep selecting the channel.

const contact = {
  public_key: 'd2e3ef60083b' + '00'.repeat(26),
  pubkey_prefix: 'd2e3ef60083b',
  added_to_node: true,
  adv_name: 'Feltre Lab',
  type: 1, flags: 0, adv_lat: 0, adv_lon: 0, lastmod: 0, last_advert: 0,
  out_path: '', out_path_len: 0, out_path_hash_mode: 0,
} as Contact;
const channel = { channel_idx: 1, name: '#test', settings: {} } as Channel;

type List = HTMLElement & { conversations: Array<Contact | Channel>; updateComplete: Promise<unknown> };

async function mount(): Promise<{ el: List; events: string[] }> {
  const el = document.createElement('meshcore-conversation-list') as List;
  el.conversations = [channel, contact];
  const events: string[] = [];
  el.addEventListener('conversation-selected', (e) => events.push(`select:${(e as CustomEvent).detail.id}`));
  el.addEventListener('contact-details-requested', (e) => events.push(`details:${(e as CustomEvent).detail.pubkeyPrefix}`));
  document.body.appendChild(el);
  await el.updateComplete;
  return { el, events };
}

afterEach(() => { document.body.innerHTML = ''; });

describe('conversation-list avatar', () => {
  it('opens contact details from the avatar without selecting the conversation', async () => {
    const { el, events } = await mount();
    (el.shadowRoot!.querySelector('.conversation-avatar.contact') as HTMLElement).click();
    expect(events).toEqual(['details:d2e3ef60083b']);
  });

  it('still selects the conversation when the name is clicked', async () => {
    const { el, events } = await mount();
    const rows = el.shadowRoot!.querySelectorAll('.conversation-item');
    (rows[1].querySelector('.conversation-name') as HTMLElement).click();
    expect(events).toEqual(['select:d2e3ef60083b']);
  });

  it('channel avatars are not clickable for details', async () => {
    const { el, events } = await mount();
    expect(el.shadowRoot!.querySelectorAll('.conversation-avatar.contact').length).toBe(1);
    (el.shadowRoot!.querySelector('.conversation-avatar.channel') as HTMLElement).click();
    expect(events).toEqual(['select:1']);
  });
});
