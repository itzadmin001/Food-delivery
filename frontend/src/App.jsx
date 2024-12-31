import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Website/Login";
import Home from "./Home";
import Signup from "./Components/Website/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
