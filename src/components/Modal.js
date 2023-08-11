import React from "react";
import "animate.css";
import smile from "../assets/smile.png";
function Modal(props) {
  return (
    <>
      <div
        className="fixed top-0 bottom-0 left-0 right-0   backdrop-blur-sm flex justify-center items-center  z-10 cursor-pointer"
        onClick={props.onmodal}
      >
        <div
          className="animate__animated animate__bounceIn bg-[#1F2937]  text-white border-2 border-transparent shadow-lg shadow-black rounded-xl flex flex-col items-center justify-between p-10 cursor-pointer"
          onClick={props.onmodal}
        >
        <img src={smile} className="w-[50px] md:w-[100px]"></img>
          <p className="md:text-2xl">Thank You for Contacting.</p>
          <p className="md:text-2xl" >I'll get back to you ASAP.</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
