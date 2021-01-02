import { actionTypes } from '../actions';
import { successReducer } from './successReducer';

test('returns initial state of false if no action passed', () => {
  const newState = successReducer();
  expect(newState.success).toBeFalsy();
});

test('returns state of true if CORRECT_GUESS action passed', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState.success).toBeTruthy();
});
