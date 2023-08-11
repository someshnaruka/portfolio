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
      <div className="footer flex w-full bg-[#374151] justify-between gap-4 items-center text-[#D1D5DB] flex-col">
        <p className="text-xl w-1/2 text-center"> What’s next?</p>
        <p className="text-xs w-1/2 text-center">
          Feel free to reach out to me if you're looking for a developer, have a
          query, or simply want to connect.
        </p>
        <p className="text-xs md:w-1/2 w-full text-center flex justify-center items-center gap-2">
          <FiMail></FiMail>
          <span>someshnaruka@gmail.com </span>
          <BiCopy
            onClick={copyToClipboard}
            className="cursor-pointer"
          ></BiCopy>{" "}
          {copySuccess}
        </p>
        <p className="text-xs"> You may also find me on these platforms</p>
        <p className="flex justify-between items-center gap-3">
          <a className=" cursor-pointer ">
            <FaGithub size={"20px"} className="social-icons"></FaGithub>
          </a>
          <a className="cursor-pointer ">
            <FaLinkedin size={"20px"} className="social-icons"></FaLinkedin>
          </a>
        </p>
        <div className="bg-[#0a192f] w-full flex justify-center items-center text-xs gap-1 p-2">
          {" "}
          <FaRegCopyright
            size={"10px"}
          ></FaRegCopyright> {today.getFullYear()} | Made with ❤️ by Somesh
          Naruka
        </div>
      </div>
    </>
  );
}

export default Footer;
