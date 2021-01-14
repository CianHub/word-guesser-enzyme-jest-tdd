import Input from './Input';
import { findByTestAttr } from '../../../test/test-utils';
import { mount, ReactWrapper, ShallowWrapper } from 'enzyme';

import React from 'react';
import LanguageContext from '../../context/languageContext';
import { languageStrings } from '../../helpers/strings';
import successContext from '../../context/successContext';

const setup = (testValues: {
  secretWord?: string;
  success?: boolean;
  language?: 'en' | 'emoji' | 'orc';
}) => {
  console.log(testValues);

  testValues.language = testValues.language || 'en';
  testValues.secretWord = testValues.secretWord || 'party';
  testValues.success = testValues.success ? true : false;
  return mount(
    <LanguageContext.Provider value={testValues.language}>
      <successContext.SuccessProvider value={[testValues.success, jest.fn()]}>
        <Input secretWord={testValues.secretWord} />
      </successContext.SuccessProvider>
    </LanguageContext.Provider>
  );
};

describe('Input', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  let useStateBackup = React.useState;

  beforeEach(() => {
    wrapper = setup({});
  });

  afterEach(() => {
    React.useState = useStateBackup;
  });

  it('should render', () => {
    const component = wrapper.find(`[data-test='component-input']`);
    expect(component.length).toBe(1);
  });
});

describe('state controlled input element', () => {
  let mockSetCurrentGuess: jest.Mock<any, any>;
  let useStateBackup = React.useState;

  beforeEach(() => {
    mockSetCurrentGuess = jest.fn();
  });

  afterEach(() => {
    React.useState = useStateBackup;
  });

  test('state updates with value of input upon change', () => {
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    let wrapper = setup({});
    const input = wrapper.find(`[data-test='component-input-box']`);

    const mockEvent = { target: { value: 'train' } };
    input.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('prevent default and state updates are called onsubmit', () => {
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    let wrapper = setup({});
    const btn = wrapper.find(`[data-test='component-submit-button']`);

    const mockEvent = { preventDefault: jest.fn() };
    btn.simulate('click', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});

describe('languagePicker integration', () => {
  let useStateBackup = React.useState;
  let mockSetCurrentGuess: jest.Mock<any, any>;

  beforeEach(() => {
    mockSetCurrentGuess = jest.fn();
  });

  afterEach(() => {
    React.useState = useStateBackup;
  });

  test('renders congrats string in en', () => {
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    let wrapper = setup({});
    const text = wrapper.find(`[data-test='component-submit-button']`).text();
    expect(text).toBe(languageStrings.en.submit);
  });

  test('renders congrats string in emoji', () => {
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    const comp = setup({ language: 'emoji' });
    const text = comp.find(`[data-test='component-submit-button']`).text();

    expect(text).toBe(languageStrings.emoji.submit);
  });
});

describe('successContext integration', () => {
  test('input component is empty when success is true', () => {
    let wrapper = setup({ success: true });

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });
});
