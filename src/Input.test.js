import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Input from "./Input";
import {findByTestAttr, storeFactory} from "../test/testUtils";

//write set up function to connect to redux store

/**
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
    // create a redux store with the store factory utility
    const store = storeFactory(initialState);
    // we need to pass a store as a prop to the connected component
    const wrapper = shallow(<Input store={store}/>).dive();
    
}

describe("render Input Component", () => {

    describe("word has not been guessed", () => {
        it("renders component without error", () => {

        });

        it("renders the input box", () => {

        });

        it("renders the submit button", () => {

        });
    })

    describe("word has been guessed", () => {
     
        it("renders component without error", () => {

        });

        it("does not renders the input box", () => {

        });

        it("does not renders the submit button", () => {

        });
    })
});

describe("update success state", () => {

})