import React from "react";
import NavCart from "./NavCart";
import { IoFastFood } from "react-icons/io5";
import { NavLink } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase";
// import { toast } from "react-toastify";
// import useAuth from "../../custom-hooks/useAuth";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  // const { currentUser } = useAuth();

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

  // const logoutHandler = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       toast.success("Logged out successfully", {
  //         position: "bottom-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: false,
  //         draggable: false,
  //         progress: undefined,
  //         theme: "dark",
  //       });
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       toast.success("Something went wrong!", {
  //         position: "bottom-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: false,
  //         draggable: false,
  //         progress: undefined,
  //         theme: "dark",
  //       });
  //     });
  // };
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
      <div>
        <ul className="flex gap-4 items-center">
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
        </ul>
      </div>
    </div>
  );
};

export default Nav;
