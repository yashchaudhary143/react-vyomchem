import React from "react";

const Milliglobules = () => {
  const b = [
    {
        Milliglobules: [
          {
            product: "Aloe Gold Milliglobules ",
          },
          {
            product: "Apricot Colour Microbeads ",
          },
          {
            product: "Black Milliglobules ",
          },
          {
            product: "Blue  Milliglobules ",
          },
          {
            product: "Bisabolol extract",
          },
          {
            product: "Blue Wheat Germ Milliglobules ",
          },
          {
            product: "Bluish Green Milliglobules ",
          },
          {
            product: "Brown Milliglobules ",
          },
          {
            product: "Charcoal Black Microbeads ",
          },
          {
            product: "Charcoal Black Milliglobules ",
          },
          {
            product: "Dark Blue  Milliglobules ",
          },
          {
            product: "Dark Brown Microbeads ",
          },
          {
            product: "Dark Green Milliglobule ",
          },
          {
            product: "Deep Maroon Milliglobules ",
          },
          {
            product: "Golden Yellow Microbeads ",
          },
          {
            product: "Golden Yellow Milliglobules ",
          },
          {
            product: "Gold Microbeads  ",
          },
          {
            product: "Gold Milliglobules ",
          },
          {
            product: "Gold Square Pieces",
          },
          {
            product: "Gray Milliglobules ",
          },
          {
            product: "Green Microbeads",
          },
          {
            product: "Green Milliglobues ",
          },
          {
            product: "Green Tea Tree Milliglobules ",
          },
          {
            product: "Jojoba Yellow Milliglobules ",
          },
          {
            product: "Kojic Soft Golden Milliglobules ",
          },
          {
            product: "Lemon Yellow  Milliglobules ",
          },
          {
            product: "Light Blue Microbeads ",
          },
          {
            product: "Light Green Milliglobules ",
          },
          {
            product: "Light Red Milliglobules ",
          },
          {
            product: "Orange Milliglobules ",
          },
          {
            product: "Orange Microbeads",
          },
          {
            product: "Orange Milliglobules ",
          },
          {
            product: "Orange Soap Beads ",
          },
          {
            product: "Papaya Milliglobules",
          },
          {
            product: "Pink Microbeads  ",
          },
          {
            product: "Pink Milliglobules ",
          },
          {
            product: "Purple Milliglobues ",
          },
          {
            product: "Red Lotus Milliglobules ",
          },
          {
            product: "Red Microbeads ",
          },
          {
            product: "Red Miliglobules ",
          },
          {
            product: "Shiny Blue/Green/Yellow/ Milliglobules ",
          },
          {
            product: "Shiny Gold/Black/Silver/ Microbeads ",
          },
          {
            product: "Silver Milliglobules ",
          },
          {
            product: "Silver Square Pieces",
          },
          {
            product: "Silver White Milliglobules ",
          },
          {
            product: "Violet Microbeads ",
          },
          {
            product: "Violet Milliglobules ",
          },
          {
            product: "Watermelon Look Alike Pieces",
          },
          {
            product: "White Microbeads ",
          },
          {
            product: "White Miliglobules ",
          },
          {
            product: "Yellow Microbeads ",
          },
          {
            product: "Yellow Milliglobules ",
          },
        ],
      },
  ];

  return (
    <>
     <div className="w-full md:flex  justify-center">
        <div className="md:w-full md:flex  ">
          <div className=" md:w-full ">
          {b.map((category, index) => {
              return (
                <div key={index} className="pl-[25px] pr-[25px] md:mt-[24px] mt-10 m-5 pb-5 pt-2 border-2 rounded-md border-black   bg-gray-50 " data-aos="fade-up-left" style={{
                  // boxShadow:"10px 10px lightblue"
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",


                }} >
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
                      <div
                        key={index}
                        className={` border rounded-sm border-black mt-2 ${
                          index % 2 === 0 ? 'bg-green-300 hover:bg-green-200 text-black' : 'bg-yellow-200 hover:bg-yellow-100'
                        }`}
                      >
                        <li className="flex justify-between products-center pl-3 md:py-2 py-1">
                          <span className="md:text-lg text-sm md:font-semibold hover:font-bold">
                            {ele.product}
                          </span>
                        </li>
                      </div>
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

export default Milliglobules;
