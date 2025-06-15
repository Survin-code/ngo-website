import React from "react";
import pic from "../../public/UPI.jpg"

function Donate()  {
 return (
    <>
    <div name="Donate Now" className="flex flex-col md:flex-row items-center justify-center text-center" >
       
   <div className="md:w-full md:ml-48 md:mr-48 md:mt-20 mt-8 order-1">
    <div className="flex space-x-1 text-2xl md:text-4xl bg-violet-600 text-white text-center justify-center m-8">
    <h3>Donate Now </h3>
    </div>
    <br/>  
    <div className="md:w-118 md:ml-38 md:mr-38 md:mt-5 mt-8">
     <p>
     In the past 5 years, Smit has empowered more than 5000 individuals.
Your support can help us move towards our goal of creating inclusive societies
with empowered families and communities.
     </p>
    </div>
                 <img
                 src={pic}
                 className=" md:w-[210px] md:h-[280px] md:mt-10 md:ml-74  "
                 alt=""
               />
            <div className=" "><p>Scan this QR Code for making online payment.</p>
                <p>If you would like to donate, please contact us first at +91 9824533019.
                </p>
                <br/>
                <br/>
               <ol> <p className="text-2xl">OFFLINE DONATIONS</p>
              <li>  <p>1. Make a cheque in the name of Smit Foundation</p></li>
               <li> <p>2. Direct transfer to Bank Account  </p> </li>
               <li><p>Bank Name: State Bank Of India</p></li>
               <li><p>Account Name:Smit Foundation</p></li>
               <li><p>Account Number:36192308166</p></li>
               <li><p>For any donations related query, you may contact our fundraising coordinator:
               </p></li>
              <li><p>JEET PAREKH </p></li>
Phone: +91 9824533019
<p>Email: Smitfoundation59@gmail.com </p> </ol>
                </div>
             
             </div>
             </div>

    </>
);
}

export default Donate;