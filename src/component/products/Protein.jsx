import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Protein = () => {
  const b = [
    {
        "PROTEINS AND AMINO ACIDS": [
          {
            product: "Hydrolyzed Barley protein",
            comment :  "It is made from golden barley. Anti- Irritating, Moisturizing and strengthen skin's natural protection barrier."
          },
          {
            product: "Hydrolyzed Collagen",
            comment :  "It slow down skin ageing and provide suppleness to hair. Act as emollient, film-former, and skin-conditioning agent"
          },
          {
            product: "Hydrolyzed Keratin",
            comment :  "It is derived from wool/feather, repair, moisturizes and conditions both skin and hair "
          },
          {
            product: "Hydrolyzed Linseed seed",
            comment :  "It promote the alignment of hair fibers, reducing frizz,derived from Flaxseed"
          },
          {
            product: "Hydrolyzed Milk protein",
            comment :  "It act as skin and hair conditioning agent"
          },
          {
            product: "Hydrolyzed Oat protein",
            comment :  "Derived from oat, acts as a moisturizing, elasticizing, anti-wrinkle and vitalizing agent "
          },
          {
            product: "Hydrolyzed Quinoa",
            comment :  "It helps repair damage, enhance shine and protect color,derived from Quinoa seed"
          },
          {
            product: "Hydrolyzed Rice protein",
            comment :  "It has excellent moisturizing properties, helps to improve hair strength and elasticity, and promotes skin hydration."
          },
          {
            product: "Hydrolyzed Soy protein",
            comment :  "It promotes skin tissue metabolism and repair functions. Acts as conditioning, hair softening and moisture retentive agent"
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
                          className={` border rounded-sm border-black mt-2 ${
                            index % 2 === 0
                              ? "bg-green-300 hover:bg-green-200 text-black"
                              : "bg-yellow-200 hover:bg-yellow-100"
                          }`}
                        >
                          <li
                            className="flex justify-between products-center pl-3 md:py-2 py-1"
                            // onMouseEnter={() => toggleComment(index)}
                          onClick={() => toggleComment(index)}
                          

                          >
                            <span className="md:text-lg text-sm md:font-semibold hover:font-bold">
                              {ele.product}
                            </span>
                          </li>
                        </div>
                        {isOpen && index === selectedIndex && (
                          <div className=" h-max w-full flex mt-3 justify-end text-lg font-normal">
                            <BsArrowReturnRight className=" mt-1 text-3xl md:text-4xl mr-1 ml-2" />
                            <span
                              className="w-11/12 px-3 py-2  bg-orange-300 hover:bg-orange-200 md:text-lg text-sm text-black md:font-semibold rounded-md "
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

export default Protein;
