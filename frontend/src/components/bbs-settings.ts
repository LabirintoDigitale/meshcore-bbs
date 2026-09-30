import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { deleteBbsPost, importBbsDump, setBbsMenus, setBbsSettings } from '../api';
import { bbsState, BbsStateController } from '../bbs/bbs-state';
import { PANEL_VERSION } from '../constants';
import type { BbsImportSummary, BbsMenu, BbsSettings, HomeAssistant } from '../types';

type NumericKey = 'main_menu' | 'max_len' | 'session_ttl' | 'posts_shown' | 'denied_every' | 'admin_page';

const NUMERIC_FIELDS: Array<{ key: NumericKey; label: string; min: number; max: number; hint: string }> = [
  { key: 'max_len', label: 'Max message length', min: 20, max: 200, hint: 'Longer replies are split into several messages.' },
  { key: 'session_ttl', label: 'Session timeout (s)', min: 30, max: 86400, hint: 'Idle time before the next message restarts from the welcome.' },
  { key: 'posts_shown', label: 'Posts shown', min: 1, max: 20, hint: 'How many posts the board shows.' },
  { key: 'main_menu', label: 'Main menu id', min: 1, max: 1000000, hint: 'Menu shown first.' },
  { key: 'denied_every', label: 'Auto-reply interval (s)', min: 0, max: 86400, hint: 'At most one auto-reply per contact in this window (0 = always).' },
  { key: 'admin_page', label: 'Admin list page size', min: 1, max: 20, hint: 'Lines per page for !utenti, !richieste, !post.' },
];

function errMessage(err: unknown): string {
  return (err as { message?: string })?.message ?? String(err);
}

/**
 * Settings → BBS: on/off switch, tunables, menu editor, bulletin board
 * moderation and the one-off import of a MeshBBS MySQL dump.
 */
