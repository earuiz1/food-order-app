import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import HeaderMain from "./components/Header/HeaderMain";
import MenuList from "./components/Menu/MenuList";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/cartContext";
import { db } from "./firebase";
import { collection, getDocs } from "@firebase/firestore";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Getting the data from the firebase database and setting it to the state. */
  useEffect(() => {
    const getData = async () => {
      const mealsData = await getDocs(collection(db, "meals"));
      setMeals(mealsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(meals);
    };

    getData();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <CartProvider>
      {isModalOpen && <Cart onClose={closeModal} />}
      <Nav onOpen={openModal} />
      <HeaderMain />
      <MenuList meals={meals} />
    </CartProvider>
  );
};

export default App;
