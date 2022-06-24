import { combineReducers, createStore } from "redux";
import Reducer from "./reducer";

let reducers = combineReducers({
  myReducer: Reducer,
});
let store = createStore(reducers);

window.store = store;

export default store;
