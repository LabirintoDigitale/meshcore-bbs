/**
 * Message rates from the hourly *change* of a repeater's cumulative
 * counters (sent_flood, recv_direct, …).
 *
 * The upstream `_rate` sensors are a delta between two consecutive
 * repeater polls, so they read 0 after every Home Assistant restart until
 * a second poll arrives — with a poll every couple of hours the activity
 * chart stayed flat. The counters themselves are TOTAL_INCREASING sensors
 * whose long-term statistics keep a per-hour `change` across restarts.
 *
 * A repeater polled every N hours reports all N hours of traffic in the
 * hour of the poll; each non-zero change is therefore spread evenly over
 * the zero-change hours just before it (up to `maxSpread`), which is the
 * best estimate of when that traffic happened.
 */

export interface ChangePoint {
  start: number; // epoch ms of the hour
  change: number;
}

/** msg/min per hour, after spreading each poll's change over the gap before it. */
export function changesToRates(points: ChangePoint[], maxSpread = 12): Array<{ start: number; perMin: number }> {
  const sorted = [...points].sort((a, b) => a.start - b.start);
  const perHour = sorted.map(() => 0);
  let gapStart = 0; // first index of the current run of zero-change hours
  sorted.forEach((p, i) => {
    const change = Number.isFinite(p.change) && p.change > 0 ? p.change : 0;
    if (change === 0) return;
    const from = Math.max(gapStart, i - maxSpread);
    const span = i - from + 1;
    for (let j = from; j <= i; j++) perHour[j] += change / span;
    gapStart = i + 1;
  });
  return sorted.map((p, i) => ({ start: p.start, perMin: perHour[i] / 60 }));
}
