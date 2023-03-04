import React from "react";

const ErrorContent = ({ title, children }) => {
  return (
    <section className="w-full flex flex-col items-center gap-3">
      <p className="font-bold text-2xl mt-4">{title}</p>
      {children}
    </section>
  );
};

export default ErrorContent;
