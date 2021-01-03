import { Action, actionTypes } from '../actions';

export const secretWordReducer = (
  state = { secretWord: null },
  action: Action
) => {
  switch (action.type) {
    case actionTypes.SECRET_WORD:
      return { secretWord: action.payload };
    default:
      return state;
  }
};
