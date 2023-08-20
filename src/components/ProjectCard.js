import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard(props) {
    const [hover,setHover]=useState(false);
  return (
    <>
      <div className=" flex flex-col justify-evenly gap-2 items-start border-1 border-transparent rounded-xl md:w-1/3 w-full shadow-lg shadow-black m-4 overflow-hidden bg-[#1F2937] md:h-[600px] min-h-[300px] py-2 px-4">
        <h1 className=" text-md md:text-3xl border-b-2 border-b-white text-red-400 ">
          {props.title}
        </h1>
        <div className="w-full h-1/2 flex flex-col justify-center items-center relative" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          <a href={props.link} target="_blank" className="">
            {" "}
            <img
              src={props.img}
              alt="foodMart"
              className="rounded-xl bg-cover w-full cursor-pointer hover:scale-105 duration-200 m-auto shadow-md shadow-black hover:opacity-5"
            ></img>
          </a>
          <a href={props.link} className="text-red-400 text-xl  absolute" style={hover ? {display:"block"} : {display:"none"}}>Demo</a>
          {/* <div className="w-full flex justify-center items-center gap-3 my-2 ">
            {" "}
            <a href={props.link} target="_blank">
            <button className="border-2  text-xs hover:scale-110 duration-200 ease-in-out text-white border-transparent bg-transparent shadow-lg shadow-black px-2 py-1  hover:bg-red-400 hover:text-black rounded-lg">Demo</button> </a>
            <a href={props.gitlink} target="_blank">
            <button className="border-2 text-xs hover:scale-110 duration-200 ease-in-out text-white bg-transparent border-transparent  shadow-lg shadow-black px-2 py-1 hover:bg-red-400 hover:text-black rounded-lg">Code</button></a>
          </div> */}
        </div>
        <p className="text-xs text-left"></p>

        <div className="flex justify-normal gap-3 items-center flex-wrap w-full ">
          {props.skill.map((post, index) => {
            return (
              <div className="bg-transparent text-white font-light border-1 rounded-2xl shadow-md shadow-black text-xs md:text-lg px-2 py-1 cursor-pointer hover:scale-105 duration-200 ease-in-out hover:bg-red-400">
                {post}
              </div>
            );
          })}
        </div>
        <a href={props.gitlink} target="_blank" className="text-white "><FiExternalLink size={"30px"} className="text-[#8892b0] hover:text-white" ></FiExternalLink></a>
      </div>
    </>
  );
}

export default ProjectCard;
