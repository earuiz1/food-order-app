import React, { useState } from "react";
import HeroHeader from "../UI/HeroHeader";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";

const CheckoutContent = () => {
  const [loading, setLoading] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const tax = totalPrice / 6.25;
  const orderTotal = totalPrice + tax;
  return (
    <section className="w-full">
      <HeroHeader />
      <div className="flex flex-row justify-around w-full my-10">
        <form className="flex flex-col min-w-[350px] max-w-[400px] bg-slate-800 shadow-md shadow-slate-400 p-6 rounded-lg gap-6">
          <h1 className="text-slate-100 font-bold text-2xl text-center uppercase">
            Billing Information
          </h1>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-slate-100 font-semibold text-sm"
            >
              Name:
            </label>
            <input
              className="px-2 py-1 rounded-md placeholder:text-sm"
              type="name"
              name="name"
              placeholder="Enter Name..."
            />
            {/* {formik.errors.email && (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.email}
              </p>
            )} */}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-slate-100 font-semibold text-sm"
            >
              Email:
            </label>
            <input
              className="px-2 py-1 rounded-md placeholder:text-sm"
              type="email"
              name="email"
              placeholder="Enter Email..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="number"
              className="text-slate-100 font-semibold text-sm"
            >
              Phone Number:
            </label>
            <input
              className="px-2 py-1 rounded-md placeholder:text-sm"
              type="text"
              name="number"
              placeholder="Enter Phone Number..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="address"
              className="text-slate-100 font-semibold text-sm"
            >
              Address:
            </label>
            <input
              className="px-2 py-1 rounded-md placeholder:text-sm"
              type="text"
              name="address"
              placeholder="Enter Street Address..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="state"
              className="text-slate-100 font-semibold text-sm"
            >
              State:
            </label>
            <input
              className="px-2 py-1 rounded-md placeholder:text-sm"
              type="text"
              name="state"
              placeholder="Enter State..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="city"
              className="text-slate-100 font-semibold text-sm"
            >
              City:
            </label>
            <input
              className="px-2 py-1 rounded-md placeholder:text-sm"
              type="text"
              name="city"
              placeholder="Enter City..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="zipCode"
              className="text-slate-100 font-semibold text-sm"
            >
              Zip Code:
            </label>
            <input
              className="px-2 py-1 rounded-md placeholder:text-sm"
              type="number"
              name="zipCode"
              placeholder="Enter Zip Code..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-500 text-slate-100 font-semibold rounded-md py-2"
          >
            {!loading ? (
              "Complete Order"
            ) : (
              <span className="flex justify-center gap-2">
                <ImSpinner2
                  className="text-slate-100 animate-spin inline"
                  size={25}
                />
                Loading...
              </span>
            )}
          </button>
        </form>
        <div className="flex flex-col self-start min-w-[350px] max-w-[400px] bg-slate-800 shadow-md shadow-slate-400 p-6 rounded-lg gap-2">
          <div className="flex justify-between py-2">
            <span className="text-slate-100 text-sm">Total Quantity:</span>
            <span className="text-slate-100 text-sm font-medium">
              {totalQuantity}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-slate-100 text-sm">Items:</span>
            <span className="text-slate-100 text-sm font-medium">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-slate-100 text-sm ">Total Before Tax:</span>
            <span className="text-slate-100 text-sm font-medium">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between border-b border-slate-400/50 py-2">
            <span className="text-slate-100 text-sm">
              Estimated tax to be collected:
            </span>
            <span className="text-slate-100 text-sm font-medium">
              ${tax.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-slate-100 text-sm font-semibold">
              Order Total:
            </span>
            <span className="text-red-600 text-sm font-bold">
              ${orderTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutContent;
