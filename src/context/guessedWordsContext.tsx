import React from 'react';
import { GuessedWord } from '../components/guessedWords/GuessedWords';

const guessedWordsContext = React.createContext<
  [GuessedWord[], (words: GuessedWord[]) => void] | null
>(null);

const useGuessedWords = (): [GuessedWord[], (words: GuessedWord[]) => void] => {
  const context = React.useContext(guessedWordsContext);

  if (!context) {
    throw new Error('useGuessedWords must be used with a GuessedWordsProvider');
  }

  return context;
};

const GuessedWordsProvider = (props: any): JSX.Element => {
  const [words, setWords] = React.useState<GuessedWord[]>([]);

  const value = React.useMemo(() => [words, setWords], [words]);

  return <guessedWordsContext.Provider value={value} {...props} />;
};

export default { GuessedWordsProvider, useGuessedWords };
