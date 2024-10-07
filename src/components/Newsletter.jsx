import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div className="w-auto lg:mx-20 mx-4 p-4 bg-green-200 rounded-lg shadow-md mt-10 items-center justify-center">
        <h1 className="lg:text-4xl text-2xl font-semibold mb-7 mt-7 text-center text-black">
          Subscribe to our Events Newsletter
        </h1>
        <p className="text-gray-700 mb-7 text-center text-lg font-bold">
          Receive notifications of events close to you
        </p>
        <div className="flex justify-center mb-4">
          <button className="bg-green-800  hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
