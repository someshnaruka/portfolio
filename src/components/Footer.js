import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-scroll";
import { BiCopy } from "react-icons/bi";

function Footer() {
  const today = new Date();
  const [copySuccess, setCopySuccess] = useState("");


  function copyToClipboard(e) {
    navigator.clipboard.writeText("someshnaruka@gmail.com");
    setCopySuccess("Copied!");
    setTimeout(()=>{
      setCopySuccess("")
    },1000)
  }

  return (
    <>
      <div className="footer flex w-full bg-[#374151] justify-between gap-4 items-center text-[#D1D5DB] flex-col pt-3">
        <p className="text-xl md:text-4xl w-1/2 text-center"> What’s next?</p>
        <p className="text-xs md:text-3xl w-1/2 text-center">
          Feel free to reach out to me if you're looking for a developer, have a
          query, or simply want to connect.
        </p>
        <p className="md:w-1/2 w-full text-center flex justify-center items-center gap-2">
          <FiMail size={"25px"}></FiMail>
          <span className="text-lg ">someshnaruka@gmail.com </span>
          <BiCopy
            onClick={copyToClipboard}
            className="cursor-pointer"
            size={"25px"}
          ></BiCopy>{" "}
          {copySuccess}
        </p>
        <p className="text-xs md:text-xl"> You may also find me on these platforms</p>
        <p className="flex justify-between items-center gap-3">
          <a className=" cursor-pointer " href="https://github.com/someshnaruka/" target="_blank">
            <FaGithub size={"30px"} className="social-icons" ></FaGithub>
          </a>
          <a className="cursor-pointer " href="https://www.linkedin.com/in/someshnaruka/" target="_blank">
            <FaLinkedin size={"30px"} className="social-icons"></FaLinkedin>
          </a>
        </p>
        <div className="bg-[#0a192f] w-full flex justify-center items-center text-xs md:text-xl gap-1 p-2">
          {" "}
          <FaRegCopyright
            size={"20px"}
          ></FaRegCopyright> {today.getFullYear()} | Made with ❤️ by Somesh
          Naruka
        </div>
      </div>
    </>
  );
}

export default Footer;
