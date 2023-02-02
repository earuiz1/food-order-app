import React, { useReducer } from "react";
const initialState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    //Use concat instead of push to create a new array and not edit the existing array.
    const updatedItems = state.items.concat(action.item);
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return initialState;
};
export const CartContext = React.createContext({
  items: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const addItemHandler = (item) => {
    dispatch({ type: "ADD_ITEM", item: item });
  };

  const removeItemHanlder = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHanlder,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
