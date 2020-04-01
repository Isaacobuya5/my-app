import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps} from "../test/testUtils";

import GuessedWords from "./GuessedWords";

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
};

/**
 * @function setup
 * @param {object} props  - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps} /> )
};

it("does not throw warning with expected props", () => {
checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guesed", () => {
    let wrapper;

beforeEach(() => {
wrapper = setup({guessedWords: [] });
})

it("renders without error", () => {
const component = findByTestAttr(wrapper, "component-guessed-word");
expect(component.length).toBe(1);
});

it("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
});

});

describe("if there are words guesed", () => {
  let wrapper;
  let guessedWords = [
    {guessedWord: 'train', letterMatchCount: 3},
    {guessedWord: 'agile', letterMatchCount: 1},
    {guessedWord: 'party', letterMatchCount: 5}
    ]

    beforeEach(() => {
    wrapper = setup({ guessedWords });
    })

it("Should render without error" , () => {
    const component = findByTestAttr(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
});

it("Should render guessed words section" , () => {
const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
expect(guessedWordsNode.length).toBe(1);
});

it("Should display the correct number of guessed words" , () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
});
});


