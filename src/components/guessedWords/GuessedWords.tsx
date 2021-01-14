import React from 'react';
import guessedWordsContext from '../../context/guessedWordsContext';
import LanguageContext from '../../context/languageContext';
import stringModule from '../../helpers/strings';

export interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}

export const GuessedWords: React.FC = () => {
  const language = React.useContext(LanguageContext);
  const [guessedWords] = guessedWordsContext.useGuessedWords();

  let contents: JSX.Element = (
    <span data-test="component-instructions">
      {stringModule.getStringByLanguage(language, 'guessPrompt')}
    </span>
  );

  if (guessedWords.length > 0) {
    contents = (
      <div data-test="component-guessed-words-section">
        <h3>{stringModule.getStringByLanguage(language, 'guessedWords')}</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              {stringModule.getStringByLanguage(language, 'guessColumnHeader')}

              <th>
                {stringModule.getStringByLanguage(
                  language,
                  'matchingLettersColumnHeader'
                )}
              </th>
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
