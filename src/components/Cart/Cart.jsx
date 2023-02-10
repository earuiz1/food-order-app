import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { CartContext } from "../../context/cartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ onClose }) => {
  const cartContext = useContext(CartContext);

  const cartIsEmpty = cartContext.items.length === 0;

  const submitOrder = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        ...data,
        items: cartContext.items,
      });

      //Show toast
      toast.success(`Order complete!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "light",
      });

      setTimeout(() => cartContext.resetCart(), 3000);

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);

      //Show toast
      toast.error(`Something went wrong!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "light",
      });
    }
  };

  return (
    <Modal onClose={onClose}>
      {cartIsEmpty ? (
        <CartEmpty onClose={onClose} />
      ) : (
        <CartItems onClose={onClose} submitOrder={submitOrder} />
      )}
    </Modal>
  );
};

export default Cart;
