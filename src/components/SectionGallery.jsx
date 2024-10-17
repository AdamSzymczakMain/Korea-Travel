import React, { useState } from "react";

const SectionGallery = () => {
  const images = [
    { src: "/img/kioto.png" },
    { src: "/img/kioto.png" },
    { src: "/img/kioto.png" },
    { src: "/img/kioto.png" },
    { src: "/img/kioto.png" },
    { src: "/img/kioto.png" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [zIndex, setZIndex] = useState(0);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const getImageClasses = (index) => {
    const baseClasses =
      "w-full shadow-2xl transform transition-transform duration-500 origin-center cursor-pointer ";
    const activeClasses =
      activeIndex === index
        ? "scale-110 z-10 rounded-xl md:scale-125 transition-opacity duration-500"
        : "rounded-xl";

    const roundedClasses = [
      index === 0 && "md:rounded-tl-3xl md:origin-top-left",
      index === 1 && "md:origin-top",
      index === 2 && "md:rounded-tr-3xl md:origin-top-right",
      index === 3 && "md:rounded-bl-3xl md:origin-bottom-left",
      index === 4 && "md:origin-bottom",
      index === 5 && "md:rounded-br-3xl md:origin-bottom-right",
    ]
      .filter(Boolean)
      .join(" ");

    return `${baseClasses} ${roundedClasses} ${activeClasses}`;
  };
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-2 m-2 h-500">
      {images.map(({ src }, index) => (
        <img
          key={index}
          src={src}
          alt=""
          onClick={() => handleClick(index)}
          className={getImageClasses(index)}
        />
      ))}
    </div>
  );
};

export default SectionGallery;
