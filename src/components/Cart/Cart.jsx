import React, { useContext } from "react";
import Modal from "../UI/Modal";
import { CartContext } from "../../context/cartContext";

const Cart = ({ onClose }) => {
  const cartContext = useContext(CartContext);

  //console.log(cartContext.items);

  const addItemHandler = (item) => {
    cartContext.addItem({ ...item, quantity: 1 });
  };

  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  return (
    <Modal onClose={onClose}>
      {cartContext.items.map((item) => {
        return (
          <div
            key={item.id}
            className="flex justify-between border-b border-slate-400/50 py-2"
          >
            <div className="flex gap-4">
              <span className="font-medium">{item.name}</span>
              <span className="font-semibold italic text-red-700">
                ${item.price}
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
              <span className="font-medium">{item.quantity}</span>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between">
        <span className="font-bold">Total Amount: </span>
        <span className="font-bold text-red-700">
          ${+cartContext.totalPrice.toFixed(2)}
        </span>
      </div>
      <div className="flex w-full justify-end gap-2">
        <button
          onClick={onClose}
          className="bg-slate-700 p-2 rounded-lg text-slate-100"
        >
          Close
        </button>
        <button className="bg-slate-700 p-2 rounded-lg text-slate-100">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
