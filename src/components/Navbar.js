import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { FaBars,FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {

    const [nav,setNav]=useState(false);
    const [section, setSection] = useState("home");
    function handlemenu(){

        setNav(!nav);
    }

    const activeBorder={
      borderBottomColor:"rgb(248 113 113)",
      borderBottomWidth:"2" +"px",
    }
    function handleClick(value) {
      setSection(value);
      console.log(section);
    }
   
  return (
    <>
      <div className="fixed z-10 w-full h-[60px] flex justify-between items-center  bg-[#0a192f] px-4 text-[#D1D5DB] ">
        <div>
          {" "}
          <img src={logo} alt="Logo" className="w-[100px]"></img>
        </div>
        {/* Menu section */}
        <div>
          <ul className="hidden md:flex justify-between items-center p-4">
            <li className="home text-lg cursor-pointer border-b-2 border-b-transparent hover:border-b-red-400 duration-500" style={section==="home" ? activeBorder : {borderBottomWidth:"2px"}}>
            <Link  to="home" onClick={(event) => handleClick("home")}  spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link></li>
            <li className="text-lg cursor-pointer border-b-2 border-b-transparent hover:border-b-red-400 duration-500" style={section==="about" ? activeBorder : {borderBottomWidth:"2px"}}> <Link  to="about" onClick={(event) => handleClick("about")} spy={true} smooth={true} offset={50} duration={500}>
          About
        </Link></li>
            <li className="text-lg cursor-pointer border-b-2 border-b-transparent hover:border-b-red-400 duration-500" style={section==="skill" ? activeBorder : {borderBottomWidth:"2px"}}> <Link  to="skill" onClick={(event) => handleClick("skill")} spy={true} smooth={true} offset={50} duration={500}>
         Skills
        </Link></li>
            <li className="text-lg cursor-pointer border-b-2 border-b-transparent hover:border-b-red-400 duration-500"  style={section==="project" ? activeBorder : {borderBottomWidth:"2px"}}> <Link  to="project" onClick={(event) => handleClick("project")}  spy={true} smooth={true} offset={50} duration={500}>
          Projects
        </Link></li>
            <li className="text-lg cursor-pointer border-b-2 border-b-transparent hover:border-b-red-400 duration-500" style={section==="contact" ? activeBorder : {borderBottomWidth:"2px"}}> <Link  to="contact" onClick={(event) => handleClick("contact")} spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link></li>
          </ul>
        </div>
        {/* 
        Hamburger section */}

        <div className="md:hidden flex z-10" onClick={handlemenu}>
        {
            nav ? <FaTimes size={"20px"}></FaTimes>:<FaBars size={"20px"}></FaBars> 
        }  
        </div>
        <ul className={nav ? "animate__fadeInTopRight flex flex-col justify-center items-center absolute top-0 left-0 z-100 bg-[#0a192f] w-full h-screen" : "hidden"}>
          <li className="text-3xl p-4"> <Link  to="home"  onClick={handlemenu} spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link></li>
          <li className="text-3xl p-4"><Link  to="about"  onClick={handlemenu} spy={true} smooth={true} offset={50} duration={500}>
          About
        </Link></li>
          <li className="text-3xl p-4"><Link  to="skill"  onClick={handlemenu} spy={true} smooth={true} offset={50} duration={500}>
         Skills
        </Link></li>
          <li className="text-3xl p-4"><Link  to="project"  onClick={handlemenu} spy={true} smooth={true} offset={50} duration={500}>
          Projects
        </Link></li>
          <li className="text-3xl p-4"><Link  to="contact"  onClick={handlemenu} spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
