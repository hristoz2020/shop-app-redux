import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
	const favoriteProducts = useSelector(
		(state) => state.favoriteProducts.favoriteProducts
	);
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);

	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;

	return (
		<div className="min-height">
			<h1 className={`text-center ${currentModeText}`}>
				Favorite Products:
			</h1>
			<div className="d-flex flex-wrap justify-content-center mt-5">
				{favoriteProducts.length > 0 &&
					favoriteProducts.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
			</div>
			{favoriteProducts.length === 0 && (
				<h1 className={`text-center ${currentModeText} m-5`}>
					Not favorite products
				</h1>
			)}
		</div>
	);
};

export default Favorites;
