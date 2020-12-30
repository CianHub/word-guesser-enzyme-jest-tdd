export const getLetterMatchCount = (
  guessedWord: string,
  secretWord: string
) => {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return Array.from(secretLetterSet).filter((letter) =>
    guessedLetterSet.has(letter)
  ).length;
};
