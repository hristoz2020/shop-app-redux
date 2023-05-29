import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFavoriteProducts } from "../redux/actions/productsAction";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();

	const addToFavorite = (product) => {
		dispatch(setFavoriteProducts(product));
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
				<button
					className="btn btn-primary"
					onClick={() => addToFavorite(product)}
				>
					Like
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
