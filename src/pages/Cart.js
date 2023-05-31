import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";

const Cart = () => {
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);
	const cartProducts = useSelector(
		(state) => state.cartProducts.cartProducts
	);
	const navigate = useNavigate();

	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;

	return (
		<div className="min-height">
			<h1 className={`text-center ${currentModeText}`}>Cart</h1>
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
								<th
									className={`${currentModeText} text-right py-3 px-4`}
								>
									Price
								</th>
								<th
									className={`${currentModeText} text-right py-3 px-4`}
								>
									Quantity
								</th>
								<th
									className={`${currentModeText} text-right py-3 px-4`}
								>
									Total
								</th>
								<th className="text-center align-middle py-3 px-0">
									<button
										className={`${currentModeText} btn`}
									>
										<i className="fa fa-trash"></i>
									</button>
								</th>
							</tr>
						</thead>
						{cartProducts.map((product) => (
							<CartProduct product={product} key={product.id} />
						))}
					</table>
				</div>
				<div className="d-flex  justify-content-end pb-4">
					<div className="mt-1">
						<div className="mt-1">
							<label className={`${currentModeText}`}>
								Total price
							</label>
							<div className="text-large">
								<strong className={`${currentModeText}`}>
									?????
								</strong>
							</div>
						</div>
						<div className="mt-2">
							<button
								type="button"
								className={`${currentModeText} btn border me-2`}
								onClick={() => navigate(-1)}
							>
								Back to shopping
							</button>
							<button
								type="button"
								className={`${currentModeText} btn border`}
							>
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
