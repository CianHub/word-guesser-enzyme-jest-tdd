import React from 'react';
import { mount, shallow } from 'enzyme';

import guessedWordsContext from './guessedWordsContext';

const TestComponent = () => {
  guessedWordsContext.useGuessedWords();
  return <div></div>;
};

test('useGuessedWords throws error is used outside of GuessedWordsProvider', () => {
  expect(() => {
    mount(<TestComponent />);
  }).toThrowError();
});

test('useGuessedWords does not throw error is used inside of GuessedWordsProvider', () => {
  expect(() => {
    mount(
      <guessedWordsContext.GuessedWordsProvider value={'test'}>
        <TestComponent />
      </guessedWordsContext.GuessedWordsProvider>
    );
  }).not.toThrowError();
});
