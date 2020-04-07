import { getLetterMatchCount } from "../helpers/index";
import axios from "axios";

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: "GUESS_WORD",
    SET_SECRET_WORD: "SET_SECRET_WORD"
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

export const getSecretWord = () => {
    return (dispatch) => {
        return axios.get('http:/localhost:3030')
        .then(response => {
            dispatch({
                type: actionTypes.SET_SECRET_WORD,
                payload: response.data
            });
        })
    }
}