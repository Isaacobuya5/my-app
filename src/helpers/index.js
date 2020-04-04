/**
 * 
 * @param {String} guessWord - Guessed word.
 * @param {String} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;

};