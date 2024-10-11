import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-3xl mb-4">Contact us</h2>
        <div className="flex justify-center space-x-6 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-gray-600" />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-gray-600" />
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-gray-600" />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-gray-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
