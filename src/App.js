import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;

// test 2
