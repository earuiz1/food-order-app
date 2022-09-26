import React from "react";

import Nav from "./Nav/Nav";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <Nav onOpen={props.onOpen} totalOfItems={props.totalOfItems} />
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80"
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
