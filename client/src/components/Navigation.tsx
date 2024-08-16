import { NavLink, Outlet } from "react-router-dom";
const setActive = ({ isActive }: any) => (isActive ? "active" : "");

export default function Navigation() {
	return (
		<>
			<header className="my-7">
				<nav className="text-2xl w-3/5 mx-auto">
					<ul className="flex justify-center">
						<NavLink className={setActive} to={""}>
							Home
						</NavLink>
						<NavLink
							className="px-3"
							to={"my-friends"}
							style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
						>
							MyFriends
						</NavLink>
						<NavLink className="px-3" to={"my-portfolio"}>
							My Portfolio
						</NavLink>
						<NavLink className="px-3" to={"join-our-team"}>
							Join our team
						</NavLink>
						<NavLink className="px-3" to={"contact-us"}>
							Contact us
						</NavLink>
					</ul>
				</nav>
			</header>

			<main className="container mx-auto">
				<Outlet />
			</main>
		</>
	);
}
