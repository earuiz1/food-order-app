import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";
import "react-toastify/dist/ReactToastify.css";
import HeroHeader from "../UI/HeroHeader";
import useAuth from "../../custom-hooks/useAuth";

const SignUpContent = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    setLoading(true);
    if (!currentUser) {
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

        /* Updating the user profile with the display name. */
        await updateProfile(user, {
          displayName: values.name,
        });

        console.log(user);

        /* Creating a new document in the users collection with the user id as the document id. */
        await setDoc(doc(db, "users", user.uid), {
          id: user.uid,
          displayName: values.name,
          email: user.email,
        });

        setLoading(false);

        toast.success("User created", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });

        setTimeout(() => {
          navigate("../login");
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
    } else {
      setLoading(false);
      toast.error("You are currently signed in...", {
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

    setTimeout(() => {
      navigate("..");
    }, 2000);
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
      <HeroHeader />
      <div className="flex flex-col items-center gap-3 my-10">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col min-w-[350px] max-w-[400px] bg-slate-800 shadow-md shadow-slate-400 p-6 rounded-lg gap-6 "
        >
          <h1 className="text-slate-100 font-bold text-2xl text-center uppercase">
            Sign Up
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
              className="text-slate-100 font-semibold text-sm"
            >
              Email:
            </label>
            <input
              className="px-2 py-1 rounded-md placeholder:text-sm"
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
              className="text-slate-100 font-semibold text-sm"
            >
              Password:
            </label>
            <input
              className="px-2 py-1 rounded-md placeholder:text-sm"
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
              className="text-slate-100 font-semibold text-sm"
            >
              Confirm Password:
            </label>
            <input
              className="px-2 py-1 rounded-md placeholder:text-sm"
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
            {!loading ? (
              "SIGN UP"
            ) : (
              <span className="flex justify-center gap-2">
                <ImSpinner2
                  className="text-slate-100 animate-spin inline"
                  size={25}
                />
                Creating user...
              </span>
            )}
          </button>
          <div className="mx-auto">
            <Link
              to="../login"
              className="text-slate-100 text-sm font-medium hover:underline-offset-8 hover:underline"
            >
              Already have an account? Click here.
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

export default SignUpContent;
