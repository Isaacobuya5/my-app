import { getLetterMatchCount } from "../helpers/index";
export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: "GUESS_WORD"
};

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
// export function correctGuess() {
//     return {type: actionTypes.CORRECT_GUESS};
// }

export const guessWord = (guessWord) => {
    return function(dispatch, getState) {
    // getting the secret word
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessWord, secretWord);

    // dispatch GUESS WORD action so as to add to my guesswords array
    dispatch({
        type: actionTypes.GUESS_WORD,
        payload: { guessWord, letterMatchCount }
    });
    // conditionaly dispatch correct guess
    if (guessWord === secretWord) {
        dispatch({
            type: actionTypes.CORRECT_GUESS
        });
    }


    };
};