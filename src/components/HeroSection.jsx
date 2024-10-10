import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const images = [
    "/img/dmz.png",
    "/img/jeju.png",
    "/img/kioto.png",
    "/img/Palawan.png",
  ];

  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination]} // Dodanie modułów
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
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
