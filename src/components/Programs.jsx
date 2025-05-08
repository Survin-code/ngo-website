import React from "react";
import img1 from "../../public/img1.jpeg";
import img2 from "../../public/img2.jpeg";
import img3  from "../../public/img3.jpeg";
import img4 from "../../public/img4.jpeg";
import img5 from "../../public/img5.jpeg";
import img6 from "../../public/img6.jpeg";
import img7 from "../../public/img7.jpeg";
import img8 from "../../public/img8.jpeg";
function Programs() {
  const cardItem = [
    {
      id: 1,
      logo: img1,
      name: "Slum Education",
      text: "We provide free, quality education to slum children, equipping them with skills for their brighter future.",
    },
    {
      id: 2,
      logo: img2,
      name: "Distribution Activities",
      text:"Our NGO distributes essential supplies-books,clothes and hygiene kits to undeserved families.",
    },
    {
      id: 3,
      logo: img3,
      name: "Food Distribution",
      text: "Through Weekly meal programs, we combat hunger by nourishing vulnerable communities especially children.",
    },
    {
      id: 4,
      logo: img4,
      name: "Festival Celebration",
      text: "We organize festival events for marginalized groups, spreading joy and fosters cultural unity through food and performance ",
    },
    {
      id: 5,
      logo: img5,
      name: "Doctor CheckUps",
      text: "free medical camps offer health screening,medicines and awaewness session for bridging the gap in heathcare access.",
    },
    {
      id: 6,
      logo: img6,
      name: "Yoga Session",
      text:"Yoga and welness workshops promote physical and mental health, empowering to adopt healthier lifesyle.",
    },
    {
        id: 7,
        logo: img7,
        name: "New Place Tours",
        text: "We took underprivileged children on education tours to museums,parks broadening their inspiring dreams.",
      },
      {
        id: 8,
        logo: img8,
        name: "Upliftment Activities",
        text: "Our vocational training, holistic programs empower communities to break the cycle of powerty.",
      },
  ];
  return (
    <div
      name="Programs"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Programs</h1>
        {/* <span className=" underline font-semibold">Events</span> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name,text }) => (
            <div
              className="md:w-[220px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[220px] h-[120px] p-1  border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {text}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs