import { NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
	return (
		<>
			<header className="mt-10 mb-28">
				<nav className="text-2xl w-3/5 mx-auto">
					<ul className="flex justify-center">
						<NavLink className="px-3" to={""}>
							Home
						</NavLink>
						<NavLink className="px-3" to={"my-friends"}>
							My Friends
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

			<main className="container mx-auto mb-28">
				<Outlet />
			</main>
		</>
	);
}
