import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { cartActions } from "../store/index";
import { useDispatch } from "react-redux";

const Item = () => {
  const params = useParams();

  const data = useLoaderData();

  const { price, url, name } = data;

  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    dispatch(
      cartActions.addItem({
        id: params.itemID,
        name,
        quantity: values.quantity,
        price,
      })
    );

    actions.resetForm({
      quantity: 1,
    });
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
    <section className="w-full relative">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col rounded-lg bg-slate-900 p-3 gap-3 shadow-md shadow-slate-400 mt-10 min-w-[320px] max-w-[400px] mx-auto"
      >
        <div className="w-full">
          <img
            src={url}
            className="object-cover bg-center bg-no-repeat rounded-lg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center border-b border-slate-300/50 pb-2">
          <span className="text-sm md:text-base lg:text-lg font-semibold text-slate-50">
            {name}
          </span>
        </div>
        <div className="flex justify-center">
          <span className="text-slate-50 font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            nostrum iusto voluptatum assumenda perspiciatis ratione sit quam
            velit.
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-sm md:text-base lg:text-lg italic text-red-700">
            ${price}
          </span>
          {
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
                className="bg-slate-600 py-2 px-4 text-slate-50 font-semibold text-sm rounded-lg "
              >
                Add
              </button>
            </div>
          }
        </div>
      </form>
      <Link to="..">
        <button className="bg-slate-600 py-2 px-4 text-slate-50 font-semibold text-sm rounded-lg">
          Back
        </button>
      </Link>
    </section>
  );
};

export default Item;
