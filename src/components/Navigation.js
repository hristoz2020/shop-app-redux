import { Link } from "react-router-dom";

const Header = () => {
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
						<Link to="/" className="nav-link text-light p-1">
							Other
						</Link>
					</div>
				</div>
				<div class="form-check form-switch m-2">
					<input
						class="form-check-input"
						type="checkbox"
						id="flexSwitchCheckChecked"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
