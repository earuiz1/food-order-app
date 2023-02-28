import React, { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import { ToastContainer } from "react-toastify";
import HeaderMain from "../components/Header/HeaderMain";
import MenuList from "../components/Menu/MenuList";
import Nav from "../components/Nav/Nav";

const Home = () => {
  const isModalShowing = useSelector((state) => state.modal.isModalShowing);

  //Disable page scroll if modal is open, otherwise allow it.
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isModalShowing ? "hidden" : "auto";
  }, [isModalShowing]);

  return (
    <>
      <ToastContainer limit={1} />
      {/* <Nav /> */}
      {isModalShowing && <Cart />}
      <HeaderMain />
      <MenuList />
    </>
  );
};

export default Home;

export const loader = async () => {
  try {
    const mealsData = await getDocs(collection(db, "meals"));
    if (mealsData.docs.length !== 0) {
      const meals = mealsData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return meals;
    }
  } catch (message) {
    console.error(message);
    return json({ message: "Failed to retrieve meals data." }, { status: 500 });
  }
};
