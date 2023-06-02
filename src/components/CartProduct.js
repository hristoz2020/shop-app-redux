import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	removeCartProduct,
	removeQuantity,
	setQuantityAdd,
	setQuantityRemove,
} from "../redux/actions/productsAction";

const CartProduct = ({ product }) => {
	let productTitle =
		product.title.length > 31
			? product.title.slice(0, 50).concat("...")
			: product.title;
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);
	const quantity = useSelector((state) => state.quantity.quantity);
	const dispatch = useDispatch();
	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;
	let quantityOfProduct = 0;
	quantity
		.filter((q) => q.id === product.id)
		.forEach((q) => {
			if (q.id === product.id) {
				quantityOfProduct = q.quantity;
			}
		});
	const total = quantityOfProduct * product.price;

	
	return (
		<tr>
			<td className="">
				<div className="media align-items-center d-flex">
					<img
						src={product.image}
						className="d-block product-img"
						alt={product.title}
					/>
					<div className="media-body ps-3">
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
				className={`${currentModeText} text-right font-weight-semibold align-middle`}
			>
				{product.price} BGN
			</td>
			<td className="align-middle">
				<div className="d-flex justify-content-center">
					<button
						onClick={() => {
							dispatch(setQuantityAdd(product.id));
						}}
					>
						+
					</button>
					<label
						type="number"
						className="form-control text-center w-25"
					>
						{quantityOfProduct}
					</label>
					<button
						onClick={() => {
							dispatch(setQuantityRemove(product.id));
						}}
					>
						-
					</button>
				</div>
			</td>
			<td
				className={`${currentModeText} text-right font-weight-semibold align-middle`}
			>
				{total} BGN
			</td>
			<td className="text-center align-middle px-0">
				<button
					className="btn"
					onClick={() => {
						dispatch(removeQuantity(product));
						dispatch(removeCartProduct(product));
					}}
				>
					<i className="fa-solid fa-x text-danger"></i>
				</button>
			</td>
		</tr>
	);
};

export default CartProduct;
