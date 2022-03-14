import { Dispatch } from 'react';
import { actionTypes } from '../../enums/actionEnums';
import {
	fetchCategories,
	fetchCats,
	fetchMoreCats,
} from '../../interfaces/actionTypes';
import Cat from '../../models/cat';
import Category from '../../models/category';
import store from '../Store';

export const getCategories = () => {
	return async (dispatch: Dispatch<fetchCategories>) => {
		try {
			const res = await fetch('https://api.thecatapi.com/v1/categories');
			let categories: Category[] = await res.json();
			categories = categories.map(
				(category) => new Category(category.id, category.name)
			);
			dispatch({
				type: actionTypes.FETCH_CATEGORIES,
				categories,
			});
		} catch (e) {
			console.error('error');
		}
	};
};
