import React from "react";

const BurgerCard = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" rounded-xl bg-white   flex  flex-col items-center justify-center ">
        <h1 className="py-5 text-7xl">🍔</h1>
        <h1 className="py-3 px-7 text-2xl font-bold">Royal DeLuxe</h1>
        <h1 className="font-semibold">140g</h1>
        <h1 className="py-5 text-2xl font-bold">$2.50</h1>
      </div>
    </div>
  );
};

export default BurgerCard;
