import React from "react";
import NavCart from "./NavCart";
import { IoFastFood } from "react-icons/io5";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import useAuth from "../../custom-hooks/useAuth";

const Nav = () => {
  const { currentUser } = useAuth();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Logged out successfully", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        // An error happened.
        toast.success("Something went wrong!", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  return (
    <div
      className="bg-slate-900 w-full flex justify-between items-center py-4 px-6"
      id="nav"
    >
      <div className="flex items-center gap-2">
        <IoFastFood className="text-slate-50" size={30} />
        <h1 className="text-slate-50 font-bold text-2xl md:text-3xl">
          Delicias Ruiz
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {currentUser ? (
          <>
            <span className="text-slate-100 font-semibold text-sm">
              {`Hello, ${currentUser.displayName}!`}
            </span>
            <span
              onClick={logoutHandler}
              className="text-slate-100 font-semibold text-sm cursor-pointer hover:underline-offset-8 hover:underline"
            >
              Logout
            </span>
            <NavCart />
          </>
        ) : (
          <>
            <Link
              to="signup"
              className="text-slate-100 font-semibold text-sm hover:underline-offset-8 hover:underline"
            >
              Sign Up
            </Link>
            <Link
              to="login"
              className="text-slate-100 font-semibold text-sm hover:underline-offset-8 hover:underline"
            >
              Login
            </Link>
            <NavCart />
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
