"use client";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  return (
    <div className="carousel rounded-box w-64">
      <div className="carousel-inner relative overflow-hidden w-full">
        <div
          className="flex transition duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
          {images.map((image, index) => (
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
export default Carousel;
