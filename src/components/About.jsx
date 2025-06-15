import React from "react";
import jsPDF from "jspdf";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          The Smit Foundation, founded in 2012, is an NGO in India as a Public Charitable Trust and is based in Ahmedabad, Gujarat. Smit closely works with deprived communties and empowers the socially marginalized by providing them livelihood services, and imparting skills leading to employment, health and education facilities. Smit focuses on livelihood services, child rights, human rights, young girls’ education, skill development and other community services. 
        </p>
        <br />

        <span>
        The Smit Foundation initiated when a group of friends came togather with the intention of giving back to the society. Over the last one decade, Smit Foundation has evolved as a sustainable institution to do real work on ground for Upliftment of poor and helpless people.
  
        </span>
        
        <br />
        <h1 className="text-green-600 font-semibold text-xl text-center">
          Mission
        </h1>
        <br/>
        <span>
        To make human settlements equitable living environments where all residents and vulnerable people have access to health, education, essential infrastructure services and livelihood options, irrespective of their economic and social status
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl text-center">
          Vision
        </h1>
        <span>
        Smit Foundation envisions a world where every individual has the opportunity to thrive in a just, equitable, and sustainable society-free from poverty,discrimination and injustice. 
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl text-center">
          Focus Area
        </h1>
        <span>
          Child Education, Child Health & Nutrition, Stop Child Labour, Support Girl Child Education.
        </span>
        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl text-center">
          Annual Report
        </h1>
        <span>
          Checkout Our Annual Report below.





        </span>

        {/* <h1 className="text-green-600 font-semibold text-xl">
          Team &Leadership
        </h1> */}

      </div>
    </div>
  );
}

export default About;