import { actionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
	return {
		type: actionTypes.SET_PRODUCTS,
		payload: products,
	};
};

export const setLimitedProducts = (limitedProducts) => {
	return {
		type: actionTypes.SET_LIMITED_PRODUCTS,
		payload: limitedProducts,
	};
};

export const setFavoriteProducts = (product) => {
	return {
		type: actionTypes.SET_FAVORITE_PRODUCTS,
		payload: product,
	};
};

export const selectedProduct = (product) => {
	return {
		type: actionTypes.SELECTED_PRODUCT,
		payload: product,
	};
};


export const removeSelectedProduct = () => {
	return {
		type: actionTypes.REMOVE_SELECTED_PRODUCT,
	};
};

export const setCategories = (categories) => {
	return {
		type: actionTypes.SET_CATEGORIES,
		payload: categories
	}
}

export const setSelectedCategory = (category) => {
	return {
		type: actionTypes.SET_SELECTEDCATEGORY,
		payload: category
	}
}