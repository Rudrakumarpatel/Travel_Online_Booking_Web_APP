import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

function Footer() {
  return (
    <div className="flex flex-col justify-between h-96  border-2 border-blue-500 flex-grow shadow-2xl relative w-full top-14
    ">
      <div>
      
      </div>
      <div className="bg-black flex justify-between  text-white h-1/3">
      <div className="flex flex-row justify-between w-full ml-10">
        <div className="h-auto text-center flex justify-center items-center text-[3.5rem] gap-3">
          <FaInstagram />
          <FaXTwitter/>
          <FaLinkedin/>
          <FiFacebook/>
        </div>
        <div className="flex flex-col flex-wrap w-1/3 items-center justify-center text-center font-semibold text-[0.9rem] h-auto">
          <div>© 2025 My Travel Online PVT. LTD. </div>
          <div className="text-[0.8rem]">CountryIndia</div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
