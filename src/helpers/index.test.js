import {getLetterMatchCount} from "./index";

describe('getLetterMatchCount', () => {
    const secretWord = 'party';

    it("Should return correct count when there are zero matching letters", () => {
      const letterMatchCount = getLetterMatchCount('bones', secretWord);
      expect(letterMatchCount).toBe(0);
    });

    it("Should return correct count when there are three matching letters", () => {
        const letterMatchCount = getLetterMatchCount('pay', secretWord);
        expect(letterMatchCount).toBe(3); 
    });

    it("Should return correct count when there are duplicate matching letters", () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });

})