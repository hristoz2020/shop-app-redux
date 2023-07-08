import Modal from "../components/Modal";
import { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import {
	removeAllCartProducts,
	removeAllQuantityProducts,
	setTotalPrice,
} from "../redux/actions/productsAction";

const Cart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);
	const cartProducts = useSelector(
		(state) => state.cartProducts.cartProducts
	);
	const quantity = useSelector((state) => state.quantity.quantity);
	const totalPrice = useSelector((state) => state.totalPrice.totalPrice);

	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;
	const tableClassName = `${currentModeText} text-right py-3 px-4`;

	useEffect(() => {
		dispatch(setTotalPrice(quantity));
	}, [dispatch, quantity]);

	return (
		<div className="min-height">
			<h1 className={`text-center ${currentModeText}`}>Cart</h1>
			{cartProducts.length === 0 && (
				<h2 className={`${currentModeText} text-center mt-5`}>
					Not products in Cart
				</h2>
			)}
			{cartProducts.length > 0 && (
				<div>
					<div className="table-responsive">
						<table className="table table-bordered m-0">
							<thead>
								<tr>
									<th
										className={`${currentModeText} text-center py-3 px-4`}
									>
										Product Name &amp; Details
									</th>
									<th className={tableClassName}>Price</th>
									<th className={tableClassName}>Quantity</th>
									<th className={tableClassName}>Total</th>
									<th className="text-center align-middle py-3 px-0">
										<button
											className={`${currentModeText} btn`}
											onClick={() => {
												batch(() => {
													dispatch(
														removeAllQuantityProducts()
													);
													dispatch(
														removeAllCartProducts()
													);
												});
											}}
										>
											<i className="fa fa-trash"></i>
										</button>
									</th>
								</tr>
							</thead>
							<tbody>
								{cartProducts.map((product) => (
									<CartProduct
										product={product}
										key={product.id}
									/>
								))}
							</tbody>
						</table>
					</div>

					<div className="d-flex  justify-content-end pb-4">
						<div className="mt-1">
							<div className="mt-1">
								<label className={`${currentModeText}`}>
									Total price:
								</label>
								<div className="text-large">
									<strong className={`${currentModeText}`}>
										{totalPrice.toFixed(2)} BGN
									</strong>
								</div>
							</div>
							<div className="mt-2 pe-2">
								<button
									type="button"
									className={`${currentModeText} btn border me-2`}
									onClick={() => navigate(-1)}
								>
									Back to shopping
								</button>
								<button
									className={`${currentModeText} btn border`}
									type="button"
									data-bs-toggle="modal"
									data-bs-target="#myModal"
								>
									Checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
			<Modal />
		</div>
	);
};

export default Cart;
