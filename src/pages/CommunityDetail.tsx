import CommunityAbout from "@/components/CommunityAbout";
import CommunityHero from "@components/CommunityHero.tsx";
import Footer from "@components/Footer.tsx";
import Navbar from "@components/Navbar.tsx";
import AboutPastEvents from "@components/AboutPastEvents"
import Organizers from "@components/Organizers.tsx";

export default function CommunityDetail() {
	return (
		<div>
			<Navbar />
			<CommunityHero />
			<CommunityAbout />
			<AboutPastEvents />
			<Organizers />
			<Footer />
		</div>
	);
}
