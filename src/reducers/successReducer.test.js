 import {actionTypes} from "../actions/index";
 import successReducer from "./successReducer";

 describe("successReducer", () => {

    it("Should return default initial state state of `false` when no action is passed", () => {
    // initially we leave the function invocation empty, then we need to give it undefined and empty object
     const newState = successReducer(undefined, {});
     expect(newState).toBe(false);
    })

    it("Should return  state of `true` upon receiving action of type `CORRECT_GUESS", () => {
       const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
       expect(newState).toBe(true);
    })
 })