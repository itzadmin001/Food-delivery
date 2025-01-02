import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Website/Login";
import Home from "./Home";
import Signup from "./Components/Website/Signup";
import Menu from "./Menu";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
