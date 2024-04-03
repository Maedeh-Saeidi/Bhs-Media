import React from "react";

export default function Terrestrial() {
  return (
    <div className="bg-gray-100 flex flex-col sm:flex-row">
      <div className="flex-1 p-8 lg:p-5 2xl:pt-10">
        <h1 className="text-[#374d72] text-[45px] pt-5 font-bold pl-4 lg:text-[40px] xl:text-[46px] xl:pt-10 2xl:text-[55px]">
          Terresterial Services
        </h1>
        <p className="text-[18px] p-3 text-[#787777] lg:text-[15px] lg:p-5 xl:text-[19px] 2xl:text-[21px]">
          whether it is for live events backhaul of production content between
          studios, contribution links are critical to the success of
          broadcasters. Our partners's fiber and teleport services provide media
          customrs with highly reliable "anywhere to anywhere connectivity
          options with a single operational interface"
        </p>
      </div>
      <div className="flex-1 pb-10 lg:p-8 lg:pt-10 xl:pt-10">
        <img src="images/terrestrial (2).png" alt="Terrestrial Services" />
      </div>
    </div>
  );
}
