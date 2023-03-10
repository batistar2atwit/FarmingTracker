import { Route, Routes } from 'react-router-dom';

//Pages and components
import Layout from './components/Navbar/Layout';
import AscMatLocalSpecialties from './pages/AscMatLocalSpecialties';
import AscMatsWorldBossAscGemsTab from './pages/AscMatsWorldBossAscGemsTab';
import AscMatsWorldBossMatsTab from './pages/AscMatsWorldBossMatsTab';
// import CharMatsCommonAscensionMatEliteTab from './pages/CharMatsCommonAscensionMatEliteTab';
import CharMatsCommonAscensionMatGeneralTab from './pages/CharMatsCommonAscensionMatGeneralTab';
import CharMatsExpBookTab from './pages/CharMatsExpBookTab';
import CharMatsTalentBooksTab from './pages/CharMatsTalentBooksTab';
import CharMatsWeeklyBossTab from './pages/CharMatsWeeklyBossTab';
import MainPage from './pages/MainPage';
import PageSignIn from './pages/PageSignIn';
import WishCalculatorTab from './pages/WishCalculatorTab';
//JSX
function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path="/" exact element={<MainPage />}></Route>
					<Route path="/page-one" element={<AscMatsWorldBossAscGemsTab />}></Route>
					<Route path="/page-two" element={<AscMatsWorldBossMatsTab />}></Route>
					<Route path="/page-three" element={<CharMatsExpBookTab />}></Route>
					<Route path="/page-four" element={<AscMatLocalSpecialties />}></Route>
					<Route path="/page-five" element={<CharMatsWeeklyBossTab />}></Route>
					<Route path="/page-six" element={<CharMatsTalentBooksTab />}></Route>
					<Route path="/page-seven" element={<CharMatsCommonAscensionMatGeneralTab />}></Route>
					{/* <Route path="/page-eight" element={<CharMatsCommonAscensionMatEliteTab />}></Route> */}
					<Route path="/page-nine" element={<WishCalculatorTab />}></Route>
					<Route path="/page-signIn" element={<PageSignIn />}></Route>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
