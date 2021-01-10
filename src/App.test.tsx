import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import App from './App';
import hookActions from './actions/hookActions';
const mockGetSecretWord = jest.fn();

const setup = (
  secretWord: string = 'party'
): ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>> => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest
    .fn()
    .mockReturnValue([{ secretWord, language: 'en' }, jest.fn()]);
  React.useReducer = mockUseReducer;
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

describe('when secretWord is not empty', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = setup('party');
  });

  test('renders app not spinner', () => {
    const component = wrapper.find(`[data-test='component-app']`);
    expect(component.exists()).toBeTruthy();

    const spinner = wrapper.find(`[data-test='component-spinner']`);
    expect(spinner.exists()).toBeFalsy();
  });
});

describe('when secretWord is empty', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = setup('');
  });

  test('renders spinner not app', () => {
    const component = wrapper.find(`[data-test='component-app']`);
    expect(component.exists()).toBeFalsy();

    const spinner = wrapper.find(`[data-test='component-spinner']`);
    expect(spinner.exists()).toBeTruthy();
  });
});
