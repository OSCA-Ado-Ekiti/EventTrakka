import React from "react";
import LoginImg from "../assets/logon.png";
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex md:flex-row h-screen p-5">
      <div className="hidden md:flex flex-col rounded-lg gap-5 items-center justify-center h-full w-1/2 bg-green-900 flex-1">
        <div className="p-4 h-full max-h-login-h max-w-login-w">
          <img
            src={LoginImg}
            alt="login-image"
            className="bg-transparent w-full h-full"
          />
        </div>
      </div>

      <div className="bg-white w-full flex justify-center items-center md:w-1/2 flex-1">
        <div className="flex flex-col gap-12">
          <div>
            <h1 className="text-gray-700 justify-center item-center text-3xl font-bold lg:mt-20 mt-8 mb-3">
              Community Leads Login
            </h1>
            <h5>Welcome back! </h5>
          </div>

          <form className=" pt-6 pb-3 w-full">
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
              <label className="text-gray-700 flex items-center font-bold">
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
          </form>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log In"
              </button>
            </div>
            <div className="lg:text-md text-sm gap-1 text-gray-600 flex items-center mx-auto lg:mx-12 justify-center">
              <p>Don’t have an account? </p>

              <Link to="/signup" className="text-green-800 font-bold">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
