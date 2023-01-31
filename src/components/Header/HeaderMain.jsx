import React from "react";
import headerImg from "../../assets/header_img.png";

const HeaderMain = () => {
  return (
    <section className="w-full h-[400px]">
      <img
        src={headerImg}
        alt="Mexican Food"
        className="w-full h-full object-cover bg-center bg-no-repeat"
      />
    </section>
  );
};

export default HeaderMain;
