import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { getAllProducts } from "../services/productsServices";
import Products from "./Products";

const AllProducts = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getAllProducts()
			.then((productResponse) => {
				dispatch(setProducts(productResponse));
			})
			.catch((err) => console.log("Error: ", err));
	}, [dispatch]);

	return (
		<div className="ui grid container">
			<Products />
		</div>
	);
};

export default AllProducts;
