import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./pages/AllProduucts";
import Details from "./components/Details";
import Navigation from "./components/Navigation";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";

function App() {
	const { isdarkMode, darkModeOn, darkModeOff } = useSelector(
		(state) => state.darkMode
	);

	const currentModeBackground = isdarkMode
		? darkModeOn.background
		: darkModeOff.background;

	return (
		<div className={`App ${currentModeBackground}`}>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<AllProducts />} />
				<Route path="/products/:productId" element={<Details />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="*" element={<h1>404 Not Found!!</h1>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
