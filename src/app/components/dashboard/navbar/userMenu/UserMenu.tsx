"use client";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";
const UserMenu = ({ name = "hossam elshwwam" }: { name?: string }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlerSignOut = () => {
    signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="flex justify-center items-center gap-5 hover:backdrop-blur-lg duration-300 hover:bg-n-black/5 px-5 py-2 rounded">
          <div className="flex items-center gap-1">
            <Avatar sx={{ width: 32, height: 32 }}>H</Avatar>
            <p className="text-sm text-gray-800 capitalize">{name}</p>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-n-black ${open ? "rotate-180" : ""} duration-300`}
          />
        </div>
      </button>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.32))",
              mt: 1.5,
              width: "150px",
              "& .MuiAvatar-root": {
                width: 40,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 22,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            handlerSignOut();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
