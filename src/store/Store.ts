import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import { categoryReducer } from './reducers/categoryReducer';
import { catReducer } from './reducers/catReducer';
import thunk from 'redux-thunk';

const store = createStore(
	combineReducers({
		categories: categoryReducer,
		cats: catReducer,
	}),
	applyMiddleware(thunk)
);

export default store;
