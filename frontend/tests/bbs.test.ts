// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BbsState, bbsState, prefixesMatch } from '../src/bbs/bbs-state';
import '../src/components/bbs-badge';
import '../src/components/bbs-actions';
import type { BbsSnapshot, HomeAssistant } from '../src/types';

function snapshot(overrides: Partial<BbsSnapshot> = {}): BbsSnapshot {
  return {
    settings: {
      enabled: true, name: 'BBS', main_menu: 1, max_len: 140, session_ttl: 600,
      posts_shown: 3, reply_denied: true, denied_every: 300, denied_text: 'auto',
      admin_prefix: '!', admin_page: 5, notify_service: '',
    },
    users: [
      { pubkey: 'aaaaaa000001', name: 'Alice', active: true, is_admin: true, created: 1 },
      { pubkey: 'bbbbbb', name: 'Bob', active: false, is_admin: false, created: 1 },
    ],
    requests: [
      { pubkey: 'cccccc000003', name: 'Carl', last_text: 'ciao', hits: 2, first_seen: 1, last_seen: 2 },
    ],
    posts: [],
    menus: [],
    ...overrides,
  };
}

/** callWS stub: answers bbs_get with a snapshot, delegates the rest. */
function wsRouter(other = vi.fn().mockResolvedValue({ message: 'ok' })) {
  return vi.fn(async (msg: Record<string, unknown>) =>
    msg.type === 'meshcore_bbs/bbs_get' ? snapshot() : other(msg));
}

function fakeHass(isAdmin: boolean, callWS = wsRouter()): HomeAssistant {
  return {
    callWS,
    user: { is_admin: isAdmin },
    connection: { subscribeEvents: vi.fn().mockResolvedValue(() => undefined) },
  } as unknown as HomeAssistant;
}

