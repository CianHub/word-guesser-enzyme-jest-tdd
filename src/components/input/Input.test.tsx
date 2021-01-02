import Input from './Input';
import { findByTestAttr, storeFactory } from '../../../test/test-utils';
import { shallow } from 'enzyme';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    test('render component', () => {});
    test('render input element', () => {});
    test('render submit button', () => {});
  });

  describe('word has  been guessed', () => {
    test('do not render component', () => {});
  });
});

describe('state updates', () => {});
