import { useDispatch } from "react-redux";
import {
	removeAllCartProducts,
	removeAllQuantityProducts,
} from "../redux/actions/productsAction";

const Modal = () => {
	const dispatch = useDispatch();

	return (
		<div className="container mt-5">
			<div className="modal" id="myModal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4>
								<i className="fas fa-shipping-fast"></i>
								Shipping Details
							</h4>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
							></button>
						</div>
						<div className="modal-body">
							<div className="container">
								<form>
									<div className="row">
										<div className="col">
											<div className="mb-3">
												<label htmlFor="f-name">
													First Name
												</label>
												<input
													type="text"
													className="form-control"
													id="f-name"
													required
												/>
											</div>
										</div>
										<div className="col">
											<div className="mb-3">
												<label htmlFor="l-name">
													Last Name
												</label>
												<input
													type="text"
													className="form-control"
													id="l-name"
													required
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<div className="mb-3">
												<label htmlFor="address">
													Street
												</label>
												<input
													type="text"
													className="form-control"
													id="address"
													required
												/>
											</div>
										</div>
										<div className="col">
											<div className="mb-3">
												<label htmlFor="zip">Zip</label>
												<input
													type="number"
													className="form-control"
													id="zip"
													pattern="[0-9]{5}"
													required
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<div className="mb-3">
												<label htmlFor="city">
													City
												</label>
												<input
													type="text"
													className="form-control"
													id="city"
													required
												/>
											</div>
										</div>
										<div className="col">
											<div className="mb-3">
												<label htmlFor="state">
													State
												</label>
												<input
													type="text"
													className="form-control"
													id="state"
													required
												/>
											</div>
										</div>
									</div>
									<h4 className="mt-4">
										<i className="far fa-credit-card"></i>{" "}
										Payment Information
									</h4>
									<div className="mb-3">
										<label htmlFor="card-num">
											Credit Card No.
										</label>
										<input
											type="number"
											className="form-control"
											id="card-num"
											required
										/>
									</div>
									<div className="row">
										<div className="col">
											<div className="mb-3">
												<label htmlFor="expire">
													Exp
												</label>
												<input
													type="number"
													className="form-control"
													id="expire"
													required
												/>
											</div>
										</div>
										<div className="col">
											<div className="mb-3">
												<label htmlFor="security">
													CCV
												</label>
												<input
													type="number"
													className="form-control"
													id="security"
													required
													min="100"
													max="999"
												/>
											</div>
										</div>
									</div>
									<button
										type="submit"
										className="btn btn-primary me-2"
										onClick={() => {
											dispatch(
												removeAllQuantityProducts()
											);
											dispatch(removeAllCartProducts());
										}}
									>
										Submit
									</button>
									<button
										type="button"
										className="btn btn-danger "
										data-bs-dismiss="modal"
									>
										Cancel
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
