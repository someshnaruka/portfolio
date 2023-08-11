import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
function Work() {
  return (
    <>
      <div className="animate__animated animate__fadeIn flex flex-col  w-full p-4">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex  justify-between items-start  ">
            <div className="flex flex-col justify-between items-start w-1/2">
              <h1 className="text-sm md:text-2xl text-red-400">
                Frontend Web Developer
              </h1>
              <h2 className="text-xs md:text-xl  text-[#ccd6f6]">
                BasketHunt Pvt Ltd
              </h2>
            </div>
            <div className="flex flex-col justify-center h-full gap-3 items-start w-1/2">
              <p className="w-full flex justify-end items-center gap-2 text-xs md:text-xl text-[#ccd6f6]">
                {" "}
                <BsFillCalendarDateFill color="#ccd6f6"></BsFillCalendarDateFill>
                06/2022 - 08/2022
              </p>
              <p className="w-full flex justify-end items-center gap-2 text-xs md:text-xl text-[#ccd6f6]">
                <MdLocationPin color="#ccd6f6"></MdLocationPin> Remote
              </p>
            </div>
          </div>
          <div>
            <ul className="text-[#ccd6f6] w-full flex flex-col gap-2">
              <li className=" text-xs md:text-xl w-full text-left">
                • Gained valuable experience in utilizing HTML, CSS, and
                JavaScript to create visually appealing and functional landing
                pages that effectively communicated the client’s message. 
             
              </li>
              <li className=" text-xs md:text-xl w-full text-left">
                • Documented the process of exploring and understanding open
                source collaboration platforms like Feng Office, showcasing
                strong research and documentation skills.
              
              </li>
              <li className="text-xs md:text-xl w-full text-left">
              • Utilized Lazy Loading for images and other assets, ensuring that
              only necessary resources were loaded, further enhancing page load
              times. Employed modern frontend techniques, such as Code
              Splitting, to reduce bundle sizes and optimize client-side
              rendering.
            </li>
            </ul>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
