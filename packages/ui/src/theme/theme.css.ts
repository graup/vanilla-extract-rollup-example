import { createTheme, globalStyle } from '@vanilla-extract/css';

import { colorMap, namedColorMap } from './color-util';
import { space } from './space';
export type { Space } from './space';
export { spaces } from './space';

export const [themeClass, vars] = createTheme({
  color: { ...colorMap, ...namedColorMap },
  space,
});

globalStyle('body', {
  fontFamily: 'Inter, sans-serif',
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('*, *::after, *::before', {
  margin: 0,
  padding: 0,
  boxSizing: 'inherit',
});