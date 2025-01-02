import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
const BurgerCard = () => {
  return (
    <div className="flex items-center justify-center shadow-xl p-5 hover:bg-[#EF4444] hover:text-white rounded-xl">
      <div className="rounded-xl flex flex-col gap-3 items-center justify-center ">
        <h1 className="text-[4vw]">🍔</h1>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold">Royal DeLuxe</h1>
          <h1 className="font-semibold">140g</h1>
          <h1 className="text-xl font-bold">$2.50</h1>
        </div>
        <div className="flex items-center justify-center text-center ">
          <div className="flex items-center gap-2 font-semibold border-2 py-2 px-4 rounded-lg duration-300 cursor-pointer hover:text-white ">
            <h1>Add To Cart </h1>
            <FaShoppingBasket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;
