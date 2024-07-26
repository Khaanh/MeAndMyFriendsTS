import { useEffect, useState } from "react";

interface NavObj {
	id: number;
	linkInfo: string;
}

export default function Navigation() {
	let [links, setLink] = useState<NavObj[]>([]);
	const navAPI = "http://localhost:8800/api/navigation";

	const getNavigation = async (url: string) => {
		const data = await fetch(url);
		const dataObj = await data.json();
		setLink(dataObj);
	};

	useEffect(() => {
		getNavigation(navAPI);
	}, []);

	return (
		<ul>
			{links.map((link) => {
				return (
					<li key={link.id}>
						<a href="test">{link.linkInfo}</a>
					</li>
				);
			})}
		</ul>
	);
}
