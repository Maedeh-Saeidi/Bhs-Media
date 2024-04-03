import React from "react";

export default function Usage() {
  return (
    <div className="h-[32rem] sm:h-[37rem] 2xl:h-[40rem] bg-[#031534] flex flex-col relative">
      <div className=" text-[#d0d4d8] text-[16px] sm:text-[18px] flex flex-col gap-6 sm:gap-10">
        <h1 className="text-[45px] sm:text-[50px] ml-5 sm:text-center mt-0 sm:mt-[5rem] xl:mt-[10rem] font-bold">
          What we Do
        </h1>
        <div className="flex flex-col sm:flex-row gap-[3rem] sm:justify-center ml-5">
          <p className="w-[22rem] sm:w-[23rem]">
            We are here to build required infrastructure for broadcasting and
            telecommunication services and provide people with cost effective,
            highly efficient services, which allows them to communicate
            properly.{" "}
          </p>
          <p className="w-[23rem] sm:w-[23rem]">
            BHS Telecom aiming community where all people can communicate to
            each other easily without considering their distance- far is close;
            community where people can communicate their messages freely and
            simply. Community where all people can enjoy and entertainment
            broadcast over the globe.
          </p>
        </div>
      </div>
    </div>
  );
}
