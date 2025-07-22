import { combineReducers } from "redux";
import listReducer from "./slices/listSlice";

const rootReducer = combineReducers({
  list_slice: listReducer,
});

export default rootReducer;
