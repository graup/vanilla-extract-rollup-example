import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Range } from './Range';

export default {
  title: 'Foundation/Inputs/Range',
  component: Range,
  parameters: {
    controls: {
      include: ['variant', 'color', 'min', 'max', 'value', 'step', 'minSymbol', 'maxSymbol'],
    },
  },
} as ComponentMeta<typeof Range>;

export const WithArgs: ComponentStory<typeof Range> = (args) => {
  const [value, setValue] = useState(args.value);
  const [valueSettled, setValueSettled] = useState(args.value);
  return <>
    <Range {...args} value={value} onValueInput={setValue} onValueChange={setValueSettled} />
    {value} {valueSettled}
  </>;
};

WithArgs.args = {
  variant: undefined,
  color: 'red',
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  minSymbol: '-',
  maxSymbol: '+',
};