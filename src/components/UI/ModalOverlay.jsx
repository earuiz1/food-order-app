import React from "react";

const ModalOverlay = ({ children, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-10 bg-black/70"
      onClick={onClose}
    >
      <div className="fixed top-[50%] left-[5%] w-[90%] bg-slate-50 rounded-lg shadow-lg shadow-slate-700 z-[30] ">
        <div className="flex flex-col gap-4 p-4">{children}</div>
      </div>
    </div>
  );
};

export default ModalOverlay;
