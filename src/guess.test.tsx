import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import successContext from './context/successContext';
import Input from './components/input/Input';

const setup = (secretWord = 'party') => {
  const wrapper = mount(
    <successContext.SuccessProvider>
      <Input secretWord={secretWord} />
    </successContext.SuccessProvider>
  );

  const inputBox = wrapper.find(`[data-test='component-input-box']`);
  const submitBtn = wrapper.find(`[data-test='component-submit-button']`);

  return [wrapper, inputBox, submitBtn];
};

describe('Test', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
    submitBtn: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
    inputBox: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    [wrapper, inputBox, submitBtn] = setup();
  });

  describe('guess is correct', () => {
    beforeEach(() => {
      const mockEvent = { target: { value: 'party' } };
      inputBox.simulate('change', mockEvent);
      submitBtn.simulate('click');
    });

    test('input does not render', () => {
      const inputComp = wrapper.find(`[data-test='component-input']`);

      expect(inputComp.children().length).toBe(0);
    });
  });

  describe('guess is incorrect', () => {
    beforeEach(() => {
      const mockEvent = { target: { value: 'test' } };
      inputBox.simulate('change', mockEvent);
      submitBtn.simulate('click');
    });

    test('input does render', () => {
      const inputComp = wrapper.find(`[data-test='component-input']`);

      expect(inputComp.children().length).toBe(1);
    });
  });
});
