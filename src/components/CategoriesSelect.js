import { useSelector } from "react-redux";

const CategoriesSelect = () => {
	const categories = useSelector((state) => state.categories.categories);
	console.log(categories);

	return (
		<select
			className="form-select w-25 m-auto"
			aria-label="Default select example"
			defaultValue={
				categories && categories.length > 0 ? categories[0] : ""
			}
		>
			{categories.map((category) => (
				<option value={category} key={category}>{category}</option>
			))}
		</select>
	);
};
export default CategoriesSelect;
