import React, { useState } from "react";
import NavCart from "./NavCart";
import { IoFastFood } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import useAuth from "../../custom-hooks/useAuth";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const [navMobile, setNavMobile] = useState(false);

  const navLinks = [
    {
      id: "nv1",
      name: "Login In",
      path: "login",
      icon: <FiLogIn size={20} />,
    },
    {
      id: "nv2",
      name: "Sign Up",
      path: "signup",
      icon: <AiOutlineUserAdd size={20} />,
    },
  ];

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

        dispatch(cartActions.resetCart());
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

  const openNavMobileHandler = () => {
    setNavMobile(true);
  };

  const closeNavMobileHandler = () => {
    setNavMobile(false);
  };
  return (
    <div className="bg-slate-900 w-full flex justify-between items-center py-4 px-6">
      <div className="flex items-center gap-2">
        <IoFastFood className="text-slate-50" size={30} />
        <h1 className="text-slate-50 font-bold text-2xl md:text-3xl">
          Delicias Ruiz
        </h1>
      </div>
      <div className="lg:hidden flex items-center gap-4">
        <NavCart />
        <GiHamburgerMenu
          className="text-slate-100 cursor-pointer"
          size={28}
          onClick={openNavMobileHandler}
        />
      </div>
      {currentUser ? (
        <ul className="hidden lg:flex lg:gap-4 lg:items-center">
          <span className="text-slate-100 font-semibold text-sm">
            Hello, {currentUser?.displayName}!
          </span>
          <li className="text-slate-100 text-sm">
            <span onClick={logoutHandler}>Logout</span>
          </li>
          <NavCart />
        </ul>
      ) : (
        <ul className="hidden lg:flex lg:gap-4 lg:items-center">
          {navLinks.map((link) => {
            return (
              <li className="text-slate-100 text-sm" key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "font-bold underline-offset-8 underline" : ""
                  }
                >
                  <span className="flex gap-1">
                    {link.icon} {link.name}
                  </span>
                </NavLink>
              </li>
            );
          })}
          <NavCart />
        </ul>
      )}
      {navMobile && (
        <div className="block absolute right-0 top-[76px] h-20 w-[200px] bg-slate-800 border-2 border-slate-50 rounded-lg z-[20]">
          <div className="flex flex-col items-center w-full">
            <div className="flex justify-end w-full">
              <IoClose
                size={22}
                className="text-slate-100 cursor-pointer"
                onClick={closeNavMobileHandler}
              />
            </div>
            {!currentUser ? (
              <ul>
                {navLinks.map((link) => {
                  return (
                    <li className="text-slate-100 text-sm" key={link.id}>
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold underline-offset-6 underline"
                            : ""
                        }
                        onClick={closeNavMobileHandler}
                      >
                        <span className="flex gap-1">
                          {link.icon} {link.name}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="flex flex-col items-center gap-1">
                <span className="text-slate-100 font-semibold text-sm">
                  Hello, {currentUser.displayName}!
                </span>
                <span
                  className="text-slate-100 font-semibold text-sm"
                  onClick={logoutHandler}
                >
                  Logout
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
