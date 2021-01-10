import React from 'react';

interface Props {
  setLanguage: (lang: string) => void;
}

export const LanguagePicker: React.FC<Props> = ({ setLanguage }) => {
  const lang = ['en', 'emoji'];

  const langOptions = lang.map((lang: string) => (
    <span
      data-test="component-language-icon"
      key={lang}
      onClick={() => setLanguage(lang)}
    >
      {lang}
    </span>
  ));
  return <div data-test="component-language-picker">{langOptions}</div>;
};
