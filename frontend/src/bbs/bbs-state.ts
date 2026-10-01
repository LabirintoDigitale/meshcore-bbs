import type { ReactiveController, ReactiveControllerHost } from 'lit';
import { getBbs } from '../api';
import type { BbsRequest, BbsSnapshot, BbsUser, HomeAssistant } from '../types';

/**
 * Shared, panel-wide view of the built-in BBS.
 *
 * Contact names across the panel (chat list, node cards, node detail)
 * show BBS status icons, so every component reads the same snapshot
 * instead of fetching its own. The panel calls `attach(hass)` once; the
 * state then refreshes itself on every `meshcore_bbs_updated` bus event
 * the backend fires after a change. Components subscribe through
 * `BbsStateController`, which re-renders the host on each change.
 */

export type BbsAccess = 'active' | 'suspended' | 'none';

export interface BbsStatus {
  access: BbsAccess;
  admin: boolean;
  user: BbsUser | null;
  request: BbsRequest | null;
}

const NO_STATUS: BbsStatus = { access: 'none', admin: false, user: null, request: null };

/** True when one pubkey prefix is a prefix of the other (same rule as the backend). */
export function prefixesMatch(a: string, b: string): boolean {
  if (!a || !b) return false;
  const x = a.toLowerCase();
  const y = b.toLowerCase();
  return x.startsWith(y) || y.startsWith(x);
}

export class BbsState {
  snapshot: BbsSnapshot | null = null;
  error: string | null = null;
  private _hass?: HomeAssistant;
  private _listeners = new Set<() => void>();
  private _unsub: (() => void) | null = null;
  private _connection: unknown = null;
  private _loading: Promise<void> | null = null;
  /** Radio currently selected in the panel header. */
  activeEntryId: string | null = null;

  /** Bind to a hass object; (re)subscribes when the WS connection changes. */
  attach(hass: HomeAssistant): void {
    this._hass = hass;
    if (hass.connection === this._connection) return;
    this._connection = hass.connection;
    this.detach(false);
    this.refresh();
    hass.connection
      ?.subscribeEvents(() => this.refresh(), 'meshcore_bbs_updated')
      .then((unsub) => { this._unsub = unsub; })
      .catch(() => { /* non-admin users may not subscribe; icons still load once */ });
  }

  detach(resetConnection = true): void {
    if (this._unsub) {
      try { this._unsub(); } catch { /* connection may be gone */ }
      this._unsub = null;
    }
    if (resetConnection) this._connection = null;
  }

  refresh(): Promise<void> {
    if (!this._hass) return Promise.resolve();
    if (this._loading) return this._loading;
    this._loading = getBbs(this._hass)
      .then((snap) => {
        if (!snap?.settings) throw new Error('Unexpected BBS response');
        this.snapshot = snap;
        this.error = null;
      })
      .catch((err: { message?: string }) => {
        this.error = err?.message ?? String(err);
      })
      .finally(() => {
        this._loading = null;
        this._notify();
      });
    return this._loading;
  }

  /** Replace the snapshot (used by tests and after optimistic updates). */
  setSnapshot(snap: BbsSnapshot | null): void {
    this.snapshot = snap;
    this._notify();
  }

  subscribe(listener: () => void): () => void {
    this._listeners.add(listener);
    return () => this._listeners.delete(listener);
  }

  /** Follow the radio selected in the panel (BBS UI only shows for the BBS radio). */
  setActiveEntry(entryId: string | null): void {
    if (entryId === this.activeEntryId) return;
    this.activeEntryId = entryId;
    this._notify();
  }

  /**
   * True when the selected radio is the one BBS and Bot run on (or when
   * that can't be told yet). With a second companion selected, all BBS
   * and Bot controls are hidden.
   */
  get active(): boolean {
    const radio = this.snapshot?.radio_entry_id;
    return !radio || !this.activeEntryId || this.activeEntryId === radio;
  }

  /** Name of the radio BBS and Bot run on. */
  get radioName(): string {
    const radio = this.snapshot?.radio_entry_id;
    return this.snapshot?.radios?.find((r) => r.entry_id === radio)?.name ?? '';
  }

  get enabled(): boolean {
    return !!this.snapshot?.settings.enabled;
  }

  statusFor(pubkeyPrefix: string | undefined | null): BbsStatus {
    const snap = this.snapshot;
    if (!snap || !pubkeyPrefix) return NO_STATUS;
    const user = snap.users.find((u) => prefixesMatch(u.pubkey, pubkeyPrefix)) ?? null;
    const request = user
      ? null
      : snap.requests.find((r) => prefixesMatch(r.pubkey, pubkeyPrefix)) ?? null;
    if (!user) return { ...NO_STATUS, request };
    return {
      access: user.active ? 'active' : 'suspended',
      admin: user.is_admin,
      user,
      request: null,
    };
  }

  private _notify(): void {
    this._listeners.forEach((l) => {
      try { l(); } catch (err) { console.error('BBS listener failed', err); }
    });
  }
}

export const bbsState = new BbsState();

/** Re-renders the host element whenever the shared BBS state changes. */
export class BbsStateController implements ReactiveController {
  private _unsub: (() => void) | null = null;

  constructor(private host: ReactiveControllerHost, private state: BbsState = bbsState) {
    host.addController(this);
  }

  hostConnected(): void {
    this._unsub = this.state.subscribe(() => this.host.requestUpdate());
  }

  hostDisconnected(): void {
    this._unsub?.();
    this._unsub = null;
  }
}
