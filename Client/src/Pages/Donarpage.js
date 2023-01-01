import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/DonarSidebar";

// import {AdminDashboard} from './AdminDashboard';
// import Addfood from './Listfooddetails';
// import Manage from './Listfooddetails';
// import { Requests, New, Pickcom, Rejected, All } from "./Requests";
// import Dashboard from "./DonarDashboard";

export const Donarpage = () => {
  const Loginnot = async () => {
    const Navigate = useNavigate();

    const currentuser = await fetch("/api/v1/users/me/");
    const current = await currentuser.json();
    // console.log(current);
    if (current.status === "failure" || current.user.role !== "Donar") {
      Navigate("/loginregister");
      alert(current.Error);
    }
  };
  Loginnot();
  return (
    <div>
      <Sidebar />
      {/* <Routes>
        <Route path="/dashboard" exact="true" element={<Dashboard></Dashboard>} />
        <Route path='/listfooddetails' exact="true" component={Listfooddetails} />
        <Route path='/listfooddetails/add' exact="true" element={<Addfood></Addfood>} />
        <Route path='/listfooddetails/manage' exact="true" element={<Manage></Manage>} />
        <Route path="/request" exact="true" element={<Requests></Requests>} />
        <Route path="/request/new" exact="true" element={<New></New>} />
        <Route path="/request/pickcom" exact="true" element={<Pickcom></Pickcom>} />
        <Route path="/request/reject" exact="true" element={<Rejected></Rejected>} />
        <Route path="/request/all" exact="true" element={<All></All>} />
      </Routes> */}
    </div>
  );
};
