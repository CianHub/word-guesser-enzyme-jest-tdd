export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

export interface Action {
  type?: string;
  payload?: boolean;
}

export const correctGuess = (): Action => {
  return { type: actionTypes.CORRECT_GUESS };
};
