import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsAction";
import { getAllProducts } from "../services/productsServices";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.allProducts.products);
	useEffect(() => {
		getAllProducts()
			.then((productResponse) => {
				dispatch(setProducts(productResponse));
			})
			.catch((err) => console.log("Error: ", err));
	}, [dispatch]);

	return (
		<div className="d-flex flex-wrap justify-content-center min-height">
			{products &&
				products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
		</div>
	);
};

export default AllProducts;
