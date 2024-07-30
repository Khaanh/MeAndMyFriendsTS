import "./styles/App.css";
import Navigation from "./components/Navigation/Navigation";
import MainPage from "./components/MainPage/MainPage";

function App() {
	return (
		<div className="App">
			<div className="container mx-auto">
				<header className="mt-5 mb-16">
					<Navigation />
				</header>

				<MainPage />
			</div>
		</div>
	);
}

export default App;
