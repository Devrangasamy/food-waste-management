import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";




export const SidebarData = [
  {
    title: "Donor",
  },
  {
    title: "Dashboard",
    path: "/Donarpage/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "List Food Details",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Food",
        path: "/Donarpage/listfooddetails/add",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Food",
        path: "/Donarpage/listfooddetails/manage",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Requests",
    path: "/Donarpage/request",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "New",
        path: "/Donarpage/request/new",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Picked/Completed",
        path: "/Donarpage/request/pickcom",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Rejected",
        path: "/Donarpage/request/reject",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "All",
        path: "/Donarpage/request/all",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
