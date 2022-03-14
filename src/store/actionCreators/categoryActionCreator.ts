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

export const getCats = (category_id: number) => {
	return async (dispatch: Dispatch<fetchCats>) => {
		try {
			const res = await fetch(
				`https://api.thecatapi.com/v1/images/search?limit=9&page=0&category_ids=${category_id}`
			);
			let cats: Cat[] = await res.json();
			const state = store.getState() as any;

			cats = cats.map(
				(cat) =>
					new Cat(
						cat.id,
						cat.url,
						cat.categories,
						cat.breeds,
						cat.width,
						cat.height
					)
			);

			dispatch({
				type: actionTypes.FETCH_CATS,
				cats,
			});
		} catch (e) {
			console.error('error');
		}
	};
};

export const getMoreCats = (category_id: number) => {
	return async (dispatch: Dispatch<fetchMoreCats>) => {
		try {
			const res = await fetch(
				`https://api.thecatapi.com/v1/images/search?limit=9&page=0&category_ids=${category_id}`
			);
			let cats: Cat[] = await res.json();

			cats = cats.map(
				(cat) =>
					new Cat(
						cat.id,
						cat.url,
						cat.categories,
						cat.breeds,
						cat.width,
						cat.height
					)
			);
			const state = store.getState() as any;

			dispatch({
				type: actionTypes.MORE_CATS,
				cats: [...state?.cats, ...cats],
			});
		} catch (e) {
			console.error('error');
		}
	};
};
