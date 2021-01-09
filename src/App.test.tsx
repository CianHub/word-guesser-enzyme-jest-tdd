import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/test-utils';

const setup = (): ShallowWrapper<
  any,
  Readonly<{}>,
  React.Component<{}, {}, any>
> => {
  return shallow(<App />);
};

describe('App', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders without crashing', () => {
    const component = findByTestAttr(wrapper, 'app');
    expect(component.length).toBe(1);
  });
});
