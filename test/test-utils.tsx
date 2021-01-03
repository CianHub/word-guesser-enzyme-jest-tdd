import Enzyme from 'enzyme';
import {
  createStore,
  applyMiddleware,
  Store,
  CombinedState,
  Action,
} from 'redux';

import { middlewares } from '../src/configStore';
import rootReducer from '../src/reducer/index';

export const findByTestAttr = (
  wrapper: Enzyme.ShallowWrapper,
  val: string
): Enzyme.ShallowWrapper<
  Enzyme.HTMLAttributes,
  any,
  React.Component<{}, {}, any>
> => wrapper.find(`[data-test='component-${val}']`);

export const storeFactory = (): Store<
  CombinedState<{
    successReducer: {
      success: boolean;
    };
  }>,
  Action<any>
> & {
  dispatch: unknown;
} => {
  const storeWithMiddleWare = applyMiddleware(...middlewares)(createStore);
  return storeWithMiddleWare(rootReducer);
};
