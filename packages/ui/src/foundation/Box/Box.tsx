import { createBox } from '@dessert-box/react';

import { atoms } from '../../theme/sprinkles.css';

/**
 * Box is a basic component that gives access to atomic styles (Sprinkles).
 */
export const Box = createBox({ atoms });
Box.displayName = 'Box';