import React, { useState } from "react";
import logo from "../assets/logo-new.png";
import { FaBars,FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {

    const [nav,setNav]=useState(false);
    const [section, setSection] = useState("home");
    function handlemenu(){

        setNav(!nav);
    }

    // const activeBorder={
    //   borderBottomColor:"rgb(248 113 113)",
    //   borderBottomWidth:"4" +"px",
    // }
    function handleClick(value) {
      setSection(value);
      console.log(section);
    }
   
  return (
    <>
      <div className="fixed z-10 w-full h-[60px] md:h-[100px] flex justify-between items-center  bg-[#0a192f] px-2 text-[#D1D5DB] ">
        <div className="flex justify-start items-start ">
          {" "}
          <img src={logo} alt="Logo" className="w-[60px] md:w-36 "></img>
        </div>
        {/* Menu section */}
        <div>
          <ul className="hidden md:flex justify-between gap-4 items-center p-4 md:p-6">
            <li >
            <Link  to="home" activeClass="active" className="text-3xl nav-item"  spy={true} smooth={true} offset={-100} duration={500}>
          Home
        </Link></li>
            <li > <Link  to="about"  className="text-3xl nav-item"  spy={true} smooth={true} offset={-85} activeClass="active" duration={500}>
          About
        </Link></li>
            <li > <Link  to="skill" activeClass="active" className="text-3xl nav-item"  spy={true} smooth={true} offset={-85} duration={500}>
         Skills
        </Link></li>
            <li  > <Link  to="project" className="text-3xl nav-item"  activeClass="active"  spy={true} smooth={true} offset={-85} duration={500}>
          Projects
        </Link></li>
            <li  > <Link  to="contact" className="text-3xl nav-item"  activeClass="active"  spy={true} smooth={true} offset={-85} duration={500}>
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
          <li className=" p-4"> <Link className="text-3xl"  to="home"  onClick={handlemenu} spy={true} smooth={true} offset={-58} duration={500}>
          Home
        </Link></li>
          <li className="p-4" data-to-scrollspy-id="home"><Link  to="about" className="text-3xl" data-to-scrollspy-id="about" onClick={handlemenu} spy={true} smooth={true} offset={-58} duration={500}>
          About
        </Link></li>
          <li className=" p-4" ><Link  to="skill" className="text-3xl" data-to-scrollspy-id="skill" onClick={handlemenu} spy={true} smooth={true} offset={-58} duration={500}>
         Skills
        </Link></li>
          <li className=" p-4"><Link  to="project" className="text-3xl" onClick={handlemenu} spy={true} smooth={true} offset={-58} duration={500}>
          Projects
        </Link></li>
          <li className="p-4"><Link  to="contact" className="text-3xl" onClick={handlemenu} spy={true} smooth={true} offset={-58} duration={500}>
          Contact
        </Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
