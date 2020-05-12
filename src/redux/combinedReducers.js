import { combineReducers } from "redux";

import userReducer from "./userLogin/reducer";
import formReducer from "./formInfo/reducer";

const combinedReducers = combineReducers({
  user: userReducer,
  form: formReducer
});

export default combinedReducers;
