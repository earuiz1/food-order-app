import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/index";

const CartEmpty = () => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(modalActions.closeModal());
  };
  return (
    <div className="flex flex-col gap-4 py-2">
      <span className="text-center font-bold">Your Cart is Empty!</span>
      <div className="flex justify-center">
        <button
          onClick={closeModalHandler}
          className="bg-slate-700 self-start py-2 w-[20%] rounded-lg text-slate-100"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartEmpty;
