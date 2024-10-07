import React from "react";
import LoginImg from "../assets/login-image01.svg";
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row overflow-hidden">
      <div className="hidden m-3 rounded-lg bg-green-900 w-2/4 h-screen lg:flex lg:flex-col items-center justify-center">
        <div>
          <img
            src={LoginImg}
            alt="login-image"
            className="bg-transparent"
            width={400}
            height={500}
          />
        </div>
        <h1 className="text-white font-semibold text-2xl mt-12">
          Create an event from your home
        </h1>
        <p className="text-white px-24 mt-2 text-justify">
          Lorem ipsum dolor sit amet consectetur. Duis egestas sollicitudin
          phasellus sed quis feugiat quis vitae ornare. Mauris diam in aliquam
          enim ut facilisis. Elit elit.
        </p>
      </div>

      <div className="bg-white w-full lg:w-1/2">
        <div className="lg:mx-32 mx-5">
          <h1 className="text-gray-700 justify-center item-center text-3xl font-bold lg:mt-20 mt-8 mb-3">
            Community Leads Login
          </h1>
          <h5>Welcome back! </h5>
          <form className=" pt-6 pb-3 mb-2 mt-12 w-full">
            <div className="mb-10 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <RiMailLine className="h-5 w-5  text-gray-500" />
              </span>
              <input
                className="pl-16 shadow  appearance-none border-2 border-gray-300 rounded-md w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Community Email Address"
              />
            </div>
            {/* Password input with icon */}
            <div className="mb-6 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <RiLockPasswordLine className="h-5 w-5 text-gray-500 mb-2" />
              </span>
              <input
                className="pl-16 shadow appearance-none border-2 border-gray-300 rounded-md w-full h-12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex items-center justify-between mt-7">
              <label className="block text-gray-700 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm  ">Remember Me</span>
              </label>
              <a
                className="inline-block align-baseline font-bold text-sm underline text-green-500 hover:text-green-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-center mt-10">
              <button
                className="bg-green-500 hover:bg-green-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log In"
              </button>
            </div>
          </form>
          <p className="lg:text-md text-sm text-gray-600 flex items-center mx-auto lg:mx-12 justify-center">
            Don’t have an account?
            <Link to="/signup" className="text-green-800 font-bold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
