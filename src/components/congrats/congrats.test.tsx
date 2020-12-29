import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Congrats } from './congrats';
import { findByTestAttr } from '../../../test/test-utils';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props: { success: boolean }) => shallow(<Congrats {...props} />);

test('it should render', () => {
  const comp = setup({ success: true });
  expect(comp).toBeTruthy();
});

test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false });
  const text = findByTestAttr(wrapper, 'congrats').text();
  expect(text).toBe('');
});

test('renders non-empty message when success prop is true', () => {
  const wrapper = setup({ success: true });
  const text = findByTestAttr(wrapper, 'congrats').text();
  expect(text).toBe('Congrats');
});
