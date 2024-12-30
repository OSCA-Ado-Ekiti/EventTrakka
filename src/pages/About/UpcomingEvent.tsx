import { eventsData2, groups } from "@/dummyData.ts";
import EventCard from "@components/EventCard.tsx";

export default function UpcomingEvent() {
	return (
		<div className="bg-[#f1f8f5] mt-20 py-12 md:px-20 px-4">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
					{groups.map((group, index) => (
						<button
							key={index}
							className={`px-4 py-2 w-full h-[60px] rounded-[20px] border border-gray-300 ${
								group === "GDSC FUOYE"
									? "bg-custom-green hover:text-black text-white"
									: "text-gray-700"
							} hover:bg-green-100 text-sm sm:text-base`}
						>
							{group}
						</button>
					))}
				</div>
			</div>

			<h2 className="text-3xl sm:text-4xl md:text-[48px] text-center font-bold my-12">
				Upcoming Events
			</h2>

			<div className="container mx-auto">
				{eventsData2.map((event, index) => (
					<EventCard key={index} {...event} />
				))}
			</div>
		</div>
	);
}
