import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	setFavoriteProducts,
	removeFavoriteProduct,
} from "../redux/actions/productsAction";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const favoriteProducts = useSelector(
		(state) => state.favoriteProducts.favoriteProducts
	);

	const [isFavorite, setIsFavorite] = useState(
		favoriteProducts.some((item) => item.id === product.id)
	);

	const addToFavorite = (product) => {
		setIsFavorite(true);
		dispatch(setFavoriteProducts(product));
	};
	const removeToFavorite = (product) => {
		setIsFavorite(false);
		dispatch(removeFavoriteProduct(product));
	};

	let productTitle =
		product.title.length > 31
			? product.title.slice(0, 50).concat("...")
			: product.title;

	return (
		<div className="card border w-25 m-2 bg-light">
			<div className="h-50 m-auto">
				<img
					src={product.image}
					alt={productTitle}
					className="product-img"
				/>
			</div>
			<div className="card-body p-0">
				<p className="text-dark">{productTitle}</p>
				<p className="text-dark">$ {product.price}</p>
				<p className="text-dark">{product.category}</p>
			</div>
			<div className="d-flex justify-content-between w-100 p-2">
				<Link
					to={`/products/${product.id}`}
					className="btn btn-primary"
				>
					Details
				</Link>
				{isFavorite ? (
					<span onClick={() => removeToFavorite(product)}>
						<i className="fa-solid fa-heart text-danger fs-3"></i>
					</span>
				) : (
					<span onClick={() => addToFavorite(product)}>
						<i className="fa-regular fa-heart text-danger fs-3"></i>
					</span>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
