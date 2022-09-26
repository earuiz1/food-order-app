import React, { useState } from "react";
import Header from "./components/Header/Header";
import MealList from "./components/Meals/MealList";
import Cart from "./components/UI/Cart";

import { v4 as uuid } from "uuid";

import "./App.css";

function App() {
  //Set of state to handle meals available
  const [meals, setMeals] = useState([
    {
      id: uuid(),
      name: "Bacon Rancher",
      desc: "Two beef patties, six slices of bacon, house-made ranch, American cheese, sauteed onions, pickles.",
      price: 13.99,
    },
    {
      id: uuid(),
      name: "Big Bacon BBQ Burger",
      desc: "Two beef patties, six slices of bacon, house BBQ, cheddar, red onion, pickles.",
      price: 12.99,
    },
    {
      id: uuid(),
      name: "BBQ Brisket Burger",
      desc: "Brisket, house BBQ, cheddar, pickles, coleslaw.",
      price: 11.99,
    },
  ]);

  //State that handles if the modal cart is open or closed
  const [isOpen, isSetOpen] = useState(false);

  //Set a state to handle the total amount of items
  const [totalOfItems, setTotalOfItems] = useState(0);

  const saveMealInfo = (amount, id) => {
    console.log(amount, id);
    setTotalOfItems(+amount + totalOfItems);
  };

  //Open Cart Handler
  const openCartHandler = () => {
    isSetOpen(true);
  };

  //Closed Cart Handler
  const closedCartHandler = () => {
    isSetOpen(false);
  };

  return (
    <React.Fragment>
      {isOpen && <Cart onClose={closedCartHandler} />}
      <Header
        onOpen={openCartHandler}
        meals={meals}
        totalOfItems={totalOfItems}
      />
      <MealList meals={meals} onSaveMealInfo={saveMealInfo} />
    </React.Fragment>
  );
}

export default App;
