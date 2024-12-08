import React from "react";
import IncidentCard from "./incident-card/IncidentCard";
import { incidents } from "@/app/lib/servers";
import useWindowWidth from "@/utils/windowWidth";

const PastIncidents = () => {
  const width = useWindowWidth();
  const itemsNumber = width > 992 ? 0 : width > 768 ? 30 : 60;
  return (
    <div>
      <h1 className="text-3xl font-medium capitalize mb-10">Past Incidents</h1>
      {incidents.slice(itemsNumber).map((incident, index) => (
        <IncidentCard key={index} incident={incident} />
      ))}
    </div>
  );
};

export default PastIncidents;
