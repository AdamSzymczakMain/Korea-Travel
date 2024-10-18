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

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-2 m-2 h-500">
      {images.map(({ src }, index) => (
        <img
          key={index}
          src={src}
          className="w-full h-auto shadow-2xl rounded-xl"
        />
      ))}
    </div>
  );
};

export default SectionGallery;
