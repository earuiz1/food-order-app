import React from "react";

import MealItem from "./MealItem";
import "./MealList.css";

function FoodList(props) {
  const saveMealInfo = (amount, id, name, price) => {
    props.onSaveMealInfo(amount, id, name, price);
  };
  return (
    <div className="food-list-container">
      {props.meals.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            desc={meal.desc}
            price={meal.price}
            onSaveMealInfo={saveMealInfo}
          />
        );
      })}
    </div>
  );
}

export default FoodList;
