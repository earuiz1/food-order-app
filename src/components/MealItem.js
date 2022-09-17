import React from "react";

import "./MealItem.css";
function MealItem(props) {
  return (
    <React.Fragment>
      <div className="meal">
        <div className="meal-main">
          <h3>{props.name}</h3>
          <span className="meal-desc">{props.desc}</span>
          <span className="meal-price">${props.price}</span>
        </div>
        <div className="meal-action">
          <div className="meal-input">
            <label>Amount:</label>
            <input type="number" min="1" />
          </div>
          <button>Add</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MealItem;
