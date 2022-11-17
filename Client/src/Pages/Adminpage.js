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
      {/* <Routes>
      <Route path="/about" element={<About></About>} />
        <Route exact path="/dashboard" element={<AdminDashboard></AdminDashboard>} />
        <Route path='/state/add' exact element={<Addstate></Addstate>} />
        <Route path='/state/manage' exact element={<Managestate></Managestate>} />
        <Route path='/city/add' exact element={<Addcity></Addcity>} />
        <Route path='/city/manage' exact element={<Managecity></Managecity>} />
        <Route path='/regfooddonors' exact element={<Regdonors></Regdonors>} />
        <Route path='/listed/food' exact element={<Listedfoods></Listedfoods>} />
        <Route path='/request' exact element={<Requests></Requests>} />
        <Route path='/request/new' exact element={<New></New>} />
        <Route path='/request/pickcom' exact element={<Pickcom></Pickcom>} />
        <Route path='/request/reject' exact element={<Rejected></Rejected>} />
        <Route path='/request/all' exact element={<All></All>} />

        </Routes> */}

    </div>
  );
};
