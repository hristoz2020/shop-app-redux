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

export const removeFavoriteProduct = (product) => {
	return {
		type: actionTypes.REMOVE_FAVORITE_PRODUCT,
		payload: product,
	};
};

export const setCartProducts = (product) => {
	return {
		type: actionTypes.SET_CART_PRODUCTS,
		payload: product,
	};
};

export const removeCartProduct = (product) => {
	return {
		type: actionTypes.REMOVE_CART_PRODUCTS,
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
		payload: categories,
	};
};

export const setSelectedCategory = (category) => {
	return {
		type: actionTypes.SET_SELECTEDCATEGORY,
		payload: category,
	};
};

export const setQuantity = (product) => {
	return {
		type: actionTypes.SET_QUANTITY,
		payload: product,
	};
};

export const removeQuantity = (product) => {
	return {
		type: actionTypes.REMOVE_QUANTITY,
		payload: product,
	};
};

export const setQuantityAdd = (productId) => {
	return {
		type: actionTypes.SET_QUANTITY_ADD,
		payload: productId,
	};
};

export const setQuantityRemove = (productId) => {
	return {
		type: actionTypes.SET_QUANTITY_REMOVE,
		payload: productId,
	};
};

export const removeAllQuantityProducts = () => {
	return {
		type: actionTypes.REMOVE_ALL_QUANTITY_PRODUCTS,
		payload: [],
	};
};


export const setTotalPrice = (quantity) => {
	return {
		type: actionTypes.SET_TOTAL_PRICE,
		payload: quantity,
	};
};

export const removeAllCartProducts = () => {
	return {
		type: actionTypes.REMOVE_ALL_CART_PRODUCTS,
		payload: [],
	};
};
