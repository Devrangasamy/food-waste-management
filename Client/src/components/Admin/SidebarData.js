import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title:'Admin'
  },
  {
    title: 'Dashboard',
    path: '/Adminpage/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'State',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add State',
        path: '/Adminpage/state/add',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Manage State',
        path: '/Adminpage/state/manage',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'City',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add City',
        path: '/Adminpage/city/add',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Manage City',
        path: '/Adminpage/city/manage',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reg Food Donors',
    path: '/Adminpage/regfooddonors',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Listed Foods',
    path: '/Adminpage/listed/food',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Food Requests',
    path: '/Adminpage/request',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'New',
        path: '/Adminpage/request/new',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Picked/Completed',
        path: '/Adminpage/request/pickcom',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Rejected',
        path: '/Adminpage/request/reject',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All',
        path: '/Adminpage/request/all',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];
