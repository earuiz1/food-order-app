import React from "react";

import "./ModalOverlay.css";

function ModalOverlay(props) {
  return <div className="modal-container">{props.children}</div>;
}

export default ModalOverlay;
