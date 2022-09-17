import React from "react";

import { BsFillCartFill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";

import "./Nav.css";

function Nav() {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-title">
          <MdFastfood size={30} />
          <h1>Food Order App</h1>
        </div>
        <div className="nav-body">
          <div className="nav-cart">
            <BsFillCartFill size={18} />
            <span>Cart</span>
          </div>
          <div className="nav-item-counter">
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
