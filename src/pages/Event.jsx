import React from "react";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";

const Event = () => {
  return (
    <div className="font-pop h-screen">
      <div className="flex flex-col gap-9 sm:gap-12 pt-6 h-full">
        <div className="w-full flex flex-col gap-6 sm:gap-7 lg:gap-8 items-center justify-center text-center text-4xl sm:text-5xl lg:text-6xl">
          <p className="font-bold text-black">Have an event upcoming?</p>
          <p className="">
            <span className="text-another-green font-bold">Register</span> here
            and list for FREE
          </p>
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Event;
