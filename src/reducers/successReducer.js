import { actionTypes } from "../actions"

/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */
/*
start with export default (state, action) return null
 */
export default (state = false, action) => {
    // return null;
    switch(action.type) {
        case actionTypes.CORRECT_GUESS:
            return true;
        default:
            return state;
    }
}