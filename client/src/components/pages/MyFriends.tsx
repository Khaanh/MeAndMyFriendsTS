import { useEffect, useState } from "react";
// import Me from "../../img/Me.jpg";

const url = "http://localhost:8800/api/v1/friends";
interface IFriendsModel {
	id: number;
	name: string;
	biography: string;
	image: string;
}

const MyFriends = () => {
	const [friends, setFriends] = useState();

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setFriends(data));
	}, []);

	return (
		<div>
			{friends.map((item: any) => (
				<p>{item.id}</p>
			))}
		</div>
	);
	// <div className="grid grid-cols-3 gap-x-4 gap-y-14">
	// 	<div>
	// 		<img src={} alt="" className="rounded-lg border-slate-300 mb-5" />
	// 		<h1 className="text-2xl font-semibold mb-8">George Clooney</h1>
	// 		<div>
	// 			(born May 6, 1961) is an American actor and filmmaker. Known for his
	// 			work in both blockbuster and independent films, he has received
	// 			numerous accolades, including two Academy Awards, a British Academy
	// 			Film Award and four Golden Globe Awards. His honors include the Cecil
	// 			B. DeMille Award, the Honorary César, the AFI Life Achievement Award,
	// 			and the Kennedy Center Honor.
	// 		</div>
	// 	</div>
	// </div>
};

export default MyFriends;
