import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage, { loader as mealsLoader } from "./pages/Home";
import DetailedItemPage, { loader as itemLoader } from "./pages/DetailedItem";
import ErrorPage from "./pages/Error";
import SignUpPage from "./pages/SignUp";

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
      {
        path: "item/:itemID",
        element: <DetailedItemPage />,
        loader: itemLoader,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
