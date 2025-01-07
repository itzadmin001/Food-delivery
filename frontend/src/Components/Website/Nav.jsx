import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { GiBeachBag } from "react-icons/gi";
import Container from "./Container";

const Nav = () => {

  const menu = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Menu",
      path: "/Menu"
    },
    {
      name: "Services",
      path: "/Services"
    },
    {
      name: "Contact",
      path: "/Contact"
    }
  ]
  return (
    <Container>
      <nav className="flex p-4 justify-between py-10 items-center w-full ">
        <div>
          <Link className=" text-4xl text-red-600 font-extrabold">
            B<span className="text-gray-300">ULL</span>D
            <span className="text-gray-300">OGZ</span>
          </Link>
        </div>
        <div className="flex gap-10 uppercase ">
          {
            menu.map((item, i) => {
              return (
                <Link key={i} className="active: py-2 hover:text-gray-300 text-red-500 duration-300 font-semibold " to={item.path}>
                  {item.name}
                </Link>
              )
            })
          }
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
                      class="absolute inset-y-0 my-auto h-16 w-14 border-transparent stroke-gray-100 px-3.5 peer-focus:border-red-300 peer-focus:stroke-red-300"
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

          <span className="text-gray-200 text-3xl cursor-pointer select-none	">
            <GiBeachBag />
          </span>

          <Link
            className=" bg-red-500 py-2 px-4 bg-transparent hover:bg-gray-300 border-2 flex gap-2 duration-300 hover:text-black items-center text-white  rounded-2xl font-bold "
            to="/login"
          >
            Login
            <GoArrowRight />
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
