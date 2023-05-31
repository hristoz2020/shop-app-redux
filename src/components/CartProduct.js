import { Link } from "react-router-dom";

const CartProduct = ({ product }) => {
	let productTitle =
		product.title.length > 31
			? product.title.slice(0, 50).concat("...")
			: product.title;

	return (
		<tbody>
			<tr>
				<td class="p-4">
					<div class="media align-items-center">
						<img
							src={product.image}
							class="d-block ui-w-40 ui-bordered mr-4 product-img"
							alt=""
						/>
						<div class="media-body">
							<Link
								to={`/products/${product.id}`}
								class="d-block text-dark"
							>
								{productTitle}
							</Link>
							<small>
								<span class="text-muted">Category: </span>{" "}
								{product.category}
							</small>
						</div>
					</div>
				</td>
				<td class="text-right font-weight-semibold align-middle p-4">
					{product.price} BGN
				</td>
				<td class="align-middle p-4">
					<input
						type="text"
						class="form-control text-center"
						value="2"
					/>
				</td>
				<td class="text-right font-weight-semibold align-middle p-4">
					/total/
				</td>
				<td class="text-center align-middle px-0">
					<i class="fa-solid fa-x text-danger"></i>
				</td>
			</tr>
		</tbody>
	);
};

export default CartProduct;
