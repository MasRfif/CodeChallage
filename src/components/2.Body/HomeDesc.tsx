import Carousel from "../4.Function/Autoplay";
import Testimony from "./Testimoney";
export default function Desc() {
  return (
    <>
      <section className="py-10 hidden sm:block">
        <div className="carousel w-full h-96 rounded-3xl ">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg"
              className="w-full object-cover "
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://static.scientificamerican.com/sciam/cache/file/825ED237-152D-4AA0-AB74012B103ECD6C_source.png?w=1200"
              className="w-full object-cover "
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://diamondpet.storage.googleapis.com/wp-content/uploads/2016/09/22100517/20160927-PlayKitty_1200x630.jpg"
              className="w-full object-cover "
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://today.tamu.edu/wp-content/uploads/2024/01/cat-eating.jpg"
              className="w-full object-cover  "
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
      <section className="  pb-10 flex w-full flex-col justify-center items-center gap-5 2xl:flex-row xl:flex-col md:flex-col sm:gap-9 sm:flex-row ">
        <div className="flex flex-col items-center sm:flex-row">
          <Carousel />
          <div className="p-5 pr-5 max-w-md ">
            <h1 className="text-2xl p-2 font-bold text-[#ead19f]">
              Toy Product
            </h1>
            <p>
              Discover our wide variety of toys, including interactive puzzles,
              educational toys, and soft plush animals. Our collection caters to
              all ages and interests, ensuring your little ones have fun and
              learn at the same time.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center sm:flex-row-reverse sm:flex-row">
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
            <div className="carousel-item w-full ">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
          <div className="p-5 pr-5 max-w-md text-right">
            <h1 className="text-2xl p-2 font-bold text-[#ead19f] sm:font-bold sm:text-[#ead19f]">
              Food Product
            </h1>
            <p>
              Cats need a balanced diet to stay healthy. Our cat food provides
              essential nutrients, using high-quality ingredients like organic,
              non-GMO, and gluten-free options. We offer a range of flavors and
              textures to suit different tastes and dietary needs. With
              eco-friendly packaging and strict safety standards, our products
              ensure your cat enjoys a nutritious, delicious meal that supports
              their overall well-being.
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
    </>
  );
}
