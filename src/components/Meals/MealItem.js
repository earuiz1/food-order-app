import React, { useState } from "react";

import "./MealItem.css";
function MealItem(props) {
  //Set a state to handle the amount of each meal
  const [itemAmount, setItemAmount] = useState(1);

  const changeHandler = (event) => {
    setItemAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //Lift up the data
    props.onSaveMealInfo(itemAmount, props.id, props.name, props.price);

    //Set Amount back to 1
    setItemAmount(1);
  };

  return (
    <React.Fragment>
      <div className="meal">
        <div className="meal-main">
          <h3>{props.name}</h3>
          <span className="meal-desc">{props.desc}</span>
          <span className="meal-price">${props.price}</span>
        </div>
        <form onSubmit={submitHandler}>
          <div className="meal-action">
            <div className="meal-input">
              <label>Amount:</label>
              <input
                type="number"
                min="1"
                value={itemAmount}
                onChange={changeHandler}
              />
            </div>
            <button>Add</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default MealItem;
