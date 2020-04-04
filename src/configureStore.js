import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";


export const middlewares = [thunk];

const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
// export default createStore(rootReducer);
export default createStoreWithMiddleWare(rootReducer);