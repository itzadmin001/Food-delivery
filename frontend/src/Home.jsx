import React from "react";
import Nav from "./Components/Website/Nav";

import Hero from "./Pages/Hero";
import FoodMenu from "./Components/Website/FoodMenu";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FoodMenu />
    </div>
  );
};

export default Home;
