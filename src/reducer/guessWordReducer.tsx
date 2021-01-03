import { Action, actionTypes } from '../actions';

export const guessWordReducer = (
  state: {
    guessedWords: { guessedWord: string; letterMatchCount: number }[];
  } = { guessedWords: [] },
  action: Action
) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return { guessedWords: [...state.guessedWords, action?.payload] };
    default:
      return state;
  }
};
