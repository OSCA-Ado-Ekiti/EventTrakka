import useScrollToTopButton from "@/utils/hooks/useScrollToTopButton.ts";
import AboutHero from "@components/AboutHero.tsx";
import Footer from "@components/Footer.tsx";
import Header from "@components/Navbar.tsx";
import PreviousPost from "@/components/AboutPastEvents";
import UpcomingEvent from "@/components/AboutUpcomingEvent";
import { FaArrowUp } from "react-icons/fa";

export default function About() {
	const { isScrollToTopButtonVisible, handleScrollToTop } =
		useScrollToTopButton(100, false);

	return (
		<div>
			<Header />
			<AboutHero />
			<UpcomingEvent />
			<PreviousPost />
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
