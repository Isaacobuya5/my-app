import { storeFactory } from "../test/testUtils";
import {guessWord} from "./actions";

describe("guessWord action dispatcher", () => {
    const secretWord = 'party';
    const unsuccesfulGuess = 'train';

    describe("no guess words", () => {
        let store; 
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        it("updates state correctly for unsuccesful guess", () => {
         store.dispatch(guessWord(unsuccesfulGuess));
         const newState = store.getState();
         const expectedState = {
             ...initialState,
             success: false,
             guessedWords: [{
                 guessWord: unsuccesfulGuess,
                 letterMatchCount: 3
             }]
         }
         expect(newState).toEqual(expectedState);
        });
    
        it("update state correctly for succesful gues", () => {
        store.dispatch(guessWord(secretWord));
        const newState = store.getState();
        const expectedState = {
            secretWord,
            success: true,
            guessedWords: [{
                guessWord: secretWord,
                letterMatchCount: 5
            }]
        }

        expect(newState).toEqual(expectedState);
        });
    });

    describe("some guess words", () => {
        const guessedWords = [{ guessWord: 'agile', letterMatchCount: 1 }];
        const initialState = { guessedWords, secretWord };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        it("updates state correctly for unsuccesful guess", () => {
          store.dispatch(guessWord(unsuccesfulGuess));
          const newState = store.getState();
          const expectedState = {
              secretWord,
              success: false,
              guessedWords:[...guessedWords, { guessWord: unsuccesfulGuess, letterMatchCount: 3}]
          };

          expect(newState).toEqual(expectedState);
        });
    
        it("update state correctly for succesful gues", () => {
          store.dispatch(guessWord(secretWord));
          const newState = store.getState();
          const expectedState = {
              secretWord,
              success: true,
              guessedWords: [...guessedWords, {guessWord: secretWord, letterMatchCount: 5}]
          };

          expect(newState).toEqual(expectedState);
        });
    });

})