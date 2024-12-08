import { server } from "@/app/lib/servers";
import React from "react";
import ServerCard from "./server-card/ServerCard";

const ServerStatus = () => {
  return (
    <div className="mb-20">
      {server.map((server, index) => (
        <ServerCard key={index} server={server} />
      ))}
    </div>
  );
};

export default ServerStatus;
