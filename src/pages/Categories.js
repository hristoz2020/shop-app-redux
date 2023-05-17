import { getAllCategories } from "../services/productsServices";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategories } from "../redux/actions/productActions";

const Categories = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getAllCategories()
			.then((categories) => dispatch(setCategories(categories)))
			.catch((err) => console.log("Error: ", err));
	}, [dispatch]);

	return (
		<div>
			<h1>Categories</h1>
		</div>
	);
};

export default Categories;
