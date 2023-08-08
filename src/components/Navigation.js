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

	const switchDarkMode = () => {
		isdarkMode
			? dispatch(handledarkMode(false))
			: dispatch(handledarkMode(true));
	};

	const routes = [
		{
			id: 0,
			path: "/",
			title: "Home",
			className: `nav-link ${currentModeText} m-1 mt-2 h-25 ps-2`
		},
		{
			id: 1,
			path: "/products",
			title: "Products",
			className: `nav-link ${currentModeText} m-1 mt-2 border-start h-25 ps-2`
		},
		{
			id: 2,
			path: "/categories",
			title: "Categories",
			className: `nav-link ${currentModeText} m-1 mt-2 border-start h-25 ps-2`
		},
		{
			id: 3,
			path: "/favorites",
			title: "Favorites",
			className: `nav-link ${currentModeText} m-1 mt-2 border-start h-25 ps-2`
		},
		{
			id: 4,
			path: "/cart",
			title: "Cart",
			className: `nav-link ${currentModeText} m-1 mt-2 border-start h-25 ps-2`
		},
	];

	return (
		<div className={`navbar ${currentModeBackground} border-bottom mb-4`}>
			<div className="d-flex align-items-center justify-content-between w-100">
				<h5 className={`${currentModeText} pt-2 ps-2`}>FakeShop</h5>
				<div className="d-flex">
					{routes.map((item) => (
						<Link
							to={item.path}
							key={item.id}
							className={item.className}
						>
							{item.title}
						</Link>
					))}

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
