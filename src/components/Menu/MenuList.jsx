import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ meals }) => {
  return (
    <section className="w-full my-5 px-4">
      <div className="flex gap-2 items-end justify-between md:justify-start mb-4">
        <h2 className="text-red-600 font-extrabold text-4xl uppercase">
          Featured
        </h2>
        <span className="font-medium uppercase hover:underline hover:underline-offset-2">
          See more
        </span>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-4 w-full px-2"> */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-y-4 gap-x-6">
        {meals.map((meal) => {
          return (
            <li key={meal.id} className="min-w-[300px] max-w-[500px] mx-auto">
              <MenuItem
                id={meal.id}
                name={meal.name}
                price={meal.price}
                url={meal.url}
              />
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </section>
  );
};

export default MenuList;
