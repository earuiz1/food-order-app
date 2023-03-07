import React from "react";
import cartHeroImg from "../../assets/cart_hero_img.jpeg";

const HeroHeader = () => {
  return (
    <div className="w-full h-[200px] relative">
      <div className="bg-slate-900/50 absolute w-full h-full"></div>
      <img
        src={cartHeroImg}
        alt="Mexican Food"
        className="w-full h-full object-cover bg-center bg-no-repeat"
      />
    </div>
  );
};

export default HeroHeader;
