import AboutHero from "@components/AboutHero.tsx";
import Footer from "@components/Footer.tsx";
import Header from "@components/Navbar.tsx";
import PreviousPost from "@pages/About/PreviousPost.tsx";
import EventList from "@pages/About/UpcomingEvent.tsx";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const About = () => {
	const scrollControls = useAnimation();
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
		<div>
			<Header />
			<AboutHero />
			<EventList />
			<PreviousPost />
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

export default About;
