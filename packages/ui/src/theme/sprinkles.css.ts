import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { defaultScrollbarStyles } from './scrollbar';
import { vars } from './theme.css';

/**
 * Maps several keys to the same value
 */
function mapTo<Key extends string, Value>(keys: readonly Key[], value: Value) {
  return Object.fromEntries(keys.map(key => [key, value])) as Record<Key, Value>;
}

const spaceProperties = [
  'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
  'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
  'gap', 'rowGap', 'columnGap',
] as const;

const sizeProperties = [
  'width', 'maxWidth',
  'height', 'maxHeight',
  'left', 'top', 'right', 'bottom',
] as const;

const layoutStyles = defineProperties({
  properties: {
    display: ['none', 'flex', 'grid', 'block', 'inline', 'inline-flex'],
    visibility: ['hidden', 'visible'],
    flexDirection: ['row', 'column'],
    flexWrap: ['wrap'],
    flexFlow: ['row wrap', 'column wrap'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    placeItems: ['center'],
    textAlign: ['center', 'right'],
    boxSizing: ['border-box'],
    position: ['absolute', 'relative', 'fixed', 'sticky'],
    scrollbarGutter: ['stable'],
    aspectRatio: ['1'],
    overflow: {
      hidden: 'hidden',
      auto: {
        overflow: 'auto',
        ...defaultScrollbarStyles,
      },
      overlay: {
        overflow: ['auto', 'overlay'], // in Firefox and IE `overlay` will be ignored and `auto` will be applied
        ...defaultScrollbarStyles,
      },
    },
    ...mapTo(spaceProperties, { ...vars.space, auto: 'auto', full: '100%' }),
    ...mapTo(sizeProperties, ['0', '0%', '50%', '100%', 'auto', '100vh', '100vw', '100vmin', '100vmax']),
  },
  shorthands: {
    p: ['padding'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    ...mapTo(['px', 'paddingX'], ['paddingLeft', 'paddingRight']),
    ...mapTo(['py', 'paddingY'], ['paddingTop', 'paddingBottom']),
    m: ['margin'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ...mapTo(['mx', 'marginX'], ['marginLeft', 'marginRight']),
    ...mapTo(['my', 'marginY'], ['marginTop', 'marginBottom']),
  },
});

const decorationStyles = defineProperties({
  properties: {
    ...mapTo(['border', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom'], ['1px solid', '2px solid', '1px solid transparent']),
    borderRadius: ['2px', '4px', '9999px', '100%'],
    borderCollapse: ['collapse'],
    cursor: ['pointer'],
  },
  shorthands: {
    bb: ['borderBottom'],
    bt: ['borderTop'],
    bl: ['borderLeft'],
    br: ['borderRight'],
    b: ['border'],
  },
});

const colorStyles = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focusWithin: { selector: '&:focus-within' },
  },
  defaultCondition: 'default',
  properties: {
    ...mapTo(['color', 'borderColor', 'backgroundColor'], { ...vars.color, transparent: 'transparent' }),
  },
});

export const atoms = createSprinkles(layoutStyles, decorationStyles, colorStyles);

export type Atoms = Parameters<typeof atoms>[0];