import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducers from "./combinedReducers";

const composedEnhancers = composeWithDevTools();

const store = createStore(combinedReducers, composedEnhancers);

export default store;
