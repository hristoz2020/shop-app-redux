import { combineReducers } from "redux";
import {
	categoriesReducer,
	darkModeReducer,
	productsReducer,
	selectedProductsReducer,
	selectedCategoryReducer
} from "./productsReducer";

const reducers = combineReducers({
	allProducts: productsReducer,
	categories: categoriesReducer,
	product: selectedProductsReducer,
	darkMode: darkModeReducer,
	selectedCategory: selectedCategoryReducer
});

export default reducers;
