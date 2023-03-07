import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { cartActions } from "../store/index";
import { useDispatch } from "react-redux";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "react-toastify";
import HeroHeader from "./UI/HeroHeader";

const Item = () => {
  const params = useParams();

  const data = useLoaderData();

  const { price, url, name, description } = data;

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  /* Used to scroll to the top of the page when the component is mounted. */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (values, actions) => {
    setLoading(true);

    setTimeout(() => {
      dispatch(
        cartActions.addItem({
          id: params.itemID,
          name,
          quantity: values.quantity,
          price,
        })
      );

      setLoading(false);

      actions.resetForm({
        quantity: 1,
      });

      //Show toast
      toast.success("Item Added to Cart!", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }, 1500);
  };

  const initialValues = {
    quantity: 1,
  };

  /* Validating the form inputs using yup. */
  const validationSchema = Yup.object({
    quantity: Yup.number().moreThan(0, "Invalid!").required("Field required!"),
  });

  /* A hook that is used to validate the form inputs. */
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <section className="w-full lg:h-screen">
      <HeroHeader />
      <div className="flex w-full flex-col items-center gap-8 my-10 px-2">
        <h1 className="font-bold text-4xl text-center text-red-600">{name}</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col lg:flex-row lg:justify-evenly rounded-lg bg-slate-900 xl:p-5 lg:p-4 p-3 lg:gap-5 gap-3 shadow-md shadow-slate-400  min-w-[320px] max-w-[400px] lg:min-w-[80%] mx-auto"
        >
          <div className="w-full lg:min-w-[30%]">
            <img
              src={url}
              className="object-cover h-full bg-center bg-no-repeat rounded-lg"
              alt=""
            />
          </div>
          <div className="flex lg:flex-col  justify-center lg:justify-around lg:gap-2 xl:gap-4">
            <span className="text-slate-50 font-medium text-sm lg:text-base xl:text-lg ">
              {description}
            </span>
            <div className="hidden lg:flex  lg:justify-between lg:items-center ">
              <span className="font-bold xl:text-2xl lg:text-xl italic text-red-700">
                ${price}
              </span>
              <div className="flex items-center gap-2 ">
                {formik.errors.quantity && (
                  <p className="text-red-700 font-bold text-lg">
                    {formik.errors.quantity}
                  </p>
                )}
                <input
                  type="number"
                  name="quantity"
                  className={`w-[100px] rounded-lg py-[0.2rem] px-2 ${
                    formik.errors.quantity
                      ? "outline-2 outline-red-400 border-2 border-red-400"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  value={formik.values.quantity}
                  min="1"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-slate-600 py-1 px-6 text-slate-50 font-semibold lg:text-base xl:text-lg rounded-lg "
                >
                  {!loading ? (
                    "Add"
                  ) : (
                    <ImSpinner2
                      className="text-slate-100 animate-spin"
                      size={28}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex items-center justify-between">
            <span className="font-bold text-md md:text-base italic text-red-700">
              ${price}
            </span>
            <div className="flex items-center gap-2 ">
              {formik.errors.quantity && (
                <p className="text-red-700 font-bold text-sm">
                  {formik.errors.quantity}
                </p>
              )}
              <input
                type="number"
                name="quantity"
                className={`w-[80px] rounded-lg py-[0.1rem] px-2 ${
                  formik.errors.quantity
                    ? "outline-2 outline-red-400 border-2 border-red-400"
                    : ""
                }`}
                onChange={formik.handleChange}
                value={formik.values.quantity}
                min="1"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-slate-600 py-2 px-4 text-slate-50 font-semibold text-sm rounded-lg "
              >
                {!loading ? (
                  "Add"
                ) : (
                  <ImSpinner2
                    className="text-slate-100 animate-spin"
                    size={20}
                  />
                )}
              </button>
            </div>
          </div>
        </form>
        <div className="w-[20%]">
          <Link to="..">
            <button className="bg-slate-600 w-full py-2 px-4 text-slate-50 font-semibold text-sm rounded-lg">
              Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Item;
