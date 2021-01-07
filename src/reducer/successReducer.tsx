import { actionTypes, Action } from '../actions';

export const successReducer = (
  state = { success: false },
  action?: { type: string; payload: boolean }
): { success: boolean } => {
  switch (action?.type) {
    case actionTypes.CORRECT_GUESS:
      return { success: action.payload };
    default:
      return state;
  }
};
