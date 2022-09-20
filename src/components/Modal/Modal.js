import { Fragment } from "react";
import ReactDOM from "react-dom";

import ModalOverlay from "./ModalOverlay";
import BackDrop from "./BackDrop";

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
}

export default Modal;
