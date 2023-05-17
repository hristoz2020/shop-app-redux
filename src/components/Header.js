import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="ui fixed menu">
			<div className="ui container center">
				<h2>FakeShop</h2>
				<ul>
					<Link to="/">
						Home
					</Link>
					<Link to="/products">
						Products
					</Link>
					<Link to="Categories">
					</Link>
					<Link to="">
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Header;
