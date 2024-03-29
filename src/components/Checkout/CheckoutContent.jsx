import React, { useState } from "react";
import HeroHeader from "../UI/HeroHeader";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import InputMask from "react-input-mask";
import Select from "react-select";
import { US_STATE_LIST } from "../../US_STATE_LIST";

const CheckoutContent = () => {
  const [loading, setLoading] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const tax = totalPrice / 6.25;
  const orderTotal = totalPrice + tax;

  const onSubmit = (values, actions) => {
    const unmaskedPhoneNumber = values.phoneNumber.replace(/\D/g, "");

    const newValues = {
      ...values,
      phoneNumber: unmaskedPhoneNumber,
    };

    console.log(newValues);

    actions.resetForm({
      values: initialValues,
    });
  };

  const initialValues = {
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    state: "",
    city: "",
    zipCode: "",
  };

  /* Validating the form inputs using yup. */
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    phoneNumber: Yup.string().phone().required("Phone Number is required!"),
    address: Yup.string().required("Address is required!"),
    state: Yup.string().required("Option is required!"),
    city: Yup.string().required("City is required!"),
    zipCode: Yup.string()
      .required("Zip Code is required!")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, "Must be exactly 5 digits")
      .max(5, "Must be exactly 5 digits"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const stateOptions = US_STATE_LIST.map((US_STATE) => ({
    value: US_STATE.name,
    label: `${US_STATE.abbreviation} - ${US_STATE.name}`,
  }));
  return (
    <section className="w-full">
      <HeroHeader />
      <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:items-start w-full gap-6 lg:gap-0 my-10">
        <div className="flex flex-col lg:order-last lg:justify-start min-w-[80%] lg:min-w-[50%] bg-slate-800 shadow-md shadow-slate-400 p-6 rounded-lg gap-2">
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
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col min-w-[80%] md:min-w-[60%] lg:min-w-[40%] bg-slate-800 shadow-md shadow-slate-400 p-6 rounded-lg gap-6"
        >
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
              className="px-2 py-1 placeholder:text-sm"
              type="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter Name..."
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.name}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-slate-100 font-semibold text-sm"
            >
              Email:
            </label>
            <input
              className="px-2 py-1 placeholder:text-sm"
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter Email..."
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.email}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phoneNumber"
              className="text-slate-100 font-semibold text-sm"
            >
              Phone Number:
            </label>
            <InputMask
              mask="(999)-999-9999"
              className="px-2 py-1 placeholder:text-sm"
              type="text"
              name="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              placeholder="Enter Phone Number..."
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.phoneNumber}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="address"
              className="text-slate-100 font-semibold text-sm"
            >
              Address:
            </label>
            <input
              className="px-2 py-1 placeholder:text-sm"
              type="text"
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              placeholder="Enter Street Address..."
            />
            {formik.touched.address && formik.errors.address ? (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.address}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="state"
              className="text-slate-100 font-semibold text-sm"
            >
              State:
            </label>
            <Select
              name="state"
              options={stateOptions}
              value={stateOptions.find(
                (option) => option.value === formik.values.state
              )}
              onChange={(option) =>
                formik.setFieldValue("state", option?.value || "")
              }
              onBlur={formik.handleBlur}
            />
            {formik.touched.state && formik.errors.state ? (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.state}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="city"
              className="text-slate-100 font-semibold text-sm"
            >
              City:
            </label>
            <input
              className="px-2 py-1 placeholder:text-sm"
              type="text"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              placeholder="Enter City..."
            />
            {formik.touched.city && formik.errors.city ? (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.city}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="zipCode"
              className="text-slate-100 font-semibold text-sm"
            >
              Zip Code:
            </label>
            <input
              className="px-2 py-1 placeholder:text-sm"
              type="text"
              name="zipCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
              placeholder="Enter Zip Code..."
            />
            {formik.touched.zipCode && formik.errors.zipCode ? (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.zipCode}
              </p>
            ) : null}
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
      </div>
    </section>
  );
};

export default CheckoutContent;
