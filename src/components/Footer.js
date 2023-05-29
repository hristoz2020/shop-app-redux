import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);
	const currentModeBackground = isdarkMode
		? darkModeOn.background
		: darkModeOff.background;

	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;

	return (
		<footer className={`${currentModeBackground} border-top mt-4`}>
			<div className="d-flex justify-content-between pt-2 ">
				<h5 className={`${currentModeText} ms-2`}>FakeShop</h5>
				<h5 className={`${currentModeText}`}>© All rights reserved</h5>
				<Link
					to="https://github.com/hristoz2020"
					className={`${currentModeText} h5 me-2`}
				>
					<i className={`fa-brands fa-github ${currentModeText}`}></i>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
