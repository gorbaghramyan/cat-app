import { actionTypes } from '../../enums/actionEnums';
import { CategoryActionPayloads } from '../../interfaces/actionTypes';
import Category from '../../models/category';

export const categoryReducer = (
	state = [] as Category[],
	action: CategoryActionPayloads
) => {
	switch (action.type) {
		case actionTypes.FETCH_CATEGORIES:
			return [...action.categories];
		default:
			return [...state];
	}
};
