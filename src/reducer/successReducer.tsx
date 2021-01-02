import { actionTypes, Action } from '../actions';

export const successReducer = (
  state = { success: false },
  action?: Action
): { success: boolean } => {
  switch (action?.type) {
    case actionTypes.CORRECT_GUESS:
      return { success: true };
    default:
      return state;
  }
};
