import React from "react";

export default function MediaManagement() {
  return (
    <div className="bg-[url(images/nasa-8.png)] sm:h-screen sm:bg-cover bg-center relative">
      <div className="pt-1 sm:pt-4">
        <div className="sm:bg-[url(images/linearTitle.png)] p-2 sm:w-[50%] sm:p-7 lg:p-10 sm:m-10 m-5 sm:absolute top-10 xl:left-5 shadow-2xl 2xl:p-10">
          <h1 className="font-bold text-white text-[40px] sm:text-[60px] xl:w-[50%]">
            Media Management
          </h1>
          <p className="text-white sm:text-[20px] font-thin xl:w-[80%]">
            Media management is a term used for several related tasks throughout
            post-production. In general, any task that relates to processing
            your media is considered to be part of media management, such as
            capturing and compressing.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap pb-[4rem] sm:pb-0 pl-7 sm:pl-0 flex-row gap-5 w-[90%] pt-10 sm:gap-10 sm:w-[47%] lg:w-[40%] xl:w-[42%] 2xl:w-[37%] sm:absolute sm:right-0 lg:right-0 text-white lg:bottom-10 xl:right-0 xl:pl-[6rem] font-bold sm:p-7 sm:pt-0">
        <div className="flex flex-col pt-6 gap-10 p-2 sm:gap-0 sm:p-6 items-center relative">
          <img
            src="images/wifi.png"
            alt="OTT SERVICES"
            className="w-[40%] sm:w-[65%] lg xl:w-[60%]"
          />
          <h1 className="sm:absolute bottom-5 right-7 w-[50%] sm:w-auto text-center">
            OTT SERVICES
          </h1>
        </div>
        <div className="bg-[url(images/leaner.png)] flex flex-col gap-6 p-4 sm:p-6 items-center shadow-2xl w-[48%] 2xl:w-[40%] text-center">
          <img
            src="images/Media.png"
            alt="MEDIA SERVICES"
            className="w-[40%] sm:w-[40%] xl:w-[35%]"
          />
          <h1>MEDIA SERVICES</h1>
        </div>
        <div className="bg-[url(images/leaner.png)] flex flex-col gap-4 p-8 items-center shadow-2xl w-[47%] 2xl:w-[40%] text-center">
          <img
            src="images/web.png"
            alt="WEB SERVICES"
            className="w-[55%] sm:w-[50%] xl:w-[40%]"
          />
          <h1>WEB SERVICES</h1>
        </div>
        <div className="flex flex-col gap-6 p-6 items-center absolute right-7 sm:right-[1rem] lg:right-[5rem] xl:right-10 bottom-[4rem] sm:bottom-6 lg:bottom-0 text-center 2xl:right-[6rem]">
          <img
            src="images/hybrid.png"
            alt="HYBRID SERVICES"
            className="w-[40%] sm:w-[57%] xl:w-[55%]"
          />
          <h1 className="w-[50%] sm:w-auto text-center">HYBRID SERVICES</h1>
        </div>
      </div>
    </div>
  );
}
