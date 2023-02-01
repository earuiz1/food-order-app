import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

const Modal = ({ children, onClose }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
};

export default Modal;
