import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Foundation/Inputs/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const WithArgs: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

WithArgs.args = {
  color: 'red',
  size: 'm',
  variant: 'stroke',
};

