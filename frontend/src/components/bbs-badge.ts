import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { bbsState, BbsStateController, type BbsStatus } from '../bbs/bbs-state';

/** Short text for a status, used for tooltips and screen readers. */
export function bbsStatusLabel(status: BbsStatus): string {
  if (status.access === 'active') return status.admin ? 'BBS admin' : 'BBS access';
  if (status.access === 'suspended') return status.admin ? 'BBS suspended (admin)' : 'BBS suspended';
  if (status.request) return 'BBS access request';
  return '';
}

/**
 * Inline BBS status icons shown after a contact's name:
 * ✅ access · ⏸️ suspended · 👑 admin · 📨 pending access request.
 * Renders nothing for contacts that have no BBS relationship.
 */
@customElement('meshcore-bbs-badge')
export class BbsBadge extends LitElement {
  @property({ type: String }) pubkey = '';

  // Re-renders this element when the shared BBS state changes.
  protected readonly bbsController = new BbsStateController(this);

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      margin-left: 4px;
      font-size: 0.85em;
      line-height: 1;
      vertical-align: middle;
      white-space: nowrap;
    }
    :host([hidden]) {
      display: none;
    }
  `;

  render() {
    if (!bbsState.active) return nothing;
    const status = bbsState.statusFor(this.pubkey);
    const label = bbsStatusLabel(status);
    if (!label) return nothing;
    const icons: string[] = [];
    if (status.access === 'active') icons.push('✅');
    if (status.access === 'suspended') icons.push('⏸️');
    if (status.admin) icons.push('👑');
    if (status.request) icons.push('📨');
    return html`<span title=${label} role="img" aria-label=${label}>${icons.join('')}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-bbs-badge': BbsBadge;
  }
}
