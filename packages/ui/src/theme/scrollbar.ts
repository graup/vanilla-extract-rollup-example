interface ScollbarConfig {
  width: number; // scrollbar width
  outerWidth?: number; // track width
  foreground?: string; // scrollbar color
  background?: string; // track color
  onHover?: boolean; // only show scrollbar on hover
}

export function getScrollbarStyles({
  width,
  outerWidth = width * 2,
  foreground = 'rgba(0, 0, 0, 0.35)',
  background = 'rgba(0, 0, 0, 0.075)',
  onHover = false,
}: ScollbarConfig) {
  const margin = `${(outerWidth - width) / 2}px`;
  const trackSize = `${outerWidth}px`;
  const hover = !onHover
    ? {}
    : {
      boxShadow: 'none',
    };
  return {
    scrollbarColor: `${foreground} transparent`, // fallback
    scrollbarWidth: 'thin', // fallback
    selectors: {
      '&::-webkit-scrollbar': {
        width: trackSize,
        height: trackSize,
      },
      '&::-webkit-scrollbar-track, &::-webkit-scrollbar-thumb': {
        borderRadius: trackSize,
        border: `solid ${margin} transparent`,
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: `inset 0 0 ${margin} ${margin} ${background}`,
      },
      '&::-webkit-scrollbar-thumb': {
        boxShadow: `inset 0 0 ${margin} ${margin} ${foreground}`,
      },
      '&:not(:hover)::-webkit-scrollbar-thumb': hover,
    },
  } as const;
}

export const defaultScrollbarStyles = getScrollbarStyles({
  width: 6,
  outerWidth: 18,
  onHover: false,
  background: 'transparent',
  foreground: 'rgba(0, 0, 0, 0.2)',
});
