import React from 'react';

import {Story, Meta} from '@storybook/react/types-6-0';

import JobPostingCard from './JobPostingCard';

export default {
    title: 'Examples/JobPostingCard',
    component: JobPostingCard,
} as Meta;

const Template: Story = (args) => <JobPostingCard {...args} />;

export const Basic = Template.bind({});
