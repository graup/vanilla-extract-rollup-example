import { ComponentMeta, ComponentStory } from '@storybook/react';

import { atoms } from '../../theme';
import { Box } from './Box';
import { overloadRecipe, overloadStyle } from './Box.stories.css';

const props = Array.from(atoms.properties);

// Set controls
const argTypes = props.reduce(
  (all, a) => { all[a] = { table: { category: 'atoms' } }; return all; },
  {} as Record<(typeof props)[number], unknown>,
);

export default {
  title: 'Foundation/Box',
  component: Box,
  argTypes,
  parameters: {
    controls: {
      // Let's hide the non-atoms props since those are rarely useful in Storybook
      include: props,
    },
  },
} as ComponentMeta<typeof Box>;

export const WithArgs: ComponentStory<typeof Box> = (args) => <Box {...args}>Welcome to the box! Box can be used to abstract certain often-used style properties.</Box>;

export const BasicUsage = () => <Box p={1} color="blue" backgroundColor="gray-060">Hello, world!</Box>;

export const StyleWithConditions = () => <Box p={1} color="blue" cursor="pointer" backgroundColor={{
  default: 'gray-060', hover: 'gray-100',
}}>Some atomic styles can be defined conditionally, e.g. for hover effects.</Box>;

/**
 * Combining sprinkles and a recipe can be useful.
 */
export const StyleWithRecipe = () => {
  const className = overloadRecipe();
  return <Box p={1} color="blue" className={className}>For biggest flexibility, define a recipe.</Box >;
};

/**
 * Using sprinkles like this is unnecessary for Box, you can just pass the properties to the Box component.
 * But this can be a useful example for other components.
 */
export const StyleWithAtoms = () => {
  const className = atoms({
    display: 'flex',
    justifyContent: 'center',
    padding: 'medium', // this overrides the Box prop
    backgroundColor: {
      hover: 'blue-050', // this overrides the Box prop on hover
    },
  });
  return <Box p={1} color="blue" backgroundColor="gray-060" className={className}>Use atoms directly.</Box>;
};

/**
 * Setting custom styles manually is also possible.
 */
export const StyleCustom = () => {
  return <Box p={1} color="blue" backgroundColor="gray-060" className={overloadStyle}>Define custom styles.</Box>;
};

export const Flex = () => {
  // Non-static properties like width are not part of the atomic styles. You can either define them
  // using style() in a style.css.ts file or use the inline style escape hatch like here.
  return <Box display="flex" mx="auto" backgroundColor="gray-060" p={1} borderRadius="4px" style={{ maxWidth: 200 }}>
    <Box>Left</Box>
    <Box marginLeft="auto">Right</Box>
  </Box>;
};

export const Grid = () => {
  return <Box display="grid" mx="auto" backgroundColor="gray-060" p={1} gap={1} style={{ maxWidth: 200, gridTemplateColumns: '1fr 1fr 1fr' }}>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
    <Box>6</Box>
  </Box>;
};

export const GridCenter = () => {
  return <Box display="grid" placeItems="center" textAlign="center" p={2} mx="auto" backgroundColor="gray-060" style={{ maxWidth: 250, height: 150 }}>
    The easiest way to center both horizontally and vertically!
  </Box>;
};

export const ConditionHover = () => {
  return <Box p={2} border="1px solid transparent" cursor="pointer" borderColor={{ hover: 'blue' }}>
    Hover me
  </Box>;
};

export const ConditionFocusWithin = () => {
  return <Box p={2} border="1px solid transparent" borderColor={{ focusWithin: 'blue' }}>
    <input placeholder="Focus me" />
  </Box>;
};

export const Scroll = () => {
  return <Box overflow="auto" border="1px solid transparent" borderColor="gray-100" style={{ height: 200 }}>
    <Box backgroundColor="blue-050" style={{ height: 400 }}>
      <Box p={1} backgroundColor="blue-100">Scroll me. Notice how the scrollbar appears outside of the box content.</Box>
    </Box>
  </Box>;
};

export const ScrollOverlay = () => {
  return <Box overflow="overlay" border="1px solid transparent" borderColor="gray-100" style={{ height: 200 }}>
    <Box backgroundColor="blue-050" style={{ height: 400 }}>
      <Box p={1} backgroundColor="blue-100">Scroll me. Notice how the scrollbar overlays.</Box>
    </Box>
  </Box>;
};

export const Sticky = () => {
  return <Box overflow="overlay" position="relative" border="1px solid transparent" borderColor="gray-100" style={{ height: 200 }}>
    <Box backgroundColor="blue-050" p={1} position="sticky" top="0">
      Scroll me
    </Box>
    <Box p={1} style={{ height: 400 }}></Box>
  </Box>;
};