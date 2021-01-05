import { Action, CombinedState, Store } from 'redux';
import { storeFactory } from '../test/test-utils';

import { actionTypes, guessWord } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words', () => {
    let store: Store<unknown>;

    beforeEach(() => {
      store = storeFactory();
      store.dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: secretWord,
      });
    });

    test('updates state correctly for unsuccessful guess', () => {
      guessWord(unsuccessfulGuess, store);

      const newState = store.getState();
      const expectedState = {
        secretWordReducer: { secretWord },
        successReducer: { success: false },
        guessWordReducer: {
          guessedWords: [
            { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
          ],
        },
      };

      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      guessWord(secretWord, store);

      const newState = store.getState();
      const expectedState = {
        secretWordReducer: { secretWord },
        successReducer: { success: true },
        guessWordReducer: {
          guessedWords: [
            { guessedWord: secretWord, letterMatchCount: secretWord.length },
          ],
        },
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];

    let store: Store<unknown>;

    beforeEach(() => {
      store = storeFactory();
      store.dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: secretWord,
      });
      store.dispatch({
        type: actionTypes.GUESS_WORD,
        payload: { guessedWord: 'agile', letterMatchCount: 1 },
      });
    });

    test('updates state correctly for unsuccessful guess', () => {
      guessWord(unsuccessfulGuess, store);

      const newState = store.getState();
      const expectedState = {
        secretWordReducer: { secretWord },
        successReducer: { success: false },
        guessWordReducer: {
          guessedWords: [
            ...guessedWords,
            { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
          ],
        },
      };

      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      guessWord(secretWord, store);

      const newState = store.getState();
      const expectedState = {
        secretWordReducer: { secretWord },
        successReducer: { success: true },
        guessWordReducer: {
          guessedWords: [
            ...guessedWords,
            { guessedWord: secretWord, letterMatchCount: secretWord.length },
          ],
        },
      };

      expect(newState).toEqual(expectedState);
    });
  });
});
