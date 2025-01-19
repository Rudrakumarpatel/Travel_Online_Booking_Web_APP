import React from "react";
import { MdFlight } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { MdMapsHomeWork } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa6";

function Features() {
  return (
    <div className="rounded-xl w-3/6
    text-center pb-3 pt-2 bg-white flex justify-evenly items-center gap-5 text-sm text-gray-600 shadow-md">
      <div>
        <div className="text-[2rem] text-blue-600 flex justify-center">
          <MdFlight />
        </div>
        <div className="h-10 w-12">Flights</div>
      </div>
      <div>
        <div className="text-[2rem] text-blue-600 flex justify-center">
          <RiHotelFill />
        </div>
        <div className="h-10 w-12">Hotels</div>
      </div>
      <div>
        <div className="text-[2rem] text-blue-600 flex justify-center">
          <MdMapsHomeWork />
        </div>
        <div className="flex text-wrap h-10 w-12">Homestays & Villas</div>
      </div>
      <div>
        <div className="text-[2rem] text-blue-600 flex justify-center">
          <FaUmbrellaBeach />
        </div>
        <div className="h-10 text-wrap w-12">Holiday Packages</div>
      </div>
    </div>
  );
}

export default Features;
