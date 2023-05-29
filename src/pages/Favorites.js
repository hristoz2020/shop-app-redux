import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
	const favoriteProducts = useSelector(
		(state) => state.favoriteProducts.favoriteProducts
	);

	return (
		<div>
			<h1 className={`text-center`}>Favorites Products: </h1>
			{favoriteProducts.length > 0 &&
				favoriteProducts.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			{favoriteProducts.length === 0 && <h1>Not favorite products</h1>}
		</div>
	);
};

export default Favorites;
