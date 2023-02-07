import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { IoCart } from "react-icons/io5";

const NavCart = ({ onOpen }) => {
  const cartContext = useContext(CartContext);

  /* Adding up the quantity of all the items in the cart. */
  const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.quantity;
  }, 0);

  return (
    <React.Fragment>
      <button
        className="bg-slate-700 flex justify-center rounded-md hover:-translate-y-1"
        onClick={onOpen}
      >
        <div className="relative px-3 py-2">
          <IoCart className="text-slate-50" size={28} />
          <span
            className="absolute right-0 top-0 text-sm text-red-700 font-bold bg-slate-100 rounded-full px-[0.2rem] -translate-y-1
            "
          >
            {numberOfCartItems}
          </span>
        </div>
      </button>
    </React.Fragment>
  );
};

export default NavCart;
