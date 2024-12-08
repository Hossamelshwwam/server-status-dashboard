"use client";
import React from "react";
import Header from "./Header/Header";
import ServerCard from "./server-status/server-card/ServerCard";
import { server } from "@/app/lib/servers";
import useWindowWidth from "@/utils/windowWidth";
import PastIncidents from "./past-incidents/PastIncidents";
import ServerStatus from "./server-status/ServerStatus";

const ServersStatus = () => {
  const width = useWindowWidth();
  const itemsNumber = width > 992 ? 90 : width > 768 ? 60 : 30;
  return (
    <div className="lg:px-10 pt-10">
      <Header
        duration={`last ${itemsNumber} days`}
        title="all system Operational"
      />
      <ServerStatus />
      <PastIncidents />
      
    </div>
  );
};

export default ServersStatus;
