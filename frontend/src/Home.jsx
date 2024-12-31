import React from "react";
import Nav from "./Nav";
import BurgerCard from "./BurgerCard";
import ServeCard from "./ServeCard";

const Home = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 ">
      <Nav />
      <BurgerCard />
      <ServeCard />
    </div>
  );
};

export default Home;
