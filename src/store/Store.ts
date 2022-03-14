import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categoryReducer } from './reducers/categoryReducer';
import { catReducer } from './reducers/catReducer';

const store = createStore(
	combineReducers({
		categories: categoryReducer,
		cats: catReducer,
	}),
	applyMiddleware(thunk)
);

export default store;
