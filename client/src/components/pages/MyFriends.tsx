import { useState } from "react";
import myFriends01 from "../../img/myfriends-01.jpg";
const url = "http://localhost:8800/api/v1/friendsdata";

const MyFriends = () => {
	const [data, setData] = useState([]);

	const getData = async (url: string) => {
		let obj = await fetch(url);
		let resp = await JSON.parse(obj);

		setData(resp);
	};

	return (
		<div className="grid grid-cols-3 gap-x-4 gap-y-14">
			<div>
				<img
					src={myFriends01}
					alt=""
					className="rounded-lg border-slate-300 mb-5"
				/>
				<h1 className="text-2xl font-semibold mb-8">George Clooney</h1>
				<div>
					(born May 6, 1961) is an American actor and filmmaker. Known for his
					work in both blockbuster and independent films, he has received
					numerous accolades, including two Academy Awards, a British Academy
					Film Award and four Golden Globe Awards. His honors include the Cecil
					B. DeMille Award, the Honorary César, the AFI Life Achievement Award,
					and the Kennedy Center Honor.
				</div>
			</div>

			<div>
				<img
					src={myFriends01}
					alt=""
					className="rounded-lg border-slate-300 mb-5"
				/>
				<h1 className="text-2xl font-semibold mb-8">George Clooney</h1>
				<div>
					(born May 6, 1961) is an American actor and filmmaker. Known for his
					work in both blockbuster and independent films, he has received
					numerous accolades, including two Academy Awards, a British Academy
					Film Award and four Golden Globe Awards. His honors include the Cecil
					B. DeMille Award, the Honorary César, the AFI Life Achievement Award,
					and the Kennedy Center Honor.
				</div>
			</div>

			<div>
				<img
					src={myFriends01}
					alt=""
					className="rounded-lg border-slate-300 mb-5"
				/>
				<h1 className="text-2xl font-semibold mb-8">George Clooney</h1>
				<div>
					(born May 6, 1961) is an American actor and filmmaker. Known for his
					work in both blockbuster and independent films, he has received
					numerous accolades, including two Academy Awards, a British Academy
					Film Award and four Golden Globe Awards. His honors include the Cecil
					B. DeMille Award, the Honorary César, the AFI Life Achievement Award,
					and the Kennedy Center Honor.
				</div>
			</div>

			<div>
				<img
					src={myFriends01}
					alt=""
					className="rounded-lg border-slate-300 mb-5"
				/>
				<h1 className="text-2xl font-semibold mb-8">George Clooney</h1>
				<div>
					(born May 6, 1961) is an American actor and filmmaker. Known for his
					work in both blockbuster and independent films, he has received
					numerous accolades, including two Academy Awards, a British Academy
					Film Award and four Golden Globe Awards. His honors include the Cecil
					B. DeMille Award, the Honorary César, the AFI Life Achievement Award,
					and the Kennedy Center Honor.
				</div>
			</div>

			<div>
				<img
					src={myFriends01}
					alt=""
					className="rounded-lg border-slate-300 mb-5"
				/>
				<h1 className="text-2xl font-semibold mb-8">George Clooney</h1>
				<div>
					(born May 6, 1961) is an American actor and filmmaker. Known for his
					work in both blockbuster and independent films, he has received
					numerous accolades, including two Academy Awards, a British Academy
					Film Award and four Golden Globe Awards. His honors include the Cecil
					B. DeMille Award, the Honorary César, the AFI Life Achievement Award,
					and the Kennedy Center Honor.
				</div>
			</div>

			<div>
				<img
					src={myFriends01}
					alt=""
					className="rounded-lg border-slate-300 mb-5"
				/>
				<h1 className="text-2xl font-semibold mb-8">George Clooney</h1>
				<div>
					(born May 6, 1961) is an American actor and filmmaker. Known for his
					work in both blockbuster and independent films, he has received
					numerous accolades, including two Academy Awards, a British Academy
					Film Award and four Golden Globe Awards. His honors include the Cecil
					B. DeMille Award, the Honorary César, the AFI Life Achievement Award,
					and the Kennedy Center Honor.
				</div>
			</div>

			<div>
				<img
					src={myFriends01}
					alt=""
					className="rounded-lg border-slate-300 mb-5"
				/>
				<h1 className="text-2xl font-semibold mb-8">George Clooney</h1>
				<div>
					(born May 6, 1961) is an American actor and filmmaker. Known for his
					work in both blockbuster and independent films, he has received
					numerous accolades, including two Academy Awards, a British Academy
					Film Award and four Golden Globe Awards. His honors include the Cecil
					B. DeMille Award, the Honorary César, the AFI Life Achievement Award,
					and the Kennedy Center Honor.
				</div>
			</div>

			<div>
				<img
					src={myFriends01}
					alt=""
					className="rounded-lg border-slate-300 mb-5"
				/>
				<h1 className="text-2xl font-semibold mb-8">George Clooney</h1>
				<div>
					(born May 6, 1961) is an American actor and filmmaker. Known for his
					work in both blockbuster and independent films, he has received
					numerous accolades, including two Academy Awards, a British Academy
					Film Award and four Golden Globe Awards. His honors include the Cecil
					B. DeMille Award, the Honorary César, the AFI Life Achievement Award,
					and the Kennedy Center Honor.
				</div>
			</div>

			<div>
				<img
					src={myFriends01}
					alt=""
					className="rounded-lg border-slate-300 mb-5"
				/>
				<h1 className="text-2xl font-semibold mb-8">George Clooney</h1>
				<div>
					(born May 6, 1961) is an American actor and filmmaker. Known for his
					work in both blockbuster and independent films, he has received
					numerous accolades, including two Academy Awards, a British Academy
					Film Award and four Golden Globe Awards. His honors include the Cecil
					B. DeMille Award, the Honorary César, the AFI Life Achievement Award,
					and the Kennedy Center Honor.
				</div>
			</div>
		</div>
	);
};

export default MyFriends;
