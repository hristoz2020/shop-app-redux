import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectedProduct,
	removeSelectedProduct,
	setCartProducts,
	removeCartProduct,
} from "../redux/actions/productsAction";
import { getOneProduct } from "../services/productsServices";

const Details = () => {
	const { productId } = useParams();
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);
	const cartProducts = useSelector(
		(state) => state.cartProducts.cartProducts
	);

	useEffect(() => {
		if (productId && productId !== "")
			getOneProduct(productId)
				.then((product) => dispatch(selectedProduct(product)))
				.catch((err) => console.log("Error: ", err));
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [productId, dispatch]);

	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);

	const currentModeBackground = isdarkMode
		? darkModeOn.background
		: darkModeOff.background;

	const addToCart = (product) => {
		dispatch(setCartProducts(product));
	};

	const removeToCart = (product) => {
		dispatch(removeCartProduct(product));
	};

	return (
		<div className={`min-height ${currentModeBackground}`}>
			{Object.keys(product).length === 0 ? (
				<div>...Loading</div>
			) : (
				<div className={`d-flex border bg-white w-50`}>
					<div className="">
						<img
							className="product-img"
							src={product.image}
							alt="product"
						/>
					</div>
					<div className="">
						<h1>{product.title}</h1>
						<h2>${product.price}</h2>
						<h3>{product.category}</h3>
						<p>{product.description}</p>

						{cartProducts.some((item) => item.id === product.id) ? (
							<button onClick={() => removeToCart(product)}>
								Remove to Cart
							</button>
						) : (
							<button onClick={() => addToCart(product)}>
								Add to Cart
							</button>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Details;
