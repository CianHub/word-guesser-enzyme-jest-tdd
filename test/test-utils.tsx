import Enzyme from 'enzyme';
import { createStore } from 'redux';

import rootReducer from '../src/reducer/index';

export const findByTestAttr = (
  wrapper: Enzyme.ShallowWrapper,
  val: string
): Enzyme.ShallowWrapper<
  Enzyme.HTMLAttributes,
  any,
  React.Component<{}, {}, any>
> => wrapper.find(`[data-test='component-${val}']`);

export const storeFactory = (initialState: {}) => {
  return createStore(rootReducer, initialState);
};
