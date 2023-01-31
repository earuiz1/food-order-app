import React from "react";
import { IoCart } from "react-icons/io5";
const NavCart = () => {
  return (
    <div className="bg-slate-900/50 flex justify-between items-center rounded-md p-2 gap-4">
      <IoCart className="text-slate-50" size={25} />
      <span className="bg-slate-400 rounded-lg px-2">1</span>
    </div>
  );
};

export default NavCart;
