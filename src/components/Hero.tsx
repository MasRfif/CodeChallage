export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen shadow-2xl rounded-b-[50px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1695746998582-56004f959020?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="hero-overlay h-screen dark:bg-[#421608]/65 md:p-5 rounded-b-[50px] bg-gradient-to-t from-transparent/5 via-transparent to-amber-900/95">
          <div className="hero-content text-neutral-content t p-10 flex items-center justify-center h-full">
            <div className="p-10 max-w-full h-full text-[#f8993f] rounded-xl">
              <div className="my-40 sm:my-64 ">
                <h1 className="mb-5 mr- text-4xl md:text-7xl md:mb-20 font-bold">
                  Hey there Did you Know?
                </h1>
                <p className="mb-9 text-md md:text-3xl ">
                  that cats love toys? They provide mental stimulation and help
                  develop problem-solving skills. A well-chosen toy can make
                  your cat feel loved and secure.
                </p>
                <button className="btn btn-primary text-md sm:text-2xl ">
                  curious ? let's start buying
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="relative w-full h-48 p-5 static">
          <div className=" items-center justify-center h-full text-3xl font-bold text-[#fffbeb] text-gray-800">
            <div className="animate-slide-up-1">
              <p className="mb-4">Slide 1: Hello, world!</p>
            </div>
            <div className="animate-slide-up-2">
              <p className="mb-4">Slide 2: This is a text carousel!</p>
            </div>
            <div className="animate-slide-up-3">
              <p className="mb-4">Slide 3: Made with Tailwind CSS!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
