import { actionTypes } from "../../enums/actionEnums";
import { actionPayloads } from "../../interfaces/actionTypes";
import Category from "../../models/category";

export const categoryReducer = (
  state = [] as Category[],
  action: actionPayloads
) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return { ...state, categories: action.categories };
    case actionTypes.FETCH_CATS:
      return { ...state, cats: action.cats };
    default:
      return { ...state };
  }
};