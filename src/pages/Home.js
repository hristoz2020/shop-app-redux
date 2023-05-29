import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLimitedProducts } from "../services/productsServices";
import { setLimitedProducts } from "../redux/actions/productsAction";
import ProductCard from "../components/ProductCard";

const Home = () => {
	const dispatch = useDispatch();
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);
	const { limitedProducts } = useSelector((state) => state.limitedProducts);
	useEffect(() => {
		getLimitedProducts()
			.then((limitedProducts) =>
				dispatch(setLimitedProducts(limitedProducts))
			)
			.catch((err) => console.log("Error: ", err));
	}, [dispatch]);

	const currentModeText = isdarkMode ? darkModeOn.text : darkModeOff.text;

	return (
		<div>
			<h1 className={`${currentModeText} text-center`}>
				Welcome to FakeShop
			</h1>
			<div className="d-flex flex-wrap justify-content-center">
				{limitedProducts && limitedProducts.map(product => <ProductCard product={product} key={product.id} />)}
			</div>
		</div>
	);
};

export default Home;
