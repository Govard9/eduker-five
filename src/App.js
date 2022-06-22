import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import axios from "axios";
import { useEffect, useState } from "react";
import PageSearch from "./components/Header/PageSearch/PageSearch";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {

	const [state, setState] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3000/db.json").then((response) => {
			setState(response.data);
		});
	}, []);
	if (state) {
		return (
			<div>
				<Header iconSearch={state.iconSearch} />
				<Routes>
					<Route path="/" element={<Home data={state} />} />
					<Route path="/search" element={<PageSearch courses={state.courses} />} />
				</Routes>
				<Footer />
			</div>
		);
	}
};

export default App;