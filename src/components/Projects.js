import React from "react";
import ProjectCard from "./ProjectCard";
import food from "../assets/foodMart.png";
import hotstar from "../assets/hotstar.png";
import livinn from "../assets/livinn.png";
import note from "../assets/notes.png";
import dashboard from "../assets/dashboard.png"
import { Fade } from "react-awesome-reveal";
function Projects() {
  const projectData = [
    {
      img: food,
      title: "FoodMart-Grocery Store",
      content:
        "Developed a feature-rich web application using the MERN (MongoDB)Express.js, React, Node.js) stack.Implemented various functionalities such as product search, filter, andorder processing, enhancing the user experience and increasing customer satisfaction.Leveraged modern React Hooks, including useDispatch(), UseNavigate(), and UseParams(), to efficiently manage state and navigation within the application.Used React-Redux, Multer-for server side image handling,Tailwind-CSS library, Stripe for payment gateway and Passport.js for user autentication.",
      link: "https://food-mart-theta.vercel.app/",
      gitlink: "https://github.com/someshnaruka/Food-Mart",
      skill: [
        "React",
        "MonogDB",
        "Express",
        "Node.js",
        "Stripe",
        "Multer",
        "TailWindCss",
        "Passpot.Js",
        "Redux",
        "React Hooks",
        "Owl Carousel",
        "Material UI-icons",
      ],
    },
    {
      img: hotstar,
      title: "Disney Hotstar-UI Clone",
      content:
        "Developed a basic Over-The-Top (OTT) platform using React.js to showcase movie details and provide an interactive user experience Utilized React.js, Redux, React Hooks and Functional Components to streamline development, resulting in reduced development time and improved code maintainability.",
      link: "https://hotstar-clone-someshnaruka.vercel.app/",
      gitlink: "https://github.com/someshnaruka/hotstar-clone",
      skill: [
        "React",
        "Firebase",
        "Styled Components",
        "Redux",
        "Functional Components",
        "React Hooks",
        "Owl Carousel",
      ],
    },
    {
      img: dashboard,
      title: "User Profile Management Dashboard",
      content:
        "A dynamic web application designed to facilitate efficient management of user profiles, including profile information, skills, experiences, education, and certifications. The project is built using the MERN stack (MongoDB, Express.js, React, and Node.js), incorporating various modern technologies to enhance user experience and functionality.",
      link: "https://user-dashboard-blue.vercel.app/",
      gitlink: "https://github.com/someshnaruka/User-Dashboard.git",
      skill: [
        "React",
        "Redux",
        "Node.Js",
"Express.Js",
"MongoDB",
"Cloudinary",
"(JWT)-Token",  
        "TailWind CSS",
        "React Hooks",
"React Loader-Spinner",
 

      ],
    },
    {
      img: livinn,
      title: "Livinn-Hospitality Website",
      content:
        "Leveraged HTML, CSS, Bootstrap, and JavaScript to ensure cross-browser compatibility and consistent performance across different devices and browsers. Incorporated JQuery, Slick, and Owl Carousel JavaScript libraries to enrich the website’s functionality and user experience. Utilized Animate.css, a popular UI framework, to add smooth and visually appealing animations to various elements on the website.",
      link: "https://livinn.vercel.app/",
      gitlink: "https://github.com/someshnaruka/livinn",
      skill: [
        "HTML",
        "CSS",
        "JavaScript",
        "JQuery",
        "Owl Carousel",
        "Slick",
        "Animate.css",
      ],
    },
   
  ];
  return (
    <>
      <div
        name="project"
        className=" bg-[#16213E] flex flex-col justify-between items-start p-3"
        id="project"
      >
      <Fade>
        <div className="mx-6 md:mx-12  flex flex-col gap-3 justify-between items-start mt-6">
          {" "}
          <h1 className="text-2xl md:text-5xl text-[#ccd6f6] font-bold border-b-4  border-b-red-400  ">
            Projects
          </h1>
          <h2 className="text-base md:text-3xl text-[#ccd6f6]">
            Some of the noteworthy projects I've built:
          </h2>
        </div>

        <div className="flex flex-row items-center justify-around flex-wrap w-full">
          {projectData.map((post, index) => {
            return (
              <ProjectCard
                key={index}
                img={post.img}
                title={post.title}
                content={post.content}
                link={post.link}
                gitlink={post.gitlink}
                skill={post.skill}
              ></ProjectCard>
            );
          })}
        </div>
        </Fade>
      </div>
    </>
  );
}

export default Projects;
