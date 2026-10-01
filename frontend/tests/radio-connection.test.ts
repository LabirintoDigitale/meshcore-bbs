// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';

const api = vi.hoisted(() => ({
  setRadioEnabled: vi.fn(async (..._a: unknown[]) => ({})),
  reloadRadio: vi.fn(async (..._a: unknown[]) => ({ reloaded: true })),
}));
vi.mock('../src/api', () => api);

import '../src/components/radio-connection';
import type { RadioEntry } from '../src/api';
import type { HomeAssistant, MeshCoreDevice } from '../src/types';

// Header chip: click "Connected" on a Bluetooth radio to disconnect it,
// click the "off" chip to reconnect it.

const BLE: RadioEntry = { entry_id: 'ble1', title: 'Galileo', connection_type: 'ble', disabled: false };
const USB: RadioEntry = { entry_id: 'usb1', title: 'Base Galileo', connection_type: 'usb', disabled: false };
const hass = {} as HomeAssistant;

function device(entry_id: string): MeshCoreDevice {
  return { entry_id, name: 'x', pubkey: '', pubkey_prefix: '', firmware: '', connected: true };
}

type El = HTMLElement & Record<string, unknown> & { updateComplete: Promise<unknown> };

async function mount(props: Record<string, unknown>): Promise<El> {
  const el = document.createElement('meshcore-radio-connection') as unknown as El;
  Object.assign(el, { hass, status: 'online', radios: [BLE, USB] }, props);
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

const q = (el: El, sel: string) => el.shadowRoot!.querySelector(sel) as HTMLElement | null;
const buttonWith = (el: El, text: string) =>
  [...el.shadowRoot!.querySelectorAll('button')].find((b) => b.textContent!.includes(text)) as HTMLElement;

afterEach(() => { document.body.innerHTML = ''; vi.clearAllMocks(); });

describe('radio-connection chip', () => {
  it('a USB radio shows a plain, non-clickable status', async () => {
    const el = await mount({ device: device('usb1') });
    expect(q(el, 'span.connection-status')!.textContent).toContain('Connected');
    expect(q(el, 'button.connection-status')).toBeNull();
  });

  it('clicking Connected on a Bluetooth radio asks, then disconnects it', async () => {
    const el = await mount({ device: device('ble1') });
    const changed = vi.fn();
    el.addEventListener('radios-changed', (e) => changed((e as CustomEvent).detail));
    buttonWith(el, 'Connected').click();
    await el.updateComplete;
    expect(q(el, '.dialog-header-title')!.textContent).toBe('Disconnect Galileo?');
    buttonWith(el, 'Disconnect').click();
    await vi.waitFor(() => expect(changed).toHaveBeenCalledWith({ entryId: 'ble1', action: 'disconnect' }));
    expect(api.setRadioEnabled).toHaveBeenCalledWith(hass, 'ble1', false);
    await el.updateComplete;
    expect(q(el, '.dialog')).toBeNull();
  });

  it('clicking Disconnected on a Bluetooth radio reloads it', async () => {
    const el = await mount({ device: device('ble1'), status: 'offline' });
    buttonWith(el, 'Disconnected').click();
    await el.updateComplete;
    buttonWith(el, 'Reconnect').click();
    await vi.waitFor(() => expect(api.reloadRadio).toHaveBeenCalledWith(hass, 'ble1'));
  });

  it('a disconnected Bluetooth radio gets an "off" chip that reconnects it', async () => {
    const el = await mount({ device: device('usb1'), radios: [{ ...BLE, disabled: true }, USB] });
    buttonWith(el, 'Galileo · off').click();
    await el.updateComplete;
    expect(q(el, '.dialog-header-title')!.textContent).toBe('Reconnect Galileo?');
    buttonWith(el, 'Reconnect').click();
    await vi.waitFor(() => expect(api.setRadioEnabled).toHaveBeenCalledWith(hass, 'ble1', true));
  });

  it('shows the error and keeps the dialog open when it fails', async () => {
    api.setRadioEnabled.mockRejectedValueOnce({ message: 'busy' });
    const el = await mount({ device: device('ble1') });
    buttonWith(el, 'Connected').click();
    await el.updateComplete;
    buttonWith(el, 'Disconnect').click();
    await vi.waitFor(() => expect(q(el, '.error')?.textContent).toBe('busy'));
    expect(q(el, '.dialog')).not.toBeNull();
  });
});
