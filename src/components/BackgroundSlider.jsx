import React, { useEffect, useState } from "react";

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
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <div className="h-screen">
      <div style={bgImageStyle}></div>
      <div className="w-full h-screen absolute z-[998] top-0 left-0 bg-gradient-to-t from-transparent to-gray-900"></div>
      <div className=" w-[600px] absolute z-[999] text-white left-[20%] top-[20%]">
        <div>
          <h1 className="text-[80px]">{imageSlider[currentState].title}</h1>
          <p className="text-[22px]"> {imageSlider[currentState].body}</p>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          {imageSlider.map((imageSlider, currentState) => (
            <span
              className="w-[45px] h-[10px] bg-gray-400 rounded-[10px] cursor-pointer shadow-lg "
              key={currentState}
              onClick={() => goToNext(currentState)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
