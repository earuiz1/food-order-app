import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

const Modal = ({ children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
};

export default Modal;
