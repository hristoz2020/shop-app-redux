import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="ui menu">
			<div className="ui container ">
				<h2 className="">FakeShop</h2>
				<div className="">
					<Link to="/" className="ui secondary button">Home</Link>
					<Link to="/products" className="ui secondary button">Products</Link>
					<Link to="/categories" className="ui secondary button">Categories</Link>
					<Link to="" className="ui secondary button">Other</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
