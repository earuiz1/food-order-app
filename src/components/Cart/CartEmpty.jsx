import React from "react";

const CartEmpty = ({ onClose }) => {
  return (
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
  );
};

export default CartEmpty;
