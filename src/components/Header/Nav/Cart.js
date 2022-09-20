import React from "react";

import Modal from "../../Modal/Modal";

import "./Cart.css";

function Cart(props) {
  return (
    <Modal>
      <div className="cart-header">
        <h3>Cart Information</h3>
      </div>
      <div className="cart-item">
        <div className="cart-item-main">
          <span>Title</span>
          <div className="cart-item-main-info">
            <span>Price</span>
            <span>Amount</span>
          </div>
        </div>
        <div className="cart-item-actions">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
      <div className="cart-footer">
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
