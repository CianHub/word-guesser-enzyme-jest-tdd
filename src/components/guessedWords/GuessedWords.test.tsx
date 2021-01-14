import React from 'react';
import { mount } from 'enzyme';
import { GuessedWords, GuessedWord } from './GuessedWords';
import { findByTestAttr } from '../../../test/test-utils';
import { languageStrings } from '../../helpers/strings';
import guessedWordsContext from '../../context/guessedWordsContext';
import languageContext from '../../context/languageContext';

const setup = (
  guessedWords: GuessedWord[],
  lang: 'en' | 'emoji' | 'orc' = 'en'
) => {
  return mount(
    <languageContext.Provider value={lang}>
      <guessedWordsContext.GuessedWordsProvider
        value={[guessedWords, jest.fn()]}
      >
        <GuessedWords />
      </guessedWordsContext.GuessedWordsProvider>
    </languageContext.Provider>
  );
};

describe('If no words guessed,', () => {
  test('it should render', () => {
    const wrapper = setup([]);
    const comp = wrapper.find(`[data-test='component-guessed-words']`);
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
    const wrapper = setup([{ guessedWord: 'train', letterMatchCount: 3 }]);
    const comp = wrapper.find(`[data-test='component-guessed-words']`);
    expect(comp.length).toBe(1);
  });

  test('it should render guessed word section', () => {
    const wrapper = setup([{ guessedWord: 'train', letterMatchCount: 3 }]);
    const comp = wrapper.find(`[data-test='component-guessed-words-section']`);
    expect(comp.length).toBe(1);
  });

  test('it should render display correct number of words', () => {
    const wrapper = setup([
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ]);
    const comp = wrapper.find(`[data-test='component-guessed-word']`);
    expect(comp.length).toBe(3);
  });
});

describe('language integration', () => {
  test('renders in english', () => {
    const wrapper = setup([]);
    const text = wrapper.find(`[data-test='component-instructions']`).text();

    expect(text).toBe(languageStrings.en.guessPrompt);
  });

  test('renders in emoji', () => {
    const wrapper = setup([], 'emoji');
    const text = wrapper.find(`[data-test='component-instructions']`).text();
    expect(text).toBe(languageStrings.emoji.guessPrompt);
  });
});
