import CommunityHero from "@components/CommunityHero.tsx";
import Footer from "@components/Footer.tsx";
import Navbar from "@components/Navbar.tsx";
import Organizers from "@components/Organizers.tsx";

export default function CommunityDetail() {
	return (
		<div>
			<Navbar />
			<CommunityHero />
			<Organizers />
			<Footer />
		</div>
	);
}
