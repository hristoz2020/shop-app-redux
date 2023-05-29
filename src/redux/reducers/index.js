import { combineReducers } from "redux";
import {
	categoriesReducer,
	darkModeReducer,
	productsReducer,
	selectedProductsReducer,
	selectedCategoryReducer,
	limitedProductsReducer,
	favoriteProductsReducer,
} from "./productsReducer";

const reducers = combineReducers({
	allProducts: productsReducer,
	limitedProducts: limitedProductsReducer,
	categories: categoriesReducer,
	product: selectedProductsReducer,
	darkMode: darkModeReducer,
	selectedCategory: selectedCategoryReducer,
	favoriteProducts: favoriteProductsReducer,
});

export default reducers;
