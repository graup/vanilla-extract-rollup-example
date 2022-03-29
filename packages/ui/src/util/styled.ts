/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps, createElement, forwardRef, JSXElementConstructor, NamedExoticComponent, PropsWithoutRef } from 'react';

import { mergeProps } from '@react-aria/utils';
import { CSSProperties } from '@vanilla-extract/css';

import { Evaluatable, evaluate } from './functional';

type ClassName<Props> = Evaluatable<string, [Props]>;
type Style<Props> = Evaluatable<CSSProperties, [Props]>;

/**
 * Combine a component with className and style, which can be static or computed from props.
 */
export function styled<ExtraProps extends Record<string, any> | undefined, C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>(
  base: C,
  className?: ClassName<ComponentProps<C> & ExtraProps>,
  style?: Style<ComponentProps<C> & ExtraProps>,
): NamedExoticComponent<PropsWithoutRef<ComponentProps<C> & ExtraProps>> {
  const StyledComponent = forwardRef((props: ComponentProps<C> & ExtraProps, ref) => {
    return createElement(base, mergeProps(
      props as ComponentProps<any>,
      {
        className: evaluate(className)(props),
        style: evaluate(style)(props),
        ref,
      },
    ));
  });
  const name = (base as any).displayName ?? (base as any).name ?? base;
  StyledComponent.displayName = `styled(${name})`;
  return StyledComponent;
}