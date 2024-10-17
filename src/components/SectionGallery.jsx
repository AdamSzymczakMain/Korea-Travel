import React, { useState } from "react";

const SectionGallery = () => {
  const images = [
    { images: "/img/kioto.png" },
    { images: "/img/kioto.png" },
    { images: "/img/kioto.png" },
    { images: "/img/kioto.png" },
    { images: "/img/kioto.png" },
    { images: "/img/kioto.png" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-2 m-2 h-500">
      {images.map((items, index) => (
        <img
          key={index}
          src={items.images}
          alt=""
          onClick={() => handleClick(index)}
          className={`${index === 0 ? "rounded-tl-3xl md:origin-top-left" : ""}
        ${index === 1 ? "md:origin-top" : ""}
        ${index === 2 ? "rounded-tr-3xl md:origin-top-right" : ""}
        ${index === 3 ? "rounded-bl-3xl md:origin-bottom-left" : ""}
        ${index === 4 ? "md:origin-bottom" : ""}
        ${index === 5 ? "rounded-br-3xl md:origin-bottom-right" : ""}
        w-full shadow-2xl transform transition-transform duration-500 origin-center  
        ${
          activeIndex === index
            ? "scale-110 z-10 rounded-xl md:scale-125 "
            : "rounded-xl"
        } 
        cursor-pointer `}
        />
      ))}
    </div>
  );
};

export default SectionGallery;
