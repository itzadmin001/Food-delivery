import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const [eyeIcon, seteyeIcon] = useState(true);
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-2/4 h-screen overflow-hidden relative">
          <Link
            className="bg-gray-300 bg-clip-padding backdrop-filter text-white backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 flex gap-2 items-center absolute m-4 py-2 px-4 rounded-lg "
            to="/"
          >
            <GoArrowLeft />
            Back
          </Link>
          <img
            className="w-full h-screen object-cover"
            src="src/assets/Img/LSI.jpg"
            alt=""
          />
        </div>
        <div className="w-2/4 h-screen flex justify-center items-center">
          <div className="w-full max-w-md p-4     sm:p-6 md:p-8  ">
            <form className="space-y-6" action="#">
              <h5 className="text-5xl font-semibold text-black">login</h5>
              <div className="flex justify-around pt-4 gap-2">
                <div className="select-none flex justify-center gap-2 cursor-pointer border border-red-200 text-sm rounded  focus:border-blue-500  w-full p-2.5  text-black">
                  <FcGoogle className=" text-2xl" />

                  <h1>Login with Google</h1>
                </div>
                <div className=" select-none flex justify-center gap-2 cursor-pointer border border-red-200 text-sm rounded  focus:border-blue-500  w-full p-2.5  text-black">
                  <FaFacebook className=" text-2xl text-blue-600" />

                  <h1>Login with facebook</h1>
                </div>
              </div>

              <div className="flex  justify-center">
                <h1>Or use your email</h1>
              </div>
              <hr />
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-red-50 border border-red-200  text-gray-900 text-sm rounded  block outline-red-400 w-full p-2.5  dark:placeholder-gray-400 dark:text-black "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your password
                </label>
                <input
                  type={`${eyeIcon === true ? "password" : "text"}`}
                  name="password"
                  id="password"
                  placeholder={`${eyeIcon === true ? "••••••••" : "password"}`}
                  className="bg-red-50 border border-red-200  text-gray-900 text-sm rounded  block outline-red-400 w-full p-2.5  dark:placeholder-gray-400 dark:text-black "
                  required=""
                />
                <span
                  onClick={() => seteyeIcon(() => !eyeIcon)}
                  className="text-red-300 cursor-pointer absolute right-0 top-10 mr-3 "
                >
                  <GoEye
                    className={`${eyeIcon === true ? "hidden" : "block"}`}
                  />
                  <GoEyeClosed
                    className={`${eyeIcon === false ? "hidden" : "block"}`}
                  />
                </span>
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 accent-red-500 accent-whiterounded"
                      required=""
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 cursor-pointer text-sm font-medium text-black "
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="ms-auto text-xs text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white     font-medium rounded   text-sm px-5 py-2.5 text-center bg-red-500 dark:hover:bg-red-600 "
              >
                Login
              </button>
              <div className="text-sm font-medium text-black">
                Don't Have An Account?
                <Link
                  className="text-blue-700 ml-1 hover:underline dark:text-blue-500"
                  to="/signup"
                >
                  Signup
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
