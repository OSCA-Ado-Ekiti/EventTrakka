import React from "react";
import Header from '../components/Navbar';
import TrendingEvents from "../components/TrendingEvents";
import RegisterEvents from "../components/RegisterEvents";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";

const Event = () => {
  return (
    <div className="font-pop min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <RegisterEvents />
        <TrendingEvents />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
};

export default Event;
