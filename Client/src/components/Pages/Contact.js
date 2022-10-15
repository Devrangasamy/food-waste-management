import React from "react";
import Sidebar from '../../components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Dashboard} from '../Pages/Dashboard';
import {Listfooddetails ,Add,Manage} from '../Pages/Listfooddetails';
import { Requests, New, Pickcom, Rejected ,All} from '../Pages/Requests';

export const Contact = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/listfooddetails' exact component={Listfooddetails} />
        <Route path='/listfooddetails/add' exact component={Add} />
        <Route path='/listfooddetails/manage' exact component={Manage} />
        <Route path='/request' exact component={Requests} />
        <Route path='/request/new' exact component={New} />
        <Route path='/request/pickcom' exact component={Pickcom} />
        <Route path='/request/reject' exact component={Rejected} />
        <Route path='/request/all' exact component={All} />
      </Switch>
    </Router>
  );
};
