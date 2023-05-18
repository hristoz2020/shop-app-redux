import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./pages/AllProduucts";
import Details from "./components/Details";
import Navigation from "./components/Navigation";
import Categories from "./pages/Categories";
import Home from "./pages/Home";


function App() {

	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<AllProducts />} />
				<Route path="/products/:productId" element={<Details />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="*" element={<h1>404 Not Found!!</h1>} />
			</Routes>
		</div>
	);
}

export default App;
