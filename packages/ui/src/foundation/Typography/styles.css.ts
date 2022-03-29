import { createStyleObject } from '@capsizecss/core';
import fontMetrics from '@capsizecss/metrics/inter';
import { styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

/**
 * Calculate properties for correct leading. See https://seek-oss.github.io/capsize/
 */
function capSize(fontSize: number, leading: number) {
  return createStyleObject({ fontSize, leading, fontMetrics });
}

export const typoVariants = styleVariants({
  h1: { ...capSize(24, 36), fontWeight: 600 },
  h2: { ...capSize(20, 30), fontWeight: 600 },
  h3: { ...capSize(16, 24), fontWeight: 600 },

  'l-strong': { fontSize: 14, lineHeight: 1.5, fontWeight: 600 },
  'l-regular': { fontSize: 14, lineHeight: 1.5, fontWeight: 400 },

  'm-strong': { fontSize: 12, lineHeight: 1.5, fontWeight: 600 },
  'm-medium': { fontSize: 12, lineHeight: 1.5, fontWeight: 500 },
  'm-regular': { fontSize: 12, lineHeight: 1.5, fontWeight: 400 },

  's-strong': { fontSize: 10, lineHeight: 1.5, fontWeight: 600 },
  's-regular': { fontSize: 10, lineHeight: 1.5, fontWeight: 400 },
});


export const typoRecipe = recipe({
  base: [],
  variants: {
    variant: typoVariants,
  },
  defaultVariants: {
    variant: 'm-regular',
  },
});

export type Variants = RecipeVariants<typeof typoRecipe>;
