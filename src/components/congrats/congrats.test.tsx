import React from 'react';
import { mount } from 'enzyme';
import { Congrats } from './congrats';
import { findByTestAttr } from '../../../test/test-utils';
import LanguageContext from '../../context/languageContext';
import strings, { languageStrings } from '../../helpers/strings';
import successContext from '../../context/successContext';

const setup = (testValues: {
  success: boolean;
  language: 'en' | 'emoji' | 'orc';
}) => {
  testValues.language = testValues.language || 'en';
  testValues.success = testValues.success || false;

  return mount(
    <LanguageContext.Provider value={testValues.language}>
      <successContext.SuccessProvider value={[testValues.success, jest.fn()]}>
        <Congrats />
      </successContext.SuccessProvider>
    </LanguageContext.Provider>
  );
};

test('it should render', () => {
  const comp = setup({ success: true, language: 'en' });
  expect(comp).toBeTruthy();
});

test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false, language: 'en' });
  const text = wrapper.find(`[data-test='component-congrats']`);
  expect(text.length).toBe(0);
});

test('renders non-empty message when success prop is true', () => {
  const wrapper = setup({ success: true, language: 'en' });
  const text = wrapper.find(`[data-test='component-congrats']`).text();
  expect(text).toBe(languageStrings.en.congrats);
});

describe('languagePicker integration', () => {
  test('renders congrats string in en', () => {
    const comp = setup({ success: true, language: 'en' });
    const text = comp.find(`[data-test='component-congrats']`).text();
    expect(text).toBe(languageStrings.en.congrats);
  });

  test('renders congrats string in emoji', () => {
    const comp = setup({ success: true, language: 'emoji' });
    const text = comp.find(`[data-test='component-congrats']`).text();
    expect(text).toBe(languageStrings.emoji.congrats);
  });
});
