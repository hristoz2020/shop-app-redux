import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handledarkMode } from "../redux/actions/darkModeAction";

const Header = () => {
	const dispatch = useDispatch();
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);

	const currentModeBackground = isdarkMode
		? darkModeOn.background
		: darkModeOff.background;

	const currentModeText = isdarkMode
		? darkModeOn.text
		: darkModeOff.text;

	const switchDarkMode = () => {
		isdarkMode
			? dispatch(handledarkMode(false))
			: dispatch(handledarkMode(true));
	};

	return (
		<div className={`navbar ${currentModeBackground}`}>
			<div className="d-flex align-items-center justify-content-between w-100">
				<div className="d-flex align-items-center">
					<h2 className={`navbar-brand ${currentModeText}`}>FakeShop</h2>
					<div className="d-flex align-items-center">
						<Link to="/" className={`nav-link ${currentModeText} p-`}>
							Home
						</Link>
						<Link
							to="/products"
							className={`nav-link ${currentModeText} p-1`}
						>
							Products
						</Link>
						<Link
							to="/categories"
							className={`nav-link ${currentModeText} p-1`}
						>
							Categories
						</Link>
						<Link to="/favorites" className={`nav-link ${currentModeText} p-1`}>
							Favorites
						</Link>
					</div>
				</div>
				<div className="form-check form-switch m-2">
					<input
						checked={isdarkMode}
						className="form-check-input"
						type="checkbox"
						id="checkbox"
						onChange={switchDarkMode}
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
