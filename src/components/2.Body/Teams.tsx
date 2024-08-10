export default function Teams() {
  return (
    <>
      {" "}
      <div className="hero bg-base-200 min-h-screen dark:bg-[#421608]/65 md:p-5 rounded-b-[50px] bg-gradient-to-t from-transparent/5 via-transparent to-amber-900/95 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Meet The Purrfectionist</h1>
            <p className="py-6">
              The heart and soul behind PurrfectPaws, dedicated to selecting and
              curating the finest products for your feline friends.
            </p>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[400px_minmax(20px,_0.3fr)_400px]  gap-4 justify-center p-2 m-2 justify-items-center ">
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-[#6a4124] flex flex-col items-center p-5 overflow-hidden group ">
            <div className="relative w-full h-[250px]">
              <img
                src="https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Card Image"
                className="w-full h-full object-cover rounded-lg bg-black"
              />
            </div>
            <div className="pt-3">
              <h1 className="text-white text-2xl font-bold text-center pb-4 ">
                Irwan Kusnandar
              </h1>

              <p className="text-white text-base text-center text-lg font-semibold ">
                Head-Dev Team
              </p>
              <p className="text-white text-base text-center text-sm ">
                Project Manager from ClubsFur
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-blue-500 flex flex-col items-center justify-center group  ">
            <div className="text-white text-xl font-bold mb-2 text-center  opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-green-500 flex flex-col items-center justify-center group ">
            <div className="text-white text-xl font-bold mb-2 text-center  opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="card w-[300px] h-[400px] bg-yellow-500 flex flex-col items-center justify-center group ">
            <div className="text-white text-xl font-bold mb-2 text-center  opacity-0 group-hover:opacity-100 transition duration-300"></div>
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
      </section>
    </>
  );
}
