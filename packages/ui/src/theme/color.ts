import { ColorWeightMap, NamedColor, namedColors, NamedColorWeight } from './color-util';
import { vars } from './theme.css';
export { namedColors };
export type { NamedColor, NamedColorWeight };

type ColorWeights<C extends Color> = C extends NamedColor ? ColorWeightMap[C] : never;
type RgbColor = `#${string}`;

export type Color = RgbColor | NamedColor | NamedColorWeight;

/**
 * Translates color tokens into CSS values.
 * getColor('red') -> 'var(--color-red)'
 * getColor('red-600') -> 'var(--color-red-600)'
 * getColor('red', '600') -> 'var(--color-red-600)'
 * getColor('#abcdef') -> ''#abcdef'
 */
export function getColor<C extends Color>(color: C, weight?: ColorWeights<C>): string {
  if (weight && `${color}-${weight}` in vars.color) {
    return vars.color[`${color}-${weight}` as NamedColorWeight];
  }
  if (color in vars.color) {
    return vars.color[color as NamedColorWeight];
  }
  if (color && color.startsWith('#')) {
    return color;
  }
  throw new Error('undefined color');
}
