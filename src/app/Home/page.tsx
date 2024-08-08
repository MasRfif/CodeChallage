import Hero from "@/components/Hero";
export default function Page() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="py-10 hidden sm:block">
        <div className="carousel w-full rounded-3xl ">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
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
      <section className=" px-10 pb-10 mx-9 flex flex-col items-center gap-10 sm:gap-80 sm:flex-row ">
        <div className="flex flex-col items-center sm:flex-row">
          <div className="carousel rounded-box w-64">
            <div className="carousel-item w-full ">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
          <div className="p-5 pr-5 max-w-md">
            <h1 className="text-2xl">lorem</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              illum iusto, eum vel fugiat, eligendi debitis voluptas magnam ad
              officia praesentium tenetur at excepturi, molestiae nihil iure
              magni asperiores porro.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center  sm:flex-row-reverse sm:flex-row">
          <div className="carousel rounded-box w-64">
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
          <div className="p-5 pr-5 max-w-md text-right">
            <h1 className="text-2xl">Please</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              illum iusto, eum vel fugiat, eligendi debitis voluptas magnam ad
              officia praesentium tenetur at excepturi, molestiae nihil iure
              magni asperiores porro.
            </p>
          </div>
        </div>
      </section>
      <div className="p-10 text-center ">
        <h1 className="text-2xl pb-10 ">Come Visit Us!</h1>
        <div className="relative w-full p-5 h-96">
          <iframe
            width="1723"
            height="403"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=1523&height=403&hl=en&q=Lebakbulus%20Jakarta%20selatan+(PurrfectPaws)&t=k&z=13&ie=UTF8&iwloc=B&output=embed"></iframe>{" "}
          <a href="https://www.acadoo-medizin.com/">www.acadoo-medizin.com</a>{" "}
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=75389aba063f0e948f51568095c68a4dcc555fb8"></script>
        </div>
      </div>
    </>
  );
}
