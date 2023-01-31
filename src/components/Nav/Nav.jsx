import React from "react";
import NavCart from "./NavCart";
import { IoFastFood } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="bg-slate-900 w-full flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-2">
        <IoFastFood className="text-slate-50" size={25} />
        <h1 className="text-slate-50 font-bold">Delicias Ruiz</h1>
      </div>
      <NavCart />
    </div>
  );
};

export default Nav;
