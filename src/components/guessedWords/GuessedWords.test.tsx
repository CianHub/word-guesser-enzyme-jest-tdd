import React from 'react';
import { shallow } from 'enzyme';
import { GuessedWords, GuessedWord } from './GuessedWords';
import { findByTestAttr } from '../../../test/test-utils';

const setup = (props: { guessedWords: GuessedWord[] }) =>
  shallow(<GuessedWords {...props} />);

test('it should render', () => {
  const comp = setup({
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
  });
  expect(comp).toBeTruthy();
});
