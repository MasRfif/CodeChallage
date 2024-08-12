"use client";
import { useState } from "react";
import Image from "next/image";

const Testimonial = ({
  name,
  jobTitle,
  testimonial,
  imageUrl,
}: {
  name: string;
  jobTitle: string;
  testimonial: string;
  imageUrl: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center bg-black space-y-4">
      <Image
        src={imageUrl}
        alt={`${name} profile picture`}
        width={100}
        height={100}
        className="rounded-full"
      />
      <p className="font-bold text-lg">{name}</p>
      <p className="text-gray-500">{jobTitle}</p>
      <p className="text-gray-700">{testimonial}</p>
      <div className="flex space-x-2">
        <i className="fa fa-star text-yellow-500"></i>
        <i className="fa fa-star text-yellow-500"></i>
        <i className="fa fa-star text-yellow-500"></i>
        <i className="fa fa-star text-yellow-500"></i>
        <i className="fa fa-star text-yellow-500"></i>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      jobTitle: "Web Developer",
      testimonial:
        "Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque diam libero facilisis libero. Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus metus quis, elementum nunc. 99",
      imageUrl: "/images/john-doe.jpg",
    },
    {
      name: "Jane Doe",
      jobTitle: "UI/UX Designer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.",
      imageUrl: "/images/jane-doe.jpg",
    },
    {
      name: "Jack Doe",
      jobTitle: "Marketing Manager",
      testimonial:
        "Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
      imageUrl: "/images/jack-doe.jpg",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="relative flex items-center justify-between">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          onClick={handlePrevious}>
          <i className="fa fa-angle-left text-gray-700"></i>
        </button>
        <Testimonial {...testimonials[currentIndex]} />
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          onClick={handleNext}>
          <i className="fa fa-angle-right text-gray-700"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
