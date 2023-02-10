import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutForm = ({ submitOrder }) => {
  /* Setting the initial values of the form using formik. */
  const onSubmit = (values, actions) => {
    console.log(formik.values);

    submitOrder(values);

    //Reseting the form inputs fields after submission
    actions.resetForm({
      values: {
        name: "",
        street: "",
        zipCode: "",
        city: "",
      },
    });
  };

  /* Setting the initial values of the form using formik. */
  const initialValues = {
    name: "",
    street: "",
    zipCode: "",
    city: "",
  };

  /* Validating the form inputs using yup. */
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, "Name must be 20 characters long!")
      .required("Name is required"),
    street: Yup.string()
      .max(20, "Invalid email address!")
      .required("Street is required"),
    zipCode: Yup.string()
      .length(5, "Zip Code must be 5 characters long!")
      .required("Zip Code is required"),
    city: Yup.string()
      .max(15, "City must be characters long!")
      .required("City is required"),
  });

  /* A hook that is used to validate the form inputs. */
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form
      className="flex h-[250px]  overflow-y-auto flex-col gap-4 mt-2"
      onSubmit={formik.handleSubmit}
    >
      <div>
        <label htmlFor="name" className="font-medium ">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="w-full border bg-gray-200 rounded-md px-2"
        />
        {formik.errors.name && (
          <span className="text-red-700 font-bold text-sm">
            {formik.errors.name}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="street" className="font-medium">
          Street
        </label>
        <input
          type="text"
          name="street"
          onChange={formik.handleChange}
          value={formik.values.street}
          className="w-full border bg-gray-200 rounded-md px-2"
        />
        {formik.errors.street && (
          <span className="text-red-700 font-bold text-sm">
            {formik.errors.street}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="zipCode" className="font-medium">
          Zip Code
        </label>
        <input
          type="text"
          name="zipCode"
          onChange={formik.handleChange}
          value={formik.values.zipCode}
          className="w-full border bg-gray-200 rounded-md px-2"
        />
        {formik.errors.zipCode && (
          <span className="text-red-700 font-bold text-sm">
            {formik.errors.zipCode}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="city" className="font-medium">
          City
        </label>
        <input
          type="text"
          name="city"
          onChange={formik.handleChange}
          value={formik.values.city}
          className="w-full border bg-gray-200 rounded-md px-2"
        />
        {formik.errors.city && (
          <span className="text-red-700 font-bold text-sm">
            {formik.errors.city}
          </span>
        )}
      </div>
      <button type="submit" className="bg-slate-900 text-slate-50 p-2">
        Confirm
      </button>
    </form>
  );
};

export default CheckoutForm;
