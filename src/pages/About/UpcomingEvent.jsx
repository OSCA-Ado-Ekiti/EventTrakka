import React from 'react';
import UpcomingEvent from '../../assets/upcomingEvent.png'

const EventCard = ({ image, title, description, date, sessionType, group }) => (
  <div className="flex rounded-lg p-4 mb-6 font-pop ">
    <img src={image} alt={title} className="w-[350px] h-[245px] object-cover rounded-lg" />
    <div className="ml-[39px] mt-6">
      <h3 className="text-3xl font-bold font">{title}</h3>
      <p className="text-gray-600 mt-3 text-[20px]">{description}</p>
      <div className="flex items-center mt-2">
        <span className="text-sm text-gray-500 mr-4 font-bold text-[15px]">Date: <span className='font-bold text-custom-green'>{date}</span></span>
        <span className=" text-green-700  text-[15px] mr-2">{sessionType}</span>
        <span className="bg-custom-green text-white px-2 py-1 text-[15px] mr-2">{group}</span>
      </div>
      <button className="mt-4 bg-[#0B5A3C] text-white px-4 py-2 rounded-[22px]">
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

  return (
    <div className=" bg-[#f1f8f5] mt-20 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap mb-8 gap-10 mx-48">
        {['GDSC EKSU', 'MLSA EKSU', 'GDSC FUOYE', 'SCA ADO', 'WTM ADO', 'MLSA FUOYE', 'I4G FUOYE', 'DSN EKSU', 'GDSC BOUESTI', 'GDG ADO'].map((group, index) => (
          <button
            key={index}
            className={`m-2 px-4 py-2 w-full h-[60px] rounded-[20px] border border-gray-300 ${group === 'GDSC FUOYE' ? 'bg-custom-green hover:text-black text-white' : 'text-gray-700'} hover:bg-green-100`}
          >
            {group}
          </button>
        ))}
      </div>
      
      <h2 className="text-[48px] text-center font-bold mb-6">Upcoming Events</h2>
      <div className='ml-[120px]'>
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
      </div>
     
    </div>
  );
};

export default EventList;
