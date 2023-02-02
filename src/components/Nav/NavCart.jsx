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
    <button
      className="bg-slate-700 flex justify-between items-center rounded-md p-2 gap-4"
      onClick={onOpen}
    >
      <IoCart className="text-slate-50" size={25} />
      <span className="bg-slate-400 rounded-lg px-2">{numberOfCartItems}</span>
    </button>
  );
};

export default NavCart;
