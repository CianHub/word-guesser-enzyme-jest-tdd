import { combineReducers } from 'redux';
import { successReducer } from './successReducer';
import { guessWordReducer } from './guessWordReducer';

export default combineReducers({ successReducer, guessWordReducer });