@customElement('meshcore-bbs-settings')
export class BbsSettingsCard extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;

  @state() private _draft: Partial<BbsSettings> = {};
  @state() private _saving = false;
  @state() private _settingsMsg = '';
  @state() private _settingsErr = '';

  @state() private _menusText: string | null = null;
  @state() private _menuErrors: string[] = [];
  @state() private _menusMsg = '';

  @state() private _importSql: string | null = null;
  @state() private _importName = '';
  @state() private _importSummary: BbsImportSummary | null = null;
  @state() private _importMsg = '';
  @state() private _importErr = '';

  // Re-renders this element when the shared BBS state changes.
  protected readonly bbsController = new BbsStateController(this);

  static styles = css`
    :host { display: block; }
    .card {
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 16px;
    }
    .card-title {
      font-size: 15px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
    }
    .sub {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 12px;
      line-height: 1.4;
    }
    .warning {
      font-size: 13px;
      padding: 10px 12px;
      border-radius: 8px;
      background: rgba(255, 152, 0, 0.12);
      color: var(--primary-text-color);
      margin-bottom: 12px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 12px 16px;
    }
    label { display: block; font-size: 12px; font-weight: 600; color: var(--secondary-text-color); margin-bottom: 4px; }
    .hint { font-size: 11px; color: var(--secondary-text-color); margin-top: 2px; }
    input[type='text'], input[type='number'], textarea {
      width: 100%;
      box-sizing: border-box;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color);
      font-size: 14px;
      font-family: inherit;
    }
    textarea { font-family: var(--code-font-family, monospace); font-size: 12px; min-height: 280px; resize: vertical; }
    .full { grid-column: 1 / -1; }
    .check { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--primary-text-color); }
    .row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; align-items: center; }
    button {
      padding: 8px 14px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
      cursor: pointer;
    }
    button:disabled { opacity: 0.6; cursor: default; }
    button.primary { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }
    button.danger { color: var(--error-color, #db4437); }
    .switch { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; }
    .pill { font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 10px; }
    .pill.on { background: rgba(76, 175, 80, 0.15); color: #2e7d32; }
    .pill.off { background: rgba(114, 114, 114, 0.15); color: #616161; }
    .msg { font-size: 12px; color: var(--secondary-text-color); }
    .err { font-size: 12px; color: var(--error-color, #db4437); }
    ul.errors { margin: 8px 0 0; padding-left: 18px; color: var(--error-color, #db4437); font-size: 12px; }
    .post { display: flex; gap: 8px; align-items: flex-start; padding: 8px 0; border-top: 1px solid var(--divider-color, #e0e0e0); }
    .post:first-child { border-top: none; }
    .post-body { flex: 1; min-width: 0; font-size: 13px; overflow-wrap: anywhere; }
    .post-text { white-space: pre-wrap; }
    .post-meta { font-size: 11px; color: var(--secondary-text-color); margin-bottom: 2px; }
    .stats { display: flex; gap: 16px; flex-wrap: wrap; font-size: 13px; color: var(--secondary-text-color); }
    .stats b { color: var(--primary-text-color); }
    .version { font-size: 12px; color: var(--secondary-text-color); }
    .version b { color: var(--primary-text-color); font-weight: 600; }
  `;

  willUpdate(changed: Map<string, unknown>) {
    // Idempotent: only (re)binds when the WS connection changes.
    if (changed.has('hass') && this.hass) bbsState.attach(this.hass);
  }

  private get _isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? false;
  }

  render() {
    const snap = bbsState.snapshot;
    if (!snap) {
      return html`<div class="card"><div class="card-title">BBS</div>
        <div class="sub">${bbsState.error ? `BBS unavailable: ${bbsState.error}` : 'Loading…'}</div>
        ${this._renderVersion()}</div>`;
    }
    if (!this._isAdmin) {
      return html`<div class="card"><div class="card-title">BBS
        <span class="pill ${snap.settings.enabled ? 'on' : 'off'}">${snap.settings.enabled ? 'ON' : 'OFF'}</span></div>
        <div class="sub">BBS settings can only be changed by a Home Assistant administrator.</div>
        ${this._renderVersion()}</div>`;
    }
    return html`
      ${this._renderMain()}
      ${this._renderMenus()}
      ${this._renderPosts()}
      ${this._renderImport()}
      <div class="card">${this._renderVersion()}</div>
    `;
  }

  /**
   * Integration (backend) and panel (this bundle) versions. They differ
   * when the browser still runs a cached panel after an update.
   */
  private _renderVersion() {
    const backend = bbsState.snapshot?.version || '';
    const stale = !!backend && backend !== PANEL_VERSION;
    return html`
      <div class="version">
        MeshCore BBS — integration <b>v${backend || '?'}</b> · panel <b>v${PANEL_VERSION}</b>
      </div>
      ${stale ? html`<div class="warning" style="margin: 8px 0 0;">
        The panel in this browser is older than the installed integration.
        Reload the page with Ctrl+Shift+R (in the HA app: Settings → Companion app → Debugging → Reset frontend cache).
      </div>` : nothing}`;
  }

  // ─── settings ─────────────────────────────────────────────────────

  private _value<K extends keyof BbsSettings>(key: K): BbsSettings[K] {
    return (this._draft[key] ?? bbsState.snapshot!.settings[key]) as BbsSettings[K];
  }

  private _set<K extends keyof BbsSettings>(key: K, value: BbsSettings[K]) {
    this._draft = { ...this._draft, [key]: value };
  }

  private _renderMain() {
    const snap = bbsState.snapshot!;
    const s = snap.settings;
    const dirty = Object.keys(this._draft).length > 0;
    return html`
      <div class="card">
        <div class="card-title">
          <span>BBS</span>
          <label class="switch">
            <input type="checkbox" .checked=${s.enabled} ?disabled=${this._saving}
              @change=${(e: Event) => this._saveSettings({ enabled: (e.target as HTMLInputElement).checked })}>
            <span class="pill ${s.enabled ? 'on' : 'off'}">${s.enabled ? 'ON' : 'OFF'}</span>
          </label>
        </div>
        <p class="sub">
          Contacts with BBS access get the menu when they send a direct message to this node.
          Manage access from any contact (Nodes tab or chat): open it and use the BBS section.
        </p>
        ${!s.enabled ? html`<div class="warning">
          The BBS is off. Before turning it on, disable any external BBS automation
          (e.g. the old MeshBBS automation and <code>rest_command.bbs</code>) or both will reply.
        </div>` : nothing}
        <div class="stats">
          <span><b>${snap.users.filter((u) => u.active).length}</b> active users</span>
          <span><b>${snap.users.filter((u) => u.is_admin).length}</b> admins</span>
          <span><b>${snap.requests.length}</b> pending requests</span>
          <span><b>${snap.posts.length}</b> posts</span>
        </div>

        <div class="grid" style="margin-top: 16px;">
          <div>
            <label>BBS name</label>
            <input type="text" .value=${this._value('name')}
              @input=${(e: Event) => this._set('name', (e.target as HTMLInputElement).value)}>
            <div class="hint">Shown by the {bbs} placeholder.</div>
          </div>
          <div>
            <label>Admin command prefix</label>
            <input type="text" maxlength="3" .value=${this._value('admin_prefix')}
              @input=${(e: Event) => this._set('admin_prefix', (e.target as HTMLInputElement).value)}>
            <div class="hint">Admins send e.g. ${this._value('admin_prefix') || '!'}help over the mesh.</div>
          </div>
          ${NUMERIC_FIELDS.map((f) => html`
            <div>
              <label>${f.label}</label>
              <input type="number" min=${f.min} max=${f.max} .value=${String(this._value(f.key))}
                @input=${(e: Event) => this._set(f.key, Number((e.target as HTMLInputElement).value))}>
              <div class="hint">${f.hint}</div>
            </div>`)}
          <div class="full">
            <label class="check">
              <input type="checkbox" .checked=${this._value('reply_denied')}
                @change=${(e: Event) => this._set('reply_denied', (e.target as HTMLInputElement).checked)}>
              Auto-reply to contacts without access
            </label>
          </div>
          <div class="full">
            <label>Auto-reply text</label>
            <input type="text" .value=${this._value('denied_text')}
              @input=${(e: Event) => this._set('denied_text', (e.target as HTMLInputElement).value)}>
          </div>
          <div class="full">
            <label>Notify service for messages from contacts without access</label>
            <input type="text" placeholder="notify.mobile_app_my_phone" .value=${this._value('notify_service')}
              @input=${(e: Event) => this._set('notify_service', (e.target as HTMLInputElement).value)}>
            <div class="hint">Leave empty for no notification. The event <code>meshcore_bbs_request</code> is always fired for automations.</div>
          </div>
        </div>
        <div class="row">
          <button class="primary" ?disabled=${!dirty || this._saving} @click=${() => this._saveSettings(this._draft)}>Save settings</button>
          ${dirty ? html`<button ?disabled=${this._saving} @click=${() => { this._draft = {}; }}>Discard</button>` : nothing}
          ${this._settingsMsg ? html`<span class="msg">${this._settingsMsg}</span>` : nothing}
          ${this._settingsErr ? html`<span class="err">${this._settingsErr}</span>` : nothing}
        </div>
      </div>`;
  }

  private async _saveSettings(settings: Partial<BbsSettings>) {
    if (!this.hass) return;
    this._saving = true;
    this._settingsMsg = '';
    this._settingsErr = '';
    try {
      await setBbsSettings(this.hass, settings);
      if (settings === this._draft) this._draft = {};
      this._settingsMsg = 'Saved.';
      await bbsState.refresh();
    } catch (err) {
      this._settingsErr = errMessage(err);
    } finally {
      this._saving = false;
    }
  }

  // ─── menus ────────────────────────────────────────────────────────

  private _currentMenusText(): string {
    return this._menusText ?? JSON.stringify(bbsState.snapshot!.menus, null, 2);
  }

  private _renderMenus() {
    return html`
      <div class="card">
        <div class="card-title">BBS menus</div>
        <p class="sub">
          JSON list of menus. Each option has a <code>key</code>, a <code>label</code> and a
          <code>type</code>: <code>text</code> (with <code>text</code>), <code>menu</code>
          (with the target <code>menu</code> id) or <code>action</code>
          (<code>board</code>, <code>write</code>, <code>exit</code>). Placeholders:
          {name} {bbs} {users} {posts} {date} {time}. Keys m, menu and ? are reserved.
        </p>
        <textarea spellcheck="false" .value=${this._currentMenusText()}
          @input=${(e: Event) => { this._menusText = (e.target as HTMLTextAreaElement).value; this._menusMsg = ''; }}></textarea>
        ${this._menuErrors.length ? html`<ul class="errors">${this._menuErrors.map((e) => html`<li>${e}</li>`)}</ul>` : nothing}
        <div class="row">
          <button @click=${() => this._submitMenus(true)}>Check</button>
          <button class="primary" ?disabled=${this._menusText === null} @click=${() => this._submitMenus(false)}>Save menus</button>
          ${this._menusText !== null ? html`<button @click=${() => { this._menusText = null; this._menuErrors = []; this._menusMsg = ''; }}>Discard changes</button>` : nothing}
          ${this._menusMsg ? html`<span class="msg">${this._menusMsg}</span>` : nothing}
        </div>
      </div>`;
  }

  private async _submitMenus(dryRun: boolean) {
    if (!this.hass) return;
    this._menuErrors = [];
    this._menusMsg = '';
    let menus: BbsMenu[];
    try {
      menus = JSON.parse(this._currentMenusText());
      if (!Array.isArray(menus)) throw new Error('The menus must be a JSON list [ ... ]');
    } catch (err) {
      this._menuErrors = [`Invalid JSON: ${errMessage(err)}`];
      return;
    }
    try {
      const { errors } = await setBbsMenus(this.hass, menus, dryRun);
      this._menuErrors = errors;
      if (!errors.length) {
        this._menusMsg = dryRun ? 'All good.' : 'Menus saved.';
        if (!dryRun) {
          this._menusText = null;
          await bbsState.refresh();
        }
      }
    } catch (err) {
      this._menuErrors = [errMessage(err)];
    }
  }

  // ─── posts ────────────────────────────────────────────────────────

  private _renderPosts() {
    const posts = bbsState.snapshot!.posts;
    return html`
      <div class="card">
        <div class="card-title">Bulletin board (${posts.length})</div>
        ${posts.length === 0 ? html`<div class="sub">No posts yet.</div>` : posts.map((p) => html`
          <div class="post">
            <div class="post-body">
              <div class="post-meta">#${p.id} · ${p.author} · ${new Date(p.created * 1000).toLocaleString()}</div>
              <div class="post-text">${p.body}</div>
            </div>
            <button class="danger" title="Delete post" @click=${() => this._deletePost(p.id)}>Delete</button>
          </div>`)}
      </div>`;
  }

  private async _deletePost(id: number) {
    if (!this.hass || !confirm(`Delete post #${id}?`)) return;
    try {
      await deleteBbsPost(this.hass, id);
      await bbsState.refresh();
    } catch (err) {
      alert(errMessage(err));
    }
  }

  // ─── import ───────────────────────────────────────────────────────

  private _renderImport() {
    const s = this._importSummary;
    return html`
      <div class="card">
        <div class="card-title">Import from MeshBBS (MySQL)</div>
        <p class="sub">
          Load a <code>.sql</code> dump of the old MeshBBS database (e.g. exported with HeidiSQL or mysqldump).
          Users, admins, pending requests, posts and menus found in the file replace the current ones;
          settings are kept.
        </p>
        <input type="file" accept=".sql,text/plain" @change=${this._onFile}>
        ${s ? html`
          <div class="warning" style="margin-top: 12px;">
            ${this._importName}: ${s.users ?? 0} users, ${s.requests ?? 0} requests,
            ${s.posts ?? 0} posts, ${s.menus ?? 0} menus.
            ${(s.menu_errors ?? []).length ? html`<ul class="errors">${s.menu_errors!.map((e) => html`<li>${e}</li>`)}</ul>` : nothing}
          </div>
          <div class="row">
            <button class="primary" @click=${() => this._runImport(false)}>Import and replace</button>
            <button @click=${this._resetImport}>Cancel</button>
          </div>` : nothing}
        ${this._importMsg ? html`<div class="msg" style="margin-top: 8px;">${this._importMsg}</div>` : nothing}
        ${this._importErr ? html`<div class="err" style="margin-top: 8px;">${this._importErr}</div>` : nothing}
      </div>`;
  }

  private _resetImport = () => {
    this._importSql = null;
    this._importSummary = null;
    this._importName = '';
  };

  private _onFile = async (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    this._resetImport();
    this._importMsg = '';
    this._importErr = '';
    if (!file) return;
    this._importName = file.name;
    this._importSql = await file.text();
    input.value = '';
    await this._runImport(true);
  };

  private async _runImport(dryRun: boolean) {
    if (!this.hass || this._importSql === null) return;
    this._importErr = '';
    try {
      const res = await importBbsDump(this.hass, this._importSql, dryRun);
      if (dryRun) {
        this._importSummary = res.summary;
      } else {
        this._importMsg = `Imported ${this._importName}.`;
        this._resetImport();
        this._menusText = null;
        await bbsState.refresh();
      }
    } catch (err) {
      this._importErr = errMessage(err);
      this._resetImport();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-bbs-settings': BbsSettingsCard;
  }
}
