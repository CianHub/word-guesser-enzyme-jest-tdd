import React from 'react';
import languageContext from '../../context/languageContext';
import stringsModule from '../../helpers/strings';

interface Props {
  success: boolean;
}
export const Congrats: React.FC<Props> = ({ success }) => {
  const language = React.useContext(languageContext);

  return success ? (
    <div data-test="component-congrats" className="alert alert-success">
      <span data-test="component-congrats-message">
        {success ? stringsModule.getStringByLanguage(language, 'congrats') : ''}
      </span>
    </div>
  ) : null;
};
