import React from 'react';

import { clamp, mergeProps } from '@react-aria/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { getColor, NamedColor } from '../../theme';
import { relative } from '../../util/math';
import { currentValue, inputRecipe, selectedColor, symbol, Variants, wrap } from './styles.css';

type RangeValue = {
  value: number;
  min?: number;
  max?: number;
};

type RangeProps = React.ComponentProps<'input'> & RangeValue & Variants & {
  color: NamedColor;
};

type UseRangeProps = RangeValue & {
  // Continous updates
  onValueInput?: (value: number) => void;
  // Updates when value settled
  onValueChange?: (value: number) => void;
};

type Props = RangeProps & UseRangeProps & {
  minSymbol?: React.ReactNode;
  maxSymbol?: React.ReactNode;
  step?: number;
};

export function useRange({ value, min, max, onValueChange, onValueInput }: UseRangeProps) {
  /**
   * Trigger onValueInput with a numerical value for input.onChange.
   * Browser/React are inconsistent with regards to onChange/onInput, but let's do it correctly here.
   */
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    onValueInput?.(Number(e.currentTarget.value));
  }

  /**
   * Trigger onValueChange with a numerical value for input.onMouseUp.
   */
  function onMouseUp(e: React.ChangeEvent<HTMLInputElement>) {
    onValueChange?.(Number(e.currentTarget.value));
  }

  function getStepClickHandler(change: number) {
    return () => {
      const newValue = clamp(value + change, min, max);
      onValueInput?.(newValue);
      onValueChange?.(newValue);
    };
  }

  return {
    onChange, onMouseUp, getStepClickHandler,
  };
}

export function getRangeProps({ variant, color = 'red', ...props }: RangeProps) {
  const { value, min, max } = props;
  const relativeValue = relative({ value, min, max });

  const style = assignInlineVars({
    [selectedColor]: getColor(color),
    [currentValue]: `${100 * relativeValue}%`,
  });

  return mergeProps(props, {
    type: 'range',
    className: inputRecipe({ variant }),
    style,
  });
}

export function RangeInput(props: RangeProps) {
  return <input {...getRangeProps(props)} />;
}

export function Range({ onValueChange, onValueInput, minSymbol, maxSymbol, ...props }: Props) {
  const { value, min, max, step = 1 } = props;
  const { onChange, onMouseUp, getStepClickHandler } = useRange({
    value, min, max, onValueChange, onValueInput,
  });

  return <div className={wrap}>
    {minSymbol && (
      <span className={symbol} onClick={getStepClickHandler(-step)}>{minSymbol}</span>
    )}
    <RangeInput {...mergeProps(props, {
      onChange,
      onMouseUp,
    })} />
    {maxSymbol && (
      <span className={symbol} onClick={getStepClickHandler(step)}>{maxSymbol}</span>
    )}
  </div>;
}