type EventCardProps = {
	readonly image: string;
	readonly title: string;
	readonly description: string;
	readonly date: string;
	readonly sessionType: string;
	readonly group: string;
	readonly details: string;
};

export default function EventCard({
	image,
	title,
	description,
	date,
	sessionType,
	group,
	details,
}: EventCardProps) {
	return (
		<div className="flex flex-col md:flex-row rounded-lg p-4 mb-6 font-pop">
			<img
				src={image}
				alt={title}
				className="w-full md:w-[350px] h-[200px] md:h-[245px] object-cover rounded-lg"
			/>
			<div className="mt-4 md:mt-0 md:ml-6 flex-grow">
				<h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
				<p className="text-gray-600 mt-2 md:mt-3 text-base md:text-[20px]">
					{description}
				</p>
				<div className="flex flex-wrap items-center mt-2 md:mt-4">
					<span className="text-sm md:text-[15px] text-gray-500 mr-4 font-bold w-full md:w-auto mb-2 md:mb-0">
						Date: <span className="font-bold text-custom-green">{date}</span>
					</span>
					<span className="text-green-700 text-sm md:text-[15px] mr-2">
						{sessionType}
					</span>
					<span className="bg-custom-green text-white px-2 py-1 text-sm md:text-[15px] mr-2 mt-2 md:mt-0">
						{group}
					</span>
				</div>
				<a
					href={details}
					className="block md:inline-block text-center mt-4 bg-[#0B5A3C] text-white px-4 py-2 rounded-[22px] w-full md:w-auto"
				>
					View Details
				</a>
			</div>
		</div>
	);
}
