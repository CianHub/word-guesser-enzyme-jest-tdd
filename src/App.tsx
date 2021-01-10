import './App.css';
import React from 'react';
import hookActions from './actions/hookActions';
import Input from './components/input/Input';
import languageContext from './context/languageContext';
import { LanguagePicker } from './components/languagePicker/languagePicker';

const reducer = (
  state: { secretWord: string; language: string },
  action: { type: string; payload: string }
): {
  secretWord: string;
  language: string;
} => {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case 'setLanguage':
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: '',
    language: 'en',
  });

  const setLanguage = (lang: string): void =>
    dispatch({ type: 'setLanguage', payload: lang });

  const setSecretWord = (secretWord: string): void =>
    dispatch({ type: 'setSecretWord', payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return state.secretWord.length > 0 ? (
    <div className="container" data-test="component-app">
      <h1>Word Guesser</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Input secretWord={state.secretWord} />
      </languageContext.Provider>
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
