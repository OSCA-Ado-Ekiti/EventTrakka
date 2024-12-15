import Footer from "@components/Footer.tsx";
import Header from "@components/Navbar.tsx";
import NewsLetter from "@components/Newsletter.tsx";
import RegisterEvents from "@components/RegisterEvents.tsx";
import TrendingEvents from "@components/TrendingEvents.tsx";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Event = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-screen mt-10 flex flex-col">
			<Header />
			<main className="flex-grow">
				<RegisterEvents />
				<TrendingEvents />
				<NewsLetter />
			</main>
			<Footer />

			{showButton && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
				>
					<FaArrowUp />
				</button>
			)}
		</div>
	);
};

export default Event;
