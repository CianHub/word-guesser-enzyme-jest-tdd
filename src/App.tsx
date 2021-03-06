import './App.css';
import React from 'react';
import hookActions from './actions/hookActions';
import Input from './components/input/Input';
import languageContext from './context/languageContext';
import { LanguagePicker } from './components/languagePicker/languagePicker';
import successContext from './context/successContext';
import { Congrats } from './components/congrats/congrats';
import guessedWordsContext from './context/guessedWordsContext';
import { GuessedWords } from './components/guessedWords/GuessedWords';

const reducer = (
  state: { secretWord: string; language: 'en' | 'emoji' | 'orc' },
  action: { type: string; payload: string }
): {
  secretWord: string;
  language: 'en' | 'emoji' | 'orc';
} => {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case 'setLanguage':
      return { ...state, language: action.payload as 'en' | 'emoji' | 'orc' };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: '',
    language: 'en',
  });

  const setLanguage = (lang: 'en' | 'emoji' | 'orc'): void =>
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
        <successContext.SuccessProvider>
          <Congrats />
          <guessedWordsContext.GuessedWordsProvider>
            <Input secretWord={state.secretWord} />
            <GuessedWords />
          </guessedWordsContext.GuessedWordsProvider>
        </successContext.SuccessProvider>
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
