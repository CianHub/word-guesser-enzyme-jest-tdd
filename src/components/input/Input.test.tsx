import Input from './Input';
import { findByTestAttr } from '../../../test/test-utils';
import { shallow, ShallowWrapper } from 'enzyme';

import React from 'react';

const setup = (
  secretWord = 'party'
): ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>> =>
  shallow(<Input secretWord={secretWord} />);

describe('Input', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = setup();
  });

  it('should render', () => {
    const component = findByTestAttr(wrapper, 'input');
    expect(component.length).toBe(1);
  });
});

describe('state controlled input element', () => {
  test('state updates with value of input upon change', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    let wrapper = setup();
    const input = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    input.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('prevent default and state updates are called onsubmit', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    let wrapper = setup();
    const btn = findByTestAttr(wrapper, 'submit-button');

    const mockEvent = { preventDefault: jest.fn() };
    btn.simulate('click', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
