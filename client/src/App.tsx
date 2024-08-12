import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import MyFriends from "./components/MyFriends";
import MyPortfolio from "./components/MyPortfolio";
import JoinOurTeam from "./components/JoinOurTeam";
import ContactUs from "./components/ContactUs";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/my-friends" element={<MyFriends />} />
				<Route path="/my-portfolio" element={<MyPortfolio />} />
				<Route path="/join-our-team" element={<JoinOurTeam />} />
				<Route path="/contact-us" element={<ContactUs />} />
			</Routes>
		</div>
	);
}

export default App;
