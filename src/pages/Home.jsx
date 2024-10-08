import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { BiSolidCalendarStar } from "react-icons/bi";
import LogoOne from "../assets/google-oye.png";
import LogoTwo from "../assets/google-ado.png";
import LogoThree from "../assets/WIT.png";
import LogoFour from "../assets/She-code-africa.png";
import LogoFive from "../assets/microsoft-learn.png";
import LogoSix from "../assets/14g-oye.png";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/aboutUs";
import EventsAround from "../components/EventsAround";
import Carousel from "../components/carousel";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";

const items = [
  {
    title: "Event Management",
    description:
      "Lorem ipsum dolor sit amet cotetur. Non sed quisque mattis tellus quisque. Dictumst orci id purus",
    bgColor: "bg-event-mgt",
    textColor: "text-blue-600",
  },
  {
    title: "Event Management",
    description:
      "Lorem ipsum dolor sit amet cotetur. Non sed quisque mattis tellus quisque. Dictumst orci id purus",
    bgColor: "bg-event-mgt",
    textColor: "text-blue-600",
  },
  {
    title: "Event Management",
    description:
      "Lorem ipsum dolor sit amet cotetur. Non sed quisque mattis tellus quisque. Dictumst orci id purus",
    bgColor: "bg-event-mgt",
    textColor: "text-blue-600",
  },
];

const Home = () => {
  const scrollControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("partners-section");
      const sectionTop = section.offsetTop - window.innerHeight;

      if (window.scrollY >= sectionTop) {
        scrollControls.start({ opacity: 1, y: 0 });
      } else {
        scrollControls.start({ opacity: 0, y: 30 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollControls]);

  return (
    <div>
      <Navbar />
      <Hero />
      <motion.section
        id="partners-section"
        initial={{ opacity: 0, y: 50 }}
        animate={scrollControls}
        transition={{
          ease: "linear",
          duration: 0.5,
          x: { duration: 1 },
        }}
        className="bg-gray-100 py-6 mt-20 px-4 sm:px-8 md:px-12 lg:px-20 mb-5"
      >
        <div className="container md:p-5 md:pt-10 mx-auto text-center">
          <h4 className="text-2xl uppercase tracking-wider md:tracking-widest font-bold mb-6 text-left text-gray-500">
            PARTNERED BY
          </h4>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={scrollControls}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {[LogoOne, LogoTwo, LogoThree, LogoFour, LogoFive, LogoSix].map(
              (logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={scrollControls}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="partner-logo"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="w-32 h-32 object-contain grayscale"
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </motion.section>

      <AboutUs />

      <section className=" flex flex-col md:flex-row justify-between items-center px-5 md:px-20 mt-28 md:mt-32 gap-7 mb-5">
        <div>
          <h1 className="mb-3 font-bold text-3xl lg:text-4xl text-hero-text">
            Your Ultimate Event Management Solution
          </h1>
          <p className="text-gray-600  w-auto text-base font-normal leading-9">
            Seamlessly manage, organize, and execute diverse events, from
            corporate
          </p>
          <p className="text-gray-600 mb-14 w-auto text-base font-normal">
            conferences to community gatherings.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-20 ">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full h-72 shadow-lg flex flex-col rounded-bl-2xl rounded-br-2xl justify-start items-start"
              >
                <div
                  className={`w-full h-14 relative ${item.bgColor} rounded-tl-2xl rounded-tr-2xl`}
                />
                <div className="p-2 bg-white rounded-lg flex space-x-2 absolute ml-8 mt-8">
                  <BiSolidCalendarStar
                    className={`text-5xl ${item.textColor}`}
                  />
                </div>
                <div className="h-66 px-8 pt-10 pb-2 bg-white flex flex-col justify-start items-start ">
                  <div className="flex flex-col justify-start items-start space-y-4">
                    <h1 className="text-neutral-600 text-2xl font-bold  mt-8">
                      {item.title}
                    </h1>
                    <p className="w-62 text-stone-500 text-base font-normal ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EventsAround />
      <Carousel />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
