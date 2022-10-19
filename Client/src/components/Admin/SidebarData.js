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
    path: '/dashboard',
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
        path: '/state/add',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Manage State',
        path: '/state/manage',
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
        path: '/city/add',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Manage City',
        path: '/city/manage',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reg Food Donors',
    path: '/regfooddonors',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Listed Foods',
    path: '/listed/food',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Food Requests',
    path: '/request',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'New',
        path: '/request/new',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Picked/Completed',
        path: '/request/pickcom',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Rejected',
        path: '/request/reject',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All',
        path: '/request/all',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];
