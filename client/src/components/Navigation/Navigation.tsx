import { useEffect, useState } from "react";

export default function Navigation() {
	let [links, setLink] = useState([]);
	const navAPI = "http://localhost:8800/api/navigation";

	const getNavigation = async (url: RequestInfo | URL) => {
		const data = await fetch(url);
		const dataObj = await data.json();
		setLink(dataObj);
		// console.log(dataObj);

		console.log(links);

		// return dataObj;
	};

	useEffect(() => {
		getNavigation(navAPI);
	}, []);

	return (
		<ul>
			{links.map((link: { link: string | object }) => {
				console.log(link);

				return (
					<li>
						<a href="/test">test</a>
					</li>
				);
			})}
			<li>
				<a href=""></a>
			</li>
		</ul>
	);
}
