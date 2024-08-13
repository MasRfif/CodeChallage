"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../app/Feature/userSlice";
import { useEffect, useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Team() {
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const results = useSelector((state: any) => state.user.users);

  const testimonials = [
    {
      job: "Product Executive",
      testimonial:
        "From the moment I met the PurrfectPaws team, I knew they were the perfect fit for my busy life as a cat mom. Their innovative cat toys and accessories have made my kittens' lives so much more enjoyable. I can't wait to introduce them to my friends and family, and I'm confident that Whisker World will continue to be the purr-fect place for all your feline needs. i like this place more than the other",
    },
    {
      job: "Designer",
      testimonial:
        "As a Designer, I've always been passionate about creating products that not only look great but also have a positive impact on the world. PurrfectPaws's attention to detail and commitment to cat welfare is truly inspiring. Their cat toys and accessories are not just functional, but also feel like a gift to my kitty, Luna. I'm so proud to be part of their team and I can't wait to see what they come up with next!",
    },
    {
      job: "Copywriter",
      jobTitle: "Copywriter",
      testimonial:
        "As a Copywriter, I love crafting compelling stories that resonate with people. PurrfectPaws's commitment to cat welfare and adoption is a story that I'm proud to be a part of. Their website and social media content are filled with heartwarming stories and inspiring images of cats in loving homes. I'm excited to see how they continue to tell the story of cat welfare and adoption, and I'm confident that they'll keep up the amazing work!",
    },
  ];

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(results);

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="flex justify-center ">
      <div className="flex justify-between items-center mt-4">
        <button
          className="p-2 rounded-full hidden md:flex bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          onClick={handlePrevious}>
          <i className="fa fa-angle-left text-gray-700">
            <IoIosArrowBack />
          </i>
        </button>
        <Carousel
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          className="max-w-6xl mx-auto p-4"
          selectedItem={currentIndex}
          onChange={setCurrentIndex}>
          {results.slice(0, 3).map((user: any, index: any) => (
            <div
              key={user.id}
              className="bg-orange-800 w-4/6 md:w-full sm:w-full justify-center md:items-center rounded-xl shadow-md p-6 flex flex-wrap">
              <div className="  ">
                <Image
                  src={user.picture.large}
                  alt={user.name.first}
                  width={600}
                  height={600}
                  className="rounded-full "
                />
              </div>
              <div className="w-3/3">
                <p className="text-white p-2">
                  {testimonials[index].testimonial}
                </p>
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl font-bold mb-2">
                    {user.name.first} {user.name.last}
                  </h3>
                  <p className="text-sm font-italic italic text-white mb-2">
                    - {testimonials[index].job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <button
          className="p-2 rounded-full hidden md:flex bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          onClick={handleNext}>
          <i className="fa fa-angle-right text-gray-700">
            <IoIosArrowForward />
          </i>
        </button>
      </div>
    </div>
  );
}

//   const testimonials = [
//     {
//       jobTitle: "Web Developer",
//       testimonial:
//         "Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque diam libero facilisis libero. Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus metus quis, elementum nunc. 99",
//     },
//     {
//       jobTitle: "UI/UX Designer",
//       testimonial:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.",
//     },
//     {
//       jobTitle: "Marketing Manager",
//       testimonial:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.",
//     },
//   ];

//   const testimoni = [];
//   for (let i = 0; i < results.length; i++) {
//     testimoni.push({ ...results[i], position: testimonials[i] });
//   }
//   console.log(testimoni);
//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const Testimonial = ({
//     name,
//     jobTitle,
//     testimonial,
//     imageUrl,
//   }: {
//     name: string;
//     jobTitle: string;
//     testimonial: string;
//     imageUrl: string;
//   }) => {
//     return (
//       <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-black space-y-4">
//         {testimoni.map((data, i) => (
//           <div key={i}>
//             <Image
//               src={data.picture.large}
//               alt={`${name} profile picture`}
//               width={100}
//               height={100}
//               className="rounded-full"
//             />
//             <p className="font-bold text-lg">{data.name.first}</p>
//             <p className="text-gray-500">{jobTitle}</p>
//             <p className="text-gray-700">{testimonial}</p>
//             <div className="flex space-x-2">
//               <i className="fa fa-star text-yellow-500"></i>
//               <i className="fa fa-star text-yellow-500"></i>
//               <i className="fa fa-star text-yellow-500"></i>
//               <i className="fa fa-star text-yellow-500"></i>
//               <i className="fa fa-star text-yellow-500"></i>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };
//   return (
//     <main className="relative min-h-screen w-full">
//       <div className="absolute -z-10 h-full w-full overflow-visible">
//         <Image
//           src="/yellow.jpg"
//           alt="Yellow disk on a yellow background."
//           width={3000}
//           height={2250}
//           className="relative h-full w-full object-cover object-center"
//         />
//       </div>

//       <div className="flex h-full flex-col items-center gap-20 pt-36">
//         <h2 className="text-center font-fraunces text-[5rem] font-black tracking-[1rem] text-[#0948c7] max-sm:text-[4rem] max-sm:tracking-[0.5rem] max-[550px]:text-[3rem] max-[400px]:text-[2.5rem] max-[350px]:tracking-[0.25rem]">
//           OUR TEAM
//         </h2>

//         <div className="h-fit w-3/4 rounded-3xl bg-[#04bf6e]/80 p-4 max-[1920px]:mb-16">
//           <div className="px-6 max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 lg:flex 2xl:px-20">
//             {testimoni.map((data, i) => (
//               <div className="container mx-auto px-4 py-16">
//                 <h2 className="text-3xl font-bold text-center mb-8">
//                   Testimonials
//                 </h2>
//                 <div className="relative flex items-center justify-between">
//                   <button
//                     className="absolute  -left-10 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
//                     onClick={handlePrevious}>
//                     <i className="fa fa-angle-left text-gray-700"></i>
//                   </button>
//                   <Testimonial {...testimonials[currentIndex]} />
//                   <button
//                     className="absolute -right-10 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
//                     onClick={handleNext}>
//                     <i className="fa fa-angle-right text-gray-700"></i>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// // const Testimonials = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const testimonials = [
// //     {
// //       name: "John Doe",
// //       jobTitle: "Web Developer",
// //       testimonial:
// //         "Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque diam libero facilisis libero. Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus metus quis, elementum nunc. 99",
// //       imageUrl: "/images/john-doe.jpg",
// //     },
// //     {
// //       name: "Jane Doe",
// //       jobTitle: "UI/UX Designer",
// //       testimonial:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.",
// //       imageUrl: "/images/jane-doe.jpg",
// //     },
// //     {
// //       name: "Jack Doe",
// //       jobTitle: "Marketing Manager",
// //       testimonial:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.",
// //       imageUrl: "/images/jack-doe.jpg",
// //     },
// //   ];

// //   const handleNext = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
// //     );
// //   };

// //   const handlePrevious = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
// //     );
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-16">
// //       <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
// //       <div className="relative flex items-center justify-between">
// //         <button
// //           className="absolute  -left-10 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
// //           onClick={handlePrevious}>
// //           <i className="fa fa-angle-left text-gray-700"></i>
// //         </button>
// //         <Testimonial {...testimonials[currentIndex]} />
// //         <button
// //           className="absolute -right-10 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
// //           onClick={handleNext}>
// //           <i className="fa fa-angle-right text-gray-700"></i>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Testimonials;
