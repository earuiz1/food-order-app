import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ meals }) => {
  return (
    <section className="w-[350px] md:min-w-[600px] mx-auto">
      <div className="flex flex-col w-full bg-slate-900/90 rounded-md p-4 gap-4">
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
