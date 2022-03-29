/**
 * Returns relative value (ratio) between min and max, e.g.
 * relative({ value: 10, min: 0, max: 20 }) -> 0.5
 */
export function relative({ value, max = 0, min = 0 }: { value: number; max?: number; min?: number }) {
  if (value <= min) {
    return 0;
  }
  if (value >= max) {
    return 1;
  }
  return Math.abs(value - min) / Math.abs(max - min);
}