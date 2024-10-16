import React from 'react';

const RegisterEvents = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center px-4 pt-20 pb-12 bg-[#f0faf5]">
            <div className="max-w-4xl w-full flex flex-col items-start text-left mb-16">
                <h1 className="text-5xl font-bold text-[#0F513D] leading-tight mb-4">
                    Seamless Event Management Made Effortless – Welcome to EventTrakka
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Getting Information About Tech Events in Ekiti, All in One Place
                </p>
                <button className="bg-[#0F513D] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#0D4535] transition duration-300">
                    See Upcoming events
                </button>
            </div>
            <div className="w-full max-w-3xl flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-sm w-full">
                    <h2 className="text-2xl font-semibold mb-6 text-left">Find your next event</h2>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="What are you searching for?"
                            className="flex-grow p-3 rounded-l-md border border-gray-300 focus:outline-none focus:border-[#0F513D]"
                        />
                        <select className="p-3 border-y border-r border-gray-300 focus:outline-none focus:border-[#0F513D] bg-white">
                            <option>Categories</option>
                        </select>
                        <button className="bg-[#0F513D] text-white px-6 py-3 rounded-r-md hover:bg-[#0D4535] transition duration-300">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterEvents;


