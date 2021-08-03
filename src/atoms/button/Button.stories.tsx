import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {FaHeart} from 'react-icons/fa';
import Button, {ButtonProps} from './Button';

export default {
    title: 'Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: 'Button',
    layout: 'primary',
    size: 'regular',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    children: 'Icon',
    layout: 'primary',
    icon: FaHeart,
};
