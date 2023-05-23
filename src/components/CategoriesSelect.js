import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/actions/productActions";

const CategoriesSelect = () => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.categories.categories);
	
	return (
		<select
			className="form-select w-25 m-auto"
			aria-label="Default select example"
			defaultValue={
				categories && categories.length > 0 ? categories[0] : ""
			}
			onChange={(e) => {
				console.log("dispatch", e.target.value);
				dispatch(setSelectedCategory(e.target.value)
			)}}
		>
			{categories.map((category) => (
				<option value={category} key={category}>{category}</option>
			))}
		</select>
	);
};
export default CategoriesSelect;
