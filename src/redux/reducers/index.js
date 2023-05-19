import { combineReducers } from "redux";
import {
	categoriesReducer,
	darkModeReducer,
	productsReducer,
	selectedProductsReducer,
} from "./productsReducer";

const reducers = combineReducers({
	allProducts: productsReducer,
	categories: categoriesReducer,
	product: selectedProductsReducer,
	darkMode: darkModeReducer,
});

export default reducers;
