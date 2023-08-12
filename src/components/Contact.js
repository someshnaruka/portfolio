import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";
import { toast } from "react-hot-toast";

function Contact() {

    const [show,setShow]=useState(false)
    const [data,setData]=useState({
        from_name:"",
        user_email:"",
        message:""
    })
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
if(data.from_name && data.user_email && data.message)
{
    emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        setShow(true)
        document.body.style.overflowY="hidden";
        setData({
          from_name:"",
          user_email:"",
          message:"",
        })
        
      },
      (error) => {
        console.log(error.text);
      }
    );
}
else{
    toast("All fields are mandatory")
}
    
  };
  function handlechange(e)
  {
    const {name,value}=e.target;
    setData((preValue)=>{
        return{
            ...preValue,
            [name]:value,
        }
    })
    console.log(data);

  }

// function handleclick(event){
//     event.preventDefault();
//     setShow(true)
//     document.body.style.overflowY="hidden";
// }
function handleModal()
{
    setShow(false)
    document.body.style.overflowY="visible";
}
console.log(show);
  return (
    <>
      <div name="contact" className="flex  h-screen flex-col items-start justify-normal  bg-[#0a192f]  relative p-3" id="contact">
      {
        show && <Modal onmodal={handleModal}></Modal>
      }
      
        <div className="mx-6 md:mx-12 mt-6  flex justify-normal items-start flex-col ">
          <h1 className="text-2xl md:text-5xl text-[#ccd6f6] font-bold border-b-4  border-b-red-400 ">
            {" "}
            Contact
          </h1>
          <h2 className="text-sm md:text-2xl py-4 w-3/4 text-[#ccd6f6]">
            Submit the form below or shoot me an email- someshnaruka30@gmail.com
          </h2>
        </div>
        <form
          ref={form}
          className= "flex mx-6 md:mx-12 flex-col justify-normal gap-2 h-full p-4  items-center   text-black  w-3/4"
        >
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            value={data.from_name}
            className="md:w-3/4 w-full p-1 text-xs md:text-xl bg-[#ccd6f6]"
            onChange={handlechange}
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            value={data.user_email}
            onChange={handlechange}
            className="md:w-3/4 w-full p-1 text-xs md:text-xl bg-[#ccd6f6]"
          ></input>
          <textarea
            placeholder="Message"
            rows="5"
            name="message"
            value={data.message}
            onChange={handlechange}
            className="md:w-3/4 w-full p-1 text-xs md:text-xl bg-[#ccd6f6]"
          ></textarea>
          <input
            onClick={sendEmail}
            value="Submit"
            className="flex text-center mx-auto my-3 border-[1.5px] border-white bg-transparent md:hover:bg-red-400 md:hover:border-red-400 shadow-lg shadow-black px-2 py-1 md:px-3 md:py-2 rounded-md hover:scale-105 duration-200 text-white  text-sm md:text-xl cursor-pointer"
          ></input>
        </form>
      </div>
    </>
  );
}

export default Contact;
