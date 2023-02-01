import React from "react";
import Modal from "../UI/Modal";

const Cart = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className="flex justify-between">
        <span className="font-bold">Total Amount: </span>
        <span>$35.89</span>
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
