import { Store } from 'redux';
import { getLetterMatchCount } from '../helpers';

import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export interface Action {
  type?: string;
  payload?: boolean | string | string[];
}

export const correctGuess = (): Action => {
  return { type: actionTypes.CORRECT_GUESS };
};

export const guessWord = (guessedWord: string, store: Store) => {
  const secretWord = store.getState().secretWordReducer.secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  store.dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount },
  });

  if (guessedWord === secretWord) {
    store.dispatch({ type: actionTypes.CORRECT_GUESS, payload: true });
  }
};

export const getSecretWord = (store: Store) => {
  return axios
    .get('https://random-word-api.herokuapp.com/home/word?number=1')
    .then((res) =>
      store.dispatch({ type: actionTypes.SET_SECRET_WORD, payload: res.data })
    );
};
