import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import successContext from './context/successContext';
import Input from './components/input/Input';
import { GuessedWords } from './components/guessedWords/GuessedWords';
import guessedWordsContext from './context/guessedWordsContext';

const setup = (guessedWords: string[] = [], secretWord = 'party') => {
  const wrapper = mount(
    <guessedWordsContext.GuessedWordsProvider>
      <successContext.SuccessProvider>
        <Input secretWord={secretWord} />
        <GuessedWords />
      </successContext.SuccessProvider>
    </guessedWordsContext.GuessedWordsProvider>
  );

  const inputBox = wrapper.find(`[data-test='component-input-box']`);
  const submitBtn = wrapper.find(`[data-test='component-submit-button']`);

  guessedWords.forEach((word: string) => {
    if (word) {
      const mockEvent = { target: { value: word } };
      inputBox.simulate('change', mockEvent);
      submitBtn.simulate('click');
    }
  });

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

    test('guessed words shows right number of rows', () => {
      const rows = wrapper.find(`[data-test='component-guessed-word']`);

      expect(rows.length).toBe(1);
    });
  });

  describe('guess is incorrect', () => {
    beforeEach(() => {
      [wrapper, inputBox, submitBtn] = setup(['agile'], 'party');
    });

    test('input does render', () => {
      const inputComp = wrapper.find(`[data-test='component-input']`);

      expect(inputComp.children().length).toBe(1);
    });

    test('guessed words shows right number of rows', () => {
      const rows = wrapper.find(`[data-test='component-guessed-word']`);

      expect(rows.length).toBe(1);
    });
  });

  describe('empty guessWords doesnt cause error', () => {
    beforeEach(() => {
      [wrapper, inputBox, submitBtn] = setup();
    });

    test('guessedWords shows correct guesses after incorrect guess', () => {
      const mockEvent = { target: { value: 'train' } };
      inputBox.simulate('change', mockEvent);
      submitBtn.simulate('click');
      const rows = wrapper.find(`[data-test='guessed-word']`);

      expect(rows.length).toBe(0);
    });
  });
});
