import React from "react";

export default function MediaManagement() {
  return (
    <div className="bg-[url(images/nasa-8.png)] sm:h-screen sm:bg-cover bg-center relative">
      <div className="pt-1 sm:pt-4">
        <div className="sm:bg-[url(images/linearTitle.png)] p-2 sm:w-[50%] sm:p-7 sm:m-10 m-5 sm:absolute top-10 xl:left-5 shadow-2xl 2xl:p-10">
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
      <div className="flex flex-wrap flex-row gap-5 sm:gap-10 sm:w-[40%] sm:absolute right-10 text-white bottom-10 xl:right-0 xl:pl-[6rem] font-bold p-7 sm:pt-0">
        <div className="flex flex-col p-6 items-center relative">
          <img src="images/wifi.png" width={90} alt="OTT SERVICES" />
          <h1 className="absolute bottom-5 right-2">OTT SERVICES</h1>
        </div>
        <div className="bg-[url(images/leaner.png)] flex flex-col gap-6 p-6 items-center shadow-2xl w-[48%] 2xl:w-[40%]">
          <img src="images/Media.png" width={90} alt="MEDIA SERVICES" />
          <h1>MEDIA SERVICES</h1>
        </div>
        <div className="bg-[url(images/leaner.png)] flex flex-col gap-4 p-8 items-center shadow-2xl w-[47%] 2xl:w-[40%]">
          <img src="images/web.png" width={90} alt="WEB SERVICES" />
          <h1>WEB SERVICES</h1>
        </div>
        <div className="flex flex-col gap-6 p-6 items-center absolute right-5 bottom-[2rem] sm:bottom-0 text-center 2xl:right-[8rem]">
          <img src="images/hybrid.png" width={90} alt="HYBRID SERVICES" />
          <h1 className="">HYBRID SERVICES</h1>
        </div>
      </div>
    </div>
  );
}
