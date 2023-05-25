const baseUrl = "https://fakestoreapi.com";

export const getAllProducts = async () => {
	let response = await fetch(`${baseUrl}/products`);
	let allProducts = response.json();

	return allProducts;
};

export const getOneProduct = async (productId) => {
	let response = await fetch(`${baseUrl}/products/${productId}`);
	let product = response.json();

	return product;
};

export const getAllCategories = async () => {
	let response = await fetch(`${baseUrl}/products/categories`);
	let categories = response.json();

	return categories;
};

export const getProductsByCategories = async (category) => {
	let response = await fetch(`${baseUrl}/products/category/${category}`);
	let products = response.json();

	return products;
};

export const getLimitedProducts = async () => {
	let response = await fetch(`${baseUrl}/products?limit=5`);
	let limitedProducts = response.json();

	return limitedProducts;
};
