import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);
	const cartProducts = useSelector(
		(state) => state.cartProducts.cartProducts
	);

	console.log(cartProducts);

	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;

	return (
		<div className="min-height">
			<h1 className={`text-center ${currentModeText}`}>Cart</h1>
			<div>
				{cartProducts.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};

export default Cart;
