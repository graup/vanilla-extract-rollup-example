import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  maxWidth: 840,
});

export const card = style([
  {
    boxShadow: 'rgb(0 0 0 / 10%) 2px 4px 10px',
    borderRadius: '2px',
  },
]);

export const usageGrid = style([
  {
    gridTemplateColumns: '1fr 1fr 1fr',
    display: 'grid',
    gap: '24px',
  },
]);