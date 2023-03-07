import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
      }
      state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      state.totalQuantity = state.totalQuantity + newItem.quantity;
    },
    removeItem(state, action) {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      state.totalPrice = state.totalPrice - existingItem.price;
      state.totalQuantity = state.totalQuantity - 1;

      if (existingItem.quantity === 1) {
        //Remove item
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    resetCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export default cartSlice;
