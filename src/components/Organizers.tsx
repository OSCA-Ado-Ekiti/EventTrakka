import organizer2 from "@assets/img6063.png";
import organizer1 from "@assets/my-headshot.png";

const Organizers = () => {
	return (
		<div>
			<h2 className="font-bold text-2xl md:text-2xl lg:text-3xl text-green-800 mb-8 ml-8">
				Organizers
			</h2>
			<section className="py-10 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
						{/* Organizer 1 */}
						<div className="flex flex-col items-center">
							<div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
								<img
									src={organizer1}
									alt="Goodness Sewo"
									className="w-full h-full object-cover"
								/>
							</div>
							<h5 className="text-xl font-bold">Goodness Sewo</h5>
							<p className="text-gray-600">GDSC Lead</p>
							<a href="/view/#" className="text-green-600 hover:underline">
								View Profile
							</a>
						</div>

						{/* Organizer 2 */}
						<div className="flex flex-col items-center">
							<div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
								<img
									src={organizer1}
									alt="Favour Adetayo"
									className="w-full h-full object-cover"
								/>
							</div>
							<h5 className="text-xl font-bold">Favour Adetayo</h5>
							<p className="text-gray-600">GDSC Co-Lead</p>
							<a href="/view/#" className="text-green-600 hover:underline">
								View Profile
							</a>
						</div>

						{/* Organizer 3 */}
						<div className="flex flex-col items-center">
							<div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
								<img
									src={organizer2}
									alt="Favour Adetayo"
									className="w-full h-full object-cover"
								/>
							</div>
							<h5 className="text-xl font-bold">Favour Adetayo</h5>
							<p className="text-gray-600">GDSC Co-Lead</p>
							<a href="/view/#" className="text-green-600 hover:underline">
								View Profile
							</a>
						</div>

						{/* Organizer 4 */}
						<div className="flex flex-col items-center">
							<div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
								<img
									src={organizer2}
									alt="Goodness Sewo"
									className="w-full h-full object-cover"
								/>
							</div>
							<h5 className="text-xl font-bold">Goodness Sewo</h5>
							<p className="text-gray-600">GDSC Lead</p>
							<a href="/view/#" className="text-green-600 hover:underline">
								View Profile
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Organizers;
