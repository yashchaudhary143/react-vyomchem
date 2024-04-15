import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { NavLink } from "react-router-dom";
const YourComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    new Typewriter("#hero-title", {
      strings: ["COSMETICS"],
      autoStart: true,
      loop: true,
      // pauseFor: 1500,
    });

    return () => {};
  }, []);
  useEffect(() => {
    new Typewriter("#hero-title2", {
      strings: ["INGREDIENTS"],
      autoStart: true,
      loop: true,
      // pauseFor: 1500,
    });

    return () => {};
  }, []);

  return (
    <div className="relative">
      <div
        id="default-carousel"
        className=" w-full"
        data-carousel="slide"
        style={{ zIndex: -1 }}
      >
        {/* Carousel wrapper */}
        <div
          className=" md:overflow-hidden h-screen  "
          style={{  filter: "brightness(70%) blur(0.5px)" }}
        >
          {/* Item 1 */}
          <div
            className={`duration-700 ease-in-out h-full ${
              currentSlide === 0 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src="./image/banner.jpg"
              className="w-full h-full "
              style={{ objectFit: "cover" }}
              alt="Image 1"
            />
          </div>
          {/* Item 2 */}
          <div
            className={`duration-700 ease-in-out h-full ${
              currentSlide === 1 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src="/image/more.jpg"
              className="w-full h-full "
              style={{ objectFit: "cover" }}
              alt="Image 2"
            />
          </div>
          {/* Item 3 */}
          <div
            className={`duration-700 ease-in-out h-full ${
              currentSlide === 2 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src="/image/WAX.jpg"
              className="w-full h-full "
              style={{ objectFit: "cover" ,filter : 'brightness(90%)' }}
              alt="Image 3"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute md:top[20%] top-[18%] md:z-0 z-[2]  text-black p-8 justify-evenly md:left-[10%] " >
        <div className="flex">
        <div
          className=" md:p-2 p-1 mr-5 sm:mb-0"
          style={{
            // '@media only screen and (max-width: 600px)': {padding:"5",marginTop:"2"},
            // padding: 5,
            // marginLeft:1,
            background: "#7CE6B3",
            marginTop: 3,
            // width: "65%",
            // height:"100%"
          }}
        >

        </div>
        <div>
        <h2
          id="hero-title"
          className="text-4xl sm:text-6xl font-bold   text-white "
        >
          COSMETIC INGREDIENTS
        </h2>
        <h2
          id="hero-title2"
          className="text-4xl sm:text-6xl font-bold   text-white "
        >
        INGREDIENTS
        </h2>
        </div>
        </div>
        <p className="sm:text-lg font-medium mb-8 mt-10  text-white ">
        We're Dedicated to Ensuring Superb Product Excellence!
        </p>
        <NavLink to = "/contact">
        <button className="bg-white text-xl hover:bg-transparent hover:text-white font-bold py-2 px-6 border border-black hover:border-white hover:border-transparent rounded sm:py-3 sm:px-8 md:py-2 md:px-10 lg:py-2 lg:px-8 xl:py-2 xl:px-6 text-black "
        style={{
          boxShadow: "0 4px 6px rgba(5, 5, 0, 0.8) white",
        }}
        >
         Contact Us
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default YourComponent;
