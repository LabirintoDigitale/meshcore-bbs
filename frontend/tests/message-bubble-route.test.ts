// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from 'vitest';
import { html, render } from 'lit';
import { messageHops, routeEntryText } from '../src/components/message-bubble';
import type { ChatMessage, MessageGroup } from '../src/types';

// Hop count next to the time on received bubbles, and Reply pre-filling
// the route the message took.

const ROUTE = { path_nodes: ['23bd11', '5982aa', '1029bb'], snr: 8.5, rssi: -88 };

function makeGroup(opts: { rx?: Array<Record<string, unknown>>; isOutgoing?: boolean }): MessageGroup {
  const isOutgoing = opts.isOutgoing ?? false;
  const msg: ChatMessage = {
    id: 'route-msg-1',
    sender: isOutgoing ? 'Me' : 'Alfa 10',
    text: 'test',
    timestamp: new Date('2026-09-30T12:54:53Z'),
    isOutgoing,
    isSystem: false,
    raw: 'test',
    mentions: [],
    rxLogData: opts.rx,
  };
  return { sender: msg.sender, isOutgoing, isSystem: false, messages: [msg], startTime: msg.timestamp, endTime: msg.timestamp };
}

async function mountBubble(group: MessageGroup) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  render(html`<meshcore-message-bubble .group=${group}></meshcore-message-bubble>`, container);
  const bubble = container.querySelector('meshcore-message-bubble') as HTMLElement & { updateComplete: Promise<unknown> };
  await bubble.updateComplete;
  return bubble;
}

afterEach(() => { document.body.innerHTML = ''; });

describe('route helpers', () => {
  it('formats a route entry like the message popup', () => {
    expect(routeEntryText(ROUTE)).toBe('23BD > 5982 > 1029 · SNR: 8.5 · RSSI: -88');
    expect(routeEntryText({ hop_count: 2, snr: 5 })).toBe('2 hops · SNR: 5');
    expect(routeEntryText({ snr: 13.75 })).toBe('0 hops · SNR: 13.75');
  });

  it('takes the fewest hops across all heard paths', () => {
    expect(messageHops([ROUTE, { path_nodes: ['aa'] }])).toBe(1);
    expect(messageHops([{ hop_count: 0, synthesized: true }])).toBe(0);
    expect(messageHops([])).toBeNull();
    expect(messageHops(undefined)).toBeNull();
  });
});

describe('message-bubble hops and reply', () => {
  it('shows the hop count next to the time on received messages', async () => {
    const bubble = await mountBubble(makeGroup({ rx: [ROUTE] }));
    expect(bubble.shadowRoot!.querySelector('.hops')!.textContent).toBe('3 hops');
  });

  it('shows no hop count without route data or on outgoing messages', async () => {
    const none = await mountBubble(makeGroup({}));
    expect(none.shadowRoot!.querySelector('.hops')).toBeNull();
    const out = await mountBubble(makeGroup({ rx: [ROUTE], isOutgoing: true }));
    expect(out.shadowRoot!.querySelector('.hops')).toBeNull();
  });

  it('Reply pre-fills the mention and the first route', async () => {
    const bubble = await mountBubble(makeGroup({ rx: [ROUTE, { path_nodes: ['aa'] }] }));
    let mention = '';
    bubble.addEventListener('reply-to-sender', (e) => { mention = (e as CustomEvent).detail.mention; });
    (bubble.shadowRoot!.querySelector('.bubble') as HTMLElement).click();
    await bubble.updateComplete;
    const reply = [...bubble.shadowRoot!.querySelectorAll('.message-dialog-action')]
      .find((b) => b.textContent!.includes('Reply')) as HTMLElement;
    reply.click();
    expect(mention).toBe('@[Alfa 10] Route: 23BD > 5982 > 1029 · SNR: 8.5 · RSSI: -88 ');
  });

  it('Reply without route data is just the mention', async () => {
    const bubble = await mountBubble(makeGroup({}));
    let mention = '';
    bubble.addEventListener('reply-to-sender', (e) => { mention = (e as CustomEvent).detail.mention; });
    (bubble.shadowRoot!.querySelector('.bubble') as HTMLElement).click();
    await bubble.updateComplete;
    ([...bubble.shadowRoot!.querySelectorAll('.message-dialog-action')]
      .find((b) => b.textContent!.includes('Reply')) as HTMLElement).click();
    expect(mention).toBe('@[Alfa 10] ');
  });
});
