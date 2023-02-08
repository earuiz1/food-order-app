import React from "react";
import headerImg from "../../assets/header_img.png";

const HeaderMain = () => {
  return (
    <section className="relative w-full h-[400px]">
      <img
        src={headerImg}
        alt="Mexican Food"
        className="w-full h-full object-cover bg-center bg-no-repeat"
      />
      <div className="w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900/80 rounded-lg py-4 px-2">
        <span className="text-slate-50 font-bold text-sm md:text-lg">
          Delicias Ruiz is a Mexican restaurant that offers authentic, bold and
          flavorful dishes made with the freshest ingredients. With a menu that
          showcases the rich culinary heritage of Mexico, Delicias Ruiz is the
          perfect destination for anyone looking to experience the unique and
          delicious tastes of traditional Mexican cuisine.
        </span>
      </div>
    </section>
  );
};

export default HeaderMain;
