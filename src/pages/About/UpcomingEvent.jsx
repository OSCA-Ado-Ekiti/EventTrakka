import React from 'react';
import UpcomingEvent from '../../assets/upcomingEvent.png';

const EventCard = ({ image, title, description, date, sessionType, group }) => (
	<div className='flex flex-col md:flex-row rounded-lg p-4 mb-6 font-pop'>
		<img
			src={image}
			alt={title}
			className='w-full md:w-[350px] h-[200px] md:h-[245px] object-cover rounded-lg'
		/>
		<div className='mt-4 md:mt-0 md:ml-6 flex-grow'>
			<h3 className='text-2xl md:text-3xl font-bold'>{title}</h3>
			<p className='text-gray-600 mt-2 md:mt-3 text-base md:text-[20px]'>
				{description}
			</p>
			<div className='flex flex-wrap items-center mt-2 md:mt-4'>
				<span className='text-sm md:text-[15px] text-gray-500 mr-4 font-bold w-full md:w-auto mb-2 md:mb-0'>
					Date: <span className='font-bold text-custom-green'>{date}</span>
				</span>
				<span className='text-green-700 text-sm md:text-[15px] mr-2'>
					{sessionType}
				</span>
				<span className='bg-custom-green text-white px-2 py-1 text-sm md:text-[15px] mr-2 mt-2 md:mt-0'>
					{group}
				</span>
			</div>
			<button className='mt-4 bg-[#0B5A3C] text-white px-4 py-2 rounded-[22px] w-full md:w-auto'>
				View Details
			</button>
		</div>
	</div>
);

const EventList = () => {
	const events = [
		{
			image: UpcomingEvent,
			title: 'Backend Developers info session',
			description: 'Exploring Crucial Aspects of Backend Development',
			date: 'Oct 12, 2023',
			sessionType: 'Info Session',
			group: 'GDSC Fuoye',
		},
		{
			image: UpcomingEvent,
			title: 'Backend Developers info session',
			description: 'Exploring Crucial Aspects of Backend Development',
			date: 'Oct 12, 2023',
			sessionType: 'Info Session',
			group: 'GDSC Fuoye',
		},
		{
			image: UpcomingEvent,
			title: 'Backend Developers info session',
			description: 'Exploring Crucial Aspects of Backend Development',
			date: 'Oct 12, 2023',
			sessionType: 'Info Session',
			group: 'GDSC Fuoye',
		},
	];
	const groups = [
		'OSCA ADO',
		'GDSC EKSU',
		'MLSA EKSU',
		'GDSC FUOYE',
		'SCA ADO',
		'WTM ADO',
		'MLSA FUOYE',
		'I4G FUOYE',
		'DSN EKSU',
		'GDSC BOUESTI',
		'GDG ADO',
	];
	return (
		<div className='bg-[#f1f8f5] mt-20 py-12 md:px-20 px-4'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
					{groups.map((group, index) => (
						<button
							key={index}
							className={`px-4 py-2 w-full h-[60px] rounded-[20px] border border-gray-300 ${
								group === 'GDSC FUOYE'
									? 'bg-custom-green hover:text-black text-white'
									: 'text-gray-700'
							} hover:bg-green-100 text-sm sm:text-base`}>
							{group}
						</button>
					))}
				</div>
			</div>

			<h2 className='text-3xl sm:text-4xl md:text-[48px] text-center font-bold my-12'>
				Upcoming Events
			</h2>

			<div className='container mx-auto'>
				{events.map((event, index) => (
					<EventCard
						key={index}
						{...event}
					/>
				))}
			</div>
		</div>
	);
};

export default EventList;
