import { describe, it, expect } from 'vitest';
import { formatDistance } from '../src/components/contact-card';

describe('formatDistance', () => {
  it('is empty when unknown', () => {
    expect(formatDistance(undefined)).toBe('');
    expect(formatDistance(null)).toBe('');
  });

  it('uses metres below 1 km, one decimal below 10 km, whole km above', () => {
    expect(formatDistance(0.85)).toBe('850 m');
    expect(formatDistance(4.23)).toBe('4.2 km');
    expect(formatDistance(37.6)).toBe('38 km');
  });
});
