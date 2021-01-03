import { combineReducers } from 'redux';
import { successReducer } from './successReducer';
import { guessWordReducer } from './guessWordReducer';
import { secretWordReducer } from './secretWordReducer';

export default combineReducers({
  successReducer,
  guessWordReducer,
  secretWordReducer,
});
