
import { createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { atoms, vars } from '../../theme';
import { scale } from '../../theme/scale';

export const buttonColor = createVar();

export const toggleButtonRecipe = recipe({
  base: [atoms({
    display: 'inline-flex',
  }),
  {
    background: 'transparent',
    WebkitAppearance: 'none',
    appearance: 'none',
    border: 0,
    borderRadius: '1em',
    height: '1em',
    width: '1.8333333em',
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    position: 'relative',
    flex: '0 0 1.8333333em',
    opacity: '0.9',
    selectors: {
      '&:before': {
        content: '\'\'',
        display: 'block',
        width: '0.8em',
        height: '0.8em',
        borderRadius: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        left: '0.1em',
        top: '0.1em',
        transition: 'all 0.1s',
      },
      '&:checked:before': {
        left: '0.9333em',
      },
      '&:disabled': {
        opacity: '0.7',
      },
      '&:hover:not(:disabled)': {
        opacity: '1',
      },
    },
    color: buttonColor,
    vars: {
      [buttonColor]: vars.color['gray'],
    },
  }],

  variants: {
    size: {
      xs: { fontSize: scale(1.5) },
      s: { fontSize: scale(2) },
      m: { fontSize: scale(2.5) },
      l: { fontSize: scale(3) },
    },
    variant: {
      stroke: { boxShadow: `inset 0 0 1px 1px ${buttonColor}`, ':before': { backgroundColor: buttonColor } },
      'strong-fill': { backgroundColor: buttonColor },
    },
  },

  defaultVariants: {
    variant: 'strong-fill',
    size: 'm',
  },
});

export type Variants = RecipeVariants<typeof toggleButtonRecipe>;