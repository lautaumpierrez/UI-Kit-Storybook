import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';


export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => <Button {...props} />


export const BasicButton = Template.bind({});

BasicButton.args = {
  children: "Click me!"
}