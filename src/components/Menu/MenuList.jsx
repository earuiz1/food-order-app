import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ meals }) => {
  return (
    <section className="absolute top-[40vh] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] mx-auto">
      <div className="flex flex-col w-full bg-slate-900 rounded-md p-6 gap-6 shadow-lg shadow-slate-600">
        <ul>
          {meals.map((meal) => {
            return (
              <li
                key={meal.id}
                className="border-b border-slate-50 py-6 last:border-b-0"
              >
                <MenuItem id={meal.id} name={meal.name} price={meal.price} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MenuList;
