import React from "react";
import Modal from "../UI/Modal";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartIsEmpty = cartItems.length === 0;

  const submitOrder = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        ...data,
        items: cartItems,
      });

      //Show toast
      toast.success(`Loading....`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "light",
      });

      //Show toast
      toast.success(`Order complete!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "light",
      });

      setTimeout(() => dispatch(cartActions.resetCart()), 3000);

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
    <Modal>
      {cartIsEmpty ? <CartEmpty /> : <CartItems submitOrder={submitOrder} />}
    </Modal>
  );
};

export default Cart;
