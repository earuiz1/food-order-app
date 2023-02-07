import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import HeaderMain from "./components/Header/HeaderMain";
import MenuList from "./components/Menu/MenuList";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/cartContext";
import { db } from "./firebase";
import { collection, getDocs } from "@firebase/firestore";
import { ImSpinner2 } from "react-icons/im";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const mealsData = await getDocs(collection(db, "meals"));
      setMeals(mealsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(meals);
      setIsLoading(false);
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
      {isLoading ? (
        <section className="flex justify-center w-full my-20 gap-3">
          <ImSpinner2 className="text-slate-50 animate-spin" size={30} />
          <span className="text-slate-50 font-bold">Loading...</span>
        </section>
      ) : (
        <MenuList meals={meals} />
      )}
    </CartProvider>
  );
};

export default App;
