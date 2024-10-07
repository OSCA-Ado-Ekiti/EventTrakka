import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);

  const toggleEventDropdown = () => {
    setIsEventDropdownOpen(!isEventDropdownOpen);
    setIsCommunityDropdownOpen(false);
  };

  const toggleCommunityDropdown = () => {
    setIsCommunityDropdownOpen(!isCommunityDropdownOpen);
    setIsEventDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenuOnBodyClick = (event) => {
      const clickedElement = event.target;
      const isMobile = window.innerWidth <= 768;

      if (
        isMenuOpen &&
        isMobile &&
        !clickedElement.closest("nav") // Check if the clicked element is outside the nav
      ) {
        setMenuOpen(false);
      }
    };

    document.body.addEventListener("click", closeMenuOnBodyClick);

    return () => {
      document.body.removeEventListener("click", closeMenuOnBodyClick);
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="bg-white text-green-900 p-4 px-4 md:px-20 flex justify-between items-center shadow-lg">
        <div className="flex  items-center justify-between">
          <span className="text-2xl font-bold text-green-900">EVENTTRAKKA</span>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 "
          aria-controls="menu"
        >
          <FaBars className="w-5 h-5 " aria-hidden="true" />
        </button>

        <div
          className={`absolute md:relative top-full left-0 ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="menu"
          style={{ zIndex: 100 }}
        >
          <ul className="flex flex-col px-4 text-2xl lg:text-lg border border-gray-100 rounded-lg bg-gray-50 md:space-x-8  md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className=" py-2  block px-1 text-black border-b-2 border-green-900 lg:border-none md:hover:text-green-700"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li>
              <button
                type="button"
                onClick={toggleEventDropdown}
                className="flex items-center lg:relative justify-between w-full py-2 px-1 group border-b-2 border-green-900 text-gray-900 rounded hover:bg-gray-100  md:border-0 md:hover:text-green-700"
              >
                Event <FaAngleDown className="inline-block group h-4 w-4" />
              </button>
              <div
                className={`${
                  isEventDropdownOpen ? "block" : "hidden"
                } font-normal bg-white divide-y divide-gray-100 rounded-lg group-hover:block lg:absolute shadow w-44`}
                style={{ zIndex: 100 }}
              >
                <ul
                  className="py-2 text-sm lg:text-md w-auto text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <NavLink
                      to="/EventOne"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Event 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/EventTwo"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Event 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/EventThree"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Event 3
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleCommunityDropdown}
                className="flex items-center lg:relative justify-between w-full py-2 px-1 border-b-2 border-green-900 lg:border-none text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:w-auto"
              >
                Community{" "}
                <FaAngleDown className="inline-block group h-4 w-4 " />
              </button>
              <div
                className={`${
                  isCommunityDropdownOpen ? "block" : "hidden"
                } z-100  font-normal bg-white divide-y group-hover:block divide-gray-100 lg:absolute rounded-lg shadow w-44`}
                style={{ zIndex: 100 }}
              >
                <ul
                  className="py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <NavLink
                      to="/CommunityOne"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Community 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/CommunityTwo"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Community 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/CommunityThree"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Community 3
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-1 text-black border-b-2 border-green-900 md:hover:text-green-700 lg:border-none rounded "
                aria-current="page"
              >
                About
              </NavLink>
            </li>
            <li>
              <Link to="/login">
                <button className="bg-white border border-green-900 w-full text-green-900 font-bold py-2 px-4 rounded-lg lg:ml-4 mt-4 hover:bg-green-700 hover:text-white lg:mt-0">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to= {'/signup'} >
                <button className="bg-green-900 hover:bg-green-700 w-full text-white font-light py-2 px-4 rounded-lg lg:ml-2 mt-4 lg:mt-0">
                  Sign up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