async function mount<T extends HTMLElement>(tag: string, props: Record<string, unknown>): Promise<T> {
  const el = document.createElement(tag) as T & { updateComplete: Promise<unknown> };
  Object.assign(el, props);
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

describe('bbs-state', () => {
  it('matches pubkey prefixes in both directions, case-insensitively', () => {
    expect(prefixesMatch('aaaaaa000001', 'AAAAAA')).toBe(true);
    expect(prefixesMatch('aaaaaa', 'aaaaaa000001')).toBe(true);
    expect(prefixesMatch('aaaaab', 'aaaaaa000001')).toBe(false);
    expect(prefixesMatch('', 'aaaaaa')).toBe(false);
  });

  it('derives access, admin and request status', () => {
    const state = new BbsState();
    state.setSnapshot(snapshot());
    expect(state.statusFor('aaaaaa000001')).toMatchObject({ access: 'active', admin: true });
    // Stored key shorter than the contact prefix still matches
    expect(state.statusFor('bbbbbb000002')).toMatchObject({ access: 'suspended', admin: false });
    expect(state.statusFor('cccccc000003').request?.name).toBe('Carl');
    expect(state.statusFor('dddddd000004')).toMatchObject({ access: 'none', request: null });
    expect(state.statusFor(null).access).toBe('none');
  });

  it('loads through bbs_get, notifies subscribers and refreshes on bus events', async () => {
    const state = new BbsState();
    const callWS = vi.fn().mockResolvedValue(snapshot());
    let busCallback: (() => void) | undefined;
    const hass = {
      callWS,
      connection: {
        subscribeEvents: vi.fn((cb: () => void, type: string) => {
          expect(type).toBe('meshcore_bbs_updated');
          busCallback = cb;
          return Promise.resolve(() => undefined);
        }),
      },
    } as unknown as HomeAssistant;
    const listener = vi.fn();
    state.subscribe(listener);

    state.attach(hass);
    await state.refresh();
    expect(callWS).toHaveBeenCalledWith({ type: 'meshcore_bbs/bbs_get' });
    expect(state.enabled).toBe(true);
    expect(listener).toHaveBeenCalled();

    // Same connection: no re-subscribe
    state.attach(hass);
    expect(hass.connection.subscribeEvents).toHaveBeenCalledTimes(1);

    callWS.mockResolvedValue(snapshot({ users: [] }));
    busCallback?.();
    await state.refresh();
    expect(state.snapshot?.users).toEqual([]);
  });

  it('keeps the error message when loading fails', async () => {
    const state = new BbsState();
    const hass = fakeHass(true, vi.fn().mockRejectedValue({ message: 'BBS not loaded' }));
    state.attach(hass);
    await state.refresh();
    expect(state.snapshot).toBeNull();
    expect(state.error).toBe('BBS not loaded');
  });
});

describe('meshcore-bbs-badge', () => {
  beforeEach(() => bbsState.setSnapshot(snapshot()));
  afterEach(() => {
    document.body.innerHTML = '';
    bbsState.setSnapshot(null);
  });

  it('shows access + admin icons', async () => {
    const el = await mount<HTMLElement>('meshcore-bbs-badge', { pubkey: 'aaaaaa000001' });
    const span = el.shadowRoot!.querySelector('span')!;
    expect(span.textContent).toBe('✅👑');
    expect(span.getAttribute('aria-label')).toBe('BBS admin');
  });

  it('shows suspended and request icons, nothing for strangers', async () => {
    const suspended = await mount<HTMLElement>('meshcore-bbs-badge', { pubkey: 'bbbbbb000002' });
    expect(suspended.shadowRoot!.textContent).toContain('⏸️');
    const request = await mount<HTMLElement>('meshcore-bbs-badge', { pubkey: 'cccccc000003' });
    expect(request.shadowRoot!.textContent).toContain('📨');
    const none = await mount<HTMLElement>('meshcore-bbs-badge', { pubkey: 'dddddd000004' });
    expect(none.shadowRoot!.querySelector('span')).toBeNull();
  });

  it('re-renders when the shared state changes', async () => {
    const el = await mount<HTMLElement & { updateComplete: Promise<unknown> }>(
      'meshcore-bbs-badge', { pubkey: 'dddddd000004' });
    bbsState.setSnapshot(snapshot({
      users: [{ pubkey: 'dddddd', name: 'Dave', active: true, is_admin: false, created: 1 }],
    }));
    await el.updateComplete;
    expect(el.shadowRoot!.textContent).toContain('✅');
  });
});

describe('meshcore-bbs-actions', () => {
  beforeEach(() => bbsState.setSnapshot(snapshot()));
  afterEach(() => {
    document.body.innerHTML = '';
    bbsState.detach();
    bbsState.setSnapshot(null);
  });

  const buttons = (el: HTMLElement) =>
    [...el.shadowRoot!.querySelectorAll('button')].map((b) => b.textContent!.trim());

  it('offers Add to BBS for a contact without access', async () => {
    const el = await mount<HTMLElement>('meshcore-bbs-actions', {
      hass: fakeHass(true), pubkey: 'dddddd000004', name: 'Dave',
    });
    expect(el.shadowRoot!.textContent).toContain('No BBS access');
    expect(buttons(el)).toEqual(['Add to BBS']);
  });

  it('offers suspend / admin / remove for an active user', async () => {
    const el = await mount<HTMLElement>('meshcore-bbs-actions', {
      hass: fakeHass(true), pubkey: 'aaaaaa000001', name: 'Alice',
    });
    expect(buttons(el)).toEqual(['Suspend', 'Remove admin', 'Remove from BBS']);
  });

  it('offers approve / reject for a pending request', async () => {
    const el = await mount<HTMLElement>('meshcore-bbs-actions', {
      hass: fakeHass(true), pubkey: 'cccccc000003', name: 'Carl',
    });
    expect(buttons(el)).toEqual(['Approve', 'Reject']);
  });

  it('shows status only to non-admin users', async () => {
    const el = await mount<HTMLElement>('meshcore-bbs-actions', {
      hass: fakeHass(false), pubkey: 'aaaaaa000001', name: 'Alice',
    });
    expect(buttons(el)).toEqual([]);
    expect(el.shadowRoot!.textContent).toContain('BBS admin');
  });

  it('calls bbs_user with the contact name and shows the result', async () => {
    const callWS = wsRouter(vi.fn().mockResolvedValue({ message: 'Dave now has access to the BBS.' }));
    const hass = fakeHass(true, callWS);
    const el = await mount<HTMLElement & { updateComplete: Promise<unknown> }>('meshcore-bbs-actions', {
      hass, pubkey: 'dddddd000004', name: 'Dave',
    });
    el.shadowRoot!.querySelector('button')!.click();
    await vi.waitFor(() => expect(el.shadowRoot!.textContent).toContain('Dave now has access'));
    expect(callWS).toHaveBeenCalledWith({
      type: 'meshcore_bbs/bbs_user', op: 'add', pubkey: 'dddddd000004', name: 'Dave',
    });
  });

  it('asks for confirmation before removing a user', async () => {
    const other = vi.fn().mockResolvedValue({ message: 'ok' });
    const el = await mount<HTMLElement & { updateComplete: Promise<unknown> }>('meshcore-bbs-actions', {
      hass: fakeHass(true, wsRouter(other)), pubkey: 'aaaaaa000001', name: 'Alice',
    });
    const remove = [...el.shadowRoot!.querySelectorAll('button')].find((b) => b.textContent!.includes('Remove from BBS'))!;
    remove.click();
    await el.updateComplete;
    expect(buttons(el)).toEqual(['Remove', 'Cancel']);
    expect(other).not.toHaveBeenCalled();
  });
});
