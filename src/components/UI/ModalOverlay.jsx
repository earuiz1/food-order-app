import React from "react";

const ModalOverlay = ({ children }) => {
  return (
    <React.Fragment>
      <div className="fixed top-0 left-0 w-full h-full z-[10] bg-black/80"></div>
      <div className="fixed top-[20vh] left-1/2 transform -translate-x-1/2 w-[90%] bg-slate-50 rounded-lg shadow-lg shadow-slate-700 z-[30] ">
        <div className="flex flex-col gap-4 p-4">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default ModalOverlay;
