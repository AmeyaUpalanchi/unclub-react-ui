import React from 'react';
import {mount} from 'enzyme';
import Badge from '../../atoms/badge/Badge';
import '../setupTests';

describe('Badge', () => {
    it('should render without crashing', () => {
        mount(<Badge />);
    });

    it('should render with base styles', () => {
        const expected = 'inline-flex px-3 pt-1 pb-1 text-xs font-sm leading-4 rounded-md';
        const wrapper = mount(<Badge />);

        expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render with success styles', () => {
        const expected = 'text-green-700 bg-green-50';
        const wrapper = mount(<Badge type="success" />);

        expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render with danger styles', () => {
        const expected = 'text-red-700 bg-red-50';
        const wrapper = mount(<Badge type="danger" />);

        expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render with warning styles', () => {
        const expected = 'text-yellow-700 bg-yellow-50';
        const wrapper = mount(<Badge type="warning" />);

        expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render with neutral styles', () => {
        const expected = 'text-gray-700 bg-gray-50';
        const wrapper = mount(<Badge type="neutral" />);

        expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render with primary styles', () => {
        const expected = 'text-purple-700 bg-purple-50';
        const wrapper = mount(<Badge type="primary" />);

        expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render with primary styles when no type is used', () => {
        const expected =
            'inline-flex px-3 pt-1 pb-1 text-xs font-sm leading-4 rounded-md text-purple-700 bg-purple-50';
        const wrapper = mount(<Badge />);

        expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected);
    });
});
