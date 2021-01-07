import Input from './Input';
import { findByTestAttr, storeFactory } from '../../../test/test-utils';
import { shallow, ShallowWrapper } from 'enzyme';
import { actionTypes } from '../../actions';

const setup = (initialState: boolean = false) => {
  const store = storeFactory();
  store.dispatch({ type: actionTypes.CORRECT_GUESS, payload: initialState });
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper: ShallowWrapper;

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

    test('call dispatch onClick with input value', () => {
      const store = storeFactory();
      store.dispatch({ type: actionTypes.CORRECT_GUESS, payload: false });
      const spyClick = jest.spyOn(store, 'dispatch');

      const wrapper = shallow(<Input store={store} />)
        .dive()
        .dive();

      const comp = findByTestAttr(wrapper, 'input-element');
      comp.simulate('change', { target: { value: 'test' } });

      const button = findByTestAttr(wrapper, 'submit-button');
      button.simulate('click');
      expect(spyClick).toHaveBeenCalledWith({
        type: actionTypes.GUESS_WORD,
        payload: 'test',
      });
    });
  });

  describe('word has  been guessed', () => {
    let wrapper: ShallowWrapper<
      Readonly<{}> &
        Readonly<{
          children?: React.ReactNode;
        }>,
      Readonly<{}>,
      React.Component<{}, {}, any>
    >;

    beforeEach(() => {
      wrapper = setup(true);
    });

    test('render component', () => {
      const comp = findByTestAttr(wrapper, 'input');
      expect(comp.length).toBe(1);
    });

    test('dont render input element', () => {
      const comp = findByTestAttr(wrapper, 'input-element');
      expect(comp.length).toBe(0);
    });
    test('dont render submit button', () => {
      const comp = findByTestAttr(wrapper, 'submit-button');
      expect(comp.length).toBe(0);
    });
  });
});
