import {configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('Test', () => {
    it('it tests nothing', () => {});
});

configure({adapter: new Adapter()});
