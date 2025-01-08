import React from "react";
import { FaPlay } from "react-icons/fa6";
import Nav from "../Components/Website/Nav";
import Container from "../Components/Website/Container";

const Hero = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-full bg-cover bg-[url(src/assets/Img/Bannerbg.png)] bg-no-repeat">
        <Nav />
        <Container classes="flex mt-10 select-none ">
          <section className="w-1/2 relative">
            <div className="flex text-red-500 absolute px-3.5 py-1.5 rounded-full   justify-center items-center bg-red-100 gap-3">
              <h1>More than Faster</h1>
              <img className="w-6" src="src/assets/Img/strawberry.png" alt="" />
            </div>
            <div className="mt-20">
              <h1 className="text-7xl font-bold text-gray-200">
                Be The Fastest <br /> In Delivering <br /> Your
                <span className="text-red-600">Food</span>
              </h1>
              <h3 className="my-7 text-gray-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                est. Quidem, <br /> consequatur, sit consequuntur voluptatem
                asperiores quia alias, suscipit <br /> Necessitatibus
              </h3>
            </div>
            <div className="flex gap-5 ">
              <button className="bg-red-500 text-white py-2 px-4 rounded-full">
                Order Now
              </button>
              <button className="bg-white text-gray-700  flex justify-center items-center py-2 px-4 gap-2 rounded-full shadow-xl border border-t-2 border-red-500">
                <FaPlay className="text-red-500" />
                Order Process
              </button>
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
