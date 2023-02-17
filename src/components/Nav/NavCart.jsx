import React from "react";
import { IoCart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/index";

const NavCart = () => {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(modalActions.openModal());
  };

  return (
    <React.Fragment>
      <button
        className="bg-slate-700 flex justify-center rounded-md hover:-translate-y-1"
        onClick={openModalHandler}
      >
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
    </React.Fragment>
  );
};

export default NavCart;
