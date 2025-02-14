import React, { useState } from "react";
import Explore_More from "../Components/Explore_More.jsx";
import Features from "./Features.jsx";
import image from "../images/image.png";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import LoginorSignup from "./LoginorSignup.jsx";

function Navbar({setIsLoginOpen}) {
  return (
    <div className="flex flex-col items-center relative border h-full ">
    <nav className="flex-grow  bg-[url('./images/image.png')] bg-cover bg-center w-full flex flex-col pb-16 z-0 shadow-2xl h-full">
        <header className="flex justify-between m-2">
          <p className="text-white">My Travel </p>
          <div className="text-[0.8rem]">
            <ul className="bg-red-50 flex gap-3 bg-transparent pr-5 font-mono">
              <li className="text-white bg-blue-600 p-2 rounded-md flex items-center gap-2 pl-3 pr-3"><button className="text-[0.7rem]" onClick={() => setIsLoginOpen(true)}>Login or CreateAccount</button> 
              <div className="text-[0.7rem]"><SlArrowDown /></div></li>

              <li className="text-white bg-transparent p-2 flex items-center gap-2 uppercase "><button>In|ENG</button>
              <div className="text-[0.7rem]" ><SlArrowDown /></div>
              </li>

              <li className="text-white p-2 flex items-center gap-2 uppercase"><button>IN</button>
              <div className="text-[0.7rem]" ><SlArrowDown /></div>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex-col mt-10 h-auto">
          <div className="flex justify-center items-center relative z-10">
            <Features />
          </div>
          <div className="flex justify-center h-52 z-0 w-full">
            <div className="flex-col h-full relative w-4/5 bg-slate-100 rounded-2xl bottom-12 z-0 shadow-2xl">
              <div className="flex justify-center absolute w-full h-36">
              Hello
              </div>
            </div>
              <div className="mt-2 flex justify-center absolute z-10 bottom-56 w-full ">
                <button
                  className="bg-gradient-to-r from-white via-blue-800 to-blue-700 text-white text-sm p-2 rounded-full w-1/5 h-10 font-bold text-[1.2rem] absolute bottom-1
                  "
                >
                  SEARCH
                </button>
              </div>
          </div>
        </div>
    </nav>
      <Explore_More />
      </div>
  );
}

export default Navbar;
