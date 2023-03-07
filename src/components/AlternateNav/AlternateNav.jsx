import React, { useState } from "react";

import { IoFastFood } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const AlternateNav = () => {
  const [navMobile, setNavMobile] = useState(false);

  const navLinks = [
    {
      id: "nv1",
      name: "Login In",
      path: "../login",
      icon: <FiLogIn size={20} />,
    },
    {
      id: "nv2",
      name: "Sign Up",
      path: "../signup",
      icon: <AiOutlineUserAdd size={20} />,
    },
  ];

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
        <GiHamburgerMenu
          className="text-slate-50"
          size={28}
          onClick={openNavMobileHandler}
        />
      </div>
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
      </ul>
      {navMobile && (
        <div className="block absolute right-0 top-[7.8vh] h-20 w-[200px] bg-slate-800 border-2 border-slate-50 rounded-lg z-[20]">
          <div className="flex flex-col items-center w-full">
            <div className="flex justify-end w-full">
              <IoClose
                size={22}
                className="text-slate-100"
                onClick={closeNavMobileHandler}
              />
            </div>
            <ul>
              {navLinks.map((link) => {
                return (
                  <li className="text-slate-100 text-sm" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive ? "font-bold underline-offset-6 underline" : ""
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
          </div>
        </div>
      )}
    </div>
  );
};

export default AlternateNav;
