import useScrollToTopButton from "@/utils/hooks/useScrollToTopButton.ts";
import Footer from "@components/Footer.tsx";
import Header from "@components/Navbar.tsx";
import NewsLetter from "@components/Newsletter.tsx";
import RegisterEvents from "@components/RegisterEvents.tsx";
import TrendingEvents from "@components/TrendingEvents.tsx";
import { FaArrowUp } from "react-icons/fa";

export default function EventList() {
	const { isScrollToTopButtonVisible, handleScrollToTop } =
		useScrollToTopButton(100, false);

	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow">
				<RegisterEvents />
				<TrendingEvents />
				<NewsLetter />
			</main>
			<Footer />

			{isScrollToTopButtonVisible && (
				<button
					onClick={handleScrollToTop}
					className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
				>
					<FaArrowUp />
				</button>
			)}
		</div>
	);
}
