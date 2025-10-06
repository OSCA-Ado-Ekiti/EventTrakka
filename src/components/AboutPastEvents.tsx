import GalleryOne from "@assets/gallery-1.png";
import GalleryTwo from "@assets/gallery-2.png";
import GalleryThree from "@assets/gallery-3.png";
import GalleryFour from "@assets/gallery-4.png";
import Contact from "@/components/AboutContact";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function PreviousPost() {
	const images = [
		{ image: GalleryOne },
		{ image: GalleryTwo },
		{ image: GalleryThree },
		{ image: GalleryFour },
		{ image: GalleryTwo },
		{ image: GalleryThree },
		{ image: GalleryOne },
		{ image: GalleryFour },
	];

	const [slidesPerPage, setSlidesPerPage] = useState(1);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 640) {
				setSlidesPerPage(4);
			} else {
				setSlidesPerPage(1);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		const totalSlides = images.length;
		setCurrentSlide((prev) =>
			prev + slidesPerPage >= totalSlides ? 0 : prev + slidesPerPage,
		);
	};

	const prevSlide = () => {
		const totalSlides = images.length;
		setCurrentSlide((prev) =>
			prev - slidesPerPage < 0
				? totalSlides - slidesPerPage
				: prev - slidesPerPage,
		);
	};

	return (
		<>
			<div className="p-8 font-pop">
				<div className="relative text-left">
					<div className="mb-6 mt-16">
						<div className="flex gap-7">
							<h2 className="font-bold text-2xl md:text-2xl lg:text-3xl text-green-800 mb-8">
								Past Events
							</h2>
						</div>
						<div className="md:flex justify-between items-center">
							<p className="text-gray-600 text-base lg:text-lg md:w-1/2 mb-4">
								Explore past events held in our community.
							</p>
							<div className="flex gap-4 md:mr-8 md:ml-0 ml-24">
								<div
									className="text-4xl text-gray-600 cursor-pointer items-center justify-center "
									onClick={prevSlide}
								>
									<FaAngleLeft className="bg-gray-300 p-3 rounded-full" />
								</div>
								<div
									className="text-4xl text-gray-600 cursor-pointer rounded-full"
									onClick={nextSlide}
								>
									<FaAngleRight className="bg-gray-300 p-3 rounded-full" />
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center mb-4 ">
						<div className="w-full h-full overflow-hidden relative mb-16 ">
							<div className="flex ">
								{images
									.slice(currentSlide, currentSlide + slidesPerPage)
									.map((img, index) => (
										<div
											key={index}
											className={`w-full sm:w-1/${slidesPerPage} p-1 relative`}
										>
											<div className="relative ">
												<img
													src={img.image}
													alt={`Image ${index + currentSlide + 1}`}
													className="w-full h-96 object-cover rounded-md"
												/>
												<div className=" absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 rounded-md">
													<h4 className="text-white text-lg font-bold">
														Hacktober Fest
													</h4>
													<p className="text-gray-200">
														17th October 2023, Ado Ekiti
													</p>
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Contact />
		</>
	);
}
