import React from "react";
import NavCart from "./NavCart";
import { IoFastFood } from "react-icons/io5";

const Nav = () => {
  return (
    <div
      className="fixed bg-slate-900 w-full flex justify-between items-center py-4 px-6 z-[8]"
      id="nav"
    >
      <div className="flex items-center gap-2">
        <IoFastFood className="text-slate-50" size={30} />
        <h1 className="text-slate-50 font-bold text-2xl md:text-3xl">
          Delicias Ruiz
        </h1>
      </div>
      <NavCart />
    </div>
  );
};

export default Nav;
