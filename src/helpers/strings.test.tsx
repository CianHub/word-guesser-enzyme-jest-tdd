import stringsModule from './strings';

const { getStringByLanguage } = stringsModule;

const testStrings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  orc: {},
};

describe('language string test', () => {
  const mockWarn = jest.fn();
  let originalWarn: () => void;

  beforeEach(() => {
    originalWarn = console.warn;
    console.warn = mockWarn;
  });

  afterEach(() => {
    console.warn = originalWarn;
  });

  test('gets correct string for english', () => {
    const string = getStringByLanguage('en', 'submit', testStrings);

    expect(string).toBe('submit');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test('gets correct string for emoji', () => {
    const string = getStringByLanguage('emoji', 'submit', testStrings);

    expect(string).toBe('🚀');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test('gets english string for word if language exists but provided string not found', () => {
    const string = getStringByLanguage('orc', 'submit', testStrings);

    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith(
      `Could not get string [submit] for [orc]`
    );
  });

  test('calls console.warn language exists but provided string not found', () => {
    getStringByLanguage('orc', 'submit', testStrings);

    expect(mockWarn).toHaveBeenCalledWith(
      `Could not get string [submit] for [orc]`
    );
  });
});
