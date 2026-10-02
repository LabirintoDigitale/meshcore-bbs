/**
 * Read the companion's answer to ``export_private_key`` (as rendered by
 * ``meshcore_bbs/execute_local``): ``{"private_key": "<128 hex>"}`` on success,
 * ``{"reason": "private_key_export_disabled"}`` when the firmware was built
 * without key export, anything else on error.
 */
export type ExportedKey =
  | { ok: true; key: string }
  | { ok: false; reason: 'disabled' | 'error'; detail: string };

export function parseExportedKey(response: string): ExportedKey {
  let data: unknown;
  try {
    data = JSON.parse(response);
  } catch {
    return { ok: false, reason: 'error', detail: response };
  }
  const obj = (data && typeof data === 'object' ? data : {}) as Record<string, unknown>;
  const key = typeof obj.private_key === 'string' ? obj.private_key.trim().toLowerCase() : '';
  if (/^[0-9a-f]{128}$/.test(key)) return { ok: true, key };
  if (obj.reason === 'private_key_export_disabled') {
    return { ok: false, reason: 'disabled', detail: response };
  }
  return { ok: false, reason: 'error', detail: response };
}
