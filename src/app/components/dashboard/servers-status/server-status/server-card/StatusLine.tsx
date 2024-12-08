"use client";
import {
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@mui/material";
import React from "react";

interface Props {
  issue: {
    problem: boolean;
    date: string;
    type?: string;
    hours?: number;
    minutes?: number;
    details?: string[];
  };
}

const StatusLine = ({ issue }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="basis-[6px] relative">
      <button
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className={`h-7 ${
          issue.type === "major"
            ? "bg-red-700"
            : issue.type === "partial"
            ? "bg-yellow-700"
            : "bg-green-800"
        } hover:scale-y-125 ${
          open ? "scale-y-125" : ""
        } duration-300 cursor-pointer w-full block`}
      ></button>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          "& .MuiPaper-root": {
            backgroundColor: "#333",
            padding: "16px",
            borderRadius: "8px",
            color: "white",
            marginTop: "8px",
          },
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
      >
        <p className="mb-5 text-xs">{issue.date}</p>
        {issue.problem ? (
          <div>
            <div className="bg-black p-4 flex justify-between gap-5 items-center mb-5 text-sm">
              <div>
                {issue.type === "major" ? (
                  <>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-red-700 mr-2"
                    />
                    <span className="font-bold capitalize">
                      {issue.type} outage
                    </span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      className="text-yellow-700 mr-2"
                    />
                    <span className="font-bold capitalize">
                      {issue.type} outage
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold capitalize">{issue.hours} hrs</p>
                <p className="font-bold capitalize">{issue.minutes} mins</p>
              </div>
            </div>
            <div>
              <h4 className="text-n-white/60 uppercase text-sm mb-3">
                related
              </h4>
              {issue.details &&
                issue.details.map((text, index) => (
                  <p className="text-xs mb-3" key={index}>
                    {text}
                  </p>
                ))}
            </div>
          </div>
        ) : (
          <p className="text-sm">No downtime recorded on this day.</p>
        )}
      </Popover>
    </div>
  );
};

export default React.memo(StatusLine);
