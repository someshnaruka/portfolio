import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import tail from "../assets/tailwind.png";
import boot from "../assets/bootstrap.png";
import api from "../assets/api.png";
import sql from "../assets/mysql.png";
import git from "../assets/github.png";
import c from "../assets/c.png";
import python from "../assets/python.png";
import SkillCard from "./SkillCard";
import firebase from "../assets/firebase.png"
import { Fade } from "react-awesome-reveal";

function Skills() {
  const skill = [
    {
      img: html,
      name: "HTML",
    },

    {
      img: css,
      name: "CSS",
    },
    {
      img: js,
      name: "JavaScript",
    },
    {
      img: react,
      name: "React",
    },
    {
      img: node,
      name: "Node.Js",
    },
    {
      img: express,
      name: "Express.Js",
    },
    {
      img: mongo,
      name: "MongoDb",
    },
    {
img:firebase,
name:"Firebase"
    },
    {
      img: git,
      name: "Git",
    },
    {
      img: api,
      name: "Rest API's",
    },
    {
      img: boot,
      name: "Bootstrap",
    },
    {
      img: tail,
      name: "TailWind CSS",
    },
    {
      img: c,
      name: "C++",
    },
    {
      img: sql,
      name: "MySql",
    },
    {
      img: python,
      name: "Python",
    },
  ];
  return (
    <>
   
      <div name="skill"
        className="flex flex-col justify-normal gap-3 items-start bg-[#0a192f] w-full h-full p-3"
        id="skill"
      >
      <Fade direction="right" >
        <div className="mx-6 md:mx-12 flex flex-col gap-3 justify-between items-start mt-6">
          {" "}
          <h1 className="text-2xl md:text-5xl text-[#ccd6f6] font-bold border-b-4  border-b-red-400 ">
            Skills
          </h1>
          <h2 className="text-base md:text-3xl text-[#ccd6f6] w-3/4">
            {" "}
            These are the technologies I've worked with:
          </h2>
        </div>

       <div className="flex flex-col gap-3 mb-6 md:mb-12">
          <div className="flex justify-center m-auto items-center flex-row flex-wrap md:gap-8 gap-5 ">
            {skill.map((post, index) => {
              return (
                <SkillCard
                  key={post.index}
                  img={post.img}
                  name={post.name}
                ></SkillCard>
              );
            })}
          </div>
        </div>
        </Fade>
      </div>
     
    </>
  );
}

export default Skills;
