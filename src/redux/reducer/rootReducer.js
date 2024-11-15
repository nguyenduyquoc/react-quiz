import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  // khai báo các reducer
  account: accountReducer,
});

export default rootReducer;
