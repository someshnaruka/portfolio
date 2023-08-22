import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

function Contact() {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    if (data.from_name && data.user_email && data.message) {
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
            setShow(true);
            setLoading(false);
            document.body.style.overflowY = "hidden";
            setData({
              from_name: "",
              user_email: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      toast("All fields are mandatory");
    }
  };
  function handlechange(e) {
    const { name, value } = e.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    console.log(data);
  }

  function handleModal() {
    setShow(false);
    document.body.style.overflowY = "visible";
  }
  console.log(show);
  return (
    <>
   
      <div
        name="contact"
        className="flex  h-screen flex-col items-start justify-normal  bg-[#0a192f]  relative p-3"
        id="contact"
      >
      
        {show && <Modal onmodal={handleModal}></Modal>}
        

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
          className="flex mx-6 md:mx-12 flex-col justify-normal gap-2 h-full p-4  items-center   text-black  w-3/4"
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
          <button
            onClick={sendEmail}
            readOnly
            className="flex text-center mx-auto my-3 border-[1.5px] border-white bg-transparent md:hover:bg-red-400 md:hover:border-red-400 shadow-lg shadow-black px-3 py-1 md:px-6 md:py-3 md:w-1/6 rounded-md hover:scale-105 duration-200 text-white justify-center text-lg caret-transparent md:text-xl cursor-pointer"
          >
            {" "}
            {isLoading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span>Sending...</span>
              </div>
            ) : (
              <span className="text-lg">Submit</span>
            )}
          </button>
        </form>

      </div>
   
    </>
  );
}

export default Contact;
