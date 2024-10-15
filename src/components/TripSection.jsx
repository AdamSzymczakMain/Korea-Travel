import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {} from "swiper/modules";

import React from "react";
import { itemsTrip } from "../constants";

const TripSection = () => {
  return (
    <>
      <div className="flex overflow-hidden">
        <Swiper className="w-full h-full">
          {itemsTrip.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center max-w-60 h-80 my-6 overflow-hidden shadow rounded-xl cursor-grab m-2"
            >
              <div className="relative grid grid-flow-dense custom h-full select-none p-4 bg-gradient-to-t from-pink-500 to-purple-500 text-white">
                <img
                  className="max-h-full pointer-events-none select-none rounded-lg shadow "
                  src={item.image}
                  alt="Image ${item.name}"
                />
                <h2 className="text-center">{item.name}</h2>
                <p className="text-center">{item.description}</p>
                <button className="flex justify-center items-center font-normal bg-white rounded-xl cursor-pointer mt-2 text-black">
                  Wybieram wycieczkę
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <button>
          {" "}
          <ArrowBigLeft />
        </button>
        <button>
          {" "}
          <ArrowBigRight />
        </button>
      </div>
    </>
  );
};

export default TripSection;
