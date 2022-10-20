import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Loginregister from "./Pages/Loginregister";
import { Contact } from "./Pages/Contact";
import { Ourmission } from "./Pages/Ourmission";
// import Registernew from "./Pages/Registernew";
import Login from "./Pages/Login";
import "./Pages/Register.css";
import Menu from "./Pages/Menu";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/mission" component={Ourmission} />
            <Route path="/loginregister" component={Loginregister} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
