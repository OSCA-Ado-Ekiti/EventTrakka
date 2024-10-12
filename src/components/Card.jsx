import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title, date, link }) => {
  return (
    <Link to={link} className="rounded-lg text-white p-6 bg-cover bg-center relative h-[270px] w-[200px]" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="text-sm font-bold absolute top-0 bg-green-900 rounded-bl-md rounded-br-md p-0.5">Trending</div>
      <div className='absolute bottom-3'>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-sm mt-1">{date}</div>
      </div>
    </Link>
  );
};

export default Card;
