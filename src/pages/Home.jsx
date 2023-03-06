import React from "react";
import { db } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";
import { json } from "react-router-dom";
import HeaderMain from "../components/Header/HeaderMain";
import MenuList from "../components/Menu/MenuList";
// import Nav from "../components/Nav/Nav";

const Home = () => {
  return (
    <>
      {/* <Nav /> */}
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
