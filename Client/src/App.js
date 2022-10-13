import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Loginregister } from "./components/Pages/Loginregister";
import { Contact } from "./components/Pages/Contact";
import { Ourmission } from "./components/Pages/Ourmission";
import { Registernew } from "./components/Pages/Registernew";
import "./components/Pages/Register.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Registernew} />
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
