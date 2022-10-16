import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title:'Donor'
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'List Food Details',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Food',
        path: '/listfooddetails/add',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Manage Food',
        path: '/listfooddetails/manage',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Requests',
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
