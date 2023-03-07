import RootLayout from "../pages/RootLayout";
import HomePage, { loader as mealsLoader } from "../pages/Home";
import DetailedItemPage, { loader as itemLoader } from "../pages/DetailedItem";
import ErrorPage from "../pages/Error";
import SignUpPage from "../pages/SignUp";
import LoginPage from "../pages/Login";
import CartPage from "../pages/Cart";
import AlternateLayout from "../pages/AlternateLayout";
import CheckoutPage from "../pages/Checkout";
import ProtectedRoute from "./ProtectedRoute";

export const routes = [
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
      {
        path: "item/:itemID",
        element: <DetailedItemPage />,
        loader: itemLoader,
      },

      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    element: <AlternateLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
