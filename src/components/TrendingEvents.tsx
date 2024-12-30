import { trendingEventsCardData } from "@/dummyData.ts";
import Card from "@components/Card.tsx";

export default function TrendingEvents() {
	return (
		<div className="py-12 bg-gray-50">
			<h2 className="text-3xl font-bold text-center mb-8 text-[#0F513D]">
				Trending Events
			</h2>
			<div className="flex gap-6 justify-center flex-wrap mx-auto max-w-6xl">
				{trendingEventsCardData.map((card, index) => (
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
}
