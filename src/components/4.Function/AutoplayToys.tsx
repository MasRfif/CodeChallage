"use client";
import React, { useState, useEffect } from "react";

const CarouselToys = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToys = [
    "https://images-cdn.ubuy.co.id/63b0ecdf70341422617149a5-podoo-3-pack-of-catnip-toys-teeth.jpg",
    "https://m.media-amazon.com/images/I/71eYpjdkSPL.jpg",
    "https://i5.walmartimages.com/asr/eba535e9-735e-43e6-9f4e-b798542d5e9e.6d47cd4fead4623d03b28291d022a40f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imagesToys.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex, imagesToys]);

  return (
    <div className="carousel max-h-[450px] rounded-box max-w-[350px]">
      <div className="carousel-inner relative overflow-hidden w-full">
        <div
          className="flex transition duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
          {imagesToys.map((image, index) => (
            <div key={index} className="carousel-item w-full">
              <img
                src={image}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarouselToys;
