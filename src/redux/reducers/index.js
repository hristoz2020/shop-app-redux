import { combineReducers } from "redux";
import {
	categoriesReducer,
	darkModeReducer,
	productsReducer,
	selectedProductsReducer,
	selectedCategoryReducer,
	limitedProductsReducer,
	favoriteProductsReducer,
	cartProductsReducer,
	quantityReducer,
	totalPriceReducer,
} from "./productsReducer";

const reducers = combineReducers({
	allProducts: productsReducer,
	limitedProducts: limitedProductsReducer,
	categories: categoriesReducer,
	product: selectedProductsReducer,
	darkMode: darkModeReducer,
	selectedCategory: selectedCategoryReducer,
	favoriteProducts: favoriteProductsReducer,
	cartProducts: cartProductsReducer,
	quantity: quantityReducer,
	totalPrice: totalPriceReducer,
});

export default reducers;
