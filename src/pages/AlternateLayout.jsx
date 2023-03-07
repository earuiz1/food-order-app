import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import AlternateNav from "../components/AlternateNav/AlternateNav";

const AlternateLayout = () => {
  return (
    <>
      <AlternateNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default AlternateLayout;
