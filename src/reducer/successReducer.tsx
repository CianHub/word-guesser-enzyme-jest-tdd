import { actionTypes, Action } from '../actions';

export const successReducer = (
  state: boolean = false,
  action?: Action
): boolean => {
  switch (action?.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
