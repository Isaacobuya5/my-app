import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Input, {UnConnectedInput} from "./Input";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import { guessWord } from "./actions";

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

// Testing Redux props
describe("redux props", () => {
it('should have success piece of state as prop', () => {
  const success = true;
  const wrapper = setup({ success });
  // we will now use wrapper.instance() to get the React component and then .props on that to get the props
  const successProp = wrapper.instance().props.success;
  expect(successProp).toBe(success);
});

// testing to see that the guessWord action creator is there as a prop
it('should check that guessWord action creator is a function prop', () => {
const wrapper = setup();
const guessWordProp = wrapper.instance().props.guessWord;
expect(guessWordProp).toBeInstanceOf(Function);
})
});

// testing guessWord call on submit
it("should call `guessWord` action creator when button submit is called", () => {
  // create mock for guessWord
  const guessWordMock = jest.fn();

  const props = {
    success: false,
    guessWord: guessWordMock
  }

  // wrapper for the unconnected input component
  const wrapper = shallow(<UnConnectedInput {...props} />);

  // find the submit button
  const submitButton = findByTestAttr(wrapper,"submit-button");

  // simulate click on submit
  submitButton.simulate('click');

  // check to see if guessWord action has been called
  const guessWordCallCount = guessWordMock.mock.calls.length;
  expect(guessWordCallCount).toBe(1);
})