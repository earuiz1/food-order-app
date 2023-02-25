import React from "react";
import { ImSpinner2 } from "react-icons/im";

const LoadingSection = () => {
  return (
    <section className="flex justify-center w-full my-20 gap-3">
      <ImSpinner2 className="text-slate-900 animate-spin" size={30} />
      <span className="text-slate-900 font-bold">Loading...</span>
    </section>
  );
};

export default LoadingSection;
