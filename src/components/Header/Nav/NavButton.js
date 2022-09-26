import React from "react";

import { BsFillCartFill } from "react-icons/bs";
import "./NavButton.css";

function NavButton(props) {
  return (
    <React.Fragment>
      <button onClick={props.onOpen} className="navBtn-container">
        <div className="navBtn-cart">
          <BsFillCartFill size={18} />
          <span>Cart</span>
        </div>
        <div className="navBtn-counter">
          <span>{props.totalOfItems}</span>
        </div>
      </button>
    </React.Fragment>
  );
}

export default NavButton;
