"use client";
import {
  faCheck,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import StatusLine from "./StatusLine";
import useWindowWidth from "@/utils/windowWidth";
import StatusButton from "./StatusButton";
import ServerDetails from "./ServerDetails";

const ServerCard = ({
  server,
}: {
  server: {
    name: string;
    status: string;
    ipAddress: string;
    responseTime: string;
    issues: {
      problem: boolean;
      type?: string;
      hours?: number;
      minutes?: number;
      details?: string[];
      date: string;
    }[];
  };
}) => {
  const width = useWindowWidth();
  const issues = [
    {
      problem: true,
      type: "major",
      hours: 3,
      minutes: 45,
      details: [
        "Database connection issue",
        "High CPU usage",
        "Timeout errors",
      ],
      date: "Dec 21, 2024",
    },
    {
      problem: true,
      type: "major",
      hours: 3,
      minutes: 45,
      details: [
        "Database connection issue",
        "High CPU usage",
        "Timeout errors",
      ],
      date: "Dec 21, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: false,
      date: "Dec 19, 2024",
    },
    {
      problem: true,
      type: "major",
      hours: 5,
      minutes: 15,
      details: ["API response delay", "Memory leak detected", "Server crash"],
      date: "Dec 15, 2024",
    },
    {
      problem: true,
      type: "partial",
      hours: 0,
      minutes: 20,
      details: ["Button hover state issue", "Color inconsistency"],
      date: "Dec 14, 2024",
    },
    {
      problem: true,
      type: "partial",
      hours: 0,
      minutes: 20,
      details: ["Button hover state issue", "Color inconsistency"],
      date: "Dec 14, 2024",
    },
    {
      problem: false,
      date: "Dec 10, 2024",
    },
    {
      problem: true,
      type: "partial",
      hours: 0,
      minutes: 20,
      details: ["Button hover state issue", "Color inconsistency"],
      date: "Dec 14, 2024",
    },
  ];

  const itemsNumber = width > 992 ? 0 : width > 768 ? 30 : 60;

  const noProblemCount = server.issues.filter(
    (issue) => issue.problem === false
  ).length;
  const totalIssues = server.issues.length;
  const percentage = ((noProblemCount / totalIssues) * 100).toFixed(0);

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h1>
          <StatusButton status={server.status} />
          <ServerDetails
            name={server.name}
            ip={server.ipAddress}
            response={server.responseTime}
          />
        </h1>
        <span className="text-n-black/80 text-xl">{percentage}%</span>
      </div>
      <div className="flex justify-between">
        {issues.slice(itemsNumber).map((issue, index) => (
          <StatusLine issue={issue} key={index} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ServerCard);
