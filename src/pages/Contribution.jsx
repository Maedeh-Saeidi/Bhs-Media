import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow } from "swiper/modules";

export default () => {
  return (
    <div className="bg-[#031534] h-[35rem] sm:h-screen bg-[url('images/spaceTerrestrialL.jpg')] bg-no-repeat bg-cover">
      <h1 className="text-center text-[35px] lg:text-[60px] font-bold text-[#fcfdff] pt-[4rem] sm:pt-[7rem] xl:pt-[8rem] ">
        Contribution Services
      </h1>
      <Swiper
        speed={500}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        className="pt-[5rem]"
        loop={true}
        modules={[
          Navigation,
          Autoplay,
          Pagination,
          Scrollbar,
          A11y,
          EffectCoverflow,
        ]}
        spaceBetween={50}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className=" text-white h-[15rem] p-10 text-[25px] sm:text-[40px] bg-gradient-to-t from-transparent to-gray-700">
          <h1 className="text-center pr-1 pt-8">
            Badr <br /> 4/5/6
          </h1>
        </SwiperSlide>
        <SwiperSlide className=" text-white h-[15rem] p-10 text-[25px] sm:text-[40px] bg-gradient-to-t from-transparent to-gray-700">
          <h1 className="text-center pr-1 pt-8">
            Eutelsat <br />
            33B
          </h1>
        </SwiperSlide>
        <SwiperSlide className=" text-white h-[15rem] p-10 text-[25px] sm:text-[40px] bg-gradient-to-t from-transparent to-gray-700">
          <h1 className="text-center pr-1 pt-8"> Eutelsat 3B </h1>
        </SwiperSlide>
        <SwiperSlide className=" text-white h-[15rem] p-10 text-[25px] sm:text-[40px] bg-gradient-to-t from-transparent to-gray-700">
          <h1 className="text-center pr-1 pt-8">
            Intelsat <br />
            1002
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
