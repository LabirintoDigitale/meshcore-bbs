// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/components/bot-settings';
import { bbsState } from '../src/bbs/bbs-state';
import type { BbsSnapshot, HomeAssistant } from '../src/types';

const CHANNELS = [
  { channel_idx: 3, name: '#path', settings: {} },
  { channel_idx: 0, name: 'Public', settings: {} },
  { channel_idx: 1, name: '#test', settings: {} },
];

const RADIOS = [
  { entry_id: 'BASE', title: 'MeshCore Node A77AAEFE', connection_type: 'usb', disabled: false },
  { entry_id: 'PHONE', title: 'MeshCore Node Galileo', connection_type: 'ble', disabled: false },
  { entry_id: 'OLD', title: 'MeshCore Node Old', connection_type: 'ble', disabled: true },
];

function makeWS(config: Record<string, unknown> = {
  enabled: false, cooldown: 30,
  channels: { '#path': { name: '#path', rules: [{ trigger: 'path', match: 'exact', action: 'route_reply', enabled: true }] } },
}) {
  return vi.fn(async (msg: Record<string, unknown>) => {
    if (msg.type === 'meshcore_bbs/bot_get') return config;
    if (msg.type === 'meshcore_bbs/get_channels') return { channels: msg.entry_id === 'PHONE' ? CHANNELS.slice(0, 2) : CHANNELS };
    if (msg.type === 'meshcore_bbs/radio_entries') return { radios: RADIOS };
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
    expect(sent.channels['#test']).toEqual({ name: '#test', rules: [{ trigger: 'Test', match: 'exact', action: 'route_reply', enabled: true }] });
    expect(sent.channels['#path'].rules[0].trigger).toBe('path');
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

  it('shows every channel action with its label', async () => {
    const el = await mount(makeWS());
    chans(el).find((c) => c.textContent!.includes('#path'))!.click();
    await el.updateComplete;
    const opts = [...el.shadowRoot!.querySelectorAll('.rule select:nth-of-type(2) option')].map((o) => o.textContent!.trim());
    expect(opts).toEqual(['Reply with route', 'Path with repeater names', 'Pong with the time received']);
  });

  describe('radio choice', () => {
    afterEach(() => { bbsState.setSnapshot(null as unknown as BbsSnapshot); });

    function twoRadios() {
      bbsState.setSnapshot({
        radio_entry_id: 'BASE',
        radios: [{ entry_id: 'BASE', name: 'Base Galileo' }, { entry_id: 'PHONE', name: 'Galileo' }],
        settings: { radio_entry_id: 'BASE' },
        users: [], requests: [], posts: [], menus: [],
      } as unknown as BbsSnapshot);
    }

    it('is shown even when another radio is selected in the panel', async () => {
      twoRadios();
      bbsState.setActiveEntry('PHONE');
      const el = await mount(makeWS());
      expect(text(el)).toContain('Radio for the bot');
    });

    it('lists the BBS default, connected and disconnected radios', async () => {
      twoRadios();
      const el = await mount(makeWS());
      const opts = [...el.shadowRoot!.querySelectorAll('select')][0].querySelectorAll('option');
      expect([...opts].map((o) => o.textContent!.trim())).toEqual([
        'Same as the BBS (Base Galileo)', 'Base Galileo', 'Galileo', 'MeshCore Node Old — not connected']);
    });

    it('choosing a radio loads its channels and is saved', async () => {
      twoRadios();
      const callWS = makeWS();
      const el = await mount(callWS);
      expect(chans(el)).toHaveLength(3);
      const sel = el.shadowRoot!.querySelector('select') as HTMLSelectElement;
      sel.value = 'PHONE';
      sel.dispatchEvent(new Event('change'));
      await vi.waitFor(() => expect(chans(el)).toHaveLength(2));
      expect(callWS).toHaveBeenCalledWith(expect.objectContaining({ type: 'meshcore_bbs/get_channels', entry_id: 'PHONE' }));
      btn(el, 'Save bot').click();
      await vi.waitFor(() => expect(callWS).toHaveBeenCalledWith(expect.objectContaining({
        type: 'meshcore_bbs/bot_set', config: expect.objectContaining({ radio_entry_id: 'PHONE' }),
      })));
    });

    it('warns that the bot is paused when its radio is not connected', async () => {
      twoRadios();
      const el = await mount(makeWS({ enabled: true, cooldown: 30, channels: {}, radio_entry_id: 'OLD' }));
      expect(text(el)).toContain('MeshCore Node Old is not connected: the bot is paused');
    });
  });
});
