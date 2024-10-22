import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import PreviousPost from './PreviousPost';
import EventList from './UpcomingEvent';
import Footer from '../../components/Footer';
import Header from '../../components/Navbar';
import AboutHero from '../../components/AboutHero';
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
