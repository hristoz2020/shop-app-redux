import { actionTypes } from "../constants/actionTypes";

const initialState = {
	products: [],
	isdarkMode: !!JSON.parse(localStorage.getItem("darkmode")),
	darkModeOn: {
		background: "bg-dark",
		text: "text-light",
	},
	darkModeOff: {
		background: "bg-light",
		text: "text-dark",
	},
};

export const productsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_PRODUCTS:
			return { ...state, products: payload };
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

export const darkModeReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.DARK_MODE:
			return {
				...state,
				isdarkMode: payload,
			};
		default:
			return state;
	}
};
