import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import CheckoutForm from "./CheckoutForm";

const CartItems = ({ onClose, submitOrder }) => {
  const cartContext = useContext(CartContext);

  const [isCheckoutReady, setIsCheckoutReady] = useState(false);

  const addItemHandler = (item) => {
    cartContext.addItem({ ...item, quantity: 1 });
  };

  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const orderHandler = () => {
    //checkoutReady(true);
    setIsCheckoutReady(true);
  };

  return (
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
                className="bg-slate-600 font-bold self-start rounded-lg px-4  text-slate-100"
              >
                -
              </button>
              <button
                onClick={() => addItemHandler(item)}
                className="bg-slate-600 font-bold self-start rounded-lg px-4 text-slate-100"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between">
        <span className="text-sm md:text-base font-bold">Total Amount:</span>
        <span className="text-sm md:text-base font-bold text-red-700">
          ${+cartContext.totalPrice.toFixed(2)}
        </span>
      </div>
      {isCheckoutReady ? (
        <CheckoutForm submitOrder={submitOrder} />
      ) : (
        <div className="flex w-full justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-slate-600 p-2 rounded-lg text-slate-100 text-sm md:text-base "
          >
            Close
          </button>
          <button
            onClick={orderHandler}
            className="bg-slate-900 p-2 rounded-lg text-slate-100 text-sm md:text-base "
          >
            Order
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default CartItems;
