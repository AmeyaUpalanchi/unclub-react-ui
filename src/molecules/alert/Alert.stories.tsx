import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import Alert, {AlertProps} from './Alert';

export default {
    title: 'Alert',
    component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
    children: 'This is a success alert 😀',
    type: 'success',
};

export const Warning = Template.bind({});

Warning.args = {
    type: 'warning',
    children: 'This is a warning alert 🙁',
};

export const Danger = Template.bind({});

Danger.args = {
    type: 'danger',
    children: 'This is a danger alert 😨',
};

export const Info = Template.bind({});

Info.args = {
    type: 'info',
    children: 'This is info alert 😉',
};

export const Primary = Template.bind({});

Primary.args = {
    type: 'primary',
    children: 'This is Primary alert 😉',
};
