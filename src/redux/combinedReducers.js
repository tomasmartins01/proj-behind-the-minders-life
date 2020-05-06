import { combineReducers } from "redux";

import userReducer from "./userLogin/reducer";

const combinedReducers = combineReducers({
  user: userReducer
});

export default combinedReducers;
