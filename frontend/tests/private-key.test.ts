import { describe, expect, it } from 'vitest';
import { parseExportedKey } from '../src/utils/private-key';

const KEY = 'ab'.repeat(64);

describe('parseExportedKey', () => {
  it('returns the 128-hex key', () => {
    expect(parseExportedKey(JSON.stringify({ private_key: KEY.toUpperCase() }))).toEqual({ ok: true, key: KEY });
  });

  it('recognises firmware with export disabled', () => {
    const r = parseExportedKey(JSON.stringify({ reason: 'private_key_export_disabled' }));
    expect(r.ok).toBe(false);
    expect(!r.ok && r.reason).toBe('disabled');
  });

  it('rejects anything else', () => {
    for (const resp of ['OK', '{"error_code": 6}', JSON.stringify({ private_key: 'abcd' })]) {
      const r = parseExportedKey(resp);
      expect(r.ok).toBe(false);
      expect(!r.ok && r.reason).toBe('error');
    }
  });
});
