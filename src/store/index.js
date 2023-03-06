import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart_slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;

export default store;
