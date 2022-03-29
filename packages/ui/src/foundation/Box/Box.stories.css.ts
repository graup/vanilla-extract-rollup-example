import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { atoms, vars } from '../../theme';

/**
 * Example for using a custom recipe,
 * combination of theme tokens and custom styles.
 */
export const overloadRecipe = recipe({
  base: [
    atoms({
      display: 'flex',
      justifyContent: 'center',
      padding: 'medium',
      backgroundColor: {
        default: 'gray-060',
        hover: 'gray-100',
      },
    }),
    {
      position: 'relative',
      left: vars.space[2],
      cursor: 'pointer',
    },
  ],
});

/**
 * Example for totally manualy style overload
 * using theme tokens for undefined properties.
 */
export const overloadStyle = style({
  position: 'relative',
  left: vars.space[2],
});

