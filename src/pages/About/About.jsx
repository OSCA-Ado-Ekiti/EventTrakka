import React from "react";
import PreviousPost from "./PreviousPost";
import EventList from "./UpcomingEvent";
import Footer from "../../components/Footer"
import Header from '../../components/Navbar'
const About = () => {
  return (
    <div>
      <Header />
      <EventList />
      <PreviousPost />
      <Footer />
    </div>
  );
};

export default About;
