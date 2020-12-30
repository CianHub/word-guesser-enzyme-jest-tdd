import React from 'react';

export interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}

interface Props {
  guessedWords: GuessedWord[];
}

export const GuessedWords: React.FC<Props> = ({ guessedWords }) => {
  let contents: JSX.Element = (
    <span data-test="component-instructions">
      Try to guess the secret words
    </span>
  );

  if (guessedWords.length > 0) {
    contents = (
      <div data-test="component-guessed-words-section">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((guessedWord: GuessedWord, index: number) => (
              <tr key={index} data-test="component-guessed-word">
                <td>{guessedWord.guessedWord}</td>
                <td>{guessedWord.letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};
