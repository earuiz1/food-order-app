// import React, { useState, useEffect } from "react";
// import Nav from "./components/Nav/Nav";
// import HeaderMain from "./components/Header/HeaderMain";
// import MenuList from "./components/Menu/MenuList";
// import Cart from "./components/Cart/Cart";
// import LoadingSection from "./components/LoadingSection/LoadingSection";
// import { db } from "./firebase";
// import { collection, getDocs } from "@firebase/firestore";
// import { ToastContainer } from "react-toastify";
// import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage, { loader as mealsLoader } from "./pages/Home";
import ItemPage from "./pages/Item";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: mealsLoader,
      },
      { path: "item/:itemID", element: <ItemPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
