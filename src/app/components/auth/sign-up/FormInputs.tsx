"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Inputs from "../../ui/form inputs/Inputs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CustomButton from "../../ui/CustomButton";

const FormInputs = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters long")
      .required("Username is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const route = useRouter();

  const { values, handleChange, handleSubmit, errors, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const toastId = toast.loading("waiting for sign up...");
        setTimeout(() => {
          localStorage.setItem("user", JSON.stringify(values));
          route.push("/auth/sign-in");
          toast.dismiss(toastId);
          toast.success("sign up successful");
        }, 2000);
      },
    });

  return (
    <form action={() => handleSubmit()}>
      <div className="grid grid-cols-2 mb-5 w-[max(25vw,300px)]">
        <Inputs
          handlerChange={handleChange}
          name="username"
          type="text"
          value={values.username}
          InputClassName="input"
          error={errors.username}
          label="username"
          labalClassName="label"
          placeholder="username"
        />
        <Inputs
          handlerChange={handleChange}
          name="email"
          type="email"
          value={values.email}
          InputClassName="input"
          error={errors.email}
          label="email"
          labalClassName="label"
          placeholder="email"
        />
        <Inputs
          handlerChange={handleChange}
          name="password"
          type="password"
          value={values.password}
          InputClassName="input"
          error={errors.password}
          label="password"
          labalClassName="label"
          placeholder="password"
        />
      </div>
      <CustomButton
        colorOne="var(--main)"
        colorTwo="var(--white)"
        colorThree="var(--black)"
        title="sign up"
        className="mx-auto"
      />
    </form>
  );
};

export default FormInputs;
