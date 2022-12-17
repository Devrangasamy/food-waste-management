import React from "react";
import Sidebar from '../components/Sidebar';
import { Route,Routes } from 'react-router-dom';

// import {AdminDashboard} from './AdminDashboard';
// import Addfood from './Listfooddetails';
// import Manage from './Listfooddetails';
import { Requests, New, Pickcom, Rejected ,All} from './Requests';
import Dashboard  from './Dashboard'

export const Donarpage = () => {
  return (
    <div>
       <Routes>
      <Sidebar />
     
        <Route path='/dashboard' exact element={<Dashboard></Dashboard>} />
        {/* <Route path='/listfooddetails' exact component={Listfooddetails} /> */}
        {/* <Route path='/listfooddetails/add' exact element={<Addfood></Addfood>} /> */}
        {/* <Route path='/listfooddetails/manage' exact element={<Manage></Manage>} /> */}
        <Route path='/request' exact element={<Requests></Requests>} />
        <Route path='/request/new' exact element={<New></New>} />
        <Route path='/request/pickcom' exact element={<Pickcom></Pickcom>} />
        <Route path='/request/reject' exact element={<Rejected></Rejected>} />
        <Route path='/request/all' exact element={<All></All>} />

      </Routes>
    </div>
  
  );
};
