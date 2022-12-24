import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title:'User'
  },
  {
    title: 'Dashboard',
    path: '/Userpage/Userdashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Request Food',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Listed Foods',
    path: '/Userpage/listed/food',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Food Requests',
    path: '/Userpage/request',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'New',
        path: '/Userpage/request/new',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Picked/Completed',
        path: '/Userpage/request/pickcom',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Rejected',
        path: '/Userpage/request/reject',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All',
        path: '/Userpage/request/all',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];
