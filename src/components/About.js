import React, { useEffect, useState } from "react";
import Overview from "./Overview";
import profile from "../assets/profile2.jpg";
import Education from "./Education";
import Work from "./Work";
import Interests from "./Interests";
import "animate.css";

const About = (props) => {
  const [section, setSection] = useState("about");
  useEffect(()=>{
    window.scrollTo(0, 0);
  
  },[])
  function handleClick(value) {
    setSection(value);
  }

  const activeBorder={
    borderBottomColor:"rgb(248 113 113)",
    borderBottomWidth:"2" +"px",
  }
  return (
    <>
      <div name="about"
        className=" bg-[#16213E]  "
        id="About"
      >
      <div className=" flex flex-col justify-between items-start ">
        <h1 className="text-2xl text-[#ccd6f6] font-bold border-b-4  border-b-red-400 mx-6 md:mx-12  mt-32 ">
          About Me
        </h1>

        <div className="flex  justify-center items-center m-6 md:m-12 ">
          <div className="flex flex-col md:flex-row justify-between items-start shadow-lg shadow-black  h-full">
            <div className="flex flex-col justify-between items-center md:w-1/4 w-full  text-[#ccd6f6] ">
              <img src={profile} alt="About Image"></img>
            </div>
            <div className="w-full md:w-3/4 my-4">
              <div className="flex justify-between items-center text-[#ccd6f6]  mx-2 ">
                <p
                  className="text-xs  md:text-md md:p-4 hover:border-b-2 hover:border-b-red-400 border-b-2 border-b-transparent transition-all ease-out duration-500 cursor-pointer"
                  onClick={(event) => handleClick("about")}  style={section==="about" ? activeBorder : {borderBottomWidth:"2px"}}
                >
                  About Me
                </p>
                <p
                  className="text-xs md:text-md md:p-4 hover:border-b-2 hover:border-b-red-400 border-b-2 border-b-transparent transition-all ease-out duration-500  cursor-pointer"
                  onClick={(event) => handleClick("education")} style={section==="education" ? activeBorder : {borderBottomWidth:"2px"}}
                >
                  Education
                </p>
                <p
                  className="text-xs md:text-md md:p-4 hover:border-b-2 hover:border-b-red-400 border-b-2 border-b-transparent transition-all ease-out duration-500 cursor-pointer"
                  onClick={(event) => handleClick("work")}  style={section==="work" ? activeBorder : {borderBottomWidth:"2px"}}
                >
                  Work Experience
                </p>
                <p
                  className="text-xs md:text-md md:p-4 hover:border-b-2 hover:border-b-red-400 border-b-2 border-b-transparent transition-all ease-out duration-500  cursor-pointer"
                  onClick={(event) => handleClick("interest")}  style={section==="interest" ? activeBorder : {borderBottomW:"2px"}}
                >
                  Interests
                </p>
              </div>{" "}
              {section === "about" && <Overview></Overview>}
              {section === "education" && <Education></Education>}
              {section === "work" && <Work></Work>}
              {section === "interest" && <Interests></Interests>}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;