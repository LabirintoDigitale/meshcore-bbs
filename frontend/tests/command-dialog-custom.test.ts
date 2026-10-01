// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';

const { executeRemote } = vi.hoisted(() => ({
  executeRemote: vi.fn(async (..._a: unknown[]) => ({ success: true, response: 'Command sent' })),
}));
vi.mock('../src/api', () => ({ executeLocal: vi.fn(), executeRemote }));

import '../src/components/command-dialog';
import type { HomeAssistant } from '../src/types';

// "custom" sends whatever the user typed, verbatim, to the remote device.

interface DialogEl extends HTMLElement {
  hass?: HomeAssistant;
  open: boolean;
  isLocal: boolean;
  targetPrefix?: string;
  entryId?: string;
  _paramValues: Record<string, unknown>;
  _error: string | null;
  _onCommandSelected(e: Event): void;
  _executeCommand(): Promise<void>;
  updateComplete: Promise<boolean>;
}

async function mount(): Promise<DialogEl> {
  const el = document.createElement('meshcore-command-dialog') as unknown as DialogEl;
  el.hass = {
    states: {}, entities: {}, callWS: async () => ({}),
    connection: { subscribeEvents: async () => () => {} },
  } as unknown as HomeAssistant;
  el.targetPrefix = '5097b18c550d';
  el.entryId = 'entry1';
  el.isLocal = false;
  el.open = true;
  document.body.appendChild(el);
  await el.updateComplete;
  el._onCommandSelected({ target: { value: 'custom' } } as unknown as Event);
  return el;
}

afterEach(() => { document.body.innerHTML = ''; executeRemote.mockClear(); });

describe('command-dialog custom command', () => {
  it('sends the typed command verbatim', async () => {
    const el = await mount();
    el._paramValues = { command: '  set bluetooth.enabled false ' };
    await el._executeCommand();
    expect(executeRemote).toHaveBeenCalledWith(el.hass, '5097b18c550d', 'set bluetooth.enabled false', 'entry1');
  });

  it('refuses an empty command', async () => {
    const el = await mount();
    el._paramValues = { command: '   ' };
    await el._executeCommand();
    expect(executeRemote).not.toHaveBeenCalled();
    expect(el._error).toBe('Enter a command');
  });
});
