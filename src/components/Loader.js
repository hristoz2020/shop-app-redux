import { useSelector } from "react-redux";

const Loader = () => {
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);

	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;

	return (
		<div className="d-flex justify-content-center">
			<div className={`spinner-border ${currentModeText}`} role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default Loader;
