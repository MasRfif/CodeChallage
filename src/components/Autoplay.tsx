"use client";

import { useEffect, useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Increased interval time to 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel rounded-box w-64">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item w-full ${
            index === activeIndex ? "active" : ""
          }`}>
          <img src={image} className="w-full" alt="Carousel item" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
