import { Popover, Box, Typography, Fade } from "@mui/material";
import React from "react";

interface Props {
  name: string;
  response: string;
  ip: string;
}

const ServerDetails = ({ name, ip, response }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popover" : undefined;

  return (
    <div className="inline-block">
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="text-xl capitalize"
      >
        {name}
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Fade in={open} timeout={300}>
          <div className="bg-n-black text-n-white p-5 rounded-md">
            <p>
              <span className="font-medium capitalize text-lg mr-2">
                IP Address :
              </span>
              <span className="capitalize mr-2">{ip}</span>
            </p>
            <p>
              <span className="font-medium capitalize text-lg mr-2">
                Response time :
              </span>
              <span className="capitalize mr-2">{response}</span>
            </p>
          </div>
        </Fade>
      </Popover>
    </div>
  );
};

export default React.memo(ServerDetails);
