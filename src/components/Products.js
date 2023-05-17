import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
	const products = useSelector((state) => state.allProducts.products);

	return (
		<div>
			{products.map(({ id, title, image, price, category }) => (
				<div className="card card-container border w-25" key={id}>
					<Link to={`/product/${id}`}>
						<div className="card">
							<div className="">
								<div>
									<img src={image} alt={title}  className="product-img"/>
								</div>
								<div className="card-body">
									<div className="card-title">{title}</div>
									<div className="">$ {price}</div>
									<div className="">{category}</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Products;
