import React from "react";

import { BsFillCartFill } from "react-icons/bs";

import "./NavButton.css";

function NavButton() {
  return (
    <button className="navBtn-container">
      <div className="navBtn-cart">
        <BsFillCartFill size={18} />
        <span>Cart</span>
      </div>
      <div className="navBtn-counter">
        <span>1</span>
      </div>
    </button>
  );
}

export default NavButton;
