import React from "react";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <>
      <Link
        className="h-10 bg-red-300 px-6 py-2  mr-10 rounded-md font-semibold "
        to="/login"
      >
        Login
      </Link>
    </>
  );
};

export default LoginBtn;
