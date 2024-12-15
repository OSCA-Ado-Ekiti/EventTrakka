import eventplaceholder from "@assets/eventplaceholder.jpeg";
import Card from "@components/Card.tsx";

const TrendingEvents = () => {
	const cards = [
		{
			title: "EKITI HACKATHON 2023",
			date: "Monday, Oct 30, 4 pm",
			link: "#",
			imageSrc: eventplaceholder,
		},
		{
			title: "EKITI HACKATHON 2023",
			date: "Monday, Oct 30, 4 pm",
			link: "#",
			imageSrc: eventplaceholder,
		},
		{
			title: "EKITI HACKATHON 2023",
			date: "Monday, Oct 30, 4 pm",
			link: "#",
			imageSrc: eventplaceholder,
		},
		{
			title: "EKITI HACKATHON 2023",
			date: "Monday, Oct 30, 4 pm",
			link: "#",
			imageSrc: eventplaceholder,
		},
	];

	return (
		<div className="py-12 bg-gray-50">
			<h2 className="text-3xl font-bold text-center mb-8 text-[#0F513D]">
				Trending Events
			</h2>
			<div className="flex gap-6 justify-center flex-wrap mx-auto max-w-6xl">
				{cards.map((card, index) => (
					<Card
						key={index}
						imageSrc={card.imageSrc}
						title={card.title}
						date={card.date}
						link={card.link}
					/>
				))}
			</div>
		</div>
	);
};

export default TrendingEvents;
