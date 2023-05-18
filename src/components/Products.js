import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
	const products = useSelector((state) => state.allProducts.products);

	return products.map(({ id, title, image, price, category }) => (
		<div
			className="d-flex justify-content-center border w-25"
			key={id}
		>
			<Link to={`/product/${id}`} className="">
				<img src={image} alt={title} className="product-img card-title" />
				<div className="card-body">
					<p className="text-dark">{title}</p>
					<p className="text-dark">$ {price}</p>
					<p className="text-dark">{category}</p>
				</div>
			</Link>
		</div>
	));
};

export default Products;
