import { combineReducers } from "redux";
import {
	darkModeReducer,
	productsReducer,
	selectedProductsReducer,
} from "./productsReducer";

const reducers = combineReducers({
	allProducts: productsReducer,
	product: selectedProductsReducer,
	darkMode: darkModeReducer,
});

export default reducers;
