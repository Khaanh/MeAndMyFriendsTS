import { useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
	useEffect(() => {}, []);

	return (
		<>
			<nav className="text-2xl w-3/5 mx-auto mb-10">
				<ul className="flex justify-center">
					<NavLink to={""}>Home</NavLink>
					<NavLink to={"my-friends"}>MyFriends</NavLink>
					<NavLink to={"my-portfolio"}>My Portfolio</NavLink>
					<NavLink to={"join-our-team"}>Join our team</NavLink>
					<NavLink to={"contact-us"}>Contact us</NavLink>
				</ul>
			</nav>

			<main className="container mx-auto">
				<Outlet />
			</main>
		</>
	);
}
