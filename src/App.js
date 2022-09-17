import Header from "./components/Header/Header";
import FoodList from "./components/FoodList";

import "./App.css";

function App() {
  const meals = [
    {
      name: "Bacon Rancher",
      desc: "Two beef patties, six slices of bacon, house-made ranch, American cheese, sauteed onions, pickles.",
      price: 13.99,
      amount: "1",
    },
    {
      name: "Big Bacon BBQ Burger",
      desc: "Two beef patties, six slices of bacon, house BBQ, cheddar, red onion, pickles.",
      price: 12.99,
      amount: "1",
    },
    {
      name: "BBQ Brisket Burger",
      desc: "Brisket, house BBQ, cheddar, pickles, coleslaw.",
      price: 11.99,
      amount: "1",
    },
  ];
  return (
    <div>
      <Header />
      <FoodList meals={meals} />
    </div>
  );
}

export default App;
