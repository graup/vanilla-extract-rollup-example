import { createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { atoms, vars } from '../../theme';
import { scalePx } from '../../theme/scale';

export const buttonColor = createVar();

export const buttonRecipe = recipe({
  base: [atoms({
    display: 'inline-flex',
  }),
  {
    background: 'transparent',
    border: 0,
    borderRadius: 30,
    padding: '0 1em',
    cursor: 'pointer',
    ':hover': {
      outline: '1px solid currentColor',
    },
    color: buttonColor,
    vars: {
      [buttonColor]: vars.color['gray'],
    },
  }],

  variants: {
    size: {
      s: { lineHeight: scalePx(3), fontSize: '10px' },
      m: { lineHeight: scalePx(4), fontSize: '12px' },
      l: { lineHeight: scalePx(5), fontSize: '14px' },
    },
    variant: {
      stroke: { boxShadow: `inset 0 0 0 1px ${buttonColor}` },
      'strong-fill': { backgroundColor: buttonColor, color: '#fff' },
    },
  },

  defaultVariants: {
    variant: 'stroke',
    size: 'm',
  },
});

export type Variants = RecipeVariants<typeof buttonRecipe>;
