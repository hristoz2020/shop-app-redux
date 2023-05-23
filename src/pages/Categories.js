import {
	getAllCategories,
	getProductsByCategories,
} from "../services/productsServices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCategories } from "../redux/actions/productActions";
import CategoriesSelect from "../components/CategoriesSelect";
import ProductCard from "../components/ProductCard";

const Categories = () => {
	const dispatch = useDispatch();
	const selectedCategory = useSelector(
		(state) => state.selectedCategory.selectedCategory
	);
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		getAllCategories()
			.then((categories) => dispatch(setCategories(categories)))
			.catch((err) => console.log("Error: ", err));
	}, [dispatch]);

	useEffect(() => {
		getProductsByCategories(selectedCategory)
			.then((products) => setProducts(products))
			.catch((err) => console.log("Error: ", err));
	}, [selectedCategory]);

	return (
		<div>
			<CategoriesSelect />
			<div className="d-flex flex-wrap justify-content-center mt-5">
				<ProductCard products={products} />
			</div>
		</div>
	);
};

export default Categories;
