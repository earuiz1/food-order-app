import { useState } from "react";
import Nav from "./components/Nav/Nav";
import HeaderMain from "./components/Header/HeaderMain";
import MenuList from "./components/Menu/MenuList";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/cartContext";

const App = () => {
  const meals = [
    {
      id: "v1",
      name: "Enchiladas Rojas",
      price: "10.99",
    },
    {
      id: "v2",
      name: "Enchiladas Verdes",
      price: "11.99",
    },
    {
      id: "v3",
      name: "Flautas de Carne",
      price: "12.99",
    },
    {
      id: "v4",
      name: "Flautas de Pollo",
      price: "12.99",
    },
    {
      id: "v5",
      name: "Nachos",
      price: "14.99",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

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
