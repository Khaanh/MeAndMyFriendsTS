import { useEffect, useState } from "react";

interface NavObj {
	id: number;
	linkInfo: string;
}

const navList = ["my friends", "contact us", "join our team", "my portfolio"];

export default function Navigation() {
	useEffect(() => {}, []);

	return (
		<nav className="text-2xl w-3/5 mx-auto">
			<ul className="flex justify-center">Navigation</ul>
		</nav>
	);
}
