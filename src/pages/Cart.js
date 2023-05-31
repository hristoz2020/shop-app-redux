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
				<div class="table-responsive">
					<table class="table table-bordered m-0">
						<thead>
							<tr>
								<th class="text-center py-3 px-4">
									Product Name &amp; Details
								</th>
								<th class="text-right py-3 px-4">Price</th>
								<th class="text-center py-3 px-4">Quantity</th>
								<th class="text-right py-3 px-4">Total</th>
								<th class="text-center align-middle py-3 px-0">
									<button>
										<i class="fa fa-trash"></i>
									</button>
								</th>
							</tr>
						</thead>
						{cartProducts.map((product) => (
							<CartProduct product={product} key={product.id} />
						))}
					</table>
				</div>
				<div class="d-flex  justify-content-end pb-4">
					<div>
						<div>
							<button
								type="button"
								class="btn"
								onClick={() => navigate(-1)}
							>
								Back to shopping
							</button>
							<button
								type="button"
								class="btn btn-lg btn-primary mt-2"
							>
								Checkout
							</button>
						</div>
						<div class="mt-1">
							<label class="text-muted font-weight-normal m-0">
								Total price
							</label>
							<div class="text-large">
								<strong>?????</strong>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
