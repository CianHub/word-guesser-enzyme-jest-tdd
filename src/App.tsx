import './App.css';
import React from 'react';
import { GuessedWords } from './components/guessedWords/GuessedWords';
import { Congrats } from './components/congrats/congrats';
import hookActions from './actions/hookActions';
import Input from './components/input/Input';

const reducer = (
  state: { secretWord: string },
  action: { type: string; payload: string }
): {
  secretWord: string;
} => {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: '' });

  const setSecretWord = (secretWord: string): void =>
    dispatch({ type: 'setSecretWord', payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return state.secretWord.length > 0 ? (
    <div className="container" data-test="component-app">
      <h1>Word Guesser</h1>
      <Input secretWord={state.secretWord} />
    </div>
  ) : (
    <div
      className="spinner-border"
      role="status"
      data-test="component-spinner"
    ></div>
  );
};

export default App;
