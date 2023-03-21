import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartSlice from "./cart_slice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  cart: cartSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//   },
// });

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const cartActions = cartSlice.actions;

export default store;
