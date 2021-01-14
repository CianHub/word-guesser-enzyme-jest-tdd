import React from 'react';
import { mount, shallow } from 'enzyme';

import successContext from './successContext';

const TestComponent = () => {
  successContext.useSuccess();
  return <div></div>;
};

test('useSuccess throws error is used outside of SuccessProvider', () => {
  expect(() => {
    shallow(<TestComponent />);
  }).toThrowError();
});

test('useSuccess does not throw error is used inside of SuccessProvider', () => {
  expect(() => {
    mount(
      <successContext.SuccessProvider value={'test'}>
        <TestComponent />
      </successContext.SuccessProvider>
    );
  }).not.toThrowError();
});
