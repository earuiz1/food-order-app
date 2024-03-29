import React from "react";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavCart = () => {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <Link to="cart">
        <button className="bg-slate-700 flex justify-center rounded-md hover:-translate-y-1">
          <div className="relative px-3 py-2">
            <IoCart className="text-slate-50" size={28} />
            <span
              className="absolute right-0 top-0 text-sm text-red-700 font-bold bg-slate-100 rounded-full px-[0.2rem] -translate-y-1
            "
            >
              {cartTotalQuantity}
            </span>
          </div>
        </button>
      </Link>
    </>
  );
};

export default NavCart;
