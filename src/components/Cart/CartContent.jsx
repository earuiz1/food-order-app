import React from "react";
import HeroHeader from "../UI/HeroHeader";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/index";
import { BiTrash } from "react-icons/bi";

const CartContent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const cartIsEmpty = cartItems.length === 0;

  const addItemHandler = (item) => {
    dispatch(
      cartActions.addItem({
        ...item,
        quantity: 1,
      })
    );
  };

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const removeItemCompletelyHandler = (id) => {
    dispatch(cartActions.removeItemCompletely(id));
  };

  return (
    <section className="w-full h-screen">
      <HeroHeader />
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 my-20 px-2">
        <table className="table-fixed w-full">
          <thead>
            <tr className="border-b border-slate-400">
              <th className="text-sm py-2 w-[30%] text-left">Name</th>
              <th className="text-sm py-2 w-[20%]">Price</th>
              <th className="text-sm py-2 w-[20%]">Qty</th>
              <th className="text-sm py-2 w-[30%] text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartIsEmpty && (
              <tr>
                <td
                  colSpan={4}
                  className="text-slate-900 font-bold text-center py-4 border-b border-slate-400"
                >
                  Your cart is empty!
                </td>
              </tr>
            )}
            {cartItems.map((item) => {
              return (
                <tr className=" border-b border-slate-400" key={item.id}>
                  <td className="text-sm py-4 text-left">{item.name}</td>
                  <td className="text-sm text-center py-4 ">${item.price}</td>
                  <td className="text-sm text-center py-4 ">{item.quantity}</td>
                  <td className="flex justify-end items-center py-4 gap-2">
                    <button
                      onClick={() => removeItemHandler(item.id)}
                      className="bg-slate-800 py-[0.10rem] px-3 rounded-md text-slate-100"
                    >
                      -
                    </button>
                    <button
                      onClick={() => addItemHandler(item)}
                      className="bg-slate-800 py-[0.10rem] px-3 rounded-md text-slate-100"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItemCompletelyHandler(item.id)}
                      className="bg-slate-800 py-[0.20rem] px-2 rounded-md text-slate-100 "
                    >
                      <BiTrash className="text-slate-50" size={22} />
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={3} className="py-2 text-base font-semibold">
                Subtotal
              </td>
              <td
                colSpan={1}
                className="text-red-600 font-bold italic text-base text-right py-2"
              >
                {+cartTotalPrice.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col gap-3 my-10">
          <span className="text-slate-500 text-center">
            Taxes and shipping will added in checkout
          </span>
          <div className="flex flex-col gap-2">
            {!cartIsEmpty && (
              <Link to="../checkout">
                <button className="bg-slate-900 text-slate-100 font-semibold rounded-sm py-2 w-full">
                  Checkout
                </button>
              </Link>
            )}
            <Link to="..">
              <button className="bg-slate-900 text-slate-100 font-semibold rounded-sm py-2 w-full">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartContent;
