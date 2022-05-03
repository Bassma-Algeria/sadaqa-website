import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasePopup } from './BasePopup';

export default {
  title: 'Global/BasePopup',
  component: BasePopup,
  argTypes: {},
} as ComponentMeta<typeof BasePopup>;

const Template: ComponentStory<typeof BasePopup> = args => (
  <BasePopup {...args}>
    <h1>some children</h1>
  </BasePopup>
);

export const Default = Template.bind({});
Default.args = {
  closePopup: () => {},
};

export const SelfCloseOff = Template.bind({});
SelfCloseOff.args = {
  ...Default.args,
  selfClose: false,
};
