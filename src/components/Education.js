import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
function Education() {
  return (
    <>
      <div className="animate__animated animate__fadeIn p-4 flex flex-col gap-4">
      <div className="flex  justify-between items-start ">
        <div className="flex flex-col justify-between items-start w-1/2">
          <h1 className="text-sm  text-red-400">Bachelor of Technology-ECE</h1>
          <h2 className="text-xs  text-[#ccd6f6]">Jaypee Institute of Information Technology</h2>
        </div>
        <div className="flex flex-col justify-center h-full gap-3 items-start w-1/2">
          <p className="w-full flex justify-end items-center gap-2 text-xs md:text-md text-[#ccd6f6]">
            {" "}
            <BsFillCalendarDateFill color="#ccd6f6"></BsFillCalendarDateFill>07/2019 - 06/2023
          </p>
          <p className="w-full flex justify-end items-center gap-2 text-xs md:text-md text-[#ccd6f6]">
            <MdLocationPin color="#ccd6f6"></MdLocationPin> Noida
          </p>
        </div>
      </div>
      <div className="flex  justify-between items-start">
        <div className="flex flex-col justify-between items-start w-1/2">
          <h1 className="text-sm  text-red-400">Senior Secondary (XII), Science</h1>
          <h2 className="text-xs  text-[#ccd6f6]">Janki Devi Public School</h2>
        </div>
        <div className="flex flex-col justify-between h-full gap-3 items-start w-1/2">
          <p className="w-full flex justify-end items-center gap-2 text-xs md:text-md text-[#ccd6f6]">
            {" "}
            <BsFillCalendarDateFill color="#ccd6f6"></BsFillCalendarDateFill>07/2016 - 05/2018
          </p>
          <p className="w-full flex justify-end items-center gap-2 text-xs md:text-md text-[#ccd6f6]">
            <MdLocationPin color="#ccd6f6"></MdLocationPin> Jaipur
          </p>
        </div>
      </div>
      <div className="flex  justify-between items-start">
        <div className="flex flex-col justify-between items-start w-1/2">
          <h1 className="text-sm  text-red-400">Secondary (X)</h1>
          <h2 className="text-xs  text-[#ccd6f6]">Janki Devi Public School</h2>
        </div>
        <div className="flex flex-col justify-between h-full gap-3 items-start w-1/2">
          <p className="w-full flex justify-end items-center gap-2 text-xs md:text-md text-[#ccd6f6]">
            {" "}
            <BsFillCalendarDateFill color="#ccd6f6"></BsFillCalendarDateFill>07/2014 - 05/2016
          </p>
          <p className="w-full flex justify-end items-center gap-2 text-xs md:text-md text-[#ccd6f6]">
            <MdLocationPin color="#ccd6f6"></MdLocationPin> Jaipur
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Education;
