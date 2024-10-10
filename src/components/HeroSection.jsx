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
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none flex-col">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded pointer-events-auto">
          Stwórz najlepsze wspomnienia
        </h1>
        <h2 className="text-white text-2xl sm:text-3xl mb-16 md:mb-64 lg:text-5xl xl:text-6xl font-bold text-center px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded pointer-events-auto">
          Podróżując z nami
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
