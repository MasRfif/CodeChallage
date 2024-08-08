import Image from "next/image";

export default function Product() {
  return (
    <>
      <section className="">
        <div className="carousel w-full h-[770px]">
          <div
            id="item1"
            className="carousel-item w-full relative top-0 left-0 w-full h-full bg-gradient-to-r from-brown-500 to-brown-300 opacity-50">
            <Image
              src="https://images.unsplash.com/photo-1630549316063-7ae02749d2cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2880}
              height={1100}
              alt="Carousel-1"
              className="w-full object-cover overflow-hidden"
              loading="lazy"
            />
          </div>
          <div id="item2" className="carousel-item w-full relative">
            <Image
              src="/Carousel-2.png"
              width={2880}
              height={1100}
              alt="Carousel-2"
              className="w-full h-full"
              loading="lazy"
            />
            <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center"></div>
          </div>
          <div id="item3" className="carousel-item w-full relative">
            <Image
              src="/Carousel-3.png"
              width={2880}
              height={1100}
              alt="Carousel-3"
              className="w-full h-full"
              loading="lazy"
            />
            <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center"></div>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 mt-[-1.8rem] sm:mt-[-2.5rem] flex items-start gap-2">
          <a href="#item1" className="btn btn-xs bg-[#421608]">
            1
          </a>
          <a href="#item2" className="btn btn-xs bg-[#421608] ">
            2
          </a>
          <a href="#item3" className="btn btn-xs bg-[#421608]  ">
            3
          </a>
        </div>
      </section>
      <section className="grid grid-cols-[400px_minmax(20px,_0.3fr)_400px] gap-4 justify-center p-2 m-2 justify-items-center ">
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-red-500 flex flex-col items-center justify-center group ">
            <div className="text-white text-xl font-bold mb-2 text-center  opacity-0 group-hover:opacity-100 transition duration-300">
              <h1>Product Name</h1> <p className="text-sm">$99.99</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-blue-500 flex flex-col items-center justify-center group  ">
            <div className="text-white text-xl font-bold mb-2 text-center  opacity-0 group-hover:opacity-100 transition duration-300">
              <h1>Product Name</h1> <p className="text-sm">$99.99</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-green-500 flex flex-col items-center justify-center group ">
            <div className="text-white text-xl font-bold mb-2 text-center  opacity-0 group-hover:opacity-100 transition duration-300">
              <h1>Product Name</h1> <p className="text-sm">$99.99</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-yellow-500 flex flex-col items-center justify-center group ">
            <div className="text-white text-xl font-bold mb-2 text-center  opacity-0 group-hover:opacity-100 transition duration-300">
              <h1>Product Name</h1> <p className="text-sm">$99.99</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-pink-500 "></div>
          <div></div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-purple-500 "></div>
          <div></div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-orange-500 "></div>
          <div></div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-gray-500 "></div>
          <div></div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-teal-500 "></div>
          <div></div>
        </div>
      </section>
    </>
  );
}
