import { getColor } from './color';

describe('getColor', () => {
  it('returns named color with default weight', () => {
    expect(getColor('red')).toContain('var(--color-red');
    expect(getColor('cloud')).toContain('var(--color-cloud');
  });
  it('returns named color with weight in string', () => {
    expect(getColor('red-400')).toContain('var(--color-red-400');
    expect(getColor('cloud-030')).toContain('var(--color-cloud-030');
  });
  it('returns named color with weight in arg', () => {
    expect(getColor('red', '400')).toContain('var(--color-red-400');
    expect(getColor('cloud', '030')).toContain('var(--color-cloud-030');
  });
  it('returns custom color', () => {
    expect(getColor('#123456')).toBe('#123456');
  });
  it('returns undefined for unknown color', () => {
    // @ts-expect-error: Argument of type '"lol"' is not assignable to parameter of type 'Color'.
    expect(() => getColor('lol')).toThrow(new Error('undefined color'));
    // @ts-expect-error: Argument of type '"red-123"' is not assignable to parameter of type 'Color'.
    expect(() => getColor('red-123')).toThrow(new Error('undefined color'));
  });
});