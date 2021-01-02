import Input from './Input';
import { findByTestAttr, storeFactory } from '../../../test/test-utils';
import { shallow, ShallowWrapper } from 'enzyme';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper: ShallowWrapper<
      Readonly<{}> &
        Readonly<{
          children?: React.ReactNode;
        }>,
      Readonly<{}>,
      React.Component<{}, {}, any>
    >;

    beforeEach(() => {
      wrapper = setup();
    });
    test('render component', () => {
      const comp = findByTestAttr(wrapper, 'input');
      expect(comp.length).toBe(1);
    });
    test('render input element', () => {
      const comp = findByTestAttr(wrapper, 'input-element');
      expect(comp.length).toBe(1);
    });
    test('render submit button', () => {
      const comp = findByTestAttr(wrapper, 'submit-button');
      expect(comp.length).toBe(1);
    });
  });

  describe('word has  been guessed', () => {
    test('do not render component', () => {});
  });
});

describe('state updates', () => {});
