import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
const BurgerCard = ({ AddToCartHandler, data, SetaddToCart, addToCart, index }) => {
  // yaha per 5-6 recipe items ka data bna or niche unko print kr
  // data me items ka name 2. wait 3. uska description 4. price hona chaiye
  // or agar category k hisab se kare to perticular category jese burger , pizza , etc. ki hd png image bhi map krni hai kr seke to..

  const { name, short_description, weight, image, Category, price } = data;

  return (
    <div className="flex select-none items-center bg-gray-50 justify-center shadow-xl p-5 hover:bg-[#e74c4c] duration-300 hover:text-white rounded-xl">
      <div className="rounded-xl flex flex-col gap-3 items-center justify-center ">
        <img src="src/assets/Img/burger.webp" alt="" className="w-[8vw]" />
        <div className="w-[12vw] flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold">{name}</h1>
          <h1 className="font-semibold">{weight}</h1>
          <p className=" text-center text-[0.7vw]">{short_description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl font-bold">${price}</h1>
          <div onClick={() => AddToCartHandler(index)} className={`flex items-center gap-1 ${addToCart.includes(index) ? "bg-[#E5E7EB] text-black" : "bg-yellow-400"}  p-2 rounded-2xl cursor-pointer shadow-md`}>
            <h1 className=" text-sm font-semibold" >{addToCart.includes(index) ? "Added!" : "Add To Cart"}</h1>
            {
              addToCart.includes(index) ? < IoBagCheck /> : <FaShoppingBasket />
            }


          </div>
        </div>
      </div>
    </div >
  );
};

export default BurgerCard;
