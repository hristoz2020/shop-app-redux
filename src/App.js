import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/AllProduucts";
import Details from "./components/Details";
import Header from "./components/Header";
import Categories from "./pages/Categories";

function App() {
	return (
	<div className="App">
		<Header />
		<Routes>
			<Route path="/" element={<AllProducts />} />
			<Route path="/product/:productId" element={<Details />} />
			<Route path="/categories" element={<Categories />} />
			<Route path="*" element={<h1>404 Not Found!!</h1>} />
		</Routes>
	</div>
	);
}

export default App;
