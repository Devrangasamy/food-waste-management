import React from "react";
import Sidebar from '../components/Admin/Adminsidebar';
import { Routes, Route } from 'react-router-dom';


import {AdminDashboard} from './AdminDashboard';
import {Regdonors} from './Admin/Regdonors';
import {Addstate, Managestate } from "./Admin/State";
import {Addcity, Managecity } from "./Admin/City";
import { Listedfoods } from "./Admin/Listedfoods";
import { Requests, New, Pickcom, Rejected ,All} from './Admin/Requests';


export const Adminpage = () => {
  return (
    <div>
      <Sidebar />

    </div>
  );
};
