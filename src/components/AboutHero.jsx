import React from "react";
import pic from "../assets/Rectangle 3.png";

const AboutHero = () => {
  return (
    <>
      <div className="mt-20 py-10 md:py-20 px-6 md:px-20 w-full bg-gray-50">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="w-full md:w-[70%]">
            <h1 className="text-green-800 font-semibold text-3xl md:text-6xl leading-tight">
              Seamless Event Management Made Effortless – Welcome to EventTrakka
            </h1>
            <p className="text-gray-600 mt-4 text-lg md:text-2xl w-full md:w-[50%]">
              Getting Information About Tech Events In Ekiti, All in One Place
            </p>
            <button className="mt-6 bg-green-800 text-white px-6 py-3 rounded-3xl hover:bg-green-700">
              See Upcoming events
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full md:h-[551px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 px-6 md:px-20 py-10 md:mb-0 mb-48">
        <div className="relative">
          {/* Background Shape */}
          <div className="bg-green-100 h-full w-full rounded-[60px] absolute -left-52 -z-10"></div>
          <img
            src={pic}
            alt="Presenting a project"
            className="rounded-3xl object-cover w-full h-[438px] my-10"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">About</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to EventTrakka, your ultimate event management solution.
            Streamline event organization and execution by getting accurate
            information using our powerful web app. Effortlessly manage and
            track every aspect of your events, from information to organizers.
            Say goodbye to the stress of event management and hello to success.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
