import { Dispatch } from 'react';
import { actionTypes } from '../../enums/actionEnums';
import { fetchCats, fetchMoreCats } from '../../interfaces/actionTypes';
import Cat from '../../models/cat';
import store from '../Store';

export const getCats = (category_id: number) => {
	return async (dispatch: Dispatch<fetchCats>) => {
		try {
			dispatch({
				type: actionTypes.FETCH_CATS,
				cats: await _fetchCats(category_id),
			});
		} catch (e) {}
	};
};

export const getMoreCats = (category_id: number) => {
	return async (dispatch: Dispatch<fetchMoreCats>) => {
		try {
			const state = store.getState() as { cats: Cat[] };
			const cats = await _fetchCats(category_id);

			dispatch({
				type: actionTypes.MORE_CATS,
				cats: [...state.cats, ...cats],
			});
		} catch (e) {}
	};
};

const _fetchCats = async (category_id: number): Promise<Cat[]> => {
	try {
		const res = await fetch(
			`https://api.thecatapi.com/v1/images/search?limit=9&page=0&category_ids=${category_id}`
		);

		return await res.json();
	} catch (error) {}

	return [];
};
