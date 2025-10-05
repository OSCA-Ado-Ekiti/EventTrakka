import hero from "@assets/hero-image.jpg";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			className="w-full flex items-center justify-center p-5 pt-5 md:px-10"
		>
			<div className="flex flex-col md:flex-row justify-between items-center gap-7">
				{/* Left Div */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="w-full h-1/2 md:w-1/2 flex-1"
				>
					<div className="">
						<p className="text-sm bg-green-200 text-green-800 rounded-2xl w-fit px-4 py-2 font-bold mb-4 md:mb-10 mt-4">
							WELCOME TO EVENTTRAKKA
						</p>

						<p className="text-5xl lg:text-6xl lg:leading-70 font-bold text-hero-text">
							Seamless Event Management Made Effortless
						</p>

						<p className="text-lg md:text-md text-gray-600 md:mt-4 lg:w-3/4">
							Getting Information About Tech Event In Ekiti Just in One Place.
							All-in-one tech event resource.
						</p>
						<button className="bg-green-900 hover:bg-green-700 text-white font-bold px-4 py-2 lg:p-4 rounded-lg mt-3 md:mt-4">
							See Upcoming Events
						</button>
					</div>
				</motion.div>

				{/* Right Div */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 0.8 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className=" max-h-hero-img-h max-w-hero-img-w flex-1"
				>
					<div className="rounded overflow-hidden">
						<motion.img src={hero} alt="Hero" className="w-full" />
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}
