import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../redux/actions/productsAction";
import {
	getAllCategories,
	getProductsByCategories,
} from "../services/productsServices";
import CategoriesSelect from "../components/CategoriesSelect";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

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
		<div className="min-height">
			<CategoriesSelect />
			<div className="d-flex flex-wrap justify-content-center mt-5">
				{products.length < 1 && <Loader />}
				{products.length > 0 &&
					products.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
			</div>
		</div>
	);
};

export default Categories;
