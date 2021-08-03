import React from 'react';
import {mount} from 'enzyme';
import Card from '../../organisms/card/Card';
import theme from '../../theme/defaults';
import '../setupTests';

describe('Card', () => {
    it('should render without crashing', () => {
        mount(<Card />);
    });

    it('should render with base styles', () => {
        const expected = theme.card.base;
        const wrapper = mount(<Card />);

        expect(wrapper.find(Card).getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render with default styles', () => {
        const expected = 'min-w-0 rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden';
        const wrapper = mount(<Card />);

        expect(wrapper.find(Card).getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render without default styles', () => {
        const expected = 'bg-white';
        const wrapper = mount(<Card colored />);

        expect(wrapper.find(Card).getDOMNode().getAttribute('class')).not.toContain(expected);
    });

    it('should add classes to base styles', () => {
        const expected =
            'min-w-0 rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-red-300';
        const wrapper = mount(<Card className="bg-red-300" colored />);

        expect(wrapper.find(Card).getDOMNode().getAttribute('class')).toBe(expected);
    });

    it('should render children', () => {
        const wrapper = mount(<Card>Lorem ipsum</Card>);

        expect(wrapper.find(Card).text()).toContain('Lorem ipsum');
    });
});
