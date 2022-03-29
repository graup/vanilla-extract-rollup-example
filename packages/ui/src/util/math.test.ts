import { relative } from './math';

describe('math.relative', () => {
  it('returns ratio for positive numbers', () => {
    expect(relative({ value: 10, min: 0, max: 10 })).toBeCloseTo(1);
    expect(relative({ value: 5, min: 0, max: 20 })).toBeCloseTo(0.25);
    expect(relative({ value: -5, min: 20, max: 0 })).toBeCloseTo(0);
  });
  it('returns ratio for range spanning negative and positive', () => {
    expect(relative({ value: -50, min: -100, max: 100 })).toBeCloseTo(0.25);
    expect(relative({ value: 0, min: -100, max: 100 })).toBeCloseTo(0.5);
    expect(relative({ value: 20, min: -100, max: 100 })).toBeCloseTo(0.6);
  });
  it('returns ratio for negative numbers', () => {
    expect(relative({ value: -10, min: -20, max: -10 })).toBeCloseTo(1);
    expect(relative({ value: -17, min: -20, max: -10 })).toBeCloseTo(0.3);
    expect(relative({ value: -5, min: -20, max: -10 })).toBeCloseTo(1);
    expect(relative({ value: -25, min: -20, max: -10 })).toBeCloseTo(0);
  });
  it('uses default values', () => {
    expect(relative({ value: 10, max: 100 })).toBe(0.1);
    expect(relative({ value: -10, max: 100 })).toBe(0);
    expect(relative({ value: -10, min: -100 })).toBe(0.9);
  });
  it('returns garbage when min > max', () => {
    expect(relative({ value: 5, min: 20, max: 0 })).toBeCloseTo(0);
  });
  it('returns garbage for default values', () => {
    expect(relative({ value: -1 })).toBe(0);
    expect(relative({ value: 10 })).toBe(1);
  });
});