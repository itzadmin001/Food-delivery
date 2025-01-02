import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { GiBeachBag } from "react-icons/gi";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between py-10 px-28 w-full ">
        <div>
          <Link className=" text-4xl text-red-600 font-extrabold">
            B<span className="text-gray-700">ULL</span>D
            <span className="text-gray-700">OGZ</span>
          </Link>
        </div>
        <div className="flex gap-10 ">
          <Link className="active: py-2 text-red-600 font-semibold " to="/">
            Home
          </Link>

          <Link className=" py-2 text-red-600 font-semibold  " to="/Menu">
            Menu
          </Link>
          <Link className=" py-2 text-red-600 font-semibold " to="/Services">
            Service
          </Link>
          <Link className=" py-2 text-red-600 font-semibold " to="/Contact">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-9 relative">
          <div className="absolute right-44">
            <div class="relative flex  flex-col justify-center overflow-hidden bg-gradient-to-br ">
              <div class="relative      ">
                <div class="mx-auto max-w-md">
                  <form action="" class="relative mx-auto w-max">
                    <input
                      type="search"
                      class=" cursor-pointer relative z-10 h-11 w-11 rounded-full  bg-transparent pl-12 outline-red-300 focus:w-full text-red-400 focus:cursor-text focus:border-red-300 "
                    />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute inset-y-0 my-auto h-16 w-14 border-transparent stroke-gray-700 px-3.5 peer-focus:border-red-300 peer-focus:stroke-red-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <span className="text-gray-700 text-3xl cursor-pointer select-none	">
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
