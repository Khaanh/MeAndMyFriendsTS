import { useEffect, useState } from "react";
import "./styles/App.css";
import Navigation from "./components/Navigation/Navigation";

function App() {
	const [state, setState] = useState(null);

	// const someFunc = async () => {
	// 	const resp = await fetch("http://localhost:8800/test/api");
	// 	const body = await resp.json();
	// 	console.log(body);

	// 	if (resp.status !== 200) throw Error(body.message);

	// 	return body;
	// };

	// useEffect(() => {
	// 	someFunc()
	// 		.then((res) => setState(res.express))
	// 		.catch((err) => console.log(err));
	// }, []);

	return (
		<div className="App">
			<header className="App-header">
				<Navigation />
				{/* {state} */}
				{/* <ul>
					<li>
						<a href="me">Me</a>
					</li>
					<li>
						<a href="my-friends">My Friends</a>
					</li>
					<li>
						<a href="contact-us">Contact us</a>
					</li>
					<li>
						<a href="join-our-team">Join our team</a>
					</li>
				</ul> */}
			</header>
		</div>
	);
}

export default App;
