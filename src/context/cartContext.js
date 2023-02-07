import React, { useReducer } from "react";
const initialState = {
  items: [],
  totalPrice: 0,
  cartEmpty: true,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedItems;

    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (itemIndex === -1) {
      updatedItems = [...state.items, action.item];
    } else {
      updatedItems = [...state.items];
      updatedItems[itemIndex].quantity += action.item.quantity;
    }
    let updatedCartEmpty = false;
    let updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.quantity;
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      cartEmpty: updatedCartEmpty,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedItems;
    const itemIndex = state.items.findIndex((item) => item.id === action.id);

    let updatedTotalPrice = state.totalPrice - state.items[itemIndex].price;

    let updatedCartEmpty;
    if (state.items[itemIndex].quantity === 1 && state.items.length > 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      updatedCartEmpty = false;
      console.log(updatedItems);
    } else if (
      state.items[itemIndex].quantity === 1 &&
      state.items.length === 1
    ) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      updatedCartEmpty = true;
    } else {
      updatedItems = [...state.items];
      updatedItems[itemIndex].quantity = updatedItems[itemIndex].quantity - 1;
      updatedCartEmpty = false;
    }
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      cartEmpty: updatedCartEmpty,
    };
  }
  return initialState;
};
export const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  cartEmpty: true,
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
    totalPrice: cartState.totalPrice,
    cartEmpty: cartState.cartEmpty,
    addItem: addItemHandler,
    removeItem: removeItemHanlder,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
