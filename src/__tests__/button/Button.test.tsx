import React from 'react';
import {mount} from 'enzyme';
import Button from '../../atoms/button/Button';
import {FaHeart} from 'react-icons/fa';
import theme from '../../theme/defaults';
import '../setupTests';

describe('Base Button', () => {
    it('should render without crashing', () => {
        mount(<Button aria-label="test" />);
    });

    it('should render a button element', () => {
        const wrapper = mount(<Button aria-label="test" />);

        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should render a button with type button', () => {
        const wrapper = mount(<Button aria-label="test" />);

        expect(wrapper.find('button[type="button"]')).toHaveLength(1);
    });

    it('should render a button with type submit', () => {
        const wrapper = mount(<Button aria-label="test" type="submit" />);

        expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });

    it('should render a button with type reset', () => {
        const wrapper = mount(<Button aria-label="test" type="reset" />);

        expect(wrapper.find('button[type="reset"]')).toHaveLength(1);
    });

    it('should render an anchor element', () => {
        const wrapper = mount(<Button aria-label="test" tag="a" />);

        expect(wrapper.find('a')).toHaveLength(1);
    });

    it('should not contain type for anchor element', () => {
        const wrapper = mount(<Button aria-label="test" tag="a" />);

        expect(wrapper.find('a').getDOMNode().getAttribute('type')).toBeNull();
    });

    it('should render an arbitrary element', () => {
        const wrapper = mount(<Button aria-label="test" tag="div" />);

        expect(wrapper.find('div')).toHaveLength(1);
    });

    it('should render its children', () => {
        const wrapper = mount(<Button>Hi</Button>);

        expect(wrapper.find('button').text()).toBe('Hi');
    });

    it('should contain base classes', () => {
        const expected =
            'align-bottom inline-flex  text-sm items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-primary border border-transparent active:bg-primary hover:bg-secondary focus:ring focus:ring-purple-300';
        const wrapper = mount(<Button aria-label="test" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should call onClick callback', (done) => {
        mount(<Button aria-label="test" onClick={() => done()} />).simulate('click');
    });

    it('should contain the appropriate type', () => {
        const expected = 'submit';
        const wrapper = mount(<Button aria-label="test" type="submit" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('type')).toBe(expected);
    });

    it('should render a full width button', () => {
        const expected = 'w-full';
        const wrapper = mount(<Button aria-label="test" block />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render a regular button', () => {
        const expected = 'px-4 py-2 rounded-lg text-sm';
        const wrapper = mount(<Button aria-label="test" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should extend classes', () => {
        const expected = 'ml-2';
        const wrapper = mount(<Button aria-label="test" className="ml-2" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });
});

describe('Sizes', () => {
    it('should render a larger button', () => {
        const expected = 'px-10 py-4 rounded-lg';
        const wrapper = mount(<Button aria-label="test" size="larger" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render a large button', () => {
        const expected =
            'align-bottom inline-flex  text-sm items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-6 py-3 rounded-lg text-white bg-primary border border-transparent active:bg-primary hover:bg-secondary focus:ring focus:ring-purple-300';
        const wrapper = mount(<Button aria-label="test" size="large" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    // the default case is tested in the Base Button suite
    it('should render a regular button', () => {
        const expected = 'px-4 py-2 rounded-lg text-sm';
        const wrapper = mount(<Button aria-label="test" size="regular" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render a small button', () => {
        const expected = 'px-3 py-1 rounded-md text-sm';
        const wrapper = mount(<Button aria-label="test" size="small" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });
});

describe('Primary Button', () => {
    it('should contain primary base classes', () => {
        const expected =
            'align-bottom inline-flex  text-sm items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-primary border border-transparent active:bg-primary hover:bg-secondary focus:ring focus:ring-purple-300';
        const wrapper = mount(<Button aria-label="test" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should contain primary rounded classes', () => {
        const expected =
            'align-bottom inline-flex  text-sm items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-primary border border-transparent active:bg-primary hover:bg-secondary focus:ring focus:ring-purple-300 rounded-full';
        const wrapper = mount(<Button aria-label="test" rounded={true} />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should contain primary active classes', () => {
        const expected = theme.button.primary.active;
        const wrapper = mount(<Button aria-label="test" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should contain primary disabled classes', () => {
        const expected = 'opacity-50 cursor-not-allowed';
        const wrapper = mount(<Button aria-label="test" disabled />);

        expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(
            expected,
        );
    });

    it('should not contain primary active classes when disabled', () => {
        const expected = 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple';
        const wrapper = mount(<Button aria-label="test" disabled />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).not.toContain(expected);
    });
});

describe('Outline Button', () => {
    it('should contain outline base classes', () => {
        const expected =
            'align-bottom inline-flex  text-sm items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 bg-white border-primary border-2 active:bg-gray-100 hover:bg-gray-50 focus:ring focus:ring-purple-300';
        const wrapper = mount(<Button aria-label="test" layout="outline" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should contain outline active classes', () => {
        const expected = theme.button.outline.active;
        const wrapper = mount(<Button aria-label="test" layout="outline" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should contain outline disabled classes', () => {
        const expected = 'opacity-50 cursor-not-allowed bg-gray-300';
        const wrapper = mount(<Button aria-label="test" layout="outline" disabled />);

        expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(
            expected,
        );
    });
});

describe('Link Button', () => {
    it('should contain link base classes', () => {
        const expected =
            'align-bottom inline-flex  text-sm items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100';
        const wrapper = mount(<Button aria-label="test" layout="link" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should contain link active classes', () => {
        const expected = theme.button.link.active;
        const wrapper = mount(<Button aria-label="test" layout="link" />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should contain link disabled classes', () => {
        const expected = 'opacity-50 cursor-not-allowed';
        const wrapper = mount(<Button aria-label="test" layout="link" disabled />);

        expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(
            expected,
        );
    });
});

describe('Icon', () => {
    it('should contain an svg as a children', () => {
        const wrapper = mount(
            <Button aria-label="test">
                <FaHeart />
            </Button>,
        );

        expect(wrapper.find('svg')).toBeDefined();
    });

    it('should contain an svg passed as prop', () => {
        const wrapper = mount(<Button icon={FaHeart}>Test</Button>);

        expect(wrapper.find('svg')).toBeDefined();
    });

    it('should render an icon as the first child of the button, using icon', () => {
        const wrapper = mount(<Button icon={FaHeart}>Lorem</Button>);

        expect(wrapper.find('button').children()).toHaveLength(2);
        expect(wrapper.find('button').childAt(0).type()).toBe(FaHeart);
        expect(wrapper.find('button').childAt(1).text()).toBe('Lorem');
    });

    it('should render an icon as the first child of the button, using iconLeft', () => {
        const wrapper = mount(<Button iconLeft={FaHeart}>Lorem</Button>);

        expect(wrapper.find('button').children()).toHaveLength(2);
        expect(wrapper.find('button').childAt(0).type()).toBe(FaHeart);
        expect(wrapper.find('button').childAt(1).text()).toBe('Lorem');
    });

    it('should render an icon as the last child of the button', () => {
        const wrapper = mount(<Button iconRight={FaHeart}>Lorem</Button>);

        expect(wrapper.find('button').children()).toHaveLength(2);
        expect(wrapper.find('button').childAt(0).text()).toBe('Lorem');
        expect(wrapper.find('button').childAt(1).type()).toBe(FaHeart);
    });

    it('should not contain left or right styles', () => {
        const expected = 'mr-2 -ml-1 ml-2 -mr-1';
        const wrapper = mount(<Button aria-label="test" icon={FaHeart} />);

        expect(wrapper.find('svg').getDOMNode().getAttribute('class')).not.toContain(expected);
    });

    it('should render an icon with left styles', () => {
        const expected = 'mr-2 -ml-1';
        const wrapper = mount(<Button iconLeft={FaHeart}>Lorem</Button>);

        expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render an icon with right styles', () => {
        const expected = 'ml-2 -mr-1';
        const wrapper = mount(<Button iconRight={FaHeart}>Lorem</Button>);

        expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should render a button with regular styles if children is present', () => {
        const expected = 'px-4 py-2 rounded-lg text-sm';
        const wrapper = mount(<Button iconLeft={FaHeart}>Lorem</Button>);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
    });

    it('should contain regular sized button icon classes', () => {
        const expectedButton = 'p-2 rounded-lg';
        const expectedSvg = 'h-5 w-5';
        const wrapper = mount(<Button aria-label="test" icon={FaHeart} />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton);
        expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg);
    });

    it('should contain small sized button icon classes', () => {
        const expectedButton = 'p-2 rounded-md';
        const expectedSvg = 'h-4 w-4';
        const wrapper = mount(<Button aria-label="test" size="small" icon={FaHeart} />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton);
        expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg);
    });

    it('should contain large sized button icon classes', () => {
        const expectedButton = 'p-3 rounded-lg';
        const expectedSvg = 'h-5 w-5';
        const wrapper = mount(<Button aria-label="test" size="large" icon={FaHeart} />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton);
        expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg);
    });

    it('should contain larger sized button icon classes', () => {
        const expectedButton = 'p-4 rounded-lg';
        const expectedSvg = 'h-5 w-5';
        const wrapper = mount(<Button aria-label="test" size="larger" icon={FaHeart} />);

        expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton);
        expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg);
    });
});
