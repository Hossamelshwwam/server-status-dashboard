import React from "react";
import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "",
        style: {
          border: "1px solid var(--blue-color)",
          width: "500px",
          color: "var(--blue-color)",
          textTransform: "capitalize",
        },
      }}
    />
  );
};

export default CustomToaster;
