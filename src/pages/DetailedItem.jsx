import React from "react";
import { json } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "@firebase/firestore";
import { useSelector } from "react-redux";
import Item from "../components/Item";
import Cart from "../components/Cart/Cart";

const DetailedItem = () => {
  const isModalShowing = useSelector((state) => state.modal.isModalShowing);

  // const nav = document.querySelector("#nav");
  // nav.style.position = "relative";

  return (
    <>
      {isModalShowing && <Cart />}
      <Item />
    </>
  );
};

export default DetailedItem;

export const loader = async ({ params }) => {
  const id = params.itemID;
  const docRef = doc(db, "meals", id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data;
    } else {
      console.log("No such document!");
    }
  } catch (message) {
    console.error(message);
    return json({ message: "Failed to retrieve meal data." }, { status: 500 });
  }
};
