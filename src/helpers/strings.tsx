interface Language {
  congrats?: string;
  submit?: string;
  guessPrompt?: string;
  guessInputPlaceholder?: string;
  guessColumnHeader?: string;
  guessedWords?: string;
  matchingLettersColumnHeader?: string;
}

const languageStrings: { en: Language; emoji: Language; orc: Language } = {
  en: {
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
  },
  emoji: {
    congrats: '🎯🎉',
    submit: '🚀',
    guessPrompt: '🤔🤫🔤',
    guessInputPlaceholder: '⌨️🤔',
    guessedWords: '🤷‍🔤',
    guessColumnHeader: '🤷‍',
    matchingLettersColumnHeader: '✅',
  },
};

function getStringByLanguage(
  languageCode: keyof { en?: Language; emoji?: Language; orc?: string },
  stringKey: keyof Language,
  strings: typeof languageStrings = languageStrings
) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string [${stringKey}] for [${languageCode}]`);

    return strings.en[stringKey];
  }

  return strings[languageCode][stringKey];
}

export default {
  getStringByLanguage,
};
