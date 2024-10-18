import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 my-16">
        <img
          src="/img/pexels-apasaric-2848492.jpg"
          className="p-2 rounded-3xl"
        />
        <div className="p-3">
          <h1 className="mb-2 text-xl font-bold">Jestem XYZ</h1>
          <p>
            Lorem ipsum dolor ssit, amet consectetur adipisicing elit.
            Reprehenderit quae, fugiat quia ad in porro nesciunt ipsam
            perferendis est velit eius ducimus aliquam corporis atque pariatur
            consectetur repudiandae nisi quos.lorem Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nobis praesentium repudiandae maiores
            earum qui voluptatum, quis itaque omnis hic deserunt esse quos
            facere tenetur fugit? Neque laboriosam vitae ut aspernatur!
          </p>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-4 w-full mb-2"></div>
    </>
  );
};

export default AboutSection;
