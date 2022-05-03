import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Global/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const GreyFilled = Template.bind({});
GreyFilled.args = {
  variant: 'greyFilled',
};

export const GreyOutline = Template.bind({});
GreyOutline.args = {
  variant: 'greyOutline',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  variant: 'primary',
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  size: 'lg',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'primary',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  size: 'sm',
};
