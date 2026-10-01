import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  getBotConfig,
  getChannels,
  setBotConfig,
  type BotConfig,
  type BotMatch,
  type BotRule,
} from '../api';
import type { Channel, HomeAssistant } from '../types';

const MATCH_LABELS: Record<BotMatch, string> = {
  exact: 'Message is',
  starts_with: 'Starts with',
  contains: 'Contains',
};

function errMessage(err: unknown): string {
  return (err as { message?: string })?.message ?? String(err);
}

/**
 * Settings → Bot: per-channel commands that trigger an automatic reply
 * on that channel (e.g. "path" on #path, "test" on #test → the Reply line
 * with the route, SNR, RSSI and reception time).
 */
@customElement('meshcore-bot-settings')
export class BotSettings extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: String }) entryId?: string;

  @state() private _config: BotConfig | null = null;
  @state() private _channels: Channel[] = [];
  @state() private _selected: number | null = null;
  @state() private _dirty = false;
  @state() private _saving = false;
  @state() private _msg = '';
  @state() private _err = '';

  static styles = css`
    :host { display: block; }
    .card { background: var(--card-background-color, #fff); border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px; padding: 20px; margin-bottom: 16px; }
    .card-title { font-size: 15px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 12px;
      display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
    .sub { font-size: 13px; color: var(--secondary-text-color); margin: 0 0 12px; line-height: 1.4; }
    .switch { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; }
    .pill { font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 10px; }
    .pill.on { background: rgba(76, 175, 80, 0.15); color: #2e7d32; }
    .pill.off { background: rgba(114, 114, 114, 0.15); color: #616161; }
    label.small { display: block; font-size: 12px; font-weight: 600; color: var(--secondary-text-color); margin-bottom: 4px; }
    input[type='text'], input[type='number'], select { box-sizing: border-box; padding: 7px 9px; border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0); background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color); font-size: 14px; font-family: inherit; }
    .channels { display: flex; flex-wrap: wrap; gap: 6px; margin: 12px 0; }
    .chan { padding: 6px 12px; border-radius: 16px; border: 1px solid var(--divider-color, #e0e0e0);
      background: transparent; color: var(--primary-text-color); font-size: 13px; cursor: pointer; }
    .chan.on { background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15); border-color: var(--primary-color, #03a9f4); }
    .chan .n { font-size: 11px; color: var(--secondary-text-color); margin-left: 4px; }
    .rule { display: grid; grid-template-columns: minmax(110px, 1fr) minmax(110px, 140px) minmax(150px, 190px) auto auto;
      gap: 8px; align-items: center; padding: 6px 0; border-top: 1px solid var(--divider-color, #e0e0e0); }
    .rule:first-of-type { border-top: none; }
    @media (max-width: 640px) { .rule { grid-template-columns: 1fr 1fr; } }
    .rule input[type='text'] { width: 100%; }
    .rule button.danger { justify-self: start; }
    .check { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--secondary-text-color); }
    button.btn { padding: 7px 12px; border-radius: 8px; border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff); color: var(--primary-text-color); font-size: 13px; cursor: pointer; }
    button.btn:disabled { opacity: 0.6; cursor: default; }
    button.primary { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff); }
    button.danger { color: var(--error-color, #db4437); }
    .row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-top: 12px; }
    .example { font-family: var(--code-font-family, monospace); font-size: 12px; background: var(--secondary-background-color, #f5f5f5);
      border-radius: 8px; padding: 8px 10px; margin-top: 10px; overflow-wrap: anywhere; }
    .msg { font-size: 12px; color: var(--secondary-text-color); }
    .err { font-size: 12px; color: var(--error-color, #db4437); }
  `;

  private get _isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? false;
  }

  willUpdate(changed: Map<string, unknown>) {
    if ((changed.has('hass') || changed.has('entryId')) && this.hass && !this._config) {
      void this._load();
    }
  }

  private async _load() {
    if (!this.hass) return;
    try {
      const [config, channels] = await Promise.all([
        getBotConfig(this.hass),
        getChannels(this.hass, this.entryId),
      ]);
      this._config = config;
      this._channels = [...channels].sort((a, b) => a.channel_idx - b.channel_idx);
      if (this._selected === null && this._channels.length) this._selected = this._channels[0].channel_idx;
    } catch (err) {
      this._err = errMessage(err);
    }
  }

  private _rules(idx: number): BotRule[] {
    return this._config?.channels[String(idx)]?.rules ?? [];
  }

  private _update(mutator: (cfg: BotConfig) => void) {
    if (!this._config) return;
    const cfg: BotConfig = JSON.parse(JSON.stringify(this._config));
    mutator(cfg);
    this._config = cfg;
    this._dirty = true;
    this._msg = '';
  }

  private _editRules(idx: number, edit: (rules: BotRule[]) => BotRule[]) {
    const name = this._channels.find((c) => c.channel_idx === idx)?.name ?? '';
    this._update((cfg) => {
      const ch = cfg.channels[String(idx)] ?? { name, rules: [] };
      ch.name = name;
      ch.rules = edit(ch.rules);
      cfg.channels[String(idx)] = ch;
    });
  }

  private async _save(config?: BotConfig) {
    if (!this.hass || !this._config) return;
    this._saving = true;
    this._err = '';
    try {
      this._config = await setBotConfig(this.hass, config ?? this._config);
      this._dirty = false;
      this._msg = 'Saved.';
    } catch (err) {
      this._err = errMessage(err);
    } finally {
      this._saving = false;
    }
  }

  render() {
    const cfg = this._config;
    if (!cfg) {
      return html`<div class="card"><div class="card-title">Bot</div>
        <div class="sub">${this._err ? html`<span class="err">${this._err}</span>` : 'Loading…'}</div></div>`;
    }
    const admin = this._isAdmin;
    const sel = this._selected;
    const rules = sel === null ? [] : this._rules(sel);
    return html`
      <div class="card">
        <div class="card-title">
          <span>Bot</span>
          <label class="switch">
            <input type="checkbox" .checked=${cfg.enabled} ?disabled=${!admin || this._saving}
              @change=${(e: Event) => this._save({ ...cfg, enabled: (e.target as HTMLInputElement).checked })}>
            <span class="pill ${cfg.enabled ? 'on' : 'off'}">${cfg.enabled ? 'ON' : 'OFF'}</span>
          </label>
        </div>
        <p class="sub">
          Automatic replies on channels. Pick a channel and add commands: when someone sends a matching
          message on that channel, the bot replies there with the route the message took
          (repeaters, SNR, RSSI, reception time). Case doesn't matter; the bot never answers itself
          and answers each sender at most once per cooldown.
        </p>
        <div>
          <label class="small">Cooldown per sender (seconds)</label>
          <input type="number" min="0" max="3600" style="width: 120px" .value=${String(cfg.cooldown)} ?disabled=${!admin}
            @input=${(e: Event) => this._update((c) => { c.cooldown = Number((e.target as HTMLInputElement).value) || 0; })}>
        </div>

        <div class="channels">
          ${this._channels.length === 0 ? html`<span class="msg">No channels found on the radio.</span>` : nothing}
          ${this._channels.map((c) => {
            const n = this._rules(c.channel_idx).length;
            return html`<button class="chan ${sel === c.channel_idx ? 'on' : ''}"
              @click=${() => { this._selected = c.channel_idx; }}>
              ${c.name || `Channel ${c.channel_idx}`}${n ? html`<span class="n">(${n})</span>` : nothing}</button>`;
          })}
        </div>

        ${sel !== null ? html`
          ${rules.length === 0 ? html`<div class="msg">No commands on this channel yet.</div>` : nothing}
          ${rules.map((r, i) => html`
            <div class="rule">
              <input type="text" placeholder="Command, e.g. test" .value=${r.trigger} ?disabled=${!admin}
                @input=${(e: Event) => this._editRules(sel, (rs) => rs.map((x, j) => j === i
                  ? { ...x, trigger: (e.target as HTMLInputElement).value } : x))}>
              <select .value=${r.match} ?disabled=${!admin}
                @change=${(e: Event) => this._editRules(sel, (rs) => rs.map((x, j) => j === i
                  ? { ...x, match: (e.target as HTMLSelectElement).value as BotMatch } : x))}>
                ${(Object.keys(MATCH_LABELS) as BotMatch[]).map((m) =>
                  html`<option value=${m} ?selected=${r.match === m}>${MATCH_LABELS[m]}</option>`)}
              </select>
              <select .value=${r.action} ?disabled=${!admin}>
                <option value="route_reply" selected>Reply with route</option>
              </select>
              <label class="check"><input type="checkbox" .checked=${r.enabled} ?disabled=${!admin}
                @change=${(e: Event) => this._editRules(sel, (rs) => rs.map((x, j) => j === i
                  ? { ...x, enabled: (e.target as HTMLInputElement).checked } : x))}>On</label>
              <button class="btn danger" ?disabled=${!admin} title="Remove command"
                @click=${() => this._editRules(sel, (rs) => rs.filter((_, j) => j !== i))}>✕</button>
            </div>`)}
          <div class="row">
            <button class="btn" ?disabled=${!admin}
              @click=${() => this._editRules(sel, (rs) => [...rs,
                { trigger: '', match: 'exact', action: 'route_reply', enabled: true }])}>+ Add command</button>
          </div>
          <div class="example">Reply example: @[Alfa 10] | 9a92,86a8,146c (3 hops) | SNR: -9.25 dB | RSSI: -122 dBm | Received at: 14:56:15</div>
        ` : nothing}

        ${admin ? html`
          <div class="row">
            <button class="btn primary" ?disabled=${!this._dirty || this._saving} @click=${() => this._save()}>
              ${this._saving ? 'Saving…' : 'Save bot'}</button>
            ${this._dirty ? html`<button class="btn" @click=${() => { this._config = null; this._dirty = false; void this._load(); }}>Discard</button>` : nothing}
            ${this._msg ? html`<span class="msg">${this._msg}</span>` : nothing}
            ${this._err ? html`<span class="err">${this._err}</span>` : nothing}
          </div>` : html`<div class="msg" style="margin-top: 8px;">Only a Home Assistant administrator can change the bot.</div>`}
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-bot-settings': BotSettings;
  }
}
