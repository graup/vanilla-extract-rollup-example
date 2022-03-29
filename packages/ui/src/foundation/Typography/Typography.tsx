import React, { forwardRef } from 'react';

import { mergeProps } from '@react-aria/utils';

import { Box } from '../Box/Box';
import { typoRecipe, Variants } from './styles.css';

type Props = React.ComponentProps<typeof Box> & Variants;

/**
 * Typography is a `<span>` with a variant and support for all props from Box
 */
export const Typography = forwardRef(function Typography({ variant, ...props }: Props, ref) {
  return <Box as="span" {...mergeProps(props, { ref, className: typoRecipe({ variant }) })} />;
});

/**
 * Paragraph is a `<p>` with a variant and support for all props from Box
 */
export const Paragraph = forwardRef(function Paragraph({ variant, ...props }: Props, ref) {
  return <Box as="p" {...mergeProps(props, { ref, className: typoRecipe({ variant }) })} />;
});