import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Skincare = () => {
  const b = [
    {
        "SKIN CARE and PERSONAL CARE": [
          {
            product: "Calcium thioglycolate",
            comment : "It is the calcium salt of thioglycolic acid,an active ingredient in some hair removal products"

          },
          {
            product: "DL-Mandelic acid",
            comment : "It is very useful in suppressing pigmentation,rejuvenating photoaged skin"
          },
          {
            product: "Isorbide-2,5 dithioglycolate",
            comment :"It is used to stabilize, solvate, and deliver active ingredients into the skin" 
          },
          {
            product: "Lauryl Lactyl Lactate",
            comment : "It act as an emollient, moisturizer, and emulsifier, derived from lauryl alcohol and lactic acid."
          },
          {
            product: "Magnolol",
            comment : "It can be obtained from the bark of the Magnolia officinalis plant,soothing effect on skin irritations, reduces pigmentation "
          },
          {
            product: "n-Butyl Resorcinol",
            comment : "Resorcinol is considered as the most potent inhibitor of tyrosinase,as an effective skin lightener"
          },{
            product : "Potassium thioglycolate",
            comment : "It is an active ingredient in hair depilatory formulations"
          },{
            product : "Sodium lauryl lactylate",
            comment : "It enhance product formulation, act as an emulsifier, thickener, and surfactant"
          },
        ],
      },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(null);
  const toggleComment = (index) => {
    setIsOpen(!isOpen);
    setselectedIndex(index);
  };
  return (
    <>
     <div className="w-full md:flex  justify-center">
        <div className="md:w-full md:flex  ">
          <div className=" md:w-full ">
            {b.map((category, _index) => {
              return (
                <div
                  key={_index}
                  className="pl-[25px] pr-[25px] md:mt-[24px] mt-10 m-5 pb-5 pt-2 border-2 rounded-md border-black   bg-gray-50 "
                  data-aos="fade-up-left"
                  style={{
                    // boxShadow:"10px 10px lightblue"
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="text-center md:pt-3 md:pb-4 pb-2 ">
                    <span
                      id={Object.keys(category)[0]}
                      className="pl-1  font-semibold text-green-800 font-fira-neue  md:text-4xl"
                    >
                      {Object.keys(category)[0]}
                    </span>
                  </div>
                  {category[Object.keys(category)[0]].map((ele, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          onClick={() => toggleComment(index)}
                          className={` border cursor-pointer rounded-sm border-black mt-2 ${
                            index % 2 === 0
                              ? "bg-green-300 hover:bg-green-200 text-black"
                              : "bg-yellow-200 hover:bg-yellow-100"
                          }`}
                        >
                          <li
                            className="flex justify-between products-center pl-3  md:py-2 py-1"
                          

                          >
                            <span className="md:text-lg text-sm md:font-semibold  hover:font-bold">
                              {ele.product}
                            </span>
                          </li>
                        </div>
                        {isOpen && index === selectedIndex && (
                          <div className=" h-max w-full flex mt-3 justify-end text-lg font-normal">
                            <BsArrowReturnRight className=" mt-1 text-3xl md:text-4xl mr-1 ml-2" />
                            <span
                            data-aos="fade-left"
                              className="w-11/12 px-3 py-2  bg-white border hover:bg-gray-100 border-black md:text-lg text-sm text-black md:font-semibold rounded-md "
                              style={{
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                              }}
                            >
                              {
                                category[Object.keys(category)[0]][
                                  selectedIndex
                                ].comment
                              }
                            </span>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skincare;
