import { actionTypes, correctGuess, getSecretWord } from './index';

import moxios from 'moxios';
import { storeFactory } from '../../test/test-utils';

describe('correctGuess', () => {
  test('returns an action with type CORRECT_GUESS', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe('http testing', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('adds response to state as secret word', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return getSecretWord(store).then(() => {
      const newState = store.getState();
      expect(newState.secretWordReducer.secretWord).toBe(secretWord);
    });
  });
});
