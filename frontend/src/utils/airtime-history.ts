import type { HomeAssistant } from '../types';

/**
 * Last non-zero reading of a repeater airtime-utilization sensor.
 *
 * The upstream meshcore integration derives `*_airtime_utilization` from
 * the difference between two consecutive repeater status polls; until a
 * second poll arrives (e.g. after every Home Assistant restart) the sensor
 * reports 0. The Radio activity tile then falls back to the most recent
 * real value in the recorder history instead of a misleading 0.
 */

export interface AirtimeReading {
  value: number;
  /** Epoch milliseconds of the reading. */
  ts: number;
}

/** Compressed history row (`minimal_response`): state + last_updated/changed (epoch seconds). */
interface HistoryRow {
  s?: string;
  lu?: number;
  lc?: number;
  state?: string;
  last_updated?: string;
  last_changed?: string;
}

function rowTime(row: HistoryRow): number {
  if (typeof row.lu === 'number') return row.lu * 1000;
  if (typeof row.lc === 'number') return row.lc * 1000;
  const iso = row.last_updated ?? row.last_changed;
  return iso ? new Date(iso).getTime() : NaN;
}

/** Newest row whose state is a number > 0, or null. */
export function lastNonZeroReading(rows: HistoryRow[] | undefined): AirtimeReading | null {
  if (!Array.isArray(rows)) return null;
  for (let i = rows.length - 1; i >= 0; i--) {
    const raw = rows[i].s ?? rows[i].state;
    const value = raw === undefined ? NaN : parseFloat(raw);
    const ts = rowTime(rows[i]);
    if (Number.isFinite(value) && value > 0 && Number.isFinite(ts)) return { value, ts };
  }
  return null;
}

/** Query the recorder for the last non-zero reading within `days`. */
export async function fetchLastNonZeroReading(
  hass: HomeAssistant,
  entityId: string,
  days = 7,
): Promise<AirtimeReading | null> {
  const res = await hass.callWS<Record<string, HistoryRow[]>>({
    type: 'history/history_during_period',
    start_time: new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString(),
    entity_ids: [entityId],
    minimal_response: true,
    no_attributes: true,
    significant_changes_only: false,
  });
  return lastNonZeroReading(res?.[entityId]);
}
