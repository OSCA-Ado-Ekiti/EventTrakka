import React, { useState } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import PreviousImg from "../../assets/previousImg.png";

const Card = ({ image, title, subtitle, location }) => (
  <div className="bg-white rounded-lg shadow-lg p-4">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
    <h3 className="text-lg font-bold mt-4">{title}</h3>
    <p className="text-sm mt-2">{subtitle}</p>
    <p className="text-sm text-gray-500">{location}</p>
  </div>
);

const PreviousPost = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { image: PreviousImg, title: 'Info Session', subtitle: 'GDSC Product Design info session', location: 'Federal University, Oye-Ekiti' },
    { image: PreviousImg, title: 'Info Session', subtitle: 'GDSC Product Design info session', location: 'Federal University, Oye-Ekiti' },
    { image: PreviousImg, title: 'Info Session', subtitle: 'GDSC Product Design info session', location: 'Federal University, Oye-Ekiti' },
    { image: PreviousImg, title: 'Info Session', subtitle: 'GDSC Product Design info session', location: 'Federal University, Oye-Ekiti' },
    { image: PreviousImg, title: 'Info Session', subtitle: 'GDSC Product Design info session', location: 'Federal University, Oye-Ekiti' },
    { image: PreviousImg, title: 'Info Session', subtitle: 'GDSC Product Design info session', location: 'Federal University, Oye-Ekiti' },
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
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Previous Events</h2>
      <div className="flex items-center">
        <button onClick={handlePrev} disabled={currentIndex === 0} className={`text-2xl ${currentIndex === 0 ? 'text-gray-300 bg-gray-500 rounded-full' : 'text-white bg-black rounded-full w-6 h-6'}`}>
          <BiChevronLeft />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4">
          {visibleCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <button onClick={handleNext} disabled={currentIndex >= cards.length - 4} className={`text-2xl ${currentIndex >= cards.length - 4 ? 'text-gray-500 bg-gray-400 rounded-full' : 'text-white  bg-black rounded-full w-6 h-6'}`}>
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PreviousPost;