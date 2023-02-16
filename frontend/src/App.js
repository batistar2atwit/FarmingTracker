import { Route, Routes } from "react-router-dom";

//Pages and components
import Layout from "./components/Navbar/Layout";
import AscGemTab from "./pages/AscGemTab";
import BookTab from "./pages/BookTab";
import MainPage from "./pages/MainPage";
import PageFour from "./pages/PageFour";
import PageSignIn from "./pages/PageSignIn";
import PageThree from "./pages/PageThree";

//JSX
function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path="/" exact element={<MainPage />}>
					</Route>
					<Route path="/page-one" element={<AscGemTab />}>

					</Route>
					<Route path="/page-two" element={<BookTab />}>

					</Route>
					<Route path="/page-three" element={<PageThree />}>

					</Route>
					<Route path="/page-four" element={<PageFour />}>

					</Route>
					<Route path="/page-signIn" element={<PageSignIn />}>

					</Route>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
