import { actionTypes } from "../constants/actionTypes";

const initialState = {
	products: [],
	limitedProducts: [],
	favoriteProducts: [],
	cartProducts: [],
	categories: [],
	selectedCategory: "electronics",
	isdarkMode: false,
	darkModeOn: {
		background: "bg-dark",
		text: "text-light",
	},
	darkModeOff: {
		background: "bg-light",
		text: "text-dark",
	},
	quantity: [],
	totalPrice: 0,
};

export const productsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_PRODUCTS:
			return { ...state, products: payload };
		default:
			return state;
	}
};

export const limitedProductsReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case actionTypes.SET_LIMITED_PRODUCTS:
			return { ...state, limitedProducts: payload };
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

export const favoriteProductsReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case actionTypes.SET_FAVORITE_PRODUCTS:
			return {
				...state,
				favoriteProducts: [...state.favoriteProducts, payload],
			};
		case actionTypes.REMOVE_FAVORITE_PRODUCT:
			const filtredProducts = state.favoriteProducts.filter(
				(item) => item.id !== payload.id
			);
			return {
				...state,
				favoriteProducts: filtredProducts,
			};
		default:
			return state;
	}
};

export const quantityReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_QUANTITY:
			return {
				...state,
				quantity: [...state.quantity, payload],
			};
		case actionTypes.REMOVE_QUANTITY:
			const filtredQuantity = state.quantity.filter(
				(item) => item.id !== payload.id
			);
			return {
				...state,
				quantity: filtredQuantity,
			};
		case actionTypes.SET_QUANTITY_ADD:
			const filteredQuantityAdd = state.quantity.map((item) => {
				if (item.id === payload) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});

			return {
				...state,
				quantity: filteredQuantityAdd,
			};
		case actionTypes.SET_QUANTITY_REMOVE:
			const filteredQuantityRemove = state.quantity.map((item) => {
				if (item.id === payload) {
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			});

			return {
				...state,
				quantity: filteredQuantityRemove,
			};
		case actionTypes.REMOVE_ALL_QUANTITY_PRODUCTS:
			return {
				...state,
				quantity: payload,
			};
		default:
			return state;
	}
};

export const cartProductsReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case actionTypes.SET_CART_PRODUCTS:
			return {
				...state,
				cartProducts: [...state.cartProducts, payload],
			};
		case actionTypes.REMOVE_CART_PRODUCTS:
			const filtredProducts = state.cartProducts.filter(
				(item) => item.id !== payload.id
			);
			return {
				...state,
				cartProducts: filtredProducts,
			};
		case actionTypes.REMOVE_ALL_CART_PRODUCTS:
			return {
				...state,
				cartProducts: payload,
			};
		default:
			return state;
	}
};

export const categoriesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_CATEGORIES:
			return { ...state, categories: payload };
		default:
			return state;
	}
};

export const selectedCategoryReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case actionTypes.SET_SELECTEDCATEGORY:
			return { ...state, selectedCategory: payload };
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

export const totalPriceReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_TOTAL_PRICE:
			let total = 0;
			for (let i = 0; i < payload.length; i++) {
				total += payload[i].quantity * payload[i].price;
			}
			return {
				...state,
				totalPrice: total,
			};
		default:
			return state;
	}
};
