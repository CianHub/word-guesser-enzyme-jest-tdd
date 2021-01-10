import React from 'react';

interface Props {
  setLanguage: (lang: 'en' | 'emoji' | 'orc') => void;
}

export const LanguagePicker: React.FC<Props> = ({ setLanguage }) => {
  const lang: Array<'en' | 'emoji' | 'orc'> = ['en', 'emoji'];

  const langOptions = lang.map((lang: 'en' | 'emoji' | 'orc') => (
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
