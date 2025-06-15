import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FiMail } from "react-icons/fi";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bmdkzdra", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact Us"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-2 ml-0 p-8 ">Contact Us</h1>
        <span>Please fill out the form below for contact</span>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>

            {/* <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                {...register("phone", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your phone number"
              />
              {errors.phone && <span>This field is required</span>}
            </div> */}

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your query"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
        <div className="  space-y-2">
                        <h1 className="font-bold text-center text-2xl mt-6">Enquire Now</h1>
                        <ul className="flex space-x-5 flex-col md:w-100 md:mt-5">
                          <li>
                            <a href="https://www.google.com/maps/search/smit+foundation+ahmedabad/@23.0388602,72.5054642,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank">
                              <IoLocationSharp
                              className="text-2xl cursor-pointer" />
                            </a>
                            <span className=" ">BG Tower, E / 637, Shahibaug Rd., opp. Delhi Darwaja, Bhadreshwar Society, Kazipur Dariyapur, Ahmedabad, Gujarat 380004
                             </span>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/Smitfoundation.India/" target="_blank">
                              <MdCall
                              className="text-2xl cursor-pointer flex" />
                            <p>
                            +91 9824533019
                            </p>
                            </a>
                          </li>
                          <li>
                        
                              <FiMail
                              className="flex text-2xl cursor-pointer flex-row " />
                          <li >Smitfoundation59@gmail.com</li>  
                          
                          </li>
                          </ul>
          </div>
      </div>
    </>
  );
}

export default Contact;