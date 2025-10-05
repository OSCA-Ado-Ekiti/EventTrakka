import { eventsData1 } from "@/dummyData.ts";
import useScrollToTopButton from "@/utils/hooks/useScrollToTopButton.ts";
import i4gLogoUrl from "@assets/14g-oye.png";
import sheCodeAfricaLogoUrl from "@assets/She-code-africa.png";
import witLogoUrl from "@assets/WIT.png";
import googleAdoUrl from "@assets/google-ado.png";
import googleOyeUrl from "@assets/google-oye.png";
import microsoftLearnUrl from "@assets/microsoft-learn.png";
import AboutUs from "@components/AboutUs.tsx";
import Carousel from "@components/Carousel.tsx";
import EventsAround from "@components/EventsAround.tsx";
import Footer from "@components/Footer.tsx";
import Hero from "@components/Hero.tsx";
import Navbar from "@components/Navbar.tsx";
import NewsLetter from "@components/Newsletter.tsx";
import { motion } from "framer-motion";
import { BiSolidCalendarStar } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
	const {
		scrollAnimationControls,
		targetEl,
		isScrollToTopButtonVisible,
		handleScrollToTop,
	} = useScrollToTopButton(300, true);

	return (
		<div>
			<Navbar />
			<Hero />
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				animate={scrollAnimationControls}
				transition={{
					ease: "linear",
					duration: 0.5,
					x: { duration: 1 },
				}}
				className="bg-gray-100 py-6 px-4 sm:px-8 md:px-12 lg:px-20 mb-5"
				ref={targetEl}
			>
				<div className="container md:p-5 md:pt-10 mx-auto text-center">
					<h4 className="text-2xl uppercase tracking-wider md:tracking-widest font-bold mb-6 text-left text-gray-500">
						PARTNERED BY
					</h4>
					<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={scrollAnimationControls}
							transition={{ duration: 0.8 }}
							className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
						>
							{[
								googleOyeUrl,
								googleAdoUrl,
								witLogoUrl,
								sheCodeAfricaLogoUrl,
								microsoftLearnUrl,
								i4gLogoUrl,
							].map((logo, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50 }}
									animate={scrollAnimationControls}
									transition={{ duration: 0.8, delay: index * 0.1 }}
									className="partner-logo"
									whileHover={{ scale: 1.1 }}
								>
									<img
										src={logo}
										alt={`Partner ${index + 1}`}
										className="w-32 h-32 object-contain grayscale hover:grayscale-0 transition-all duration-500"
									/>
								</motion.div>
							))}
						</motion.div>

				</div>
			</motion.section>

			<AboutUs />

			<section className=" flex flex-col md:flex-row justify-between items-center px-5 md:px-20 mt-28 md:mt-10 gap-7 mb-5">
				<div>
					<h1 className="mb-3 font-bold text-3xl lg:text-4xl text-hero-text">
						Your Ultimate Event Management Solution
					</h1>
					<p className="text-gray-600  w-auto text-base font-normal leading-9">
						Seamlessly manage, organize, and execute diverse events, from
						corporate
					</p>
					<p className="text-gray-600 mb-14 w-auto text-base font-normal">
						conferences to community gatherings.
					</p>

					<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-20 ">
						{eventsData1.map((event, index) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="w-full h-72 shadow-lg flex flex-col rounded-bl-2xl rounded-br-2xl justify-start items-start"
							>
								<div
									className={`w-full h-14 relative ${event.bgColor} rounded-tl-2xl rounded-tr-2xl`}
								/>
								<div className="p-2 bg-white rounded-lg flex space-x-2 absolute ml-8 mt-8">
									<BiSolidCalendarStar
										className={`text-5xl ${event.textColor}`}
									/>
								</div>
								<div className="h-66 px-8 pt-10 pb-2 bg-white flex flex-col justify-start items-start ">
									<div className="flex flex-col justify-start items-start space-y-4">
										<h1 className="text-neutral-600 text-2xl font-bold  mt-8">
											{event.title}
										</h1>
										<p className="w-62 text-stone-500 text-base font-normal ">
											{event.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<EventsAround />
			<Carousel />
			<NewsLetter />
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
