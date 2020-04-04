import checkPropTypes from "check-prop-types";
// For testing purposes
import rootReducer from "../src/reducers/index";
import { middlewares } from "../src/configureStore";
import { createStore, applyMiddleware } from "redux";

// our store factory

/**
 * Create a testing store with imported reducers, middleware, and inital state
 * globals: rootReducer, middlewares
 * @function storeFactory
 * @param {object} initialState 
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState)
}

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper
 * @param {String} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
);
expect(propError).toBeUndefined();

}