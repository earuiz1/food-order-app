import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import HeaderMain from "./components/Header/HeaderMain";
import MenuList from "./components/Menu/MenuList";
import Cart from "./components/Cart/Cart";
import { db } from "./firebase";
import { collection, getDocs } from "@firebase/firestore";
import { ImSpinner2 } from "react-icons/im";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isModalShowing = useSelector((state) => state.modal.isModalShowing);

  useEffect(() => {
    const getData = async () => {
      const mealsData = await getDocs(collection(db, "meals"));
      setMeals(mealsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(meals);
      setIsLoading(false);
    };

    getData();
  }, []);

  //Disable page scroll if modal is open, otherwise allow it.
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isModalShowing ? "hidden" : "auto";
  }, [isModalShowing]);

  return (
    <React.Fragment>
      <ToastContainer limit={1} />
      {isModalShowing && <Cart />}
      <Nav />
      <HeaderMain />
      {isLoading ? (
        <section className="flex justify-center w-full my-20 gap-3">
          <ImSpinner2 className="text-slate-900 animate-spin" size={30} />
          <span className="text-slate-900 font-bold">Loading...</span>
        </section>
      ) : (
        <MenuList meals={meals} />
      )}
    </React.Fragment>
  );
};

export default App;
