import React from 'react';
import guessedWordsContext from '../../context/guessedWordsContext';
import languageContext from '../../context/languageContext';
import successContext from '../../context/successContext';
import { getLetterMatchCount } from '../../helpers';
import languageModule from '../../helpers/strings';
import { GuessedWord } from '../guessedWords/GuessedWords';

interface Props {
  secretWord: string;
}

const Input: React.FC<Props> = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const language = React.useContext(languageContext);
  const [success, setSuccess] = successContext.useSuccess();
  const [guessedWords, setGuessedWords] = guessedWordsContext.useGuessedWords();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const letterMatchCount = getLetterMatchCount(currentGuess, secretWord);
    const newGuessedWords: GuessedWord[] = [
      ...guessedWords,
      { guessedWord: currentGuess, letterMatchCount },
    ];

    setGuessedWords(newGuessedWords);

    if (currentGuess === secretWord) {
      setSuccess(true);
    }
    setCurrentGuess('');

    //TODO update guessedWords context
    //TODO check if word === secretWord and update success context if so
  };

  if (success) {
    return null;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          value={currentGuess}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentGuess(e.target.value)
          }
          data-test="component-input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={languageModule.getStringByLanguage(
            language,
            'guessInputPlaceholder'
          )}
        />
        <button
          type="submit"
          data-test="component-submit-button"
          className="btn btn-primary mb-2"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSubmit(e)
          }
        >
          {languageModule.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  );
};

export default Input;
