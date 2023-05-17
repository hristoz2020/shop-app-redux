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
		<div className="">
			{Object.keys(product).length === 0 ? (
				<div>...Loading</div>
			) : (
				<div className="">
					<div className="">
						<div className=""></div>
						<div className="">
							<div className="">
								<img
									className=""
									src={product.image}
									alt="product"
								/>
							</div>
							<div className="">
								<h1>{product.title}</h1>
								<h2>
									<span className="">
										${product.price}
									</span>
								</h2>
								<h3 className="">
									{product.category}
								</h3>
								<p>{product.description}</p>
								<div
									className=""
									tabIndex="0"
								>
									<div className="">
										<i className=""></i>
									</div>
									<div className="">
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
