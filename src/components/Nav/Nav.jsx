import React from "react";
import NavCart from "./NavCart";
import { IoFastFood } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../../custom-hooks/useAuth";

const Nav = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div
      className="bg-slate-900 w-full flex justify-between items-center py-4 px-6"
      id="nav"
    >
      <div className="flex items-center gap-2">
        <IoFastFood className="text-slate-50" size={30} />
        <h1 className="text-slate-50 font-bold text-2xl md:text-3xl">
          Delicias Ruiz
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {currentUser ? (
          <>
            <span className="text-slate-100 font-semibold">
              {`Hello, ${currentUser.displayName}!`}
            </span>
            <NavCart />
          </>
        ) : (
          <>
            <Link
              to="signup"
              className="text-slate-100 font-semibold hover:underline-offset-8 hover:underline"
            >
              Sign Up
            </Link>
            <Link
              to="login"
              className="text-slate-100 font-semibold hover:underline-offset-8 hover:underline"
            >
              Login
            </Link>
            <NavCart />
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
