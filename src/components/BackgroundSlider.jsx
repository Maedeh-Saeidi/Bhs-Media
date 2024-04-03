import React, { useEffect, useState } from "react";
import { Fade, Zoom, Slide } from "react-slideshow-image";
export default function BackgroundSlider() {
  const imageSlider = [
    {
      url: "images/satelliteM.jpg",
      title: "BHS",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, maxime officiis. Et ipsam at animi distinctio, quia autem ex eius dignissimos sed consectetur modi. Itaque quis saepe cupiditate reiciendis nostrum.",
    },
    {
      url: "images/earthSatellite.jpg",
      title: "BHS",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, maxime officiis. Et ipsam at animi distinctio, quia autem ex eius dignissimos sed consectetur modi. Itaque quis saepe cupiditate reiciendis nostrum.",
    },
    {
      url: "images/earth.jpg",
      title: "BHS",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, maxime officiis. Et ipsam at animi distinctio, quia autem ex eius dignissimos sed consectetur modi. Itaque quis saepe cupiditate reiciendis nostrum.",
    },
  ];
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlider[currentState].url})`,
    backgroundSize: "cover",
    transition: "background-image 1s ease-in-out",
  };
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };

  return (
    <div className="h-screen ">
      <div style={bgImageStyle} className="h-[80%] sm:h-[100%] bg-center"></div>

      <div className="w-full h-[80%] sm:h-[100%] absolute z-[998] top-0 left-0 bg-gradient-to-t from-transparent to-gray-900"></div>
      <div className="sm:w-[600px] absolute z-[999] text-white sm:left-[20%] top-[20%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-[45px] sm:text-[80px] ml-[10%] sm:ml-0">
            {imageSlider[currentState].title}
          </h1>
          <p className="sm:text-[22px] ml-[10%] sm:ml-0">
            {imageSlider[currentState].body}
          </p>
        </div>
        <div className="pt-[3rem] pl-10 sm:pl-0">
          <button class="bg-[#3ccaf4] hover:bg-[#a6aaaf] text-white font-bold py-3 px-[7.5rem] sm:px-10 rounded">
            Learn More
          </button>
        </div>
        <div className="flex items-center justify-center gap-[10px] pt-[11rem] sm:pt-[3rem] sm:pr-[24rem]">
          {imageSlider.map((imageSlider, currentState) => (
            <span
              className="w-[105px] sm:w-[65px] h-[6px] bg-gray-400 rounded-[2px] cursor-pointer shadow-lg"
              key={currentState}
              onClick={() => goToNext(currentState)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
