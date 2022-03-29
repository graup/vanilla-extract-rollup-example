import tokens from './tokens.json';

type Tokens = typeof tokens;
type Concat<A extends string, B extends string> = `${Lowercase<A>}-${Lowercase<B>}`;
export type NamedColor = Lowercase<keyof Tokens>;
export type NamedColorWeight = { [K in keyof Tokens]: K extends string ? keyof Tokens[K] extends string ? Concat<K, keyof Tokens[K]> : K : K }[keyof Tokens];
export type ColorWeightMap = { [K in keyof Tokens as Lowercase<K>]: K extends string ? keyof Tokens[K] extends string ? keyof Tokens[K] : K : K };

/**
 * Translate JSON from Figma into usable object structure and types
 **/
function colorsFromTokens() {
  const colors: Partial<Record<NamedColorWeight, string>> = {};
  for (const [color, colorDef] of Object.entries(tokens)) {
    for (const [weight, weightDef] of Object.entries(colorDef)) {
      const key = `${color.toLowerCase()}-${weight}` as NamedColorWeight;
      colors[key] = weightDef.value;
    }
  }
  return colors as Record<NamedColorWeight, string>;
}

export const colorMap = colorsFromTokens();
export const colors = Object.keys(colorMap) as NamedColorWeight[];

export const namedColors = Object.keys(tokens).map(str => str.toLowerCase()) as NamedColor[];
export const namedColorMap = Object.fromEntries(namedColors.map(color =>
  [color, colorMap[`${color}-600` as NamedColorWeight] ?? colorMap[`${color}-100`]],
)) as Record<NamedColor, string>;
export const colorWeightMap = Object.fromEntries(Object.keys(tokens).map(color =>
  [color.toLowerCase(), Object.keys(tokens[color as keyof Tokens])],
)) as Record<NamedColor, ColorWeightMap[keyof ColorWeightMap][]>;
