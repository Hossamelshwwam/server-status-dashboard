"use client";
import React, { useEffect, useState } from "react";
import LoadingWholePage from "./components/loading/LoadingWholePage";
import CustomToaster from "./components/dashboard/custom-toaster/CustomToaster";

const Template = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [loading]);
  return (
    <div className={`${loading ? "overflow-y-hidden h-screen" : ""}`}>
      <CustomToaster />
      <LoadingWholePage loading={loading} />
      {children}
    </div>
  );
};

export default Template;
