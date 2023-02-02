import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ meals }) => {
  return (
    <section className="absolute top-[40vh] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] mx-auto">
      <div className="flex flex-col w-full bg-slate-900 rounded-md p-4 gap-6 shadow-lg shadow-slate-600">
        {meals.map((meal) => {
          return (
            <MenuItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              price={meal.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MenuList;
