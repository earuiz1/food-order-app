import React, { useContext } from "react";
import Modal from "../UI/Modal";

import { CartContext } from "../../context/cartContext";

const Cart = ({ onClose }) => {
  const cartContext = useContext(CartContext);

  //console.log(cartContext);

  const addItemHandler = (item) => {
    cartContext.addItem({ ...item, quantity: 1 });
  };

  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  return (
    <Modal onClose={onClose}>
      {cartContext.cartEmpty ? (
        <div className="flex flex-col gap-4 py-2">
          <span className="text-center font-bold">Your Cart is Empty!</span>
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="bg-slate-700 self-start py-2 w-[20%] rounded-lg text-slate-100"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <React.Fragment>
          {cartContext.items.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between border-b border-slate-400/50 py-2"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="text-sm md:text-base font-medium">
                    {item.name}
                  </span>
                  <span className="text-sm md:text-base font-semibold italic text-red-700">
                    ${item.price}
                  </span>
                  <span className=" text-sm md:text-base font-medium text-slate-500 border border-slate-400/80 px-3 rounded-md">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeItemHandler(item.id)}
                    className="bg-slate-700 self-start rounded-lg px-3  text-slate-100"
                  >
                    -
                  </button>
                  <button
                    onClick={() => addItemHandler(item)}
                    className="bg-slate-700 self-start rounded-lg px-3 text-slate-100"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between">
            <span className="text-sm md:text-base font-bold">
              Total Amount:
            </span>
            <span className="text-sm md:text-base font-bold text-red-700">
              ${+cartContext.totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex w-full justify-end gap-2">
            <button
              onClick={onClose}
              className="bg-slate-700 p-2 rounded-lg text-slate-100 text-sm md:text-base "
            >
              Close
            </button>
            <button className="bg-slate-700 p-2 rounded-lg text-slate-100 text-sm md:text-base ">
              Order
            </button>
          </div>
        </React.Fragment>
      )}
    </Modal>
  );
};

export default Cart;
