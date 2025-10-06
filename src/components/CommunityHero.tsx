import gdglogo from "@assets/gdglogo.svg";
import { Link } from "react-router-dom";

export default function CommunityHero() {
	return (
		<div className=" mb-8 relative bg-teal-300 p-14 flex flex-col gap-7 text-white items-center bg-[url('/src/assets/communityheroimage.png')] bg-cover bg-no-repeat bg-center">
			{/* Make the background image dark */}
			<div className="absolute top-0 w-full h-full bg-black opacity-50 z-0"></div>
			<div className="z-10 p-14 flex flex-col gap-7 text-white items-center">
				<div className="md:flex gap-2 justify-center items-center text-xl">
					<div>
						<img src={gdglogo} alt="GDG svg" />
					</div>
					<div>
						<span className="font-bold">Google Developer Student’s Club</span>
						<br />
						<span>Ekiti State University</span>
					</div>
				</div>
				<Link to="#" className="bg-green-800 p-4 text-center rounded-md flex justify-center items-center w-fit">
					Join us
				</Link>
			</div>
		</div>
	);
}
