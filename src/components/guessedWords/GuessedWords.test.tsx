import React from 'react';
import { shallow } from 'enzyme';
import { GuessedWords, GuessedWord } from './GuessedWords';
import { findByTestAttr } from '../../../test/test-utils';

const setup = (props: { guessedWords: GuessedWord[] }) =>
  shallow(<GuessedWords {...props} />);

describe('If no words guessed,', () => {
  test('it should render', () => {
    const wrapper = setup({
      guessedWords: [],
    });
    const comp = findByTestAttr(wrapper, 'guessed-words');
    expect(comp.length).toBe(1);
  });

  test('it should render instructions', () => {
    const wrapper = setup({
      guessedWords: [],
    });
    const comp = findByTestAttr(wrapper, 'instructions');
    expect(comp.length).toBe(1);
  });
});

describe('If  words guessed,', () => {
  test('it should render', () => {
    const wrapper = setup({
      guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
    });
    const comp = findByTestAttr(wrapper, 'guessed-words');
    expect(comp.length).toBe(1);
  });

  test('it should render guessed word section', () => {
    const wrapper = setup({
      guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
    });
    const comp = findByTestAttr(wrapper, 'guessed-words-section');
    expect(comp.length).toBe(1);
  });

  test('it should render display correct number of words', () => {
    const wrapper = setup({
      guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
      ],
    });
    const comp = findByTestAttr(wrapper, 'guessed-word');
    expect(comp.length).toBe(3);
  });
});
