import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FetchingDataError } from './FetchingDataError';

export default {
  title: 'Global/FetchingDataError',
  component: FetchingDataError,
  argTypes: {},
} as ComponentMeta<typeof FetchingDataError>;

const Template: ComponentStory<typeof FetchingDataError> = args => <FetchingDataError {...args} />;

export const Default = Template.bind({});
Default.args = {
  errorMessage: 'loading error',
  refrechMessage: 'try again',
  refrech: () => Promise.resolve(),
};
