import React from 'react';
import { shallow, ReactWrapper, ShallowWrapper } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/test-utils';
import hookActions from './actions/hookActions';
const mockGetSecretWord = jest.fn();

const setup = (): ShallowWrapper<
  any,
  Readonly<{}>,
  React.Component<{}, {}, any>
> => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
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

describe('getSecretWordCalls', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = setup();
  });

  test('getSecretWord called on app mount', () => {
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
});
