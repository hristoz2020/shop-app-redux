import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectedProduct,
	setCartProducts,
	removeSelectedProduct,
	removeCartProduct,
	setQuantity,
	removeQuantity,
} from "../redux/actions/productsAction";
import { getOneProduct } from "../services/productsServices";

const Details = () => {
	const { productId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
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
	const checkIsCartProduct = cartProducts.some((item) => item.id === product.id);
	const currentModeBackground = isdarkMode
		? darkModeOn.background
		: darkModeOff.background;

	const addToCart = (product) => {
		dispatch(setCartProducts(product));
		dispatch(
			setQuantity({ id: product.id, quantity: 1, price: product.price })
		);
		product.amount = 1;
	};

	const removeToCart = (product) => {
		dispatch(removeCartProduct(product));
		dispatch(removeQuantity(product));
	};

	return (
		<div className={`min-height ${currentModeBackground}`}>
			{Object.keys(product).length === 0 && <div>...Loading</div>}
			{Object.keys(product).length >= 1 && (
				<div
					className={`border bg-white w-50 mx-auto`}
				>
					<div className="d-flex justify-content-center">
						<img
							className="product-img"
							src={product.image}
							alt="product"
						/>
					</div>
					<div className="p-2">
						<h1>{product.title}</h1>
						<h2>{product.price} BGN</h2>
						<h3>{product.category}</h3>
						<p>{product.description}</p>
					</div>
					<div className="d-flex justify-content-end p-2">
						{checkIsCartProduct && (
							<button
								className="btn btn-danger"
								onClick={() => removeToCart(product)}
							>
								Remove to Cart
							</button>
						)}
						{!checkIsCartProduct && (
							<button
								className="btn btn-primary"
								onClick={() => addToCart(product)}
							>
								Add to Cart
							</button>
						)}
						<button
							className="btn btn-primary ms-3"
							onClick={() => navigate(-1)}
						>
							Back
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Details;
