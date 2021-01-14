import React from 'react';
import languageContext from '../../context/languageContext';
import successContext from '../../context/successContext';
import stringsModule from '../../helpers/strings';

export const Congrats: React.FC = () => {
  const language = React.useContext(languageContext);
  const [success] = successContext.useSuccess();

  return success ? (
    <div data-test="component-congrats" className="alert alert-success">
      <span data-test="component-congrats-message">
        {success ? stringsModule.getStringByLanguage(language, 'congrats') : ''}
      </span>
    </div>
  ) : null;
};
