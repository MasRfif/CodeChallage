import Link from "next/link";

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
        }}
      >
        <div className="hero-overlay h-screen dark:bg-[#421608]/65 md:p-5 rounded-b-[50px] bg-gradient-to-t from-transparent/5 via-transparent to-amber-900/95">
          <div className="hero-content text-neutral-content t p-10 flex items-center justify-center h-full">
            <div className="p-10 max-w-full h-full text-[#f8993f] rounded-xl">
              <div className="my-40 sm:my-64 ">
                <h1 className="mb-5 mr- text-4xl md:text-7xl md:mb-10 font-bold animate__animated animate__flipInX animate__delay-1s">
                  Hey there Did you Know?
                </h1>
                <p className="mb-9 text-md md:text-3xl animate__animated animate__flipInX animate__delay-2s ">
                  that cats love toys? They provide mental stimulation and help
                  develop problem-solving skills. A well-chosen toy can make
                  your cat feel loved and secure.
                </p>
                <button className="btn text-[#fffbeb] bg-[#904210] text-md sm:text-2xl animate__animated animate__zoomInLeft animate__delay-4s ">
                  <Link href={"/Product"}>curious ? let's start buying</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
