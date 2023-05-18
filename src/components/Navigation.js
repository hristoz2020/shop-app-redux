import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handledarkMode } from "../redux/actions/darkModeAction";
import { useEffect } from "react";

const Header = () => {
	const dispatch = useDispatch();
	const mode = useSelector((state) => state.darkMode);
	const { isdarkMode } = mode;

	const switchDarkMode = () => {
		isdarkMode
			? dispatch(handledarkMode(false))
			: dispatch(handledarkMode(true));
	};

	useEffect(() => {
		document.body.style.backgroundColor = isdarkMode ? "#292c35" : "#fff";
	}, [isdarkMode]);

	return (
		<div className="navbar bg-dark">
			<div className="d-flex align-items-center justify-content-between w-100">
				<div className="d-flex align-items-center">
					<h2 className="navbar-brand text-light">FakeShop</h2>
					<div className="d-flex">
						<Link to="/" className="nav-link text-light p-1">
							Home
						</Link>
						<Link
							to="/products"
							className="nav-link text-light p-1"
						>
							Products
						</Link>
						<Link
							to="/categories"
							className="nav-link text-light p-1"
						>
							Categories
						</Link>
						<Link to="/other" className="nav-link text-light p-1">
							Other
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
