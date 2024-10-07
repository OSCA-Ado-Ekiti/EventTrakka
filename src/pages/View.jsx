import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroView from "../components/HeroView";

import Speaker01 from "../assets/Speaker_1.png";
import Speaker02 from "../assets/Speaker_2.png";
import Organizer01 from "../assets/Organizer_1.png";
import Organizer02 from "../assets/Organizer_2.png";

import AboutUs from "../components/aboutUs";
import EventsAround from "../components/EventsAround";
import Carousel from "../components/carousel";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const View = () => {
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
            <HeroView />
            <motion.section
                id="partners-section"
                initial={{ opacity: 0, y: 50 }}
                animate={scrollControls}
                transition={{
                    ease: "linear",
                    duration: 0.5,
                    x: { duration: 1 },
                }}
                className="bg-green-100 py-6 mt-20 px-4 sm:px-8 md:px-12 lg:px-20 mb-5"
            >
                <div className="container mx-auto text-center">
                    <h4 className="text-4xl uppercase font-bold mb-6 text-left text-green-600">
                        Backend Developers Info Session
                    </h4>
                    <h4 className="text-2xl uppercase mb-6 text-left text-black-600">
                        Exploring Crucial Aspect Of Backend Technology
                    </h4>
                    <div className="flex flex-row items-center text">
                        <h4 className="text-1xl w-auto mr-4 text-left text-green-600">
                            Date: Oct 12, 2023
                        </h4>
                        <button className="bg-green-900 hover:bg-green-700 text-white font-light py-2 px-4 rounded-lg mr-2">
                            Virtual
                        </button>
                        <button className="bg-green-900 hover:bg-green-700 text-white font-light py-2 px-4 rounded-lg mr-2">
                            Backend
                        </button>
                        <button className="bg-green-900 hover:bg-green-700 text-white font-light py-2 px-4 rounded-lg">
                            GDSC Fuoye
                        </button>
                    </div>
                    <h4 className="text-2xl mb-6 text-left text-black-600">
                        Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.                    
                    </h4>
                    <h4 className="text-2xl mb-6 text-left text-black-600">
                        Link to Register : https://bit.ly.334455
                    </h4>
                </div>
            </motion.section>

            {/* Speaker Section */}
            <section className="py-10 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
                <div className="container mx-auto text-center">
                    <h4 className="text-6xl uppercase  mb-6 text-black-600">Speakers</h4>
                    <div className="flex w-full">
                        {/* Speaker 1 */}
                        <div className="flex md:w-1/2 flex-col items-center">
                            <div className="w-50 h-50 rounded-full overflow-hidden mb-4">
                                <img src={Speaker01} alt="Speaker 1" className="w-full h-full object-cover" />
                            </div>
                            <h5 className="text-xl font-semibold">Goodness Sewo</h5>
                            <p className="text-gray-600">GDSC Lead</p>
                            <a href="/view/#" className="text-blue-500 hover:underline">View Profile</a>
                        </div>

                        {/* Speaker 2 */}
                        <div className="flex md:w-1/2 flex-col items-center">
                            <div className="w-50 h-50 rounded-full overflow-hidden mb-4">
                                <img src={Speaker02} alt="Speaker 2" className="w-full h-full object-cover" />
                            </div>
                            <h5 className="text-xl font-semibold">Favour Adetayo</h5>
                            <p className="text-gray-600">GDSC Co-Lead</p>
                            <a href="/view/#" className="text-blue-500 hover:underline">View Profile</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speaker Section */}
            <section className="py-10 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
                <div className="container mx-auto text-center">
                    <h4 className="text-6xl uppercase  mb-6 text-black-600">Organizers</h4>
                    <div className="flex w-full">
                        {/* Speaker 1 */}
                        <div className="flex md:w-1/2 flex-col items-center">
                            <div className="w-50 h-50 rounded-full overflow-hidden mb-4">
                                <img src={Organizer02} alt="Speaker 1" className="w-full h-full object-cover" />
                            </div>
                            <h5 className="text-xl font-semibold">Goodness Sewo</h5>
                            <p className="text-gray-600">GDSC Lead</p>
                            <a href="/view/#" className="text-blue-500 hover:underline">View Profile</a>
                        </div>

                        {/* Speaker 2 */}
                        <div className="flex md:w-1/2 flex-col items-center">
                            <div className="w-50 h-50 rounded-full overflow-hidden mb-4">
                                <img src={Organizer01} alt="Speaker 2" className="w-full h-full object-cover" />
                            </div>
                            <h5 className="text-xl font-semibold">Goodness Sewo</h5>
                            <p className="text-gray-600">GDSC Lead</p>
                            <a href="/view/#" className="text-blue-500 hover:underline">View Profile</a>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </div>
    );
};

export default View;
