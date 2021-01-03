export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

export interface Action {
  type?: string;
  payload?: boolean | string | string[];
}

export const correctGuess = (): Action => {
  return { type: actionTypes.CORRECT_GUESS };
};

export const guessWord = (guessedWord: string) => {
  return function (dispatch: unknown, getState: unknown) {};
};
