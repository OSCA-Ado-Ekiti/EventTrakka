import React from 'react';
import Card from './Card';
import eventplacholder from '../assets/eventplaceholder.jpeg'

const TrendingEvents = () => {
  const cards = [
    {
      title: 'EKITI HACKATHON 2023',
      date: 'Monday, Oct 30, 4 pm',
      link: '#',
      imageSrc: eventplacholder
    },
    {
      title: 'EKITI HACKATHON 2023',
      date: 'Monday, Oct 30, 4 pm',
      link: '#',
      imageSrc: eventplacholder
    },
    {
      title: 'EKITI HACKATHON 2023',
      date: 'Monday, Oct 30, 4 pm',
      link: '#',
      imageSrc: eventplacholder
    },
    {
      title: 'EKITI HACKATHON 2023',
      date: 'Monday, Oct 30, 4 pm',
      link: '#',
      imageSrc: eventplacholder
    },
  ];

  return (
    <div className="flex gap-4 justify-center flex-wrap m-4 bg-white">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          date={card.date}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default TrendingEvents;