import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemsList } from './ItemsList';

export default {
  title: 'Global/ItemsList',
  component: ItemsList,
  argTypes: {},
} as ComponentMeta<typeof ItemsList>;

const data = [{ name: 'john' }, { name: 'Alex' }];

const Template: ComponentStory<typeof ItemsList> = () => (
  <ItemsList data={data} renderItem={({ item: { name } }) => <div>{name}</div>} title="Title" />
);

export const LeftDirection = Template.bind({});
LeftDirection.args = {};

export const RightDirection = Template.bind({});
RightDirection.args = {
  direction: 'right',
};
