import { combineReducers } from "redux";

import userReducer from "./userLogin/reducer";
import formReducer from "./formInfo/reducer";
import gameReducer from "./game/reducer";

const combinedReducers = combineReducers({
  user: userReducer,
  form: formReducer,
  game: gameReducer
});

export default combinedReducers;
