import React from 'react';
import PreviousPost from './PreviousPost';
import EventList from './UpcomingEvent';
import Footer from '../../components/Footer';
import Header from '../../components/Navbar';
import AboutHero from '../../components/AboutHero';
const About = () => {
	return (
		<div>
			<Header />
			<AboutHero />
			<EventList />
			<PreviousPost />
			<Footer />
		</div>
	);
};

export default About;
