import Me from "../img/Me.jpg";

const Home = () => {
	return (
		<>
			<div className="w-5/12 mx-auto mb-8">
				<img src={Me} alt="It's me" />
			</div>
			<div className="text-justify leading-relaxed text-2xl mb-12	mx-auto max-w-7xl px-4">
				Leonardo Wilhelm DiCaprio (born November 11, 1974) is an American actor
				and film producer. Known for his work in biographical and period films,
				he is the recipient of numerous accolades, including an Academy Award, a
				British Academy Film Award, and three Golden Globe Awards. As of 2019,
				his films have grossed over $7.2 billion worldwide, and he has been
				placed eight times in annual rankings of the world's highest-paid
				actors. Born in Los Angeles, DiCaprio began his career in the late 1980s
				by appearing in television commercials. In the early 1990s, he had
				recurring roles in various television shows, such as the sitcom
				Parenthood, and had his first major film part as author Tobias Wolff in
				This Boy's Life (1993). He received critical acclaim and his first
				Academy Award and Golden Globe Award nominations for his performance as
				a developmentally disabled boy in What's Eating Gilbert Grape (1993).
				DiCaprio achieved international stardom with the star-crossed romances
				Romeo + Juliet (1996) and Titanic (1997). After the latter became the
				highest-grossing film in the world at the time, he reduced his workload
				for a few years. In an attempt to shed his image of a romantic hero,
				DiCaprio sought roles in other genres, including the 2002 crime dramas
				Catch Me If You Can and Gangs of New York; the latter marked the first
				of his many successful collaborations with director Martin Scorsese.
			</div>
		</>
	);
};
export default Home;
