import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
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
        modules={[Autoplay, Pagination]}
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
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover relative"
            />
            <p className="absolute bottom-0 left-1  m-4 text-white z-50">
              {src.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
