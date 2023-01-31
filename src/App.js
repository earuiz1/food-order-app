import Nav from "./components/Nav/Nav";
import HeaderMain from "./components/Header/HeaderMain";
import MenuList from "./components/Menu/MenuList";

const App = () => {
  const meals = [
    {
      id: Math.random().toString(),
      name: "Enchiladas Rojas",
      price: "10.99",
    },
    {
      id: Math.random().toString(),
      name: "Enchiladas Verdes",
      price: "11.99",
    },
    {
      id: Math.random().toString(),
      name: "Flautas de Carne",
      price: "12.99",
    },
    {
      id: Math.random().toString(),
      name: "Flautas de Pollo",
      price: "12.99",
    },
    {
      id: Math.random().toString(),
      name: "Nachos a la Mexicana",
      price: "14.99",
    },
  ];
  return (
    <div>
      <Nav />
      <HeaderMain />
      <MenuList meals={meals} />
    </div>
  );
};

export default App;
