import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasePostCard } from './BasePostCard';

import { IMAGES } from '../../../utils/constants/Images';

export default {
  title: 'Global/PostCard',
  component: BasePostCard,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },

  argTypes: {},
} as ComponentMeta<typeof BasePostCard>;

const Template: ComponentStory<typeof BasePostCard> = args => <BasePostCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  createdAt: new Date().toISOString(),
  description:
    'Here is some post description, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  title: 'Post Title',
  liked: false,
  likesCount: 3,
  location: 'jijel',
  likePost: () => Promise.resolve({ success: true }),
  sharePost: () => Promise.resolve({ success: true }),
  postPicture: IMAGES.DONATION_DEFAULT as any,
  tag: 'Donations',
  navigateToPostPage: () => {},
  navigateToTagPage: () => {},
};

export const Liked = Template.bind({});
Liked.args = {
  ...Default.args,
  liked: true,
};

export const Grid = Template.bind({});
Grid.args = {
  ...Default.args,
  gridView: true,
};

export const DirectionReversed = Template.bind({});
DirectionReversed.args = {
  ...Default.args,
  directionReversed: true,
};

export const GridDirectionReversed = Template.bind({});
GridDirectionReversed.args = {
  ...Default.args,
  gridView: true,
  directionReversed: true,
};
