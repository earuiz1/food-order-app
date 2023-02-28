import React, { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";
import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import { ToastContainer } from "react-toastify";
import HeaderMain from "../components/Header/HeaderMain";
import MenuList from "../components/Menu/MenuList";
import Nav from "../components/Nav/Nav";

const Home = () => {
  const isModalShowing = useSelector((state) => state.modal.isModalShowing);

  //   useEffect(() => {
  //     const getData = async () => {
  //       const mealsData = await getDocs(collection(db, "meals"));
  //       setMeals(mealsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //       console.log(meals);
  //       setIsLoading(false);
  //     };

  //     getData();
  //   }, []);

  //Disable page scroll if modal is open, otherwise allow it.
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isModalShowing ? "hidden" : "auto";
  }, [isModalShowing]);

  return (
    <>
      <ToastContainer limit={1} />
      <Nav />
      {isModalShowing && <Cart />}
      <HeaderMain />
      <MenuList />
    </>
  );
};

export default Home;

export const loader = async () => {
  const mealsData = await getDocs(collection(db, "meals"));
  try {
    if (mealsData.docs.length !== 0) {
      const meals = mealsData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return meals;
    } else {
      return;
    }
  } catch (error) {
    throw new Response(JSON.stringify({ message: error }), {
      status: 500,
    });
  }
};
