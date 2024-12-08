"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import LoadingWholePage from "../../loading/LoadingWholePage";
import Footer from "../footer/Footer";
import useWindowWidth from "@/utils/windowWidth";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  const width = useWindowWidth();
  const { data, status } = useSession();

  useEffect(() => {
    if (width < 1200) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [width]);

  return (
    <>
      <LoadingWholePage loading={status === "authenticated"} />
      <Sidebar open={open} />
      <div
        style={{
          width: open ? (width > 992 ? "calc(100% - 256px)" : "100%") : "100%",
          transitionProperty: "width, margin",
        }}
        className={`${
          open ? "lg:ml-64 " : ""
        } h-screen overflow-hidden relative duration-300`}
      >
        <Navbar
          setOpen={setOpen}
          open={open}
          user={{
            username: data?.user.username,
            email: data?.user.email,
          }}
        />
        <div
          className="p-4 overflow-y-auto"
          style={{ height: "calc(100vh - 141px)" }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DashboardContainer;
