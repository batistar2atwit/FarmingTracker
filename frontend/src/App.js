import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages and components
import Navbar from './components/Navbar';
import Home from './pages/Home';

//JSX
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path="/" element={<Home />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
