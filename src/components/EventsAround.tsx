import { eventsData3 } from "@/dummyData.ts";
import Location from "@assets/location.png";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function EventsAround() {
	const navigate = useNavigate();
	return (
		<section className="w-full h-auto md:px-20 px-5 pt-12 pb-14 bg-white flex flex-col mt-28">
			<div className="w-full  h-auto flex flex-col items-start gap-4">
				{/* First section */}
				<div className="md:flex w-full justify-between items-center">
					<div className="font-bold text-3xl lg:text-4xl text-hero-text flex lg:gap-7 gap-3">
						<h1>Events around you</h1>
						<img
							className="lg:w-12 lg:h-12 w-8 h-8"
							src={Location}
							alt="Icon"
						/>
					</div>
					<div className="flex items-center gap-4 mt-3 ">
						<a
							href="/events"
							className="text-gray-700 justify-between flex lg:text-lg text-sm font-bold tracking-tight lg:gap-4 gap-1"
						>
							<p>SEE MORE</p>
							<FaAngleRight className="ml-1 mt-1" />
						</a>
					</div>
				</div>

				<p className="w-18 h-4 text-gray-500 text-base font-normal leading-5 mb-2 lg:mb-0">
					Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin iaculis
					nam
				</p>
				<p className="w-18 h-4 text-gray-500 text-base font-normal mb-16">
					fringilla vestibulum pulvinar mattis viverra. Sit nulla.
				</p>
			</div>
			{/* Second section */}
			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12">
				{eventsData3.map((event, index) => (
					<div
						key={index}
						className="flex flex-col justify-start items-start mt-12"
					>
						<div className="w-full lg:w-88 flex justify-between items-center">
							<div className="rounded-lg shadow-xl flex flex-col justify-start items-start transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
								<img
									className="w-full lg:w-88 h-13 rounded-tl-lg rounded-tr-lg"
									src={event.image}
									alt={`Event ${index + 1}`}
								/>
								<div className="w-full lg:w-88 px-0.5 justify-between flex py-0.75 mt-4">
									<div className="w-1/6 pl-4">
										<h1 className="text-green-800 flex text-lg font-bold mb-2">
											{event.date.month}
										</h1>
										<h1 className="text-black text-xl font-bold flex">
											{event.date.day}
										</h1>
									</div>
									<div className="w-full lg:w-88 flex flex-col pl-3">
										<h1 className="text-gray-600 font-bold text-lg">
											{event.title}
										</h1>
										<p className="w-full text-gray-500 text-base font-normal pr-10 mb-5 mt-5">
											{event.description}
										</p>
										<p
											onClick={() => navigate("/view")}
											className="text-green-800 flex text-base font-semibold underline mb-5 cursor-pointer"
										>
											View Details <FaAngleRight className="ml-1 mt-1" />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
