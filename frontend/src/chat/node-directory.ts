import type { ReactiveController, ReactiveControllerHost } from 'lit';
import { getContactsPaginated } from '../api';
import type { Contact, HomeAssistant } from '../types';

/**
 * Resolve the hop hashes in a message route ("9a92", "a0", …) to node
 * names, using every node the radio knows (added + discovered).
 *
 * A hop hash is the first 1–3 bytes of the forwarding node's public key.
 * With 1-byte hashes many nodes share a value, so a resolution lists all
 * candidates: forwarding nodes (repeaters, room servers) first, then the
 * most recently heard.
 */

export interface HopName {
  hash: string;
  /** Best guess, or null when no known node matches. */
  name: string | null;
  /** How many other known nodes share this hash. */
  others: number;
  candidates: string[];
}

interface Known {
  key: string;
  name: string;
  forwarding: boolean;
  lastAdvert: number;
}

const REFRESH_MS = 5 * 60 * 1000;

export class NodeDirectory {
  private _nodes: Known[] = [];
  private _hass?: HomeAssistant;
  private _entryId?: string;
  private _loadedAt = 0;
  private _loading: Promise<void> | null = null;
  private _listeners = new Set<() => void>();

  attach(hass: HomeAssistant, entryId?: string): void {
    const entryChanged = entryId !== this._entryId;
    this._hass = hass;
    this._entryId = entryId;
    if (entryChanged || Date.now() - this._loadedAt > REFRESH_MS) void this.refresh();
  }

  /** Replace the known nodes (tests, or callers that already have contacts). */
  setContacts(contacts: Contact[]): void {
    this._nodes = contacts
      .filter((c) => c.public_key)
      .map((c) => ({
        key: c.public_key.toLowerCase(),
        name: c.adv_name || c.public_key.substring(0, 8),
        forwarding: c.type === 2 || c.type === 3,
        lastAdvert: c.last_advert || 0,
      }));
    this._loadedAt = Date.now();
    this._listeners.forEach((l) => l());
  }

  refresh(): Promise<void> {
    if (!this._hass) return Promise.resolve();
    if (this._loading) return this._loading;
    this._loading = getContactsPaginated(this._hass, 'all', { limit: 5000, entryId: this._entryId })
      .then((res) => {
        if (res.contacts.length) this.setContacts(res.contacts);
      })
      .finally(() => { this._loading = null; });
    return this._loading;
  }

  subscribe(listener: () => void): () => void {
    this._listeners.add(listener);
    return () => this._listeners.delete(listener);
  }

  resolve(hash: string): HopName {
    const h = hash.toLowerCase();
    // Keep the directory fresh while routes are being looked at.
    if (this._hass && Date.now() - this._loadedAt > REFRESH_MS) void this.refresh();
    const matches = this._nodes
      .filter((n) => h && n.key.startsWith(h))
      .sort((a, b) => Number(b.forwarding) - Number(a.forwarding) || b.lastAdvert - a.lastAdvert);
    return {
      hash: h,
      name: matches.length ? matches[0].name : null,
      others: Math.max(0, matches.length - 1),
      candidates: matches.map((m) => m.name),
    };
  }
}

export const nodeDirectory = new NodeDirectory();

/** Re-renders the host when the directory reloads. */
export class NodeDirectoryController implements ReactiveController {
  private _unsub: (() => void) | null = null;

  constructor(private host: ReactiveControllerHost, private dir: NodeDirectory = nodeDirectory) {
    host.addController(this);
  }

  hostConnected(): void {
    this._unsub = this.dir.subscribe(() => this.host.requestUpdate());
  }

  hostDisconnected(): void {
    this._unsub?.();
    this._unsub = null;
  }
}
