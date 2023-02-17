import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart_slice";
import modalSlice from "./modal_slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;
export const modalActions = modalSlice.actions;

export default store;
