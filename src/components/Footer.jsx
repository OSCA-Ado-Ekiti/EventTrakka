import React, { useState, useEffect } from "react";
import FooterImage from "../assets/footer.svg";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative mt-14">
      {isMobile ? (
        <div className="w-full h-full bg-custom-green text-white">
          <div className="p-6">
            <h1 className="text-3xl font-semibold mb-2">About us</h1>
            <p className="text-lg w-full text-justify">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            {/* Additional mobile content */}
            <div className="mt-8 mb-20">
              <div>
                <h1 className="text-white text-xl font-semibold mb-2">
                  Company
                </h1>
                <ul>
                  <li className="text-white text-lg mb-1">
                    <a href="#">Events</a>
                  </li>
                  <li className="text-white text-lg mb-1">
                    <a href="#">Communities</a>
                  </li>
                  <li className="text-white text-lg mb-1">
                    <a href="#">About Us</a>
                  </li>
                  <li className="text-white text-lg mb-1">
                    <a href="#">Our Blog</a>
                  </li>
                </ul>
              </div>
              <div className=" mt-8">
                <h1 className="text-white text-xl font-semibold mb-2">
                  Support
                </h1>
                <ul>
                  <li className="text-white text-lg mb-1">
                    <a href="#">Twitter</a>
                  </li>
                  <li className="text-white text-lg mb-1">
                    <a href="#">Github</a>
                  </li>
                  <li className="text-white text-lg mb-1">
                    <a href="#">LinkedIn</a>
                  </li>
                  <li className="text-white text-lg mb-1">
                    <a href="#">Email</a>
                  </li>
                  {/* Add more links */}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-sm text-center">
              &copy; {new Date().getFullYear()} - Hacktoberfest Ekiti. All
              rights reserved
            </p>
          </div>
        </div>
      ) : (
        // Large screen content
        <div className="relative">
          <img src={FooterImage} alt="footer" className="w-full" />
          <div
            className="absolute top-0 left-0 p-6"
            style={{ top: "250px", left: "100px" }}
          >
            <h1 className="text-white text-3xl font-semibold mb-2">About us</h1>
            <p className="text-white text-lg w-1/2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div
            className="absolute top-0 right-0 p-6 flex"
            style={{ top: "250px", right: "100px" }}
          >
            <div>
              <h1 className="text-white text-xl font-semibold mb-2">Company</h1>
              <ul>
                <li className="text-white text-lg mb-1">
                  <a href="#">Events</a>
                </li>
                <li className="text-white text-lg mb-1">
                  <a href="#">Communities</a>
                </li>
                <li className="text-white text-lg mb-1">
                  <a href="#">About Us</a>
                </li>
                <li className="text-white text-lg mb-1">
                  <a href="#">Our Blog</a>
                </li>
              </ul>
            </div>
            <div className="ml-20">
              <h1 className="text-white text-xl font-semibold mb-2">Support</h1>
              <ul>
                <li className="text-white text-lg mb-1">
                  <a href="#">Twitter</a>
                </li>
                <li className="text-white text-lg mb-1">
                  <a href="#">Github</a>
                </li>
                <li className="text-white text-lg mb-1">
                  <a href="#">LinkedIn</a>
                </li>
                <li className="text-white text-lg mb-1">
                  <a href="#">Email</a>
                </li>
                {/* Add more links */}
              </ul>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 mx-24 mb-6">
            <p className="text-white text-sm text-left">
              &copy; {new Date().getFullYear()} - Hacktoberfest Ekiti. All
              rights reserved
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
