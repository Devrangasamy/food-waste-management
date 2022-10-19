import React from "react";
import Sidebar from '../components/Admin/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import {AdminDashboard} from './AdminDashboard';
import {Regdonors} from './Admin/Regdonors';
import {Addstate, Managestate } from "./Admin/State";
import {Addcity, Managecity } from "./Admin/City";
import { Listedfoods } from "./Admin/Listedfoods";
import { Requests, New, Pickcom, Rejected ,All} from './Admin/Requests';


export const Ourmission = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/dashboard' exact component={AdminDashboard} />
        <Route path='/state/add' exact component={Addstate} />
        <Route path='/state/manage' exact component={Managestate} />
        <Route path='/city/add' exact component={Addcity} />
        <Route path='/city/manage' exact component={Managecity} />
        <Route path='/regfooddonors' exact component={Regdonors} />
        <Route path='/listed/food' exact component={Listedfoods} />
        <Route path='/request' exact component={Requests} />
        <Route path='/request/new' exact component={New} />
        <Route path='/request/pickcom' exact component={Pickcom} />
        <Route path='/request/reject' exact component={Rejected} />
        <Route path='/request/all' exact component={All} />
      </Switch>
    </Router>
  );
};
