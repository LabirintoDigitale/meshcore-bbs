// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock the api module — devices-page imports executeRemote alongside
// other helpers. Each test below replaces the executeRemote mock with
// its scenario-specific return value.
vi.mock('../src/api', () => ({
  executeRemote: vi.fn(),
  getManagedDevices: vi.fn(async () => ({ repeaters: [], clients: [] })),
  getNeighbors: vi.fn(async () => []),
  getContacts: vi.fn(async () => []),
}));

// Mock the entity-registry util — devices-page calls
// loadMeshcoreEntityRegistry on first connectedCallback; stub it so
// tests don't have to populate hass with a full entity registry.
vi.mock('../src/utils/classify-entity', () => ({
  loadMeshcoreEntityRegistry: vi.fn(async () => ({
    deviceEntities: {},
    meshcoreDeviceMap: {},
  })),
}));

// Import AFTER the vi.mock factories so the module-graph references
// resolve to the mocks.
import { executeRemote } from '../src/api';
import '../src/pages/devices-page';
import type { ManagedDevice, HomeAssistant, HassEvent } from '../src/types';

// meshcore_message listeners registered by the page (the device's reply
// to a CLI command arrives as a direct message).
let messageListeners: Array<(event: HassEvent) => void> = [];
const unsubscribed = vi.fn();

function makeMockHass(): HomeAssistant {
  return {
    states: {},
    entities: {},
    callApi: async () => ({}) as never,
    callService: async () => {},
    callWS: vi.fn(async () => ({})) as <T>(
      _msg: Record<string, unknown>,
    ) => Promise<T>,
    connection: {
      subscribeEvents: async (
        cb: (event: HassEvent) => void,
        eventType: string,
      ): Promise<() => void> => {
        if (eventType === 'meshcore_message') messageListeners.push(cb);
        return unsubscribed;
      },
    },
  } as unknown as HomeAssistant;
}

function deviceReply(pubkeyPrefix: string, message: string) {
  messageListeners.forEach((cb) => cb({ data: { pubkey_prefix: pubkeyPrefix, message } } as unknown as HassEvent));
}

function makeDevice(): ManagedDevice {
  return {
    pubkey_prefix: 'rpt1deadbeef',
    name: 'TestRepeater',
    status: 'online',
  } as unknown as ManagedDevice;
}

describe('devices-page._executeRemoteAction toast branch (Phase 2 Option A)', () => {
  let page: HTMLElement & {
    hass?: HomeAssistant;
    config?: { entry_id: string };
    _executeRemoteAction: (d: ManagedDevice, c: string) => Promise<void>;
    _statusMessage: { text: string; type: 'success' | 'error' } | null;
  };

  beforeEach(() => {
    vi.clearAllMocks();
    messageListeners = [];
    page = document.createElement('meshcore-devices-page') as unknown as typeof page;
    page.hass = makeMockHass();
    page.config = { entry_id: 'test-entry' };
  });

  afterEach(() => {
    page.remove();
  });

  it('shows success toast when result.success is true', async () => {
    (executeRemote as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      response: 'uptime 5h',
      success: true,
      timestamp: '2026-05-26T00:00:00Z',
    });

    const done = page._executeRemoteAction(makeDevice(), 'get uptime');
    await vi.waitFor(() => expect(page._statusMessage?.text).toContain('waiting for the reply'));
    expect(page._statusMessage?.text).toContain('uptime 5h');
    // The device's CLI reply arrives as a DM from its key
    deviceReply('rpt1deadbeef', 'OK - Advert sent');
    await done;

    expect(page._statusMessage?.type).toBe('success');
    expect(page._statusMessage?.text).toBe('TestRepeater: OK - Advert sent');
    expect(unsubscribed).toHaveBeenCalled();
  });

  it('ignores DMs from other nodes and reports a missing reply', async () => {
    vi.useFakeTimers();
    try {
      (executeRemote as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
        response: 'Command sent', success: true, timestamp: '2026-05-26T00:00:00Z',
      });
      const done = page._executeRemoteAction(makeDevice(), 'advert');
      await vi.waitFor(() => expect(messageListeners.length).toBe(1));
      deviceReply('abcdef000000', 'hello from someone else');
      await vi.advanceTimersByTimeAsync(20000);
      await done;
      expect(page._statusMessage?.type).toBe('error');
      expect(page._statusMessage?.text).toContain('no reply within 20 s');
    } finally {
      vi.useRealTimers();
    }
  });

  it('shows error toast when result.success is false (the regression this phase fixes)', async () => {
    // executeRemote() in api.ts catches WS errors and returns
    // { success: false, response } rather than throwing — so this is
    // exactly the path that previously hit the success toast.
    (executeRemote as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      response: 'WS error: not_found',
      success: false,
      timestamp: '2026-05-26T00:00:00Z',
    });

    await page._executeRemoteAction(makeDevice(), 'get uptime');

    expect(page._statusMessage).not.toBeNull();
    expect(page._statusMessage?.type).toBe('error');
    expect(page._statusMessage?.text).toContain('TestRepeater');
    expect(page._statusMessage?.text).toContain('failed');
    expect(page._statusMessage?.text).toContain('WS error: not_found');
  });

  it('shows error toast when executeRemote throws (client-side exception)', async () => {
    (executeRemote as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(
      new Error('boom'),
    );

    await page._executeRemoteAction(makeDevice(), 'get uptime');

    expect(page._statusMessage?.type).toBe('error');
    expect(page._statusMessage?.text).toContain('failed');
    expect(page._statusMessage?.text).toContain('boom');
  });

  it('surfaces "Login not confirmed" advisory text from the backend (Option A end-to-end)', async () => {
    // When the backend prefixes the response with "Login not confirmed — ",
    // it still returns success: true (advisory, not error). The toast
    // therefore shows success styling but the advisory text is visible
    // to the user inside the toast body.
    (executeRemote as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      response: 'Login not confirmed — Command sent',
      success: true,
      timestamp: '2026-05-26T00:00:00Z',
    });

    const done = page._executeRemoteAction(makeDevice(), 'get uptime');
    await vi.waitFor(() => expect(page._statusMessage?.text).toContain('Login not confirmed'));
    expect(page._statusMessage?.type).toBe('success');
    deviceReply('rpt1deadbeef', 'uptime 5h');
    await done;
  });
});
