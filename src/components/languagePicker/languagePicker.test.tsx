import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/test-utils';
import { LanguagePicker } from './languagePicker';

const mockSetLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
};

describe('languagePicker', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const comp = findByTestAttr(wrapper, 'language-picker');

    expect(comp.exists()).toBe(true);
  });

  test('calls setLanguage prop upon click', () => {
    const wrapper = setup();
    const comp = findByTestAttr(wrapper, 'language-icon').first();
    comp.simulate('click');

    expect(mockSetLanguage).toHaveBeenCalled();
  });

  test('renders more than 0 language icons', () => {
    const wrapper = setup();
    const comp = findByTestAttr(wrapper, 'language-icon');

    expect(comp.length).toBeGreaterThan(0);
  });
});
