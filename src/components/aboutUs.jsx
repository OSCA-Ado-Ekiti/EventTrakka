import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import about from "../assets/about-us.png";

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 2 },
      });
    }
  }, [controls, inView]);

  return (
    <div className="scroll-container" style={{ height: '100vh', overflow: 'auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 mt-28 md:mt-32 gap-10 mb-5"
      >
        {/* Left Div */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          className="w-full md:w-1/2 mt-6 md:mt-0"
        >
          <div className="rounded overflow-hidden">
            <img src={about} alt="Hero" className="w-full" />
          </div>
        </motion.div>

        {/* Right Div */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={controls}
          className="w-full md:w-1/2"
        >
          <div className="pr-6 md:pl-20">
            <h3 className="text-sm bg-green-200 text-green-800 rounded-xl w-fit px-4 py-2 font-bold mb-4 md:mb-10 mt-4">
              ABOUT US
            </h3>
            <h1 className="text-3xl md:text-3xl font-bold mt-2 mb-8 leading-9 md:leading-10 text-green-900">
              Celebrate Our History: Discover the Journey of{" "}
              <span
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                }}
              >
                Event Trakka
              </span>
            </h1>

            <p className="text-lg md:text-md text-gray-600 mt-3 md:mt-4 text-justify">
              Welcome to EventTrakka, your ultimate event management solution.
              Streamline event organization and execution by getting proper
              information using our powerful web app. Easily manage and track
              every aspect of your events, from information to organizers. Say
              goodbye to event management stress and hello to success.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
