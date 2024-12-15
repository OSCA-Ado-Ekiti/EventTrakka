import gdglogo from "@assets/gdglogo.svg";

const CommunityHero = () => {
	return (
		<div className="mt-[80px] bg-teal-300 p-14 flex flex-col gap-7 text-white">
			<div className="flex gap-2 justify-center items-center text-xl">
				<div>
					<img src={gdglogo} alt="GDG svg" />
				</div>
				<div>
					<span className="font-bold">Google Developer Student’s Club</span>
					<br />
					<span>Ekiti State University</span>
				</div>
			</div>
			<a href="#" className="bg-green-800 p-4 text-center rounded-md">
				Join us
			</a>
		</div>
	);
};

export default CommunityHero;
