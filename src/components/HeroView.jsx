import React from "react";
import { motion } from "framer-motion";
import heroview from "../assets/view-page-hero-section.png";

const HeroView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 mt-28 md:mt-32 gap-7 mb-5"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full "
      >
        <div className="rounded overflow-hidden">
          <motion.img
            src={heroview}
            alt="Hero"
            className="w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroView;
