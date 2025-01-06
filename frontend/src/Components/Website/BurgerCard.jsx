import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
const BurgerCard = () => {



  // yaha per 5-6 recipe items ka data bna or niche unko print kr 
  // data me items ka name 2. wait 3. uska description 4. price hona chaiye 
  // or agar category k hisab se kare to perticular category jese burger , pizza , etc. ki hd png image bhi map krni hai kr seke to..


  return (
    <div className="flex select-none items-center bg-gray-50 justify-center shadow-xl p-5 hover:bg-[#EF4444] duration-300 hover:text-white rounded-xl">
      <div className="rounded-xl flex flex-col gap-3 items-center justify-center ">
        <img src="src/assets/Img/burger.webp" alt="" className="w-[8vw]" />
        <div className="w-[12vw] flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold">Royal DeLuxe</h1>
          <h1 className="font-semibold">140g</h1>
          <p className=" text-center text-[0.7vw]">Lorem ipsum dolor,sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl font-bold">$2.50</h1>
          <div className="flex items-center gap-2 bg-yellow-400 p-2 rounded-2xl cursor-pointer shadow-md">
            <h1 className=" text-sm font-semibold">Add To Cart </h1>
            <FaShoppingBasket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;
