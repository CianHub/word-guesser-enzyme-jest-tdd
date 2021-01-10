import stringsModule from './strings';

const { getStringByLanguage } = stringsModule;

const testStrings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  orc: {},
};

test('gets correct string for english', () => {
  const string = getStringByLanguage('en', 'submit', testStrings);

  expect(string).toBe('submit');
});

test('gets correct string for emoji', () => {
  const string = getStringByLanguage('emoji', 'submit', testStrings);

  expect(string).toBe('🚀');
});

test('gets english string for word if language exists but provided string not found', () => {
  const string = getStringByLanguage('orc', 'submit', testStrings);

  expect(string).toBe('submit');
});
