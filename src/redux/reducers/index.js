import userReducer from "./user";
import loggedReducer from "./logged";
import moviesReducer from "./movies";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: userReducer,
  is_logged_in: loggedReducer,
  movies: moviesReducer,
});

export default rootReducer;
