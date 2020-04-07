import moxios from "moxios";
import { storeFactory } from "../../test/testUtils";
import {getSecretWord} from "./index";

describe("getSecretWord action creator", () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it("adds response word to the state", () => {
    const secretWord = 'party';
    const store = storeFactory();

    // set up moxios.wait() to tell it how to respond when axios send it a request
    moxios.wait(() => {
        // get the most recent request for this particular test
        const request = moxios.requests.mostRecent();
        // setting moxios response
        request.respondWith({
            status: 200,
            response: secretWord,
        });
    });

    return store.dispatch(getSecretWord())
    .then(() => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
    });
    });
});