import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title, date, link }) => {
  return (
    <Link to={link} className="rounded-lg text-white relative h-[270px] w-[200px] overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }}></div>
      <div className="absolute top-0 left-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-b-md">
        Trending
      </div>
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-sm mt-1">{date}</div>
      </div>
    </Link>
  );
};

export default Card;
