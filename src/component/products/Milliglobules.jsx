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
              <div key={index} className="pl-[25px] pr-[25px] mt-4">
                <div className="text-center pb-4">
                  <span
                    id={Object.keys(category)[0]}
                    className="pl-1 border-b-2 font-semibold border-black text-4xl"
                  >
                    {Object.keys(category)[0]}
                  </span>
                </div>
                {category[Object.keys(category)[0]].map((ele, index) => {
                  return (
                    <div key={index} className="bg-green-400 hover:text-black hover:bg-green-200 mt-2">
                      <li className="flex justify-between products-center pl-1 py-2">
                        <span className="text-lg font-semibold hover:font-bold">{ele.product}</span>
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