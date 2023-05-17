import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectedProduct,
	removeSelectedProduct,
} from "../redux/actions/productActions";
import { getOneProduct } from "../services/productsServices";

const Details = () => {
	const { productId } = useParams();
	const product = useSelector((state) => state.product);
	const dispatch = useDispatch();

	useEffect(() => {
		if (productId && productId !== "")
			getOneProduct(productId)
				.then((product) => dispatch(selectedProduct(product)))
				.catch((err) => console.log("Error: ", err));
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [productId, dispatch]);

	return (
		<div className="ui grid container">
			{Object.keys(product).length === 0 ? (
				<div>...Loading</div>
			) : (
				<div className="ui placeholder segment">
					<div className="ui two column stackable center aligned grid">
						<div className="ui vertical divider">AND</div>
						<div className="middle aligned row">
							<div className="column lp">
								<img
									className="ui fluid image"
									src={product.image}
									alt="product"
								/>
							</div>
							<div className="column rp">
								<h1>{product.title}</h1>
								<h2>
									<a className="ui teal tag label" href="/">
										${product.price}
									</a>
								</h2>
								<h3 className="ui brown block header">
									{product.category}
								</h3>
								<p>{product.description}</p>
								<div
									className="ui vertical animated button"
									tabIndex="0"
								>
									<div className="hidden content">
										<i className="shop icon"></i>
									</div>
									<div className="visible content">
										Add to Cart
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Details;
