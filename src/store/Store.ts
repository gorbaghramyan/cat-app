import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from "./reducers/categoryReducer";

const store = createStore(categoryReducer, applyMiddleware(thunk));

export default store;