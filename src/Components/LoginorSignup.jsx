import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaAt } from "react-icons/fa";
import { useEffect } from "react";

const images = [
  "./images/Dehli.jpg",
  './images/Taj_Mahal.jpg',
  './images/Villa-1.jpg',
  './images/Waterfalls-in-Kerala.jpg'
]

function LoginorSignup({ onClose }) {
const[formbtn, setformbtn] = useState(true);

const handleform = () => {
  setformbtn(!formbtn);
}

  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center z-50 w-screen h-screen ">
      <div className="bg-white rounded-lg sticky top-16 flex flex-row shadow-2xl h-5/6 w-[55rem]">
        <div className={`relative w-[24rem] bg-[url('./images/Taj_Mahal.jpg')] bg-cover bg-center rounded-l-xl flex justify-center items-center`}>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-l-lg"></div>

          <div className="relative text-left mb-6 z-10">
            <ul className="space-y-2 text-white p-10 text-lg font-semibold">
              <li className="flex items-center space-x-2">
                <span className="text-2xl">✈️</span>
                <span>Lock Flight Prices & Pay Later</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl">🏨</span>
                <span>Book Hotels @ ₹0</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl">💰</span>
                <span>
                  Get 3X refund if your waitlisted train doesn’t get confirmed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Close Button */}
        <div className="p-8 w-[35rem] h-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black hover:text-black font-extrabold"
          >
            ✕
          </button>

          {/*selector for User and Vender */}
          <div className="flex justify-center p-10">
            <div
              className={`flex justify-center 
            align-center border
            rounded-full p-2 ${formbtn ? "border-l-blue-700 border-t-blue-700 border-x-[0.21rem] transition-all duration-700": 
            "border-r-blue-700 border-t-blue-700 border-x-[0.21rem] transition-all duration-700"
            } `}
            >
              <div className=
              {`flex justify-center items-center border rounded-full text-center w-[10rem] h-[2.3rem] 
              ${formbtn ? "bg-blue-900 text-white" : "bg-gray-100 text-blue-950 hover:bg-gray-200"}
              `}
              >
                <button className="text-lg font-semibold w-full" onClick={handleform}>
                  User
                </button>
              </div>

              <div className={`flex justify-center items-center border rounded-full text-center w-[10rem] h-[2.3rem] 
              ${!formbtn ? "bg-blue-900 text-white" : "bg-gray-100 text-blue-950 hover:bg-gray-200"}
              `}>
                <button className="text-lg font-semibold w-full" onClick={handleform}>
                  Vendor
                </button>
              </div>
            </div>
          </div>
          {/* Login Form */}
          <h2 className="text-2xl font-bold text-center mb-6">
            Sign up/Login now to
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="w-full p-3 border rounded-lg"
            />
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg">
              Continue
            </button>
          </div>

          <div className="mt-4 text-center z-50">
            <p>Or Login/Signup With</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
                <FcGoogle className="text-3xl" />
              </button>
              <button className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center ">
                <FaAt className="text-[1.5rem]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginorSignup;
