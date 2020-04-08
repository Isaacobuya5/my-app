import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import { storeFactory } from '../test/testUtils';
import App, {UnconnectedApp} from './App';

/**
 * function setup
 * @param {object} state - State for this setup
 * @returns {ShallowWrapper}
 */

 const setup = (state={}) => {
     const store = storeFactory(state);
     const wrapper = shallow(<App store={store} />).dive();
     const wrapper2 = wrapper.dive();
    //  console.log(wrapper2);
     return wrapper2;
 }

 describe('redux properties', () => {
     it('has access to `success` state', () => {
         const success = true;
         const wrapper = setup({success});
         const successProp = wrapper.instance().props.success;
         expect(successProp).toBe(success);
     });

     it('has access to `secretWord` state', () => {
         const secretWord = 'party';
         const wrapper = setup({ secretWord });
         const secretWordProp = wrapper.instance().props.secretWord;
         expect(secretWordProp).toBe(secretWord);
     })

     it('has access to `guessedWords` state', () => {
        const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3}];
        const wrapper = setup({ guessedWords });
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toEqual(guessedWords)
     });

     it("`getSecretWord' action creator is a function on the props", () => {
         const wrapper = setup();
         const getSecretWordProp = wrapper.instance().props.getSecretWord;
         expect(getSecretWordProp).toBeInstanceOf(Function);
     })

 });

 it("`getSecretWord` runs on App mount", () => {
     // create mock function
     // jest will watch and see whenever this mock is called
     const getSecretWordMock = jest.fn();

     // we need to pass all props for the purpose of prop-types, we don't want to see warnings
     const props = {
         getSecretWord: getSecretWordMock,
         success: false,
         guessedWords: []
     }
     // setup app component with the getSecretWordMock as a prop
     // we don't use our setup function because it uses connected component
     const wrapper = shallow(<UnconnectedApp {...props}/>);

     // run lifecycle method
     // remember - wrapper.instance() gives us the actual react component thus we can run componentDidMount
     wrapper.instance().componentDidMount();

     // check to see if mock ran -> check how many times mock ran
     const getSecretWordMockCallCount = getSecretWordMock.mock.calls.length;
     expect(getSecretWordMockCallCount).toBe(1);

 })

