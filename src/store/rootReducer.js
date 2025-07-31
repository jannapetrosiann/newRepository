import { combineReducers } from "redux";
import listReducer from "./slices/listSlice";
import todoReducer from "./slices/todoSlice";

const rootReducer = combineReducers({
  list_slice: listReducer,
  todos: todoReducer,
});

export default rootReducer;
