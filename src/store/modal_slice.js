import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  isModalShowing: false,
};

const cartSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    openModal(state) {
      state.isModalShowing = true;
    },
    closeModal(state) {
      state.isModalShowing = false;
    },
  },
});

export default cartSlice;
