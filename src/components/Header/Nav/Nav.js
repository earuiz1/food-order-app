import React from "react";

import NavButton from "./NavButton";

import { MdFastfood } from "react-icons/md";
import "./Nav.css";

function Nav(props) {
  return (
    <React.Fragment>
      <div className="nav-container">
        <div className="nav-title">
          <MdFastfood size={30} />
          <h1>Food Order App</h1>
        </div>
        <div className="nav-body">
          <NavButton meals={props.meals} totalOfItems={props.totalOfItems} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
