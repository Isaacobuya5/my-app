import {correctGuess, actionTypes} from "./index";

describe("correctGues", () => {
    it("Should return an action with type `CORRECT_GUESS`", () => {
     const action = correctGuess();

     expect(action).toEqual({type: actionTypes.CORRECT_GUESS}); 
    });
})