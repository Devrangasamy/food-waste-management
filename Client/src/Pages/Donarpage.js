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
    console.log(current);
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
        <Route path="/dashboard" exact element={<Dashboard></Dashboard>} />
        <Route path='/listfooddetails' exact component={Listfooddetails} />
        <Route path='/listfooddetails/add' exact element={<Addfood></Addfood>} />
        <Route path='/listfooddetails/manage' exact element={<Manage></Manage>} />
        <Route path="/request" exact element={<Requests></Requests>} />
        <Route path="/request/new" exact element={<New></New>} />
        <Route path="/request/pickcom" exact element={<Pickcom></Pickcom>} />
        <Route path="/request/reject" exact element={<Rejected></Rejected>} />
        <Route path="/request/all" exact element={<All></All>} />
      </Routes> */}
    </div>
  );
};
