import React from "react";
import { FaDollarSign, FaStar, FaRegStar } from "react-icons/fa";

const GlassBurgurCard = () => {
  return (
    <div
      className=" w-full text-black h-screen relative flex justify-center
     items-center"
    >
      <img
        className="w-full h-screen"
        src="src/assets/img/backdrop.jpg"
        alt=""
      />
      <div className="absolute flex items-center justify-between px-5 gap-px  w-1/4 h-1/6 rounded-xl bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
        <span>
          <h1 id="Burger" className="my-1 font-semibold text-2xl">
            American Burger
          </h1>
          <h1 className="flex gap-1">
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaRegStar className="text-yellow-300" />
          </h1>
          <h1 className="flex mt-3 font-semibold items-center">
            <FaDollarSign className="text-yellow-300" /> 8.75
          </h1>
        </span>
        <img
          className="w-24 h-24  rounded-lg"
          src="src/assets/img/Burgur.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default GlassBurgurCard;
