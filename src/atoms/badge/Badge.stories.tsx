import React from 'react';

import {Story, Meta} from '@storybook/react/types-6-0';

import Badge, {BadgeProps} from './Badge';

export default {
    title: 'Badge',
    component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Success = Template.bind({});
Success.args = {
    children: 'Success',
    type: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
    children: 'Warning',
    type: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
    children: 'Danger',
    type: 'danger',
};

export const Neutral = Template.bind({});
Neutral.args = {
    children: 'Neutral',
    type: 'neutral',
};
export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
    type: 'primary',
};
