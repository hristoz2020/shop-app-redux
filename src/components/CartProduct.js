import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCartProduct } from "../redux/actions/productsAction";

const CartProduct = ({ product }) => {
	let productTitle =
		product.title.length > 31
			? product.title.slice(0, 50).concat("...")
			: product.title;
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);
    const dispatch = useDispatch();
	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;
	const [quantity, setQuantity] = useState(1);
	const total = quantity * product.price;

	return (
		<tbody>
			<tr>
				<td className="p-4">
					<div className="media align-items-center">
						<img
							src={product.image}
							className="d-block ui-w-40 ui-bordered mr-4 product-img"
							alt=""
						/>
						<div className="media-body">
							<Link
								to={`/products/${product.id}`}
								className={`${currentModeText} d-block`}
							>
								{productTitle}
							</Link>
							<small className={`${currentModeText}`}>
								<span className={`${currentModeText}`}>
									Category:{" "}
								</span>
								{product.category}
							</small>
						</div>
					</div>
				</td>
				<td
					className={`${currentModeText} text-right font-weight-semibold align-middle p-4`}
				>
					{product.price} BGN
				</td>
				<td className="align-middle">
					<div className="d-flex justify-content-center">
						<button onClick={() => setQuantity(quantity + 1)}>
							+
						</button>
						<label
							type="number"
							className="form-control text-center w-25"
						>
							{quantity}
						</label>
						<button onClick={() => setQuantity(quantity - 1)}>
							-
						</button>
					</div>
				</td>
				<td
					className={`${currentModeText} text-right font-weight-semibold align-middle p-4`}
				>
					{total} BGN
				</td>
				<td className="text-center align-middle px-0">
					<button
                    className="btn"
						onClick={() =>
							dispatch(removeCartProduct(product))
						}
					>
						<i className="fa-solid fa-x text-danger"></i>
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default CartProduct;
