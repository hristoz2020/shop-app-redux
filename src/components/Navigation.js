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

	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;
	const navLinkClassName = `nav-link ${currentModeText} m-1 mt-2 border-start h-25 ps-2`;

	const switchDarkMode = () => {
		isdarkMode
			? dispatch(handledarkMode(false))
			: dispatch(handledarkMode(true));
	};

	return (
		<div className={`navbar ${currentModeBackground} border-bottom mb-4`}>
			<div className="d-flex align-items-center justify-content-between w-100">
					<h5 className={`${currentModeText} pt-2 ps-2`}>FakeShop</h5>
				<div className="d-flex">

					<Link
						to="/"
						className={`nav-link ${currentModeText} p-1 pt-2 ps-2`}
					>
						Home
					</Link>
					<Link
						to="/products"
						className={navLinkClassName}
					>
						Products
					</Link>
					<Link
						to="/categories"
						className={navLinkClassName}
					>
						Categories
					</Link>
					<Link
						to="/favorites"
						className={navLinkClassName}
					>
						Favorites
					</Link>
					<Link
						to="/cart"
						className={`nav-link ${currentModeText} m-1 mt-2 border-start border-end h-25 ps-2 pe-2`}
					>
						Cart
					</Link>
					<div className="form-check form-switch m-1 mt-2 h-25">
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
		</div>
	);
};

export default Header;
