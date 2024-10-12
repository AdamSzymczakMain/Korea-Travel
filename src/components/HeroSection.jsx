import { CircleChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const images = [
    { image: "/img/dmz.png", text: "KOREA" },
    { image: "/img/jeju.png", text: "ASDASD" },
    { image: "/img/kioto.png", text: "TOKIO" },
    { image: "/img/Palawan.png", text: "JEJU" },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // effect="fade"
        // fadeEffect={{
        //   crossFade: true,
        // }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover relative"
              style={{ height: "calc(100svh)" }}
            />
            <p className="absolute bottom-0 left-1 m-4 text-white z-50">
              {src.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none text-black ">
        <a
          href="#"
          className=" pointer-events-auto bg-white border-2 rounded-full bg-opacity-50 p-1 px-4"
        >
          Dowiedz się więcej
          <span className=" flex justify-center pt-1 ">
            {<CircleChevronDown className=" ml-2 " />}
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
