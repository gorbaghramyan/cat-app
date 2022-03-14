import { actionTypes } from '../enums/actionEnums';
import Cat from '../models/cat';
import Category from '../models/category';

export interface fetchCategories {
	type: actionTypes.FETCH_CATEGORIES;
	categories: Category[];
}

export interface fetchCats {
	type: actionTypes.FETCH_CATS;
	cats: Cat[];
}
export interface fetchMoreCats {
	type: actionTypes.MORE_CATS;
	cats: Cat[];
}

export type CatActionPayloads = fetchCats | fetchMoreCats;

export type CategoryActionPayloads = fetchCategories;
