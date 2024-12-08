import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import useWindowWidth from "@/utils/windowWidth";
import Image from "next/image";
import logo from "../../../../../public/assets/images/logo.png";
import styles from "./Sidebar.module.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { faServer } from "@fortawesome/free-solid-svg-icons";

interface Props {
  open: boolean;
}

const Sidebar = ({ open }: Props) => {
  const navigation: {
    title: string;
    link: string;
    icon: React.JSX.Element;
  }[] = [
    {
      title: "Servers Status",
      icon: (
        <FontAwesomeIcon
          icon={faServer}
          className="w-5 h-5 text-n-white transition duration-300 group-hover:text-n-sub-main group-focus:text-n-sub-main"
        />
      ),
      link: "/dashboard/servers-status",
    },
  ];

  const width = useWindowWidth();

  return (
    <>
      <aside
        style={{ height: width > 992 ? "100%" : "calc(100% - 80px)" }}
        className={`${
          styles.sidebar
        } fixed left-0 z-40 w-64 lg:top-0 top-[78px] transition-transform duration-300 ${
          !open ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="h-full overflow-y-auto bg-second">
          <div className="w-full sticky top-0 bg-n-white px-3 min-h-[80px] flex justify-center items-center z-20 border-r-2">
            <Image src={logo} alt="logo alt" width={45} />
          </div>
          <div className="overflow-y-auto lg:h-[calc(100vh-80px)] h-[calc(100vh-160px)] bg-n-main">
            <div className="px-4 pt-4">
              <h1 className="capitalize text-xs text-n-white">
                dashboard & apps
              </h1>
            </div>
            <List>
              {navigation.map(({ icon, title, link }, index) => (
                <Link href={link} key={index}>
                  <ListItemButton
                    className={`${styles.listItem} focus:text-n-sub-main px-4 py-2 text-n-white min-h-[40px] capitalize duration-300 group`}
                  >
                    <ListItemIcon className="flex items-center">
                      {icon}
                    </ListItemIcon>
                    {title}
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </div>
        </div>
      </aside>
    </>
  );
};

export default React.memo(Sidebar);
