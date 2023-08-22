import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import profile from "../assets/profile1.jpg";
import { BiSolidDownload } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";


export const Home = (props) => {
  return (
    <>
  
      <div
        name="home"
        id="home"
        className="h-screen bg-[#0a192f] w-full"
      >
        <div className="text-white flex flex-col-reverse md:flex-row justify-center  items-center p-4">
          {" "}
        
          <div className="flex flex-col  h-full md:gap-4 justify-between items-start mx-6 md:mx-12 md:mt-32 mt-10 w-full md:w-3/4 ">
            <h1 className="md:text-6xl text-xl p-4 text-[#ccd6f6]">
              {" "}
              Hi, I'm Somesh Naruka👋
            </h1>
            <span>
              <TypeAnimation
                sequence={[
                  1000,
                  "Frontend Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                  "Video Editor",
                  1000,
                ]}
                className=" md:text-4xl text-lg p-4 text-red-400"
                speed={50}
                repeat={Infinity}
                cursor={false}
              />
            </span>
            <p className="md:text-xl text-xs p-4 text-left text-[#8892b0] w-full">
              I'm a MERN stack developer (React.js & Node.js) with a focus on
              creating exceptional digital experiences that are fast,
              accessible, visually appealing, and responsive.I have gained
              hands-on experience in building dynamic and responsive web
              applications using MongoDB, Express.js, React.js, and Node.js.
            </p>
            <div className="flex justify-between items-center gap-5 p-4">
              <a className=" cursor-pointer " href="https://github.com/someshnaruka/" target="_blank">
                <FaGithub size={"30px"} className="social-icons"></FaGithub>
              </a>
              <a className="cursor-pointer " href="https://www.linkedin.com/in/someshnaruka/" target="_blank">
                <FaLinkedin size={"30px"} className="social-icons"></FaLinkedin>
              </a>
            </div>
            <a href={resume} download={"Somesh Naruka Resume"}>
              <button className="text-md md:text-2xl border border-white rounded-lg border-2 p-2 mx-3 md:hover:bg-red-400 hover:text-black hover:border-black flex justify-between items-center gap-2 hover:scale-105 duration-200">
                Download Resume <BiSolidDownload></BiSolidDownload>
              </button>
            </a>
          </div>
  
        
          <div className=" flex justify-center items-center mx-auto mt-32 w-full md:w-1/2 ">
         
            <img
              src={profile}
              alt="Profile Image"
              className="object-cover rounded-none  md:rounded-xl shadow-black shadow-lg hover:shadow-base hover:scale-105 duration-200 cursor-pointer hover:shadow-[#8892b0]"
            ></img>
            
          </div>
        
        </div>
      </div>
    
    </>
  );
};

export default Home;
