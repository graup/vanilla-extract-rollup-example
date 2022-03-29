import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ToggleButton } from './ToggleButton';

export default {
  title: 'Foundation/Inputs/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

export const WithArgs: ComponentStory<typeof ToggleButton> = (args) => {
  const [checked, setChecked] = useState(false);
  return <ToggleButton checked={checked} onChange={() => setChecked(!checked)} {...args} />;
};

WithArgs.args = {
  color: 'red',
  size: 'm',
  variant: 'strong-fill',
};


