import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Loginregister from "./Pages/Loginregister";
import { Contact } from "./Pages/Contact";
import { Ourmission } from "./Pages/Ourmission";
import Registernew from "./Pages/Registernew";
import Login from "./Pages/Login";
import "./Pages/Register.css";
import Menu from "./Pages/Menu";
import { Adminpage } from "./Pages/Adminpage";
import { Donarpage } from "./Pages/Donarpage";
import { AdminDashboard } from "./Pages/AdminDashboard";
import Adminsidebar from "./components/Admin/Adminsidebar";
import Donarsidebar from "./components/DonarSidebar";
import { Regdonors } from "./Pages/Admin/Regdonors";
import { Addstate, Managestate } from "./Pages/Admin/State";
import { Addcity, Managecity } from "./Pages/Admin/City";
import { Listedfoods } from "./Pages/Admin/Listedfoods";
import { Requests, New, Pickcom, Rejected, All } from "./Pages/Admin/Requests";
import { DonarDashboard } from "./Pages/DonarDashboard";
// import { Listfooddetails } from "./Pages/Listfooddetails";
import { Addfood, Manage } from "./Pages/Listfooddetails";

// import Addfood from './Listfooddetails';
// import Manage from './Listfooddetails';

function App() {
  return (
    <>
      {/* <Router> */}
      <NavBar />

      <div className="pages">
        {/* <Routes>
          <Route path="/" exact element={Menu}></Route> 
          </Routes> */}

        <Routes>
          <Route exact path="/" element={<Menu></Menu>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/mission" element={<Ourmission></Ourmission>} />
          <Route path="/loginregister" element={<Login></Login>} />
          <Route path="/Registernew" element={<Registernew></Registernew>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/Adminpage" element={<Adminpage></Adminpage>} />
          <Route path="/Donarpage" element={<Donarpage></Donarpage>} />
          <Route
            path="/Donarpage/dashboard"
            exact
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <DonarDashboard></DonarDashboard>
              </div>
            }
          />

          {/* <Route
            path="/Donar/listfooddetails"
            exact
            component={<Listfooddetails></Listfooddetails>}
          /> */}
          <Route
            path="/Donarpage/listfooddetails/add"
            exact
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <Addfood></Addfood>
              </div>
            }
          />
          <Route
            path="/Donarpage/listfooddetails/manage"
            exact
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <Manage></Manage>
              </div>
            }
          />
          <Route
            path="/Donarpage/request"
            exact
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <Requests></Requests>
              </div>
            }
          />
          <Route
            path="/Donarpage/request/new"
            exact
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <New></New>
              </div>
            }
          />
          <Route
            path="/Donarpage/request/pickcom"
            exact
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <Pickcom></Pickcom>
              </div>
            }
          />
          <Route
            path="/Donarpage/request/reject"
            exact
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <Rejected></Rejected>
              </div>
            }
          />
          <Route path="/Donarpage/request/all" exact element={<All></All>} />
          <Route
            exact
            path="/Adminpage/dashboard"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <AdminDashboard></AdminDashboard>
              </div>
            }
          />
          <Route
            path="/Adminpage/state/add"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Addstate></Addstate>
              </div>
            }
          />
          <Route
            path="/Adminpage/state/manage"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Managestate></Managestate>
              </div>
            }
          />
          <Route
            path="/Adminpage/city/add"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Addcity></Addcity>
              </div>
            }
          />
          <Route
            path="/Adminpage/city/manage"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Managecity></Managecity>
              </div>
            }
          />
          <Route
            path="/Adminpage/regfooddonors"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Regdonors></Regdonors>
              </div>
            }
          />
          <Route
            path="/Adminpage/listed/food"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Listedfoods></Listedfoods>
              </div>
            }
          />
          <Route
            path="/Adminpage/request"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Requests></Requests>
              </div>
            }
          />
          <Route
            path="/Adminpage/request/new"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <New></New>
              </div>
            }
          />
          <Route
            path="/Adminpage/request/pickcom"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Pickcom></Pickcom>
              </div>
            }
          />
          <Route
            path="/Adminpage/request/reject"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Rejected></Rejected>
              </div>
            }
          />
          <Route
            path="/Adminpage/request/all"
            exact
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <All></All>
              </div>
            }
          />
        </Routes>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
