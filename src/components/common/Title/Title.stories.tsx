import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from './Title';

export default {
  title: 'Global/Title',
  component: Title,
  argTypes: {},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} title="Title" />;

export const Big = Template.bind({});
Big.args = {
  variant: 'big',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
};
