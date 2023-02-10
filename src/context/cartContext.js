import React, { useReducer } from "react";
const initialState = {
  items: [],
  totalPrice: 0,
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
    let updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.quantity;
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedItems;
    const itemIndex = state.items.findIndex((item) => item.id === action.id);

    let updatedTotalPrice = state.totalPrice - state.items[itemIndex].price;

    let updatedCartEmpty;
    if (state.items[itemIndex].quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItems = [...state.items];
      updatedItems[itemIndex].quantity = updatedItems[itemIndex].quantity - 1;
    }
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      cartEmpty: updatedCartEmpty,
    };
  }

  if (action.type === "RESET_CART") {
    return initialState;
  }

  return initialState;
};

export const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  resetCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const addItemHandler = (item) => {
    dispatch({ type: "ADD_ITEM", item: item });
  };

  const removeItemHanlder = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };

  const resetCartHandler = () => {
    dispatch({ type: "RESET_CART" });
  };
  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHanlder,
    resetCart: resetCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
