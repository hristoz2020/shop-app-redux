import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/actions/productsAction";

const CategoriesSelect = () => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.categories.categories);
	const selectedCategory = useSelector((state) => state.selectedCategory.selectedCategory);

	return (
		<select
			className="form-select w-25 m-auto"
			aria-label="Default select example"
			defaultValue={
				selectedCategory ?? ""
			}
			onChange={(e) => {
				dispatch(setSelectedCategory(e.target.value));
			}}
		>
			{categories.map((category) => (
				<option value={category} key={category}>
					{category}
				</option>
			))}
		</select>
	);
};
export default CategoriesSelect;
