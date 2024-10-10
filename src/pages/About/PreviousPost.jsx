import React, { useState } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import PreviousImg from '../../assets/previousImg.png';

const Card = ({ image, title, subtitle, location }) => (
	<div className='bg-white rounded-lg shadow-lg p-4'>
		<img
			src={image}
			alt={title}
			className='w-full h-48 object-cover rounded-t-lg'
		/>
		<h3 className='text-lg font-bold mt-4'>{title}</h3>
		<p className='text-sm mt-2'>{subtitle}</p>
		<p className='text-sm text-gray-500'>{location}</p>
	</div>
);

const PreviousPost = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const cards = [
		{
			image: PreviousImg,
			title: 'Info Session',
			subtitle: 'GDSC Product Design info session',
			location: 'Federal University, Oye-Ekiti',
		},
		{
			image: PreviousImg,
			title: 'Info Session',
			subtitle: 'GDSC Product Design info session',
			location: 'Federal University, Oye-Ekiti',
		},
		{
			image: PreviousImg,
			title: 'Info Session',
			subtitle: 'GDSC Product Design info session',
			location: 'Federal University, Oye-Ekiti',
		},
		{
			image: PreviousImg,
			title: 'Info Session',
			subtitle: 'GDSC Product Design info session',
			location: 'Federal University, Oye-Ekiti',
		},
		{
			image: PreviousImg,
			title: 'Info Session',
			subtitle: 'GDSC Product Design info session',
			location: 'Federal University, Oye-Ekiti',
		},
		{
			image: PreviousImg,
			title: 'Info Session',
			subtitle: 'GDSC Product Design info session',
			location: 'Federal University, Oye-Ekiti',
		},
		{
			image: PreviousImg,
			title: 'React Workshop',
			subtitle: 'Hands-on React and Vite integration',
			location: 'Lagos Tech Hub',
		},
		{
			image: PreviousImg,
			title: 'AI Hackathon',
			subtitle: '24-hour AI development challenge',
			location: 'Tech Innovation Center, Abuja',
		},
		{
			image: PreviousImg,
			title: 'DevOps Masterclass',
			subtitle: 'Intro to CI/CD and Kubernetes',
			location: 'Code Academy, Port Harcourt',
		},
		{
			image: PreviousImg,
			title: 'Cloud Bootcamp',
			subtitle: 'Mastering AWS cloud services',
			location: 'Innovation Space, Enugu',
		},
		{
			image: PreviousImg,
			title: 'Frontend Conference',
			subtitle: 'Exploring modern frontend frameworks',
			location: 'Virtual Event',
		},
		{
			image: PreviousImg,
			title: 'Python Data Science',
			subtitle: 'Data analysis with Python',
			location: 'University of Ibadan',
		},
		{
			image: PreviousImg,
			title: 'Full-Stack Seminar',
			subtitle: 'End-to-end web development techniques',
			location: 'Tech Campus, Kano',
		},
		{
			image: PreviousImg,
			title: 'Blockchain Expo',
			subtitle: 'The future of decentralized apps',
			location: 'Tech Valley, Lagos',
		},
		{
			image: PreviousImg,
			title: 'JavaScript 101',
			subtitle: 'Beginner to advanced JavaScript workshop',
			location: 'Tech Zone, Akure',
		},
		{
			image: PreviousImg,
			title: 'Mobile Dev Summit',
			subtitle: 'Building cross-platform mobile apps',
			location: 'Innovation Center, Calabar',
		},
	];

	const visibleCards = cards.slice(currentIndex, currentIndex + 4);

	const handleNext = () => {
		if (currentIndex < cards.length - 4) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<div className='p-8'>
			<h2 className='text-2xl font-bold mb-6'>Previous Events</h2>
			<div className='flex items-center'>
				<button
					onClick={handlePrev}
					disabled={currentIndex === 0}
					className={`text-2xl ${
						currentIndex === 0
							? 'text-gray-300 bg-gray-500 rounded-full'
							: 'text-white bg-black rounded-full w-6 h-6'
					}`}>
					<BiChevronLeft />
				</button>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4'>
					{visibleCards.map((card, index) => (
						<Card
							key={index}
							{...card}
						/>
					))}
				</div>
				<button
					onClick={handleNext}
					disabled={currentIndex >= cards.length - 4}
					className={`text-2xl ${
						currentIndex >= cards.length - 4
							? 'text-gray-500 bg-gray-400 rounded-full'
							: 'text-white  bg-black rounded-full w-6 h-6'
					}`}>
					<BiChevronRight />
				</button>
			</div>
		</div>
	);
};

export default PreviousPost;
