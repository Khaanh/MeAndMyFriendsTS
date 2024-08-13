import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import MyFriends from "./components/pages/MyFriends";
import MyPortfolio from "./components/pages/MyPortfolio";
import JoinOurTeam from "./components/pages/JoinOurTeam";
import ContactUs from "./components/pages/ContactUs";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
	return (
		<div className="App">
			<header>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/my-friends" element={<MyFriends />} />
					<Route path="/my-portfolio" element={<MyPortfolio />} />
					<Route path="/join-our-team" element={<JoinOurTeam />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</header>
			<Outlet />
		</div>
	);
}

export default App;
