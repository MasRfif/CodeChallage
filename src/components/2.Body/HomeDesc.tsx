"use client";

import Carousel from "../4.Function/AutoplayToys";
import CarouselToys from "../4.Function/AutoplayFood";
import Testimony from "./Testimoney";
import { Provider } from "react-redux";
import { store } from "@/app/Store";
export default function Desc() {
  return (
    <>
      <Provider store={store}>
        <section className="py-10 hidden sm:block">
          <div className="carousel w-full h-96 rounded-3xl ">
            <div id="item1" className="carousel-item w-full">
              <img src="cathomedesc1.jpg" className="w-full object-cover " />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src="cathomedesc1.jpg" className="w-full object-cover " />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img src="cathomedesc1.jpg" className="w-full object-cover " />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img src="cathomedesc1.jpg" className="w-full object-cover  " />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </section>
        <section className="  pb-10 flex w-full flex-col justify-center items-center gap-5 2xl:flex-row xl:flex-col md:flex-col sm:gap-9 sm:flex-row ">
          <div className="flex flex-col items-center sm:flex-row">
            <CarouselToys />
            <div className="p-5 pr-5 max-w-md ">
              <h1 className="text-2xl p-2 font-bold text-[#ead19f]">
                Toy Product
              </h1>
              <p>
                Discover our wide variety of toys, including interactive
                puzzles, educational toys, and soft plush animals. Our
                collection caters to all ages and interests, ensuring your
                little ones have fun and learn at the same time.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center sm:flex-row-reverse sm:flex-row">
            <Carousel />
            <div className="p-5 pr-5 max-w-md text-right">
              <h1 className="text-2xl p-2 font-bold text-[#ead19f] sm:font-bold sm:text-[#ead19f]">
                Food Product
              </h1>
              <p>
                Cats need a balanced diet to stay healthy. Our cat food provides
                essential nutrients, using high-quality ingredients like
                organic, non-GMO, and gluten-free options. We offer a range of
                flavors and textures to suit different tastes and dietary needs.
                With eco-friendly packaging and strict safety standards, our
                products ensure your cat enjoys a nutritious, delicious meal
                that supports their overall well-being.
              </p>
            </div>
          </div>
        </section>

        <section>
          <Testimony />
        </section>
        <section className="location w-full h-full py-10">
          <div className="max-w-lg font-cousine me-0 text-center md:text-start md:me-auto md:mx-20 mb-2">
            <h1 className="text-2xl md:text-3xl font-bold ">
              Our <span className="text-third">Location</span>
            </h1>
          </div>
          <iframe
            width="1440"
            height="400"
            className="w-full"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=taman%20sari%201%20nomor%2026%20b%20lebakbulus%20Jakarta%20selatan+(Purfectpaws)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </section>
      </Provider>
    </>
  );
}
