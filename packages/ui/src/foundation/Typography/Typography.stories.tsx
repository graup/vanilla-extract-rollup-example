import { ComponentMeta, ComponentStory } from '@storybook/react';

import { colors, namedColors } from '../../theme/color-util';
import { Box } from '../Box/Box';
import { Paragraph, Typography } from './Typography';

export default {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    controls: {
      include: ['variant', 'color'],
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [...namedColors, ...colors],
      },
    },
  },
} as ComponentMeta<typeof Typography>;

export const WithArgs: ComponentStory<typeof Typography> = (args) => {
  return <Typography {...args}>Automate data preparation.<br />Deliver better datasets.</Typography>;
};

WithArgs.args = {
  color: 'red',
  variant: 'h1',
};

export const AsParagraph = () => {
  return <Box style={{ maxWidth: 400 }}>
    <Paragraph marginBottom={2}>Toggle this ON to open-source this dataset to the public. Anyone can read and download data from public projects.</Paragraph>
    <Paragraph>Toggle this OFF to privately host proprietary data on this project. Private project is only accessible to users under your account.</Paragraph>
  </Box>;
};

export const ParagraphWithBoxStyles = () => {
  return <Paragraph variant="m-strong" p={2} color="blue" backgroundColor="gray-060">You can also use any Box style on Typography and Paragraph.</Paragraph>;
};
