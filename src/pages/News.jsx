import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function News() {
  const News = [
    {
      url: "ses.com",
      imageUrl: "images/BanooJava.jpg",
      date: "March 29, 2024",
      title:
        "Som Sueh Li on Diversity and Inclusion in the Space and Satellite Industry",
    },
    {
      url: "ses.com",
      imageUrl: "images/Money.jpg",
      date: "April 1, 2024",
      title:
        "How Satellite Connectivity Unlocks Financial Inclusion in Remote Nepal",
    },
    {
      url: "ses.com",
      date: "March 26, 2024",
      imageUrl: "images/multiOrbit.jpg",
      title:
        "Intelsat Advances Multi-Orbit Strategy with Expansion of Eutelsat Group LEO Agreement",
    },
  ];

  return (
    <div className="bg-[#031534] sm:h-screen sm:relative text-white">
      <h1 className="font-bold text-[45px] p-10 pb-0 sm:text-[60px] sm:w-[30rem] xl:w-[50rem]">
        Latest News and Events
      </h1>
      <p className="p-10 pb-0 pt-0 font-thin sm:text-[20px] sm:w-[30rem] xl:w-[40rem] xl:pt-5">
        In today's fast-paced digital landscape, staying abreast of the latest
        industry trends and developments is paramount.
      </p>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          1000: {
            slidesPerView: 2, // Show 3 slides when screen width is 640px or more
          },
          1350: {
            slidesPerView: 3, // Show 3 slides when screen width is 640px or more
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="sm:w-[75%] sm:absolute sm:top-[17rem] xl:top-[16rem] right-0 xl:w-[100%] 2xl:top-[14rem]"
      >
        {News.map((newsItem, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg p-10 shadow-4xl">
              <img src={newsItem.imageUrl} alt={newsItem.title} />
              <p className="text-sm text-gray-400 pb-3">{newsItem.date}</p>
              <a href={newsItem.url} className="text-lg font-bold">
                {newsItem.title}
              </a>
              <br></br>
              <a
                href={newsItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-blue-500 hover:underline pt-10"
              >
                Read more
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
