// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/components/bot-settings';
import type { HomeAssistant } from '../src/types';

const CHANNELS = [
  { channel_idx: 3, name: '#path', settings: {} },
  { channel_idx: 0, name: 'Public', settings: {} },
  { channel_idx: 1, name: '#test', settings: {} },
];

function makeWS(config: Record<string, unknown> = {
  enabled: false, cooldown: 30,
  channels: { '3': { name: '#path', rules: [{ trigger: 'path', match: 'exact', action: 'route_reply', enabled: true }] } },
}) {
  return vi.fn(async (msg: Record<string, unknown>) => {
    if (msg.type === 'meshcore_bbs/bot_get') return config;
    if (msg.type === 'meshcore_bbs/get_channels') return { channels: CHANNELS };
    if (msg.type === 'meshcore_bbs/bot_set') return msg.config;
    return {};
  });
}

type El = HTMLElement & { updateComplete: Promise<unknown> };

async function mount(callWS: ReturnType<typeof vi.fn>, admin = true): Promise<El> {
  const el = document.createElement('meshcore-bot-settings') as unknown as El;
  Object.assign(el, { hass: { callWS, user: { is_admin: admin } } as unknown as HomeAssistant, entryId: 'E1' });
  document.body.appendChild(el);
  await vi.waitFor(() => expect(el.shadowRoot!.querySelector('.channels')).not.toBeNull());
  await el.updateComplete;
  return el;
}

const text = (el: El) => el.shadowRoot!.textContent!.replace(/\s+/g, ' ');
const chans = (el: El) => [...el.shadowRoot!.querySelectorAll('.chan')] as HTMLElement[];
const btn = (el: El, label: string) =>
  [...el.shadowRoot!.querySelectorAll('button')].find((b) => b.textContent!.includes(label)) as HTMLButtonElement;

afterEach(() => { document.body.innerHTML = ''; });

describe('meshcore-bot-settings', () => {
  it('lists all channels in order with their rule count', async () => {
    const el = await mount(makeWS());
    expect(chans(el).map((c) => c.textContent!.replace(/\s+/g, ' ').trim())).toEqual(['Public', '#test', '#path(1)']);
  });

  it('adds a command to a channel and saves the whole configuration', async () => {
    const callWS = makeWS();
    const el = await mount(callWS);
    chans(el).find((c) => c.textContent!.includes('#test'))!.click();
    await el.updateComplete;
    expect(text(el)).toContain('No commands on this channel yet.');
    btn(el, 'Add command').click();
    await el.updateComplete;
    const input = el.shadowRoot!.querySelector('.rule input[type="text"]') as HTMLInputElement;
    input.value = 'Test';
    input.dispatchEvent(new Event('input'));
    await el.updateComplete;
    btn(el, 'Save bot').click();
    await vi.waitFor(() => expect(callWS).toHaveBeenCalledWith(expect.objectContaining({ type: 'meshcore_bbs/bot_set' })));
    const sent = (callWS.mock.calls.find((c) => c[0].type === 'meshcore_bbs/bot_set')![0] as {
      config: { channels: Record<string, { rules: Array<{ trigger: string }> }> };
    }).config;
    expect(sent.channels['1']).toEqual({ name: '#test', rules: [{ trigger: 'Test', match: 'exact', action: 'route_reply', enabled: true }] });
    expect(sent.channels['3'].rules[0].trigger).toBe('path');
    await vi.waitFor(() => expect(text(el)).toContain('Saved.'));
  });

  it('the ON switch saves immediately', async () => {
    const callWS = makeWS();
    const el = await mount(callWS);
    const toggle = el.shadowRoot!.querySelector('.switch input') as HTMLInputElement;
    toggle.checked = true;
    toggle.dispatchEvent(new Event('change'));
    await vi.waitFor(() => expect(callWS).toHaveBeenCalledWith(expect.objectContaining({
      type: 'meshcore_bbs/bot_set', config: expect.objectContaining({ enabled: true }),
    })));
  });

  it('is read-only for non-admin users', async () => {
    const el = await mount(makeWS(), false);
    expect(text(el)).toContain('Only a Home Assistant administrator can change the bot.');
    expect(btn(el, 'Save bot')).toBeUndefined();
  });
});
