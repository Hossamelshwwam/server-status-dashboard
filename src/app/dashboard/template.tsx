"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import DashboardContainer from "../components/dashboard/dashboardContainer/DashboardContainer";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <DashboardContainer>{children}</DashboardContainer>
    </SessionProvider>
  );
};

export default Template;
