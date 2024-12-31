import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { GiBeachBag } from "react-icons/gi";
import { ImSearch } from "react-icons/im";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between p-10">
        <div>
          <NavLink className=" text-4xl font-extrabold">
            F<span className="text-red-500">OO</span>D
          </NavLink>
        </div>
        <div className="flex gap-10 ">
          <Link className="active: py-2 text-red-600 font-semibold " to="/">
            Home
          </Link>
          <Link className=" py-2 text-red-600 font-semibold  " to="/">
            Menu
          </Link>
          <Link className=" py-2 text-red-600 font-semibold " to="/">
            Service
          </Link>
          <Link className=" py-2 text-red-600 font-semibold " to="/">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-7">
          <span className="text-red-500 text-2xl cursor-pointer select-none	">
            <ImSearch />
          </span>
          <span className="text-red-500 text-3xl cursor-pointer select-none	">
            <GiBeachBag />
          </span>

          <Link
            className=" bg-red-500 py-2 px-4 flex gap-2 items-center text-white  rounded-md font-bold "
            to="/login"
          >
            Login
            <GoArrowRight />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
