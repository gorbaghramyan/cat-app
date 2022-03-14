import { actionTypes } from '../../enums/actionEnums';
import { CatActionPayloads } from '../../interfaces/actionTypes';
import Cat from '../../models/cat';

export const catReducer = (state = [] as Cat[], action: CatActionPayloads) => {
	switch (action.type) {
		case actionTypes.FETCH_CATS:
			return [...action.cats];
		case actionTypes.MORE_CATS:
			return [...action.cats];
		default:
			return [...state];
	}
};
