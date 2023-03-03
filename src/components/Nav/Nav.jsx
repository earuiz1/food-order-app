import React from "react";
import NavCart from "./NavCart";
import { IoFastFood } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
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
        <Link to="signup">
          <button className="bg-slate-500 text-slate-100 font-bold text-sm rounded-md px-4 py-2">
            Sign Up
          </button>
        </Link>
        <NavCart />
      </div>
    </div>
  );
};

export default Nav;
