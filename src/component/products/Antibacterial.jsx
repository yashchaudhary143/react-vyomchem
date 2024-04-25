import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Antibacterial = () => {
  const b = [
    {
      "ANTI BACTERIAL": [
        {
          product: "Bakuchiol (natural retinol)",
          comment: "Bakuchiol is a natural alternative to a retinoid, helps prevent fine lines and wrinkles, "
        },
        {
          product: "Benzalkonium Chloride",
          comment: "It is used as disinfectants, preservatives, and sanitizers."
        },
        {
          product: "Benzethonium Chloride",
          comment: "It is used in the formulation of bath, skin, personal cleanliness, shaving, and suntan products, Safe for use in leave on cosmetic products"
        },
        {
          product: "Cetyl pyridinium chloride monohydrate",
          comment: "It is used as an antibacterial agent in cosmetics, toiletries. It is an antiseptic that kills bacteria and other microorganisms"
        },
        {
          product: "Chloroxylenol",
          comment: "It is an antiseptic and disinfectant agent, act as a preservative "
        },
        {
          product: "Triclosan",
          comment: "Triclosan is an antimicrobial agent found in a wide variety of antibacterial soaps, detergents, and deodorants"
        },
        {
          product: "Zinc citrate trihydrate",
          comment: "It is an antibacterial ingredient that inhibits the growth of odor-causing bacteria."
        },
        {
          product: "Zinc lactate dihydrate",
          comment: "It has skin-soothing and anti-inflammatory properties, functioning as an emollient, skin conditioning agent, and exfoliant"
        },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const toggleComment = (index) => {
    setIsOpen(!isOpen), setSelectedIndex(index);
  };
  const handleMouseEnter = (index) => {
    setSelectedIndex(index);
  };

  const handleMouseLeave = () => {
    setSelectedIndex(null);
  };

  return (
    <>
    {b.map((categories, _index) => {
      return (
        <div key={_index} className="w-full md:flex">
          <div className="flex-col container md:w-full md:flex mt-5 mb-5">
            <div className="flex justify-center" >
              <span className="md:text-4xl text-sm  md:mt-0 font-bold text-black">
                {Object.keys(categories)[0]}
              </span>
            </div>
            <div className="flex w-full justify-center">
            <div className="flex justify-center xl:w-full w-4/5 ">
            <div className="md:w-full  rounded-md  w-full   mt-5"  style={{ backgroundImage: "url('/image/algae-extract-3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <main className="mx-auto px-4 md:pt-6 pb-6 flex flex-wrap justify-center">
                {/* Map through and render content */}
                {categories[Object.keys(categories)[0]].map((ele, index) => {
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      className="relative text-center rounded-lg m-4 opacity-90 bg-white shadow-md w-64"
                      // style={{ filter: selectedIndex === index ? "none" : "brightness(90%)" }}
                    >
                      <div className="w-64 h-56 bg-white justify-center flex object-cover rounded-lg">
                        <span className="w-full h-full text-xl font-bold items-center justify-center flex">
                          {ele.product}
                        </span>
                      </div>
                      {/* Additional content */}
                      {selectedIndex === index && (
                        <div
                          className="absolute z-10 opacity-100 bg-green-100 top-0 bottom-0 left-0 right-0 hover:scale-110 transition-all"
                          style={{
                            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <div className="flex w-full h-2/6 justify-center text-center items-center">
                            <span className="text-lg p-1 font-semibold text-wrap">
                              {ele.product}
                            </span>
                          </div>
                          <div className="w-full h-1/2 flex i">
                            <span className="p-1 absolute item-center text-center text-sm font-mono flex m-2 text-black">
                              {ele.comment}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </main>
            </div>
            </div>
            </div>
          </div>
        </div>
      );
    })}
</> 

  );
};

export default Antibacterial;
