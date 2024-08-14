"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CarouselFood = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesFood = [
    "https://headsupfortails.com/cdn/shop/files/WhiskasOceanFishAdultDryCatFood_f5bbf1f9-31dd-433e-99bd-00582d979f60.jpg?v=1715949708",
    "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//109/MTA-8789194/me-o_meo_cat_food_persian_me-o_makanan_kucing_7_kg_full01_qrj54xbr.jpg",
    "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/2/c5aceceb-9980-4b13-88d6-02d6a5da75a8.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imagesFood.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, imagesFood]);

  return (
    <div className="carousel max-h-[450px] rounded-box max-w-[350px]">
      <div className="carousel-inner relative overflow-hidden w-full">
        <div
          className="flex transition duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
          {imagesFood.map((image, index) => (
            <div key={index} className="carousel-item w-full">
              <Image
                src={image}
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarouselFood;
