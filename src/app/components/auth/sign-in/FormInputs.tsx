"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Inputs from "../../ui/form inputs/Inputs";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CustomButton from "../../ui/CustomButton";

const FormInputs = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .min(4, "Email must be at least 4 characters long"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const route = useRouter();

  const { values, handleChange, handleSubmit, errors, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const toastId = toast.loading("waiting for log in...");
        const dataParse = localStorage.getItem("user");
        setTimeout(async () => {
          if (dataParse) {
            const user = JSON.parse(dataParse);
            if (user.email !== values.email) {
              toast.dismiss(toastId);
              toast.error("you don't have an account with this email");
              return route.push("/auth/sign-up");
            }
            if (user.password === values.password) {
              toast.dismiss(toastId);
              await signIn("credentials", {
                body: dataParse,
                redirect: true,
                callbackUrl: "/dashboard/servers-status",
              });
              toast.success("log in successful");
            } else {
              toast.dismiss(toastId);
              toast.error("wrong email or password");
            }
          } else {
            toast.dismiss(toastId);
            toast.error("you don't have an account with this email");
            route.push("/auth/sign-up");
          }
        }, 2000);
      },
    });

  return (
    <form action={() => handleSubmit()}>
      <div className="grid grid-cols-2 mb-5 w-[max(25vw,300px)]">
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
        title="sign in"
        className="mx-auto"
      />
    </form>
  );
};

export default FormInputs;
