import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

import { CartContext } from "../../context/cartContext";

const Cart = ({ onClose }) => {
  const cartContext = useContext(CartContext);

  const submitOrder = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        ...data,
        items: cartContext.items,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const cartIsEmpty = cartContext.items.length === 0;

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
