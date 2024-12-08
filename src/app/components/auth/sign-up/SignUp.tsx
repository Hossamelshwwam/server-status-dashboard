import React from "react";
import FormInputs from "./FormInputs";
import SiteLogo from "../../SiteLogo/SiteLogo";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-n-black/5">
      <div className="md:py-10 md:px-10 p-4 bg-n-white rounded shadow-lg">
        <SiteLogo classNameImage="mx-auto" />
        <h1 className="text-n-sub-main text-3xl capitalize font-medium mb-8 text-center">
          Sign up
        </h1>
        <FormInputs />
        <p className="text-center mt-5">
          Already have an account{" "}
          <Link
            href={"/auth/sign-in"}
            className="underline hover:text-n-main duration-300"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
