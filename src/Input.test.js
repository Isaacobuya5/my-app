import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Input from "./Input";
import { findByTestAttr, storeFactory } from "../test/testUtils";

//write set up function to connect to redux store

/**
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  // create a redux store with the store factory utility
  const store = storeFactory(initialState);
  // we need to pass a store as a prop to the connected component
  const wrapper = shallow(<Input store={store} />).dive();
  const wrapper2 = wrapper.dive();
  return wrapper2;
};

describe("render Input Component", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
  });
  describe("word has not been guessed", () => {
    it("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    it("renders the input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    it("renders the submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;

    beforeEach(() => {
      const intialState = { success: true };
      wrapper = setup(intialState);
    });

    it("renders component without error", () => {
        const component = findByTestAttr(wrapper, "component-input");
        expect(component.length).toBe(1);
    });

    it("does not renders the input box", () => {
        const inputBox = findByTestAttr(wrapper, "input-box");
        expect(inputBox.length).toBe(0);
    });

    it("does not renders the submit button", () => {
        const submitButton = findByTestAttr(wrapper, "submit-button");
        expect(submitButton.length).toBe(0);
    });
  });
});

describe("update success state", () => {});
