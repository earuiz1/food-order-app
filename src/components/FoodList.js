import React from "react";

import MealItem from "./MealItem";
import "./FoodList.css";

function FoodList(props) {
  const saveMealInfo = (amount, id) => {
    props.onSaveMealInfo(amount, id);
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
