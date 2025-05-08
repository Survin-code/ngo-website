import React from "react";
import pic from "../../public/img9.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
           
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>We Brings Smile Through </h1>
               <h1 className="text-red-500">Education & Empowerment</h1> 
                         
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Your smallest contribution makes a big difference to children's lives. We count on the generosity of people like you to be able to create real change for India's children!
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Follow Us On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/Smitfoundation.India/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/smit-foundation-4b3694137" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCAK_474aya2njhFwWkhKkDw" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/smitfoundation.india?igshid=ozzg0y1w80xt" target="_blank">
                      <FaInstagram
                        className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className=" md:w-[400px] md:h-[400px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;