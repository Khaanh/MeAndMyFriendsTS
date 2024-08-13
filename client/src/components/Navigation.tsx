import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
	useEffect(() => {}, []);

	return (
		<nav className="text-2xl w-3/5 mx-auto">
			<ul className="flex justify-center">
				<li>
					<Link to={"/"}>Home</Link>
					<Link to={"/my-friends"}>MyFriends</Link>
					<Link to={"/my-portfolio"}>My Portfolio</Link>
					<Link to={"/join-our-team"}>Join our team</Link>
					<Link to={"/contact-us"}>Contact us</Link>
				</li>
			</ul>
		</nav>
	);
}
