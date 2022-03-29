import React from 'react';
import { Button as RKButton } from 'reakit/Button';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { getColor, NamedColor } from '../../theme';
import { styled } from '../../util/styled';
import { buttonColor, buttonRecipe, Variants } from './styles.css';

type Props = React.ComponentProps<typeof RKButton> & Variants & {
  color?: NamedColor;
};

export const Button = styled(
  RKButton,
  ({ size, variant }: Props) => buttonRecipe({ size, variant }),
  ({ color }: Props) => color ? assignInlineVars({ [buttonColor]: getColor(color) }) : {},
);
Button.displayName = 'Button';