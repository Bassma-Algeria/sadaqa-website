import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';
import { IMAGES } from '../../../utils/constants/Images';

export default {
  title: 'Global/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: IMAGES.DEFAULT_PROFILE_PIC.src,
};
