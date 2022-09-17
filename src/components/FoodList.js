import React from "react";

import MealItem from "./MealItem";
import "./FoodList.css";

function FoodList(props) {
  return (
    <div className="food-list-container">
      {props.meals.map((meal) => {
        return (
          <MealItem
            name={meal.name}
            desc={meal.desc}
            price={meal.price}
            amount={meal.amount}
          />
        );
      })}
    </div>
  );
}

export default FoodList;
