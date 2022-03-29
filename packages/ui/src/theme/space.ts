import { scalePx } from './scale';

const numerics = [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 7, 8] as const;
const numericalDef = Object.fromEntries(numerics.map(n => [`${n}`, scalePx(n)])) as Record<typeof numerics[number], string>;

export const space = {
  'small': scalePx(1),
  'medium': scalePx(2),
  'large': scalePx(4),
  ...numericalDef,
};

export const spaces = Object.keys(space) as (keyof typeof space)[];
export type Space = typeof spaces[number];