import React, { useState } from "react";

import { BsFillCartFill } from "react-icons/bs";
import Cart from "./Cart";
import "./NavButton.css";

function NavButton(props) {
  //Set a state to handle if the modal is open or not
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("Button clicked!");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      {isOpen === true && <Cart onClose={closeModal} />}
      <button onClick={openModal} className="navBtn-container">
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
