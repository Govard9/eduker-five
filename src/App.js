import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import axios from "axios";
import { useEffect, useState } from "react";

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
				<Routes>
					<Route path="/" element={<Home data={state} />} />
				</Routes>
			</div>
		);
	}
};

export default App;