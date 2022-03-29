import React from 'react';
import { Checkbox } from 'reakit/Checkbox';

import { mergeProps } from '@react-aria/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { getColor, NamedColor } from '../../theme';
import { buttonColor, toggleButtonRecipe, Variants } from './styles.css';

type Props = Omit<React.ComponentProps<typeof Checkbox>, keyof NonNullable<Variants>> & Variants & {
  color: NamedColor;
};

export function getToggleButtonProps({ color, size, variant, ...props }: Props) {
  const className = toggleButtonRecipe({ size, variant });
  const style = assignInlineVars({ [buttonColor]: getColor(color) });
  return mergeProps(props, { className, style });
}

export function ToggleButton(props: Props) {
  return (
    <Checkbox {...getToggleButtonProps(props)} />
  );
}

