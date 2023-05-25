import { combineReducers } from "redux";
import {
	categoriesReducer,
	darkModeReducer,
	productsReducer,
	selectedProductsReducer,
	selectedCategoryReducer,
	limitedProductsReducer
} from "./productsReducer";

const reducers = combineReducers({
	allProducts: productsReducer,
	limitedProducts: limitedProductsReducer,
	categories: categoriesReducer,
	product: selectedProductsReducer,
	darkMode: darkModeReducer,
	selectedCategory: selectedCategoryReducer
});

export default reducers;
