import React from "react";
import Sidebar from "../components/DonarSidebar";
import { Route, Routes } from "react-router-dom";

// import {AdminDashboard} from './AdminDashboard';
// import Addfood from './Listfooddetails';
// import Manage from './Listfooddetails';
import { Requests, New, Pickcom, Rejected, All } from "./Requests";
// import Dashboard from "./DonarDashboard";

export const Contact = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/request" exact="true" element={<Requests></Requests>} />
        <Route path="/request/new" exact="true" element={<New></New>} />
        <Route
          path="/request/pickcom"
          exact="true"
          element={<Pickcom></Pickcom>}
        />
        <Route
          path="/request/reject"
          exact="true"
          element={<Rejected></Rejected>}
        />
        <Route path="/request/all" exact="true" element={<All></All>} />
      </Routes>
    </div>
  );
};
