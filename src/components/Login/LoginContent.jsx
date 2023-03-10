import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";
import HeroHeader from "../UI/HeroHeader";

const LoginContent = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    setLoading(true);

    try {
      //console.log(values);

      const userCredentials = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      /* Getting the user object from the userCredentials object. */
      const user = userCredentials.user;
      console.log(user);

      toast.success("Login Successful", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });

      setLoading(false);

      setTimeout(() => {
        navigate("..");
      }, 2000);

      /* Resetting the form to the initial values. */
      actions.resetForm({
        values: initialValues,
      });
    } catch (error) {
      setLoading(false);
      //Show toast
      toast.error("Error, something went wrong...", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  /* Validating the form inputs using yup. */
  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  /* A hook that is used to validate the form inputs. */
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <section className="w-full h-screen">
      <HeroHeader />
      <div className="flex flex-col items-center gap-3 my-10">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col min-w-[350px] max-w-[400px] bg-slate-800 shadow-md shadow-slate-400 p-6 rounded-lg gap-6"
        >
          <h1 className="text-slate-100 font-bold text-2xl text-center uppercase">
            Login
          </h1>
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
              htmlFor="password"
              className="text-slate-100 font-semibold text-sm"
            >
              Password:
            </label>
            <input
              className="px-2 py-1 placeholder:text-sm"
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter Password..."
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.password}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-slate-500 text-slate-100 font-semibold rounded-md py-2"
          >
            {!loading ? (
              "LOGIN"
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
          <div className="mx-auto">
            <Link
              to="../signup"
              className="text-slate-100 text-sm font-medium hover:underline-offset-8 hover:underline"
            >
              Don't have an account yet? Click here.
            </Link>
          </div>
        </form>
        <div className="w-[20%]">
          <Link to="..">
            <button className="bg-slate-500 w-full py-4 text-slate-50 font-semibold text-sm rounded-lg">
              Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginContent;
