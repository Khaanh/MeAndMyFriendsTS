import { useState } from "react";
import MyFriendsData from "../../data/myFriendsData.json";

const data = [
	{
		id: 0,
		name: "bernie-mac",
		biography:
			" (October 5, 1957 – August 9, 2008),[1] better known by his stage name Bernie Mac, was an American comedian and actor. Born and raised on Chicago's South Side, Mac gained popularity as a stand-up comedian. He joined fellow comedians Steve Harvey, Cedric the Entertainer, and D. L. Hughley in the film The Original Kings of Comedy.",
		image: "bernie-mac.jpg",
	},
	{
		id: 1,
		name: "brad-pitt",
		biography:
			"is an American actor and film producer. He is the recipient of various accolades, including two Academy Awards, two British Academy Film Awards, two Golden Globe Awards, and a Primetime Emmy Award. One of the most influential celebrities, Pitt appeared on Forbes' annual Celebrity 100 list from 2006 to 2008, and the Time 100 list in 2007.",
		image: "brad-pitt.jpg",
	},
	{
		id: 2,
		name: "casey-affleck",
		biography:
			" (born Caleb Casey McGuire Affleck-Boldt; August 12, 1975) is an American actor. He is the recipient of various accolades, including an Academy Award, a British Academy Film Award, and a Golden Globe Award. The younger brother of actor Ben Affleck, he began his career as a child actor, appearing in the PBS television film Lemon Sky (1988). He later appeared in three Gus Van Sant films: To Die For (1995), Good Will Hunting (1997), Gerry (2002), and in Steven Soderbergh's Ocean's film series (2001–2007). His first leading role was in Steve Buscemi's independent comedy-drama Lonesome Jim (2006).",
		image: "casey-affleck.jpg",
	},
	{
		id: 3,
		name: "don-cheadle",
		biography:
			"is an American actor. He is the recipient of multiple accolades, including two Grammy Awards, a Tony Award, two Golden Globe Awards, and two Screen Actors Guild Awards. He has also earned nominations for an Academy Award, two British Academy Film Awards, and 11 Primetime Emmy Awards. His Emmy, Grammy, Oscar, and Tony nominations make him one of few black individuals to be nominated for the four major American entertainment awards (EGOT).",
		image: "don-cheadle.jpg",
	},
	{
		id: 4,
		name: "george-clooney",
		biography:
			"(born May 6, 1961) is an American actor and filmmaker. Known for his work in both blockbuster and independent films, he has received numerous accolades, including two Academy Awards, a British Academy Film Award and four Golden Globe Awards. His honors include the Cecil B. DeMille Award, the Honorary César, the AFI Life Achievement Award, and the Kennedy Center Honor",
		image: "george-clooney.jpg",
	},
	{
		id: 5,
		name: "matt-damon",
		biography:
			"is an American actor, film producer, and screenwriter. He was ranked among Forbes' most bankable stars in 2007, and in 2010 was one of the highest-grossing actors of all time. He has received various awards and nominations, including an Academy Award and two Golden Globe Awards, in addition to nominations for three British Academy Film Awards and seven Primetime Emmy Awards.",
		image: "matt-damon.jpg",
	},
	{
		id: 6,
		name: "qin-shaobo",
		biography:
			"(b. 1982 in Guangxi) is a Chinese actor, acrobat and contortionist.[1] His first performance took place when he was 11 years old which resulted in him wanting to make acting a career. Qin's motion picture debut was in 2001, playing The Amazing Yen, Danny Ocean's in the remake of Ocean's Eleven.[3] He reprised the role in 2004 in Ocean's Twelve and again in the sequel Ocean's Thirteen.[4] He returned to the role in the spin-off film Ocean's",
		image: "qin-shaobo.jpg",
	},
];

interface IFriendsModel {
	id: number;
	name: string;
	biography: string;
	image: string;
}

const MyFriends = () => {
	const [friends, setFriends] = useState();

	return (
		<div>
			{data.map((item) => {
				<p>{item.biography}</p>;
			})}
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
