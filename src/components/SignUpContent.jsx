import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpContent = () => {
  const onSubmit = async (values, actions) => {
    try {
      //console.log(values);
      /* Creating a new user with the email and password provided. */
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      /* Getting the user object from the userCredentials object. */
      const user = userCredentials.user;

      //console.log(user);

      /* Creating a new document in the users collection with the user id as the document id. */
      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        displayName: values.name,
        email: user.email,
      });

      /* Resetting the form to the initial values. */
      actions.resetForm({
        values: initialValues,
      });
    } catch (error) {
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
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  /* Validating the form inputs using yup. */
  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string()
      .required("Password is required!")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required!"),
  });

  /* A hook that is used to validate the form inputs. */
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <section className="w-full h-screen">
      <div className="flex flex-col items-center gap-4">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col min-w-[350px] max-w-[400px] bg-slate-800 shadow-md shadow-slate-400 p-6 rounded-lg gap-6 mt-20"
        >
          <h1 className="text-slate-100 font-bold text-2xl text-center uppercase">
            Sign Up
          </h1>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-slate-100 font-semibold text-base"
            >
              Name:
            </label>
            <input
              className="px-2 py-1 rounded-md"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Enter Full Name..."
            />
            {formik.errors.name && (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.name}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-slate-100 font-semibold text-base"
            >
              Email:
            </label>
            <input
              className="px-2 py-1 rounded-md"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Enter Email..."
            />
            {formik.errors.email && (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-slate-100 font-semibold text-base"
            >
              Password:
            </label>
            <input
              className="px-2 py-1 rounded-md"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter Password..."
            />
            {formik.errors.password && (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.password}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirm_password"
              className="text-slate-100 font-semibold text-base"
            >
              Confirm Password:
            </label>
            <input
              className="px-2 py-1 rounded-md"
              type="password"
              name="confirm_password"
              onChange={formik.handleChange}
              value={formik.values.confirm_password}
              placeholder="Confirm Password..."
            />
            {formik.errors.confirm_password && (
              <p className="text-red-700 font-bold text-sm">
                {formik.errors.confirm_password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-slate-500 text-slate-100 font-semibold rounded-md py-2"
          >
            Register
          </button>
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

export default SignUpContent;
