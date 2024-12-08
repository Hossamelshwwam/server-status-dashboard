import { server } from "@/app/lib/servers";
import {
  faCheck,
  faXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popper, Fade, Box, Typography, duration } from "@mui/material";
import React from "react";

interface Props {
  status: string;
}
const StatusButton = ({ status }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(false);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const icon =
    status === "up"
      ? faCheck
      : status === "down"
      ? faXmark
      : faTriangleExclamation;
  return (
    <div className="inline-block">
      <button
        aria-describedby={id}
        type="button"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        className={`first:inline-flex w-7 h-7 ${
          status === "up"
            ? "bg-green-800"
            : status === "down"
            ? "bg-red-800"
            : "bg-yellow-600"
        } rounded-full justify-center items-center mr-2`}
      >
        <FontAwesomeIcon icon={icon} className="text-n-white" />
      </button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 10],
            },
          },
        ]}
      >
        <div
          className={`width-[100px] ${
            status === "up"
              ? "bg-green-800"
              : status === "down"
              ? "bg-red-800"
              : "bg-yellow-600"
          } text-n-white px-5 py-2 rounded-md`}
        >
          <Typography textAlign={"center"} textTransform={"capitalize"}>
            {status}
          </Typography>
        </div>
      </Popper>
    </div>
  );
};

export default React.memo(StatusButton);
