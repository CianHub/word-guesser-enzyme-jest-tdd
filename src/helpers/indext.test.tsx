import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';

  test('returns correct count when no match', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test('returns correct count when 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test('returns correct count when duplicate letters in guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
