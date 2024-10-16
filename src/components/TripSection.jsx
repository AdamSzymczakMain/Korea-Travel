import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React from "react";
import { itemsTrip } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";

const TripSection = () => {
  return (
    <div className="mt-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: "swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {itemsTrip.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-white max-w-xs h-84 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col justify-center text-center gap-3 m-6 ">
              <img
                className="rounded-xl object-cover"
                src="/img/Palawan.png"
                alt={"Image of ${item.name}"}
              />
              <h1 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h1>
              <p className="text-gray-600">{item.description}</p>
              <button className="bg-black text-white p-2 rounded-xl cursor-pointer">
                Zarezerwuj
              </button>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center gap-4 p-5 ">
          <div className="bg-pink-500 rounded-full p-2 text-white swiper-button-prev">
            <ArrowBigLeft />
          </div>
          <div className="bg-pink-500 rounded-full p-2 text-white swiper-button-next">
            <ArrowBigRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default TripSection;
