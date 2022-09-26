import React from "react";

import "./BackDrop.css";

function BackDrop(props) {
  return <div onClick={props.onClose} className="backdrop"></div>;
}

export default BackDrop;
