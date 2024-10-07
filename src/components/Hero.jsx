import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 mt-28 md:mt-32 gap-7 mb-5"
    >
      {/* Left Div */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-1/2"
      >
        <div className="pr-6 md:pr-20">
          <h3 className="text-sm bg-green-200 text-green-800 rounded-xl w-fit px-4 py-2 font-bold mb-4 md:mb-10 mt-4">
            WELCOME TO EVENT TRACKER
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-8 leading-9 md:leading-70 text-green-900">
            Seamless Event Management Made Effortless
          </h1>
          <p className="text-lg md:text-md text-gray-600 mt-3 md:mt-4">
            Getting Information About Tech Event In Ekiti Just in One Place.
            All-in-one tech event resource.
          </p>
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl mt-3 md:mt-4">
            See Upcoming Events
          </button>
        </div>
      </motion.div>

      {/* Right Div */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-1/2 mt-6 md:mt-0"
      >
        <div className="rounded overflow-hidden">
          <motion.img
            src={hero}
            alt="Hero"
            className="w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
