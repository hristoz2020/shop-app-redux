import { useSelector } from "react-redux";

const Cart = () => {
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);

	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;

	return (
		<div className="min-height">
			<h1 className={`text-center ${currentModeText}`}>
				Cart
			</h1>
		
		</div>
	);
};

export default Cart;
