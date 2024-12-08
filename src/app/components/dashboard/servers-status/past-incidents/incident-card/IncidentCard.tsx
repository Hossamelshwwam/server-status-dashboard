import useWindowWidth from "@/utils/windowWidth";
import React from "react";

interface Issue {
  date: string;
  status: string;
  text: string;
}

interface Props {
  incident: {
    date: string;
    problem: boolean;
    title?: string;
    type?: string;
    issues?: Issue[];
  };
}
const IncidentCard = ({ incident }: Props) => {


  return (
    <div className="mb-10">
      <h2 className="text-xl pb-2 border-b mb-3">{incident.date}</h2>
      {incident.problem ? (
        <>
          <h3
            className={`text-xl ${
              incident.type === "major" ? "text-red-800" : "text-yellow-700"
            } mb-3 capitalize`}
          >
            {incident.title}
          </h3>
          {incident.issues &&
            incident.issues.map((issue, index) => (
              <div className="mb-5" key={index}>
                <p className="mb-1">
                  <span className="font-semibold capitalize">
                    {issue.status}
                  </span>{" "}
                  - <span className="font-light">{issue.text}</span>
                </p>
                <p className="text-n-black/40 text-sm">{issue.date}</p>
              </div>
            ))}
        </>
      ) : (
        <p className="text-n-black/60">No incidents reported</p>
      )}
    </div>
  );
};

export default React.memo(IncidentCard);
