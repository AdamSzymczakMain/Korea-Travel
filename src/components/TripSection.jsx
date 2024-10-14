import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {} from "swiper/modules";

import React from "react";
import { itemsTrip } from "../constants";

const TripSection = () => {
  return (
    <>
      <div className="flex">
        <Swiper>
          {itemsTrip.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="m-24 h-28">
                <img src={item.image} alt="Image ${item.name}" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
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
