import { useSelector } from "react-redux";

const Products = () => {
	const products = useSelector((state) => state.allProducts.products);

	return products.map(({ id, title, image, price, category }) => (
		<div
			className="card d-flex align-items-center border w-25 m-3 bg-light"
			key={id}
		>
			<img src={image} alt={title} className="product-img card-title" />
			<div className="card-body">
				<p className="text-dark">{title}</p>
				<p className="text-dark">$ {price}</p>
				<p className="text-dark">{category}</p>
			</div>
		</div>
	));
};

export default Products;
