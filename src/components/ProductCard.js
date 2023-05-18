import { useSelector } from "react-redux";

const Products = () => {
	const products = useSelector((state) => state.allProducts.products);
	console.log(products);

	return products.map(({ id, title, image, price, category }) => {
		let productTitle =
			title.length > 31 ? title.slice(0, 50).concat("...") : title;
		return (
			<div
				className="card d-flex align-items-center border w-25 m-2 bg-light"
				key={id}
			>
				<div className="h-50">
					<img
						src={image}
						alt={productTitle}
						className="product-img card-title"
					/>
				</div>
				<div className="card-body">
					<p className="text-dark">{productTitle}</p>
					<p className="text-dark">$ {price}</p>
					<p className="text-dark">{category}</p>
				</div>
			</div>
		);
	});
};

export default Products;
