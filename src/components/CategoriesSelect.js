const CategoriesSelect = () => {
	return (
		<select
			className="form-select w-25 m-auto"
			aria-label="Default select example"
		>
			<option value="electronics" selected>
				Electronics
			</option>
			<option value="jewelery">Jewelery</option>
			<option value="men's clothing">Men's clothing</option>
			<option value="women's clothing">Women's clothing</option>
		</select>
	);
};
export default CategoriesSelect;
