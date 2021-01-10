import React from 'react';
import languageContext from '../../context/languageContext';
import languageModule from '../../helpers/strings';

interface Props {
  secretWord: string;
}

const Input: React.FC<Props> = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const language = React.useContext(languageContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentGuess('');

    //TODO update guessedWords context
    //TODO check if word === secretWord and update success context if so
  };

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
