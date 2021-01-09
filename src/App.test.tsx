import React from 'react';
import { mount, ReactWrapper, ShallowWrapper } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/test-utils';
import hookActions from './actions/hookActions';
const mockGetSecretWord = jest.fn();

const setup = (): ReactWrapper<
  any,
  Readonly<{}>,
  React.Component<{}, {}, any>
> => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  return mount(<App />);
};

describe('App', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders without crashing', () => {
    const component = wrapper.find(`[data-test='component-app']`);
    expect(component.length).toBe(1);
  });
});

describe('getSecretWordCalls', () => {
  test('getSecretWord called on app mount', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('SecretWord does not update on app update', async () => {
    const wrapper = setup();

    mockGetSecretWord.mockClear();

    wrapper.setProps({});
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
