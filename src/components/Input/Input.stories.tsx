import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';
import Button from '../Button';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    trigger: {
      type: { name: 'element', required: false },

    }
  }
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (props) => <Input {...props} />;


export const BasicInput = Template.bind({});
BasicInput.args = {
  placeholder: 'Write whatever u wanna do',
  variant: 'primary',
};

export const InputWithActionButton = Template.bind({});
InputWithActionButton.args = {
  placeholder: 'Write whatever u wanna do',
  variant: 'primary',
  trigger: <Button>Click</Button>,
};