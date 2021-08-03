import React from 'react';

import {Story, Meta} from '@storybook/react/types-6-0';

import Card, {CardProps} from './Card';
import CardBody from './CardBody';

export default {
    title: 'Card',
    component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
    <Card {...args}>
        <CardBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis
            numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione!
            Ratione, nihil dolorum.
        </CardBody>
    </Card>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Colored = Template.bind({});
Colored.args = {
    colored: true,
    className: 'bg-red-200',
};
