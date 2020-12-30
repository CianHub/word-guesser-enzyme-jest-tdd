import React from 'react';

export interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}

interface Props {
  guessedWords: GuessedWord[];
}

export const GuessedWords: React.FC<Props> = ({ guessedWords }) => {
  return <div data-test="component-guessed-words"></div>;
};
