import HeroView from "@components/HeroView";
import Navbar from "@components/Navbar";
import { motion } from "framer-motion";

import Organizer01 from "@assets/Organizer_1.png";
import Organizer02 from "@assets/Organizer_2.png";

import useScrollToTopButton from "@/utils/hooks/useScrollToTopButton.ts";
import Footer from "@components/Footer.tsx";
import Newsletter from "@components/Newsletter.tsx";
import { FaArrowUp } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function EventDetail() {
	const { eventId } = useParams<{ eventId: string }>();
	const {
		scrollAnimationControls,
		targetEl,
		isScrollToTopButtonVisible,
		handleScrollToTop,
	} = useScrollToTopButton(300, true);

	return (
		<div className="bg-gray-50">
			<Navbar />
			<HeroView />
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				animate={scrollAnimationControls}
				transition={{
					ease: "linear",
					duration: 0.5,
					x: { duration: 1 },
				}}
				style={{
					background: "#EDFCF4",
				}}
				className="py-8 mt-20 px-4 sm:px-8 md:px-12 lg:px-20 "
				ref={targetEl}
			>
				<div className="container mx-auto text-left">
					<div className="mb-6">
						<h4 className="text-3xl lg:text-4xl font-semibold leading-10 text-green-900">
							Backend Developers Info Session Day {eventId}
						</h4>
						<h4 className="text-xl lg:text-2xl text-hero-text">
							Exploring Crucial Aspects Of Backend Technology
						</h4>
					</div>

					<div className="flex flex-col  gap-4 md:gap-0 md:flex-row justify-left items-center mb-6">
						<h4 className="text-xl self-start md:self-center text-green-600 mr-4">
							Date:{" "}
							<span className="text-green-900 font-bold">Oct 12, 2023</span>
						</h4>
						<div className="flex self-start md:self-center gap-2 space-x-2">
							<button className="bg-green-900 hover:bg-green-700 text-white font-normal py-2 px-4 rounded-xl">
								Virtual
							</button>
							<button className="bg-green-900 hover:bg-green-700 text-white font-normal py-2 px-4 rounded-xl">
								Backend
							</button>
							<button className="bg-green-900 hover:bg-green-700 text-white font-normal py-2 px-4 rounded-xl">
								GDSC Fuoye
							</button>
						</div>
					</div>

					<div className="text-left mb-6">
						<h4 className="text-xl lg:text-2xl text-black-600">
							Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							vulputate libero et velit interdum, ac aliquet odio mattis. Class
							aptent taciti sociosqu ad litora torquent per conubia nostra, per
							inceptos himenaeos. Curabitur tempus urna at turpis condimentum
							lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
							condimentum ac, vestibulum eu nisl.
						</h4>
					</div>

					<div className="text-left">
						<h4 className="text-xl lg:text-2xl text-black-600">
							<span className="font-bold">Link to Register: </span>
							<a href="https://bit.ly.334455" className=" hover:text-green-700" target="blank">
								https://bit.ly.334455
							</a>
						</h4>
					</div>
				</div>
			</motion.section>

			{/* Speaker Section */}
			<section className="py-10 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
				<div className="container mx-auto text-center">
					<h4 className="text-5xl lg:text-6xl lg:leading-70 font-normal text-hero-text  mb-6 text-black-600">
						Organizers
					</h4>
					<div className="flex w-full">
						{/* Speaker 1 */}
						<div className="flex md:w-1/2 flex-col items-center">
							<div className="w-50 h-50 rounded-full overflow-hidden mb-4">
								<img
									src={Organizer02}
									alt="Speaker 1"
									className="w-full h-full object-cover"
								/>
							</div>
							<h5 className="text-xl font-bold">Goodness Sewo</h5>
							<p className="text-gray-600">GDSC Lead</p>
							<a href="/view/#" className="text-blue-500 hover:underline">
								View Profile
							</a>
						</div>

						{/* Speaker 2 */}
						<div className="flex md:w-1/2 flex-col items-center">
							<div className="w-50 h-50 rounded-full overflow-hidden mb-4">
								<img
									src={Organizer01}
									alt="Speaker 2"
									className="w-full h-full object-cover"
								/>
							</div>
							<h5 className="text-xl font-bold">Goodness Sewo</h5>
							<p className="text-gray-600">GDSC Lead</p>
							<a href="/view/#" className="text-blue-500 hover:underline">
								View Profile
							</a>
						</div>
					</div>
				</div>
			</section>

			<Newsletter />
			<Footer />

			{isScrollToTopButtonVisible && (
				<button
					type="button"
					onClick={handleScrollToTop}
					className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
				>
					<FaArrowUp />
				</button>
			)}
		</div>
	);
}
