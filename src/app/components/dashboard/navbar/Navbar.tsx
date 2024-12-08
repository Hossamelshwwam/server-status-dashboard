import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../../../../public/assets/images/logo.png";
import menu from "../../../../../public/assets/images/menu.png";
import UserMenu from "./userMenu/UserMenu";
import Link from "next/link";

interface Props {
  setOpen: (value: boolean) => void;
  open: boolean;
  user: {
    username: string | undefined;
    email: string | undefined;
  };
}

const Navbar = ({ setOpen, open, user }: Props) => {
  return (
    <div
      className={`${styles.navbarShadow} flex items-center bg-sceond backdrop-blur-lg text-n-white py-4 min-h-[78px] sm:px-10 px-4 static w-full`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2 items-center">
          <div
            className="p-2 rounded-lg bg-n-black/5 hover:bg-n-black/10 duration-200 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <Image src={menu} alt="menu image" width={20} />
          </div>
        </div>
        <UserMenu name={user.username} />
      </div>
    </div>
  );
};

export default Navbar;
