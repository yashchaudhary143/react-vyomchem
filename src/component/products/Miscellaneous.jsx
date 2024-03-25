import React from "react";

const Miscellaneous = () => {
  const b = [
    {
        "Active & Miscellaneous": [
          {
            product: "Acrysol k 140,K-150",
          },
          {
            product: "Acrypol 912G",
          },
          {
            product: "Acetyl Hexapeptide",
          },
          {
            product: "Alpha arbutin",
          },
          {
            product: "Aminexil ",
          },
          {
            product: "Arbutin",
          },
          {
            product: "Ascorbyl Glucoside ",
          },
          {
            product: "Ascorbyl palmitate",
          },
          {
            product: "Beta arbutin",
          },
          {
            product: "Betaine Salicylate",
          },
          {
            product: "Carbomer 940",
          },
          {
            product: "Carbomer 934",
          },
          {
            product: "Copper peptide ",
          },
          {
            product: "Corn hydrolysate protein",
          },
          {
            product: "Ethyl ascorbic acid",
          },
          {
            product: "Glycolic acid 99%",
          },
          {
            product: "Hyaluronic acid",
          },
          {
            product: "Keratin hydrolysate protein",
          },
          {
            product: "Kojic acid",
          },
          {
            product: "Kojic acid dipalmitate",
          },
          {
            product: "Lacto calamine",
          },
          {
            product: "L-Glutathione reduced",
          },
          {
            product: "Magnesium Ascorbyl Phosphate (MAP)",
          },
          {
            product: "Minoxidil",
          },
          {
            product: "Minoxidil sulphate",
          },
          {
            product: "Niacinamide",
          },
          {
            product: "Potassium hydroxide pellets",
          },
          {
            product: "Silk protein",
          },
          {
            product: "Sodium  Ascorbyl phosphate",
          },
          {
            product: "Sodium Hyaluronate",
          },
          {
            product: "Titagen's Marine Collagen",
          },
          {
            product: "Tranexamic acid",
          },
          {
            product: "Trehalose",
          },
          {
            product: "Vitamin A Palmitate",
          },
          {
            product: "Wheat hyrdolysate protein",
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

export default Miscellaneous;