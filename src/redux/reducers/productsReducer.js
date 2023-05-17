import { actionTypes } from "../constants/actionTypes";

const initialState = {
	products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_PRODUCTS:
			return {...state, products: payload};
		default:
			return state;
	}
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case actionTypes.SELECTED_PRODUCT:
			return { ...state, ...payload };
		case actionTypes.REMOVE_SELECTED_PRODUCT:
			return {};
		default:
			return state;
	}
};
