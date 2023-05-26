import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
	return products.map(({ id, title, image, price, category }) => {
		let productTitle =
			title.length > 31 ? title.slice(0, 50).concat("...") : title;
		return (
			<div
				className="card border w-25 m-2 bg-light"
				key={id}
			>
				<div className="h-50 m-auto">
					<img
						src={image}
						alt={productTitle}
						className="product-img"
					/>
				</div>
				<div className="card-body p-0">
					<p className="text-dark">{productTitle}</p>
					<p className="text-dark">$ {price}</p>
					<p className="text-dark">{category}</p>
				</div>
				<div className="d-flex justify-content-between w-100 p-2">
					<Link to={`/products/${id}`} className="btn btn-primary">
						Details
					</Link>
					<button className="btn btn-primary">Like</button>
				</div>
			</div>
		);
	});
};

export default ProductCard;
