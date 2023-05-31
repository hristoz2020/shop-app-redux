const CartProduct = ({ product }) => {
	let productTitle =
		product.title.length > 31
			? product.title.slice(0, 50).concat("...")
			: product.title;

	return (
		<div className="d-flex border w-100 bg-light">
			<img
				src={product.image}
				alt={productTitle}
				className="product-img"
			/>
			<p className="text-dark">{productTitle}</p>
			<p className="text-dark">$ {product.price}</p>
			<p className="text-dark">{product.category}</p>
		</div>
	);
};

export default CartProduct;
