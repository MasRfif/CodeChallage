import Image from "next/image";

export default function Product() {
  return (
    <>
      <section>
        <div className="carousel w-full h-[770px] ">
          <div id="item1" className="carousel-item w-full relative">
            <Image
              src="https://images.unsplash.com/photo-1630549316063-7ae02749d2cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2880}
              height={1100}
              alt="Carousel-1"
              className="w-full object-cover overflow-hidden "
              loading="lazy"
            />
            <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
              <h3 className="hidden sm:block text-sm sm:text-2xl font-montserrat font-semibold mb-3 capitalize">
                <span className="text-third">Indonesia</span> Motorcycles
                Dealers
              </h3>
              <h2 className="text-base sm:text-4xl font-montserrat font-medium mb-3 sm:mb-5 md:mb-5 lg:mb-20 capitalize">
                Get your dream bike in <br />
                <span className="text-third font-quicksand font-bold">
                  Autobikes.ID
                </span>
              </h2>
              <button className="sm:w-fit btn-xs sm:btn-sm md:btn-md btn btn-outline">
                See more
              </button>
            </div>
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
            <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
              <h3 className="hidden sm:block text-sm sm:text-2xl font-montserrat font-semibold mb-3 capitalize">
                <span className="text-third">Indonesia</span> Motorcycles
                Dealers
              </h3>
              <h2 className="text-base sm:text-4xl font-montserrat font-medium mb-3 sm:mb-5 md:mb-5 lg:mb-20 capitalize">
                Get your dream bike in <br />
                <span className="text-third font-quicksand font-bold">
                  Autobikes.ID
                </span>
              </h2>
              <button className="sm:w-fit btn-xs sm:btn-sm md:btn-md btn btn-outline">
                See more
              </button>
            </div>
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
            <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
              <h3 className="hidden sm:block text-sm sm:text-2xl font-montserrat font-semibold mb-3 capitalize">
                <span className="text-third">Indonesia</span> Motorcycles
                Dealers
              </h3>
              <h2 className="text-base sm:text-4xl font-montserrat font-medium mb-3 sm:mb-5 md:mb-5 lg:mb-20 capitalize">
                Get your dream bike in <br />
                <span className="text-third font-quicksand font-bold">
                  Autobikes.ID
                </span>
              </h2>
              <button className="sm:w-fit btn-xs sm:btn-sm md:btn-md btn btn-outline">
                See more
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 mt-[-1.8rem] sm:mt-[-2.5rem] flex items-start gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4 justify-center p-2 m-2 justify-items-center ">
        <div className="p-4">
          <div className="card w-[470px] h-[400px] bg-red-500 "></div>
          <div>
            <h1>AAAA</h1>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[470px] h-[400px] bg-blue-500 "></div>
          <div>
            <h1>AAAA</h1>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[470px] h-[400px] bg-green-500 "></div>
          <div>
            <h1>AAAA</h1>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[470px] h-[400px] bg-yellow-500 "></div>
          <div>
            <h1>AAAA</h1>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[470px] h-[400px] bg-pink-500 "></div>
          <div>
            <h1>AAAA</h1>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[470px] h-[400px] bg-purple-500 "></div>
          <div>
            <h1>AAAA</h1>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[470px] h-[400px] bg-orange-500 "></div>
          <div>
            <h1>AAAA</h1>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[470px] h-[400px] bg-gray-500 "></div>
          <div>
            <h1>AAAA</h1>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[470px] h-[400px] bg-teal-500 "></div>
          <div>
            <h1>AAAA</h1>
          </div>
        </div>
      </section>
    </>
  );
}
