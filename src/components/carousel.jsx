import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import GalleryOne from "../assets/gallery-1.png";
import GalleryTwo from "../assets/gallery-2.png";
import GalleryThree from "../assets/gallery-3.png";
import GalleryFour from "../assets/gallery-4.png";
import GalleryIcon from "../assets/gallery-icon.png";

const Carousel = () => {
  const images = [
    { image: GalleryOne },
    { image: GalleryTwo },
    { image: GalleryThree },
    { image: GalleryFour },
    { image: GalleryTwo },
    { image: GalleryThree },
    { image: GalleryOne },
    { image: GalleryFour },
  ];

  const [slidesPerPage, setSlidesPerPage] = useState(1);

  useEffect(() => {
    // Check window width on mount and resize
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // Show 4 slides on larger screens
        setSlidesPerPage(4);
      } else {
        // Show 1 slide on smaller screens
        setSlidesPerPage(1);
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const totalSlides = images.length;
    setCurrentSlide((prev) =>
      prev + slidesPerPage >= totalSlides ? 0 : prev + slidesPerPage
    );
  };

  const prevSlide = () => {
    const totalSlides = images.length;
    setCurrentSlide((prev) =>
      prev - slidesPerPage < 0
        ? totalSlides - slidesPerPage
        : prev - slidesPerPage
    );
  };

  return (
    <div className="relative text-left lg:pl-20 p-4 bg-gray-100">
      <div className="mb-6 mt-16">
        <div className="flex gap-7">
          <h1 className="lg:text-4xl text-xl font-bold text-green-800 mb-8">
            Gallery of Moments
          </h1>
          <img
            className="lg:w-12 lg:h-12 w-8 h-8"
            src={GalleryIcon}
            alt="Icon"
          />
        </div>
        <div className="lg:flex justify-between ite ms-center">
          <p className="text-gray-600 lg:text-lg lg:w-1/2 text-sm mb-4">
            Journey with Us Through Our Gallery: A Visual Odyssey of Captured
            Moments, Memories, and Creativity.
          </p>
          <div className="flex gap-4 lg:mr-8 lg:ml-0 ml-24">
            <div
              className="text-4xl text-gray-600 cursor-pointer items-center justify-center "
              onClick={prevSlide}
            >
              <FaAngleLeft className="bg-gray-300 p-3 rounded-full" />
            </div>
            <div
              className="text-4xl text-gray-600 cursor-pointer rounded-full"
              onClick={nextSlide}
            >
              <FaAngleRight className="bg-gray-300 p-3 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 ">
        <div className="w-full h-full overflow-hidden relative mb-16 ">
          <div className="flex ">
            {images
              .slice(currentSlide, currentSlide + slidesPerPage)
              .map((img, index) => (
                <div key={index} className={`w-full sm:w-1/${slidesPerPage} p-1 relative`}>
                  <div className="relative ">
                    <img
                      src={img.image}
                      alt={`Image ${index + currentSlide + 1}`}
                      className="w-full h-96 object-cover rounded-md"
                    />
                    <div className=" absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 rounded-md">
                      <h4 className="text-white text-lg font-bold">
                        Hacktober Fest
                      </h4>
                      <p className="text-gray-200">
                        17th October 2023, Ado Ekiti
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
